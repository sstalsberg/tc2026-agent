# Eksempler

Denne mappen samler konkrete eksempler som brukes i workshoppen.

## Innhold

- [`api-nager-date/`](./api-nager-date/README.md)
  - fungerende offentlig REST API-eksempel
  - brukes i Lab 3 for a vise hele flyten:
    - test utenfor agenten
    - bygg integrasjonen
    - test i agenten

- [`api-statens-vegvesen/`](./api-statens-vegvesen/README.md)
  - API-eksempel mot Statens vegvesen
  - inkluderer et komplett Copilot Studio-agentprosjekt i `Statens Vegvesen Agent/`
  - brukes som eksempel paa OpenAPI-basert verktøyintegrasjon

- [`mcp-ssb-remote/`](./mcp-ssb-remote/README.md)
  - remote MCP-eksempel mot SSB via TRY
  - brukes i Lab 3 for a vise hvordan en eksisterende MCP-server kobles til i Copilot Studio
  - deltakerne bestiller egen tilgang og bruker sin egen noekkel

- [`mcp-minecraft/`](./mcp-minecraft/README.md)
  - self-hosted MCP-eksempel med lokal Minecraft-bot
  - viser hvordan serveren bygges og registreres i Codex lokalt

- [`mcp-minecraft-stream-http/`](./mcp-minecraft-stream-http/README.md)
  - HTTP-variant av Minecraft-MCP-serveren
  - viser hvordan samme bot-logikk eksponeres som streamable HTTP for Codex via URL
