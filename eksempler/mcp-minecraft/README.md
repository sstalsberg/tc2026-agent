# MCP-eksempel: Minecraft

Dette eksempelet viser en lokal, self-hosted MCP-server som kobler en Minecraft-bot til en MCP-klient som Codex.

Mappen inneholder en TypeScript-basert MCP-server som:

- starter en Mineflayer-bot
- kobler botten til en lokal Minecraft-verden eller server
- eksponerer Minecraft-handlinger som MCP-verktoey over `stdio`

Denne README-en er skrevet for lokal bruk i workshop-sammenheng, med Codex som primareksempel.

## Hva dette er

Serveren i denne mappen er en lokal MCP-prosess. Den er ment aa bli startet av en MCP-klient, ikke som en vanlig webserver.

Praktisk betyr det:

- Codex starter prosessen for deg
- prosessen kobler botten til Minecraft med `--host`, `--port` og `--username`
- Codex faar tilgang til Minecraft-verktoeyene gjennom MCP

Denne guiden dekker lokal `stdio`-bruk, for eksempel i Codex. Hvis du senere vil bruke samme server fra en klient som krever et remote MCP-endepunkt over HTTP, maa serveren publiseres eller proxes foerst.

## Krav

- Node.js `>= 20.10.0`
- Minecraft Java Edition
- en lokal Minecraft-verden eller Minecraft-server
- Codex CLI eller en annen MCP-klient

Prosjektet er i kildekoden merket som testet mot Minecraft `1.21.11`.

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
- bruk den faktiske porten fra Minecraft naar du konfigurerer MCP-serveren

## Installer og bygg serveren

Kjoer disse kommandoene fra denne mappen:

```bash
cd eksempler/mcp-minecraft
npm install
npm run build
```

Etter bygging ligger oppstartsfilen her:

```text
dist/main.js
```

## Kjoer serveren lokalt

Serveren er en `stdio`-basert MCP-server. I praksis er det best aa la Codex starte den, men du kan ogsaa starte den direkte for testing:

```bash
node dist/main.js --host localhost --port 25565 --username CodexBot
```

Bytt ut `25565` hvis Minecraft-verdenen din bruker en annen port.

Merk:

- prosessen kan se "stille" ut i terminalen, fordi dette er en MCP-server og ikke et vanlig CLI-program
- botten prover aa koble seg til Minecraft med en gang prosessen starter

## Legg serveren til i Codex

Den enkleste maaten er aa registrere serveren med `codex mcp add` mens du staar i denne mappen:

```bash
cd eksempler/mcp-minecraft
codex mcp add minecraft-local -- node $(pwd)/dist/main.js --host localhost --port 25565 --username CodexBot
```

Hvis du bruker `Open to LAN`, maa du erstatte `25565` med porten Minecraft faktisk viser.

Etterpaa kan du verifisere oppsettet:

```bash
codex mcp list
codex mcp get minecraft-local --json
```

Start saa en ny Codex-sesjon. Da kan Codex laste serveren og bruke Minecraft-verktoeyene automatisk.

## Alternativ: legg den inn manuelt i `~/.codex/config.toml`

Hvis du heller vil redigere config-filen direkte, kan du legge inn en seksjon som dette:

```toml
[mcp_servers.minecraft-local]
command = "node"
args = [
  "/ABSOLUTT/STI/TIL/tc2026-agent/eksempler/mcp-minecraft/dist/main.js",
  "--host",
  "localhost",
  "--port",
  "25565",
  "--username",
  "CodexBot",
]
startup_timeout_sec = 30.0
enabled = true
```

Bruk absolutt sti til `dist/main.js`, og start Codex paa nytt etter at configen er lagret.

## Forslag til test i Codex

Naar Minecraft er oppe og serveren er registrert i Codex, kan du teste med korte prompts som:

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

## Feilsoking

### Botten kobler ikke til Minecraft

Sjekk at:

- Minecraft faktisk kjoerer
- `--host` og `--port` stemmer
- du bruker riktig LAN-port hvis verdenen er aapnet med `Open to LAN`

### `fly-to` fungerer ikke

`fly-to` krever at kreativ modus er tilgjengelig. Hvis ikke returnerer serveren en melding om at flyvning ikke er tilgjengelig.

### Endringer i kildekoden blir ikke plukket opp

Bygg paa nytt:

```bash
npm run build
```

Hvis Codex allerede kjoerer, start en ny sesjon etterpaa.

### Jeg vil verifisere at prosjektet fortsatt er friskt

Kjoer testene:

```bash
npm test
```
