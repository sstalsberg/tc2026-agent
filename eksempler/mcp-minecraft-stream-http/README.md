# MCP-eksempel: Minecraft over Streamable HTTP

Dette er en HTTP-variant av [`../mcp-minecraft/`](../mcp-minecraft/README.md).

I stedet for at MCP-klienten starter serveren som en lokal `stdio`-prosess, kjoerer denne varianten som en vanlig HTTP-server med ett MCP-endepunkt:

```text
http://127.0.0.1:3000/mcp
```

Det gjor at du kan koble den til Codex med `--url` i stedet for `command` + `args`.

## Hva som er gjort om

Den opprinnelige Minecraft-serveren brukte:

- `StdioServerTransport`
- en MCP-prosess startet direkte av klienten
- argumentene `--host`, `--port` og `--username` for Minecraft-tilkoblingen

Denne varianten bruker i stedet:

- `StreamableHTTPServerTransport`
- en egen HTTP-server
- ett MCP-endepunkt over `POST /mcp`
- lokal helse-endepunkt paa `GET /health`

Selve Minecraft-logikken er beholdt:

- samme `BotConnection`
- samme `ToolFactory`
- samme Minecraft-verktoey

Det er med andre ord transportlaget som er byttet, ikke bot-logikken.

## Hvorfor denne varianten er stateless

Denne serveren er implementert som en stateless streamable HTTP-server.

Det er et bevisst valg fordi:

- verktoeyene her er i praksis vanlige request/response-kall
- vi trenger ikke server-initierte notifikasjoner for at Codex skal bruke verktoeyene
- det unngaar hengende sesjoner hos klienter som ikke sender `DELETE` ved avslutning

Praktisk betyr det:

- `POST /mcp` brukes til MCP-kall
- `GET /mcp` og `DELETE /mcp` svarer `405`
- ingen `MCP-Session-Id` er nødvendig

Hvis du senere vil ha en full stateful variant med SSE-strøm og sesjons-ID-er, kan den lages ved aa bytte til `sessionIdGenerator: () => randomUUID()` og holde en transport per sesjon.

## Krav

- Node.js `>= 20.10.0`
- Minecraft Java Edition
- en lokal Minecraft-verden eller Minecraft-server
- Codex CLI eller en annen MCP-klient som stotter streamable HTTP

Prosjektet er testet mot MCP SDK `@modelcontextprotocol/sdk` `1.27.1`, og Minecraft-koden er merket som testet mot Minecraft `1.21.11`.

## Klargjoer Minecraft

Du kan bruke enten:

- en lokal dedikert Minecraft-server som lytter paa `localhost:25565`
- en singleplayer-verden som du aapner til LAN

Hvis du bruker `Open to LAN` i Minecraft Java Edition:

1. Start verdenen.
2. Trykk `Esc`.
3. Velg `Open to LAN`.
4. Noter porten som Minecraft viser i chatten.

Viktig:

- en lokal dedikert server bruker ofte `25565`
- en singleplayer-verden aapnet til LAN bruker vanligvis en tilfeldig port
- bruk den faktiske porten fra Minecraft naar du starter MCP-serveren

## Installer og bygg

Kjoer fra denne mappen:

```bash
cd eksempler/mcp-minecraft-stream-http
npm install
npm run build
```

## Start HTTP-serveren

Eksempel med standard HTTP-port `3000`:

```bash
cd eksempler/mcp-minecraft-stream-http
node dist/main.js \
  --minecraft-host localhost \
  --minecraft-port 25565 \
  --username CodexBot \
  --listen-host 127.0.0.1 \
  --listen-port 3000 \
  --endpoint /mcp
```

Hvis Minecraft-verdenen din bruker en annen port, bytt `--minecraft-port`.

Serveren eksponerer da:

- MCP-endepunkt: `http://127.0.0.1:3000/mcp`
- helse-endepunkt: `http://127.0.0.1:3000/health`

## Legg den til i Codex

Naar HTTP-serveren kjoerer, legger du den inn i Codex med URL:

```bash
codex mcp add minecraft-http --url http://127.0.0.1:3000/mcp
```

Verifiser oppsettet:

```bash
codex mcp list
codex mcp get minecraft-http --json
```

Alternativt i `~/.codex/config.toml`:

```toml
[mcp_servers.minecraft-http]
url = "http://127.0.0.1:3000/mcp"
enabled = true
```

Start saa en ny Codex-sesjon.

## Test lokalt

Helse-endepunktet:

```bash
curl http://127.0.0.1:3000/health
```

Et eksempel paa respons:

```json
{
  "status": "ok",
  "transportMode": "stateless-streamable-http",
  "endpoint": "/mcp",
  "minecraft": {
    "host": "localhost",
    "port": 25565,
    "username": "CodexBot",
    "connectionState": "connecting"
  }
}
```

## Forslag til test i Codex

Naar Minecraft er oppe og serveren er registrert i Codex, kan du teste med prompts som:

- `Finn posisjonen til Minecraft-botten.`
- `Flytt botten til x=10, y=64, z=10.`
- `Les de siste chatmeldingene i Minecraft.`
- `Sjekk inventory og si om botten kan lage en crafting table.`
- `Send en chatmelding som sier at botten er klar.`

## Tilgjengelige verktoey

Serveren registrerer disse Minecraft-verktoeyene:

- Bevegelse: `get-position`, `move-to-position`, `look-at`, `jump`, `move-in-direction`
- Flyvning: `fly-to`
- Inventar: `list-inventory`, `find-item`, `equip-item`
- Blokker: `place-block`, `dig-block`, `get-block-info`, `find-block`
- Crafting: `list-recipes`, `get-recipe`, `can-craft`, `craft-item`
- Smelting: `smelt-item`
- Entiteter: `find-entity`
- Chat: `send-chat`, `read-chat`
- Spilltilstand: `detect-gamemode`

## Sikkerhet

Denne varianten binder som standard HTTP-serveren til `127.0.0.1`.

I tillegg avvises foresporsler med `Origin`-header fra ikke-lokale origins. Det er gjort for aa redusere risikoen ved lokal eksponering av MCP over HTTP.

Hvis du senere vil eksponere serveren utover localhost, boer du legge den bak en proxy og autentisering i stedet for aa aapne den direkte.

## Feilsoking

### Botten kobler ikke til Minecraft

Sjekk at:

- Minecraft faktisk kjoerer
- `--minecraft-host` og `--minecraft-port` stemmer
- du bruker riktig LAN-port hvis verdenen er aapnet med `Open to LAN`

### Codex finner ikke serveren

Sjekk at HTTP-serveren faktisk kjoerer og svarer:

```bash
curl http://127.0.0.1:3000/health
```

Deretter verifiserer du Codex-oppsettet:

```bash
codex mcp get minecraft-http --json
```

### `fly-to` fungerer ikke

`fly-to` krever at kreativ modus er tilgjengelig. Hvis ikke returnerer serveren en melding om at flyvning ikke er tilgjengelig.

### Jeg vil verifisere prosjektet

```bash
npm run build
npm test
```
