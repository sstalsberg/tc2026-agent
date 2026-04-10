# Statens Vegvesen Agent

Aktiv app-versjon: `2.0.0`

Dette er et enkelt eksempel på en agent i Microsoft 365 Copilot som kan slå opp kjøretøydata fra Statens vegvesen.

Du skriver inn et:

- registreringsnummer
- eller understellsnummer (VIN)

Agenten henter deretter kjøretøyinformasjon og viser et kort svar tilbake i Copilot.

## Hva er dette eksempelet ment å vise?

Dette eksempelet viser en veldig vanlig agenttype:

- brukeren spør om noe konkret
- agenten kaller et API
- svaret vises på en ryddig måte

Det er altså ikke en stor multi-agent-løsning. Det er et lite og forståelig oppslagseksempel.

## Hva kan brukeren spørre om?

- `Slå opp EL99999`
- `Hent kjøretøydata for VIM12345678901234`
- `Når er neste EU-kontroll for EL99999?`
- `Vis merke, drivstoff og egenvekt for EL99999`

## Hva svarer agenten med?

Ved treff vil agenten typisk vise:

- kjennemerke
- VIN
- kjøretøyklasse
- registreringsstatus
- drivstoff
- effekt
- egenvekt / totalvekt
- frist for neste EU-kontroll

## Hvordan fungerer det?

1. Brukeren skriver inn et registreringsnummer eller VIN
2. Agenten finner ut hva slags input det er
3. Agenten kaller Statens vegvesen sitt API
4. Svaret vises tilbake som et kort med nøkkelinformasjon

## Hva trenger du for å prøve dette?

- Visual Studio Code
- Microsoft 365 Agents Toolkit
- en gyldig API-nøkkel for Statens vegvesen

## Slik prøver du eksempelet

1. Åpne prosjektmappen i Visual Studio Code.
2. Åpne prosjektet i Microsoft 365 Agents Toolkit.
3. Kjør `Provision`.
4. Når Toolkit ber om API-nøkkel, lim inn:
   - `Apikey <din_statens_vegvesen_api_nokkel>`
5. Kjør `Update`.
6. Åpne en ny Copilot-chat.
7. Test med et registreringsnummer eller VIN.

Hvis du senere vil distribuere agenten bredere, kan du kjøre `Publish`.

## Hva som fylles inn automatisk

Når du kjører `Provision`, fylles noen tekniske verdier inn automatisk i `env/.env.dev`.

- `TEAMS_APP_ID`
- `M365_TITLE_ID`
- `M365_APP_ID`
- `SVVAPIKEY_REGISTRATION_ID`

I dette repoet er disse verdiene tomme med vilje, slik at eksempelet kan brukes i ulike miljøer.

## Vanlige problemer

- `401`: API-nøkkelen mangler eller er skrevet i feil format
- `403`: Nøkkelen er ikke gyldig eller har ikke tilgang
- `422` eller `429`: Du har nådd en kvotegrense
- Tom respons: Input er ikke et gyldig registreringsnummer eller VIN
- Ingen prompt om API-nøkkel: slett `SVVAPIKEY_REGISTRATION_ID` i miljøfilen og kjør `Provision` på nytt

## For deg som vil se under panseret

Hvis du vil forstå hvordan eksempelet er bygget, er disse filene de viktigste:

- `appPackage/instruction.txt`
- `appPackage/declarativeAgent.json`
- `appPackage/ai-plugin.json`
- `appPackage/apiSpecificationFile/openapi.yaml`
- `appPackage/adaptiveCards/hentKjoretoydata.json`
- `m365agents.yml`

Kort forklart:

- `instruction.txt` styrer hvordan agenten skal oppføre seg
- `openapi.yaml` beskriver API-kallet
- `hentKjoretoydata.json` bestemmer hvordan svaret vises