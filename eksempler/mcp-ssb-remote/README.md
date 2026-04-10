# MCP-eksempel: SSB via TRY

Dette eksemplet brukes i Lab 3 som et fungerende remote MCP-eksempel.

## Hva er poenget?

Målet er å vise en trygg og repeterbar arbeidsflyt også når du bruker en eksisterende MCP-server:

1. Skaff tilgang til MCP-serveren
2. Test at du har riktig MCP-lenke eller nøkkel
3. Legg serveren til i agenten som remote MCP
4. Test verktøyene i agenten

## Hva må du gjøre før du starter?

Før du kan bruke dette eksemplet, må du:

1. Gå til TRY sin produktside for SSB MCP
2. Registrere deg med e-post
3. Godta vilkårene
4. Vente på personlig MCP-lenke eller nøkkel fra TRY

Nyttige lenker:

- [TRY SSB MCP](https://tools.try.no/ssb-mcp)
- MCP-endepunkt: `https://tools.try.no/ssb-mcp/mcp`

## Hva er nyttig med dette eksemplet?

Dette er et bra workshop-eksempel fordi:

- du slipper å bygge egen MCP-server først
- du får et konkret eksempel på `remote MCP`
- verktøyene er nyttige og lette å forstå

Typiske verktøy er:

- `ssb_search`
- `ssb_table_metadata`
- `ssb_get_data`
- `ssb_get_url`

## Test tilgangen først

Før du bygger dette inn i en agent, bør du verifisere at du faktisk har fått tilgang fra TRY.

Sjekk at du har:

- en personlig MCP-lenke eller nøkkel
- riktig endepunkt
- riktig autentiseringstype

I Copilot Studio betyr det typisk:

- `Server URL`: `https://tools.try.no/ssb-mcp/mcp`
- `Authentication type`: `API key`
- `API key type`: `Query`
- `Parameter name`: `key`

Hvis TRY har sendt deg en personlig MCP-lenke, bruk informasjonen derfra som fasit.

## Filer i denne mappen

- [`README.md`](./README.md)
  - Beskrivelse av hvordan du kobler en eksisterende remote MCP-server til en agent

## Hvordan bruke eksemplet i en agent

1. Skaff personlig tilgang fra TRY
2. Legg serveren til som eksisterende MCP-server i Copilot Studio
3. Konfigurer serveren:
   - `Servernavn`: `SSB MCP`
   - `Description`: `Bruk denne serveren når brukeren vil søke i eller hente offentlig statistikk fra SSB.`
   - `Server URL`: `https://tools.try.no/ssb-mcp/mcp`
4. Konfigurer autentisering:
   - `Authentication type`: `API key`
   - `API key type`: `Query`
   - `Parameter name`: `key`
   - `API key value`: din personlige nøkkel fra TRY
5. Test i agenten:
   - `Finn en SSB-tabell om befolkning i Norge`
   - `Vis metadata for tabellen 07459`
   - `Hent nyere befolkningsdata fra SSB`
   - `Lag en delbar URL for en SSB-forespørsel`

## Tips til laben

- Start med `ssb_search` før du prøver å hente data
- Be agenten forklare hvilken tabell den valgte og hvorfor
- Test både søk, metadata og datauthenting, ikke bare ett verktøy
- Sammenlign gjerne dette med et self-hosted MCP-eksempel senere
