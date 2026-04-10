# Eksempel: Pappavits-agenten

## Hva dette eksempelet viser

1. Hvordan du starter i `Agent Builder` i Microsoft 365 Copilot eller direkte i `Copilot Studio`
2. Hvordan du skriver bedre instruksjoner for en liten agent
3. Hvordan du legger til en liten kunnskapskilde for grounding
4. Hvordan du kan utvide agenten med et `MCP`-verktøy, basert på `Jokes MCP`-eksempelet (kun copilot studio)

## Filer i denne mappen

- [`instruksjoner.txt`](./instruksjoner.txt)
  - kopierbar instruksjon for agenten
- [`pappavits-kunnskap.md`](./pappavits-kunnskap.md)
  - liten kunnskapsfil med temaer, tone og eksempler

## Når skal du velge hva?

| Startsted | Velg dette når | Kommentar |
| --- | --- | --- |
| `Agent Builder` i Microsoft 365 Copilot | Du vil komme raskt i gang og lage en enkel prototype | Du kan senere bruke `Copy to Copilot Studio` |
| `Copilot Studio` | Du vet at du skal legge til verktøy, MCP, publisering eller mer styring | Mest naturlig vei hvis du vil videre enn bare prototype |

For akkurat dette eksempelet fungerer begge.

En praktisk tommelfingerregel er:

- start i `Agent Builder` hvis du vil vise lav terskel og rask oppstart
- gå til `Copilot Studio` før du legger til `MCP`

## Steg 1 - Opprett agenten

### Alternativ A - start i Agent Builder

1. Gå til Microsoft 365 Copilot.
2. Velg **New agent**.
3. Velg enten:
   - naturlig språk i `Describe`
   - eller **Skip to configure**
4. Bruk disse verdiene:

 `En lett og trygg agent som lager korte pappa-vitser på norsk for TechnoCamp.`

5. Lim inn innholdet fra [`instruksjoner.txt`](./instruksjoner.txt) i instruksjonsfeltet.
6. Test agenten i `Try it`.

Hvis du senere vil videre til `Copilot Studio`:

1. Åpne menyen med tre prikker `(...)`
2. Velg **Copy to Copilot Studio**
3. Velg riktig Power Platform-miljø
4. Lagre kopien i `Copilot Studio`

Viktig å vite:

- `Navn`, `beskrivelse`, `instruksjoner`, `starter prompts`, ikon, nettsteder og `SharePoint`-kunnskap blir kopiert
- `embedded files` blir **ikke** kopiert automatisk
- hvis du vil at kunnskap skal følge med, bør du bruke `SharePoint` eller nettsted som kilde før du kopierer

### Alternativ B - start direkte i Copilot Studio

1. Gå til [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com).
2. Velg riktig miljø oppe til høyre.
3. Velg **Create**.
4. Opprett en tom agent.
5. Bruk samme navn og beskrivelse som over.
6. Lim inn [`instruksjoner.txt`](./instruksjoner.txt).
7. Test agenten i testpanelet.

## Steg 2 - Tilpass instruksjonene

Dette er poenget fra modul 3:

- instruksjoner styrer oppførsel
- kunnskap gir grounding
- verktøy gir handling

For en liten agent er det fort gjort å blande alt i ett felt. Ikke gjør det.

Bruk denne oppdelingen i instruksjonene:

| Del | Hvorfor |
| --- | --- |
| Rolle og mål | Gjør agentens identitet tydelig |
| Prioriteter | Hjelper modellen å velge rett når flere hensyn konkurrerer |
| Når kunnskap skal brukes | Hindrer unyttig generell gjetting |
| Når verktøy skal brukes | Hindrer feil eller unødvendige verktøykall |
| Begrensninger | Setter trygghetsrammer |
| Svarformat | Gjør svarene konsistente |
| Arbeidsflyt | Gjør agenten mer forutsigbar |

For denne agenten bør instruksjonene vise effekt på minst to ting:

| Hva du styrer | Effekt du bør se i testen |
| --- | --- |
| `Svarformat` | Agenten svarer likt hver gang, for eksempel 2 linjer ved én vits eller nummerert liste ved flere vitser |
| `Humorstil` | Vitsene blir mer pappa-aktige, tørre og tema-nære, ikke bare generiske “morsomme svar” |
| `Avgrensning` | Agenten avviser upassende humor og holder seg i trygg workshop-tone |

Et enkelt tegn på gode instruksjoner er at du kan se forskjell på svarene før og etter.

Eksempel:

| Uten tydelige instruksjoner | Med tydelige instruksjoner |
| --- | --- |
| `Her er en morsom vits om Teams: Teams er som familien, noen ganger fungerer det dårlig, haha.` | `Hvorfor liker Teams så korte møter? Fordi alle vil rett på poenget.` |
| Uforutsigbar lengde og tone | Kort, tørr og tydelig pappa-vits |
| Lite tydelig tema | Temaet er synlig i selve vitsen |

Forslag til testspørsmål etter at du har lagt inn instruksjonene:

- `Lag en pappavits om Teams`
- `Gi meg tre korte vitser om kode`
- `En til`
- `Lag en grov vits om kollegaen min`
- `Gi meg én pappavits om YAML, og svar med nøyaktig to linjer`

