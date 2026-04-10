# API-eksempel: Statens vegvesen

Dette eksemplet brukes i Lab 3 som et REST API med autentisering.

## Hva er poenget?

Målet er å vise en trygg og repeterbar arbeidsflyt også når API-et krever nøkkel:

1. Skaff tilgang til API-et
2. Test API-et utenfor agenten
3. Bygg integrasjonen med OpenAPI eller custom connector
4. Test verktøyet i agenten

## Hva må du gjøre før du starter?

Før du kan bruke dette eksemplet, må du:

1. Finne API-et i Statens vegvesens dataportal
2. Registrere deg og skaffe API-nøkkel hvis API-et krever det
3. Avklare at du har lovlig grunnlag for å gjøre oppslag på kjøretøydata
4. Teste at nøkkelen fungerer med et enkelt `curl`-kall

Nyttige lenker:

- [Slik får du tilgang til et API hos Statens vegvesen](https://www.vegvesen.no/om-oss/om-organisasjonen/apne-data/slik-far-du-tilgang-til-et-api/)
- [Dataportalen til Statens vegvesen](https://dataut.vegvesen.no/)

## Test API-et først

Dette API-et bruker headeren `SVV-Authorization` med formatet `Apikey <din_api_nokkel>`.

Eksempel med `curl`:

```bash
curl -X GET "https://akfell-datautlevering.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=EB11111" \
  -H "Accept: application/json" \
  -H "SVV-Authorization: Apikey <din_api_nokkel>"
```

Viktig:

- Send bare én av parameterne `kjennemerke` eller `understellsnummer`
- Ikke send begge i samme kall
- Bruk en gyldig API-nøkkel

Du bør få:

- `HTTP 200` hvis nøkkelen er gyldig og oppslaget lykkes
- JSON med `kjoretoydataListe`

Vanlige feil:

- `HTTP 403` hvis API-nøkkelen mangler, er ugyldig eller sperret
- `HTTP 400` hvis forespørselen er feil, for eksempel hvis begge parametrene er satt
- `HTTP 429` hvis du har brukt opp kvoten

## Filer i denne mappen

- [`svv-kjoretoy-openapi.yaml`](./svv-kjoretoy-openapi.yaml)
  - OpenAPI-spesifikasjon for Copilot Studio eller custom connector

## Hvordan bruke eksemplet i en agent

1. Test endpointet med `curl`
2. Importer [`svv-kjoretoy-openapi.yaml`](./svv-kjoretoy-openapi.yaml) i REST API-verktøy eller custom connector
3. Konfigurer autentisering:
   - header: `SVV-Authorization`
   - verdi: `Apikey <din_api_nokkel>`
4. Gi verktøyet en tydelig beskrivelse:
   - `Bruk dette verktøyet når brukeren spør om tekniske kjøretøydata, EU-kontroll eller registreringsstatus for et bestemt kjennemerke eller understellsnummer`
5. Test i agenten:
   - `Hent tekniske data for bilen med kjennemerke EB11111`
   - `Når er kontrollfristen for bilen med kjennemerke EB11111?`
   - `Hva er merke og modell for bilen med kjennemerke EB11111?`

## Tips til laben

- Start med oppslag på `kjennemerke`, siden det er enklest å lese og teste
- Be agenten oppsummere bare de feltene du faktisk trenger
- Unngå å hente mer kjøretøyinformasjon enn use caset trenger
