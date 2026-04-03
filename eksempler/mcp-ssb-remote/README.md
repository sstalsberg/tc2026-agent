# MCP-eksempel: SSB via TRY

Dette eksempelet viser hvordan du kobler en eksisterende remote MCP-server til en agent i Copilot Studio.

I dette tilfellet bruker vi TRY sin MCP-server for SSB-data:

- Produktside: `https://tools.try.no/ssb-mcp`
- MCP-endepunkt: `https://tools.try.no/ssb-mcp/mcp`

## Hvorfor dette er et bra workshop-eksempel

- du slipper aa bygge egen MCP-server foerst
- du faar et konkret eksempel paa `remote MCP`
- verktøyene er nyttige og lette aa forstaa:
  - `ssb_search`
  - `ssb_table_metadata`
  - `ssb_get_data`
  - `ssb_get_url`

Senere kan vi sammenligne dette med et self-hosted eksempel, som Minecraft-serveren.

## Foer du starter

Be deltakerne bestille sin egen tilgang hos TRY:

- gaa til `https://tools.try.no/ssb-mcp`
- skriv inn e-postadressen din
- godta vilkaarene
- du faar en personlig MCP-lenke eller noekkel paa e-post

## Oppsett i Copilot Studio

Legg serveren til som en eksisterende MCP-server:

- `Servernavn:` `SSB MCP`
- `Description`: `Bruk denne serveren når brukeren vil søke i eller hente offentlig statistikk fra SSB.`
- `Server URL`: `https://tools.try.no/ssb-mcp/mcp`
- `Authentication type`: `API key`
- `API key type`: `Query`
- `Parameter name`: `key`

Når du skal lage en connection for agenten, husk å legge inn:

- `API key value`: din personlige nøkkel fra TRY

## Testprompt

Prøv disse i agenten:

- `Finn en SSB-tabell om befolkning i Norge`
- `Vis metadata for tabellen 07459`
- `Hent nyere befolkningsdata fra SSB`
- `Lag en delbar URL for en SSB-forespoersel`