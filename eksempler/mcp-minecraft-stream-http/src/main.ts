#!/usr/bin/env node

import { createServer as createHttpServer, Server as HttpServer } from 'node:http';
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import type { NextFunction, Request, Response } from 'express';
import { log } from './logger.js';
import { parseConfig } from './config.js';
import { BotConnection } from './bot-connection.js';
import { MessageStore } from './message-store.js';
import { createMinecraftMcpServer } from './mcp-server.js';

type JsonRpcError = {
  code: number;
  message: string;
};

function normalizeEndpointPath(path: string): string {
  if (!path.startsWith('/')) {
    return `/${path}`;
  }
  return path;
}

function sendJsonRpcError(res: { status: (code: number) => { json: (body: unknown) => void } }, status: number, error: JsonRpcError): void {
  res.status(status).json({
    jsonrpc: '2.0',
    error,
    id: null
  });
}

function isAllowedOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    return ['localhost', '127.0.0.1', '::1'].includes(url.hostname);
  } catch {
    return false;
  }
}

async function main() {
  const config = parseConfig();
  const endpoint = normalizeEndpointPath(config.endpoint);
  const messageStore = new MessageStore();

  const connection = new BotConnection(
    {
      host: config.minecraftHost,
      port: config.minecraftPort,
      username: config.username
    },
    {
      onLog: log,
      onChatMessage: (username, message) => messageStore.addMessage(username, message)
    }
  );

  connection.connect();

  const app = createMcpExpressApp({ host: config.listenHost });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin;

    if (origin && !isAllowedOrigin(origin)) {
      sendJsonRpcError(res, 403, {
        code: -32000,
        message: `Invalid Origin header: ${origin}`
      });
      return;
    }

    next();
  });

  app.get('/', (_req: Request, res: Response) => {
    res.json({
      name: 'minecraft-mcp-stream-http-server',
      transportMode: 'stateless-streamable-http',
      endpoint,
      listenHost: config.listenHost,
      listenPort: config.listenPort,
      minecraftHost: config.minecraftHost,
      minecraftPort: config.minecraftPort,
      username: config.username
    });
  });

  app.get('/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      transportMode: 'stateless-streamable-http',
      endpoint,
      minecraft: {
        host: config.minecraftHost,
        port: config.minecraftPort,
        username: config.username,
        connectionState: connection.getState()
      }
    });
  });

  app.post(endpoint, async (req: Request, res: Response) => {
    const server = createMinecraftMcpServer(connection, messageStore);
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined
    });
    let cleanedUp = false;

    const cleanup = async () => {
      if (cleanedUp) {
        return;
      }

      cleanedUp = true;

      try {
        await server.close();
      } catch (error) {
        log('warn', `Error while closing MCP server: ${error}`);
      }

      try {
        await transport.close();
      } catch (error) {
        log('warn', `Error while closing HTTP transport: ${error}`);
      }
    };

    res.on('close', () => {
      void cleanup();
    });

    try {
      transport.onerror = (error) => {
        log('error', `HTTP transport error: ${error.message}`);
      };

      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      log('error', `Error handling POST ${endpoint}: ${error}`);
      if (!res.headersSent) {
        sendJsonRpcError(res, 500, {
          code: -32603,
          message: 'Internal server error'
        });
      }

      await cleanup();
    }
  });

  app.get(endpoint, async (_req: Request, res: Response) => {
    sendJsonRpcError(res, 405, {
      code: -32000,
      message: 'Method not allowed. This server uses stateless POST-only Streamable HTTP.'
    });
  });

  app.delete(endpoint, async (_req: Request, res: Response) => {
    sendJsonRpcError(res, 405, {
      code: -32000,
      message: 'Method not allowed. This server uses stateless POST-only Streamable HTTP.'
    });
  });

  const httpServer: HttpServer = createHttpServer(app);

  httpServer.on('error', (error) => {
    log('error', `HTTP server failed to start: ${error}`);
    process.exit(1);
  });

  httpServer.listen(config.listenPort, config.listenHost, () => {
    log(
      'info',
      `Minecraft MCP Streamable HTTP server listening at http://${config.listenHost}:${config.listenPort}${endpoint} ` +
      `(Minecraft target ${config.minecraftHost}:${config.minecraftPort}, bot ${config.username})`
    );
  });

  const shutdown = async (signal: string) => {
    log('info', `Received ${signal}. Shutting down HTTP server...`);
    httpServer.close();

    connection.cleanup();
    process.exit(0);
  };

  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
}

process.on('unhandledRejection', (reason) => {
  log('error', `Unhandled rejection: ${reason}`);
});

process.on('uncaughtException', (error) => {
  log('error', `Uncaught exception: ${error}`);
});

main().catch((error) => {
  log('error', `Fatal error in main(): ${error}`);
  process.exit(1);
});
