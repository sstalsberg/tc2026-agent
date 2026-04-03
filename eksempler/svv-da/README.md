# Statens Vegvesen Agent

Aktiv app-versjon: `2.0.0`

Dette prosjektet er satt opp på nytt for Microsoft 365 Agents Toolkit med én tydelig v1-funksjon:

- Oppslag av tekniske kjøretøydata fra Statens vegvesen
- Oppslag støtter både `kjennemerke` og `understellsnummer` (VIN)

## Løsningen inneholder

- OpenAPI-spesifikasjon for `/enkeltoppslag/kjoretoydata`
- Declarative agent med én action (`hentKjoretoydata`)
- Adaptive Card for presentasjon av nøkkelfelter
- ApiKeyPluginVault-auth via `SVVAPIKEY_REGISTRATION_ID`

## Viktige filer

- `appPackage/apiSpecificationFile/openapi.yaml`
- `appPackage/ai-plugin.json`
- `appPackage/declarativeAgent.json`
- `appPackage/instruction.txt`
- `appPackage/adaptiveCards/hentKjoretoydata.json`
- `env/.env.dev`

## Kjøring fra scratch

1. Åpne prosjektet i Microsoft 365 Agents Toolkit.
2. Kjør `Provision`.
3. Når Toolkit ber om API-nøkkel, legg inn verdien i formatet:
   - `Apikey <din_statens_vegvesen_api_nokkel>`
4. Kjør `Update` (eller `Publish` når du er klar).
5. Start en ny Copilot-chat og test oppslag.

## Forslag til testspørsmål

- `Slå opp EL49512`
- `Hent kjøretøydata for SJNFAAZE0U6015251`
- `Når er neste EU-kontroll for EL49512?`

## Feilsøking

- `401`: API-nøkkel er feil format eller mangler `Apikey `-prefiks.
- `403`: Nøkkel er ikke gyldig/aktiv for tjenesten.
- `422` eller `429`: Kvotegrense er nådd, vent til `Retry-After`.
- Tom respons: sjekk at input faktisk er gyldig kjennemerke/VIN.
