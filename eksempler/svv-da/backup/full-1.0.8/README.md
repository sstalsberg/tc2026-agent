# Statens Vegvesen Agent

Microsoft 365 Declarative Agent for oppslag av kjøretøydata fra Statens vegvesen (SVV), med visning i Adaptive Card.

Aktiv app-versjon: `1.0.8`

## Mål

- Bruker skal kunne søke med enten:
  - `kjennemerke`
  - `understellsnummer` (VIN)
- Agenten skal hente data fra SVV enkeltoppslag.
- Resultatet skal returneres som Adaptive Card.
- Kortet skal i tillegg vise et illustrasjonsbilde basert på merke/modell.

## Funksjonell flyt

1. Agenten identifiserer om input er kjennemerke eller VIN.
2. Input normaliseres (A-Z/0-9, STORE bokstaver, uten skilletegn).
3. Agenten kaller `hentKjoretoydata` med kun én parameter:
   - `kjennemerke` eller
   - `understellsnummer`
4. Ved treff rendres kun Adaptive Card.
5. Ved tom `kjoretoydataListe` gjøres ett nytt forsøk med streng normalisering før "ingen treff"-melding.

## Bildeintegrasjon (CarImagery)

SVV API returnerer ikke bilbilder. Derfor brukes CarImagery sitt mønster for bilde-URL i selve Adaptive Card-templaten.

Verifisert responsformat (testet 8. februar 2026):
- Kall:
  - `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=Toyota%20Corolla`
- Respons:
  - XML med streng i format:
  - `http://www.regcheck.org.uk/image.aspx/@<base64(searchTerm)>`

Implementasjon i kortet bruker samme mønster direkte:
- Primær:
  - `https://www.regcheck.org.uk/image.aspx/@{base64("<merke> <modell>")}`
- Fallback:
  - `https://www.regcheck.org.uk/image.aspx/@{base64("<merke>")}`
  - `https://www.carimagery.com/img/v2/12424.jpg` (statisk reservebilde)

Dette er valgt fordi Adaptive Card-templaten bindes direkte til SVV-responsen, og CarImagery sitt endepunkt returnerer XML (ikke bildebinary direkte).
Mønsteret samsvarer også med CarImagery sin egen frontend-logikk (`assets/js/index.js`), som bygger regcheck-URL fra base64-enkodet søketekst.

Teknisk begrensning i Toolkit:
- `apiKey/register` aksepterer kun én API-domain i OpenAPI ved registrering av API key.
- OpenAPI-filen i prosjektet inneholder derfor kun SVV-endepunktet.
- CarImagery brukes fortsatt via bilde-URL-mønster i kortet (ikke via OpenAPI runtime-kall).

## Viktige filer

- `appPackage/instruction.txt`
  - Styrer hvordan agenten velger `kjennemerke` vs `understellsnummer`, og at svar leveres som Adaptive Card.
- `appPackage/declarativeAgent.json`
  - Declarative agent-konfig med starter-prompter for både kjennemerke og VIN.
- `appPackage/ai-plugin.json`
  - Plugin-manifest og OpenAPI-runtime-tilkobling.
- `appPackage/apiSpecificationFile/openapi.yaml`
  - OpenAPI for SVV-oppslag (én domain for kompatibilitet med `apiKey/register`).
- `appPackage/adaptiveCards/hentKjoretoydata.json`
  - Adaptive Card-malen med feltbindinger og bilde-URL-strategi.
- `appPackage/manifest.json`
  - App-manifest med versjonering (`1.0.8`).

## Drift og publisering

Bruk M365 Agents Toolkit-flyten i:
- `m365agents.yml`
- `m365agents.local.yml`

Praktisk anbefaling ved endringer:
1. Oppdater kildefiler under `appPackage/`.
2. Kjør provision/update/publish.
3. Start ny Copilot-chat for verifisering av ny versjon.

## Feilsøking ved "ingen treff"

Hvis du får "ingen treff" på kjente kjennemerker/VIN:
1. Verifiser API-autorisering først. Uten gyldig header svarer SVV med `401`.
2. Kontroller at lagret nøkkel i plugin-tilkoblingen følger formatet:
   - `Apikey <din_api_nokkel>`
3. Verifiser direkte med curl:
   - `curl -H "SVV-Authorization: Apikey <din_api_nokkel>" "https://akfell-datautlevering.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=EB11111"`
4. Hvis curl virker men agent ikke virker, kjør ny `provision/update` og start en helt ny Copilot-chat.

## Sette API-nøkkel i VS Code (Agents Toolkit)

Nøkkelen settes i steget `apiKey/register` under `provision` (ikke i kodefilene).

Viktig: Hvis `SVVAPIKEY_REGISTRATION_ID` allerede finnes i miljøfilen, vil Toolkit hoppe over nøkkelprompten.

Slik tvinger du nytt nøkkelsteg:
1. Åpne `env/.env.dev` (eller `env/.env.local` hvis du kjører lokal profil).
2. Slett linjen `SVVAPIKEY_REGISTRATION_ID=...`.
3. Kjør `Provision` på nytt i samme miljø.
4. Når Toolkit ber om API key, lim inn:
   - `Apikey <din_api_nokkel>`

Alternativt kan du oppdatere eksisterende API key registration i Developer Portal med samme format.
