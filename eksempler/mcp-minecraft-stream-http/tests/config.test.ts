import test from 'ava';
import { parseConfig } from '../src/config.js';

test('parseConfig returns default values', (t) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'script.js'];
  
  const config = parseConfig();
  
  t.is(config.minecraftHost, 'localhost');
  t.is(config.minecraftPort, 25565);
  t.is(config.username, 'LLMBot');
  t.is(config.listenHost, '127.0.0.1');
  t.is(config.listenPort, 3000);
  t.is(config.endpoint, '/mcp');
  
  process.argv = originalArgv;
});

test('parseConfig parses custom minecraft host', (t) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'script.js', '--minecraft-host', 'example.com'];
  
  const config = parseConfig();
  
  t.is(config.minecraftHost, 'example.com');
  t.is(config.minecraftPort, 25565);
  t.is(config.username, 'LLMBot');
  
  process.argv = originalArgv;
});

test('parseConfig parses custom minecraft port', (t) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'script.js', '--minecraft-port', '12345'];
  
  const config = parseConfig();
  
  t.is(config.minecraftHost, 'localhost');
  t.is(config.minecraftPort, 12345);
  t.is(config.username, 'LLMBot');
  
  process.argv = originalArgv;
});

test('parseConfig parses custom username', (t) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'script.js', '--username', 'CustomBot'];
  
  const config = parseConfig();
  
  t.is(config.minecraftHost, 'localhost');
  t.is(config.minecraftPort, 25565);
  t.is(config.username, 'CustomBot');
  
  process.argv = originalArgv;
});

test('parseConfig parses all custom options', (t) => {
  const originalArgv = process.argv;
  process.argv = [
    'node',
    'script.js',
    '--minecraft-host',
    'server.net',
    '--minecraft-port',
    '25570',
    '--username',
    'TestBot',
    '--listen-host',
    'localhost',
    '--listen-port',
    '4000',
    '--endpoint',
    '/minecraft/mcp'
  ];
  
  const config = parseConfig();
  
  t.is(config.minecraftHost, 'server.net');
  t.is(config.minecraftPort, 25570);
  t.is(config.username, 'TestBot');
  t.is(config.listenHost, 'localhost');
  t.is(config.listenPort, 4000);
  t.is(config.endpoint, '/minecraft/mcp');
  
  process.argv = originalArgv;
});

test('parseConfig handles numeric port values as number type', (t) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'script.js', '--minecraft-port', '30000', '--listen-port', '3100'];
  
  const config = parseConfig();
  
  t.is(typeof config.minecraftPort, 'number');
  t.is(config.minecraftPort, 30000);
  t.is(typeof config.listenPort, 'number');
  t.is(config.listenPort, 3100);
  
  process.argv = originalArgv;
});