Forventet effekt:

- agenten holder svarene korte
- agenten følger formatet du har bedt om
- agenten holder seg til trygg humor
- agenten lager tydeligere pappa-vitser, ikke bare generiske vitser
- agenten avviser upassende humor og tilbyr et trygt alternativ

## Steg 3 - Legg til kunnskap

For akkurat denne agenten er kunnskap **ikke strengt nødvendig**.
Vi legger det likevel til, fordi det er en enkel måte å vise hva grounding betyr i praksis.

Bruk [`pappavits-kunnskap.md`](./pappavits-kunnskap.md) som kunnskapsfil.

### Hvis du starter direkte i Copilot Studio

1. Gå til **Knowledge**.
2. Velg **Add knowledge**.
3. Velg **Files** eller `SharePoint`.
4. Last opp eller velg [`pappavits-kunnskap.md`](./pappavits-kunnskap.md).
5. Vent til status er klar.
6. Test på nytt.

### Hvis du startet i Agent Builder og vil kunne kopiere videre

Bruk helst `SharePoint` eller nettsted som kunnskapskilde.

En enkel arbeidsflyt er:

1. Last opp [`pappavits-kunnskap.md`](./pappavits-kunnskap.md) til en SharePoint-dokumentmappe
2. Legg til SharePoint-filen som kunnskap i agenten
3. Test i `Try it`
4. Kopier agenten til `Copilot Studio` ved behov

Forslag til testspørsmål:

- `Lag en pappavits om Copilot Studio`
- `Lag en pappavits om YAML`
- `Gi en trygg kickoff-vits om kaffe og møter`

Se etter at agenten:

- holder seg til temaene i kunnskapsfilen
- lager vitser som passer i en workshop-kontekst
- unngår temaene som er merket som uønskede

## Steg 4 - Utvid med Jokes MCP-eksempelet

Hvis du vil vise verktøy og `MCP`, er dette en naturlig utvidelse.

Referansen her er `Jokes MCP`-laben som viser hvordan en MCP-server kan eksponere flere humorverktøy til en agent i `Copilot Studio`.

Eksterne referanser:

- [Copy an agent to Copilot Studio](https://learn.microsoft.com/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio)
- [Build agents by using Agent Builder in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents)
- [Add tools and resources from a Model Context Protocol (MCP) server to your agent](https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent)
- [Jokes MCP sample lab](https://github.com/matthewdcage/microsoft-copilot-mcp)

### Anbefalt arbeidsflyt

1. Ha agenten i `Copilot Studio`
2. Klargjør eller deploy `Jokes MCP`-eksempelet
3. Legg MCP-serveren til som tool i agenten
4. Skru av verktøy du ikke vil bruke
5. Oppdater instruksjonene slik at agenten bare bruker relevante verktøy
6. Test

### Legg MCP-serveren til i agenten

1. Åpne agenten i `Copilot Studio`
2. Gå til **Tools**
3. Velg **Add a tool**
4. Velg **Model Context Protocol**
5. Velg din `Jokes MCP`-tilkobling
6. Autoriser og velg **Add and configure**

### Viktig tilpasning for akkurat denne agenten

Alle MCP-tools blir normalt tilgjengelige som standard.
For `Pappavits-agenten` bør du ikke bruke alt.

Anbefaling:

- behold `get-dad-joke`
- skru av `get-yo-mama-joke`
- skru av `get-chuck-joke` hvis du vil holde stilen ren
- behold bare verktøy som faktisk passer agentens rolle

Dette viser et viktig poeng fra modul 3:

- ikke gi agenten flere verktøy enn den trenger
- skriv tydelig i instruksjonene når et verktøy skal brukes

### Oppdater instruksjonene etter MCP

Hvis `get-dad-joke` er tilgjengelig, behold eller legg til dette prinsippet:

- bruk `get-dad-joke` bare når brukeren ber om en tilfeldig dad joke, en engelsk original eller du trenger variasjon
- hvis vitsen ikke fungerer på norsk, lag en ny norsk pappavits med samme energi i stedet for å oversette ordrett

### Test MCP-varianten

Test med disse promptene:

- `Gi meg en tilfeldig dad joke`
- `Gi meg en pappavits om utviklere`
- `Gi meg en engelsk original og en norsk versjon`
- `Gi meg en yo mama-joke`

Forventet oppførsel:

- agenten kan bruke `get-dad-joke` når det passer
- agenten holder fortsatt svarene trygge og korte
- agenten avviser eller styrer unna humor som ikke passer rollen

## Checkpoint

- [ ] Agenten er opprettet
- [ ] Instruksjonene er lagt inn
- [ ] Kunnskapskilden er lagt til og testet
- [ ] Agenten fungerer uten verktøy
- [ ] Agenten fungerer med `get-dad-joke` hvis du har lagt til MCP
- [ ] Uønskede verktøy er skrudd av

## Hvorfor dette eksempelet fungerer godt i workshop

- det er lett å komme i gang
- det viser tydelig forskjellen mellom prototype og mer styrt agent
- det gir en konkret bro fra `prompt` til `kunnskap` til `verktøy`
- det er enkelt å bygge videre fra denne agenten til mer nyttige scenarioer
