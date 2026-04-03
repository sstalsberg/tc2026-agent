import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface ServerConfig {
  minecraftHost: string;
  minecraftPort: number;
  username: string;
  listenHost: string;
  listenPort: number;
  endpoint: string;
}

export function parseConfig(): ServerConfig {
  return yargs(hideBin(process.argv))
    .option('minecraft-host', {
      type: 'string',
      description: 'Minecraft server host',
      default: 'localhost'
    })
    .option('minecraft-port', {
      type: 'number',
      description: 'Minecraft server port',
      default: 25565
    })
    .option('username', {
      type: 'string',
      description: 'Bot username',
      default: 'LLMBot'
    })
    .option('listen-host', {
      type: 'string',
      description: 'HTTP host to bind the MCP server to',
      default: '127.0.0.1'
    })
    .option('listen-port', {
      type: 'number',
      description: 'HTTP port to bind the MCP server to',
      default: 3000
    })
    .option('endpoint', {
      type: 'string',
      description: 'HTTP path for the MCP endpoint',
      default: '/mcp'
    })
    .help()
    .alias('help', 'h')
    .parseSync() as ServerConfig;
}
