# API-eksempel: Nager.Date

Dette eksemplet brukes i Lab 3 som et fungerende offentlig REST API.

## Hva er poenget?

Målet er a vise en trygg og repeterbar arbeidsflyt:

1. Test API-et utenfor agenten
2. Bygg integrasjonen med OpenAPI eller custom connector
3. Test verktøyet i agenten

## Test API-et først

Eksempel med `curl`:

```bash
curl -X GET "https://date.nager.at/api/v3/PublicHolidays/2026/NO" \
  -H "Accept: application/json"
```

Du bør fa:

- `HTTP 200`
- JSON-array med norske helligdager

## Filer i denne mappen

- [`openapi.yaml`](./openapi.yaml)
  - OpenAPI-spesifikasjon for Copilot Studio eller custom connector

## Hvordan bruke eksemplet i en agent

1. Test endpointet med `curl`
2. Importer [`openapi.yaml`](./openapi.yaml) i REST API-verktøy eller custom connector
3. Gi verktøyet en tydelig beskrivelse:
   - `Bruk dette verktøyet når brukeren spør om norske helligdager for et bestemt ar`
4. Test i agenten:
   - `Hvilke helligdager er det i 2026?`
   - `Nar er neste helligdag i Norge?`'