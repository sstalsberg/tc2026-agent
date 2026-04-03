# Lab 3 – Legg til verktøy og integrasjoner

**Tilhører:** Modul 3  
**Forutsetning:** [Lab 2](lab-02-kunnskap-og-data.md) fullført

---

## Mål for denne laben

Når du er ferdig skal du ha:

- Lagt til minst én innebygd connector (live data)
- Opprettet en enkel Agent Flow (Power Automate-automatisering)
- Forstått hva MCP er og sett det i bruk
- Prøvd et offentlig REST API-verktøy
- Validert et API utenfor agenten før du kobler det inn
- En handlingskraftig agent som ikke bare svarer, men *gjør* ting

Til denne laben bruker vi også eksempelfiler i mappen:

- [`../eksempler/`](../eksempler/README.md)

---

## Bakgrunn – Verktøy vs. Kunnskap

I Lab 2 lærte agenten *å svare* basert på dokumenter. Verktøy tar det et steg videre:

| | Kunnskap (Lab 2) | Verktøy (Lab 3) |
|-|-----------------|-----------------|
| **Hva** | Statisk innhold fra dokumenter | Dynamisk data og handlinger |
| **Eksempel** | «Hva er supportnummeret?» | «Opprett en support-sak for meg» |
| **Data** | Leses én gang ved opplasting | Hentes i sanntid ved spørring |
| **Kan endre verden** | Nei | Ja (sender e-post, oppretter oppgaver osv.) |

---

## Alternativ A – Innebygd connector: MSN Weather

Dette er den raskeste måten å demonstrere live-dataintegrasjon. Agenten kan fortelle om været på et sted – nyttig for å vise at agenten henter data i sanntid.

### Steg A1 – Legg til Weather-connectoren

1. Gå til **«Handlinger»** / **«Actions»** i venstremenyen
2. Klikk **«+ Legg til handling»** / **«+ Add action»**
3. Velg **«Connector»** fra listen
4. Søk etter **«MSN Weather»** i søkefeltet
5. Velg **«Get current weather»** (Hent gjeldende vær)
6. Koble til med din Microsoft-konto (klikk «Koble til»)
7. Klikk **«Legg til handling»** / **«Add action»**

### Steg A2 – Test weather-integrasjonen

Gå til Test-panelet og prøv:
- `Hva er været i Oslo nå?`
- `Blir det regn i Bergen i dag?`

Agenten bør nå hente sanntidsdata fra MSN Weather. Legg merke til at svaret inneholder faktisk temperatur og værmeldingsdata!

> **Relevant for onboarding?** Litt søkt kanskje, men det viser prinsippet. I en ekte onboarding-agent kan dette erstattes med f.eks. en connector til Ateas ServiceNow for å hente støttestatuser.

---

## Alternativ B – Agent Flow (Power Automate)

Agent Flows lar agenten trigge automatiseringsflyt i Power Automate. Vi lager en enkel flyt som sender en velkomst-e-post.

### Steg B1 – Opprett Agent Flow

1. Gå til **«Handlinger»** / **«Actions»** i venstremenyen
2. Klikk **«+ Legg til handling»** → **«Ny Agent Flow»** / **«New Agent Flow»**
3. Du åpner nå Power Automate i en ny fane

### Steg B2 – Bygg flyten i Power Automate

Du vil se en tom flytbygger med en «Copilot Studio»-trigger øverst.

**Legg til input til flyten:**
1. Klikk på trigger-blokken øverst («When an agent calls a flow»)
2. Klikk **«+ Legg til input»** / **«+ Add an input»**
3. Velg **«Text»** som inputtype
4. Gi den navn: `Mottaker_epost`
5. Legg til enda en input av typen **«Text»** med navn: `Mottaker_navn`

**Legg til e-posthandling:**
1. Klikk **«+»** under trigger-blokken → **«Legg til handling»**
2. Søk etter **«Send an email (V2)»** (Microsoft 365 Outlook)
3. Fyll inn feltene:

| Felt | Verdi |
|------|-------|
| **Til** | Klikk «Dynamic content» → velg `Mottaker_epost` |
| **Emne** | `Velkommen til Atea! 🎉` |
| **Brødtekst** | Se nedenfor |

**E-posttekst:**
```
Hei [Mottaker_navn]!

Hjertelig velkommen til Atea! Vi er veldig glade for at du har blitt med på laget.

Her er noen nyttige lenker for din første dag:
• Intranett: intranett.atea.no
• IT-support: intern.atea.no
• Workday (lønn og ferie): workday.atea.no

Din fadder vil ta kontakt med deg i løpet av første dag.

Ikke nøl med å spørre om hjelp – vi er her for deg!

Hilsen
Atea Onboarding-teamet
```

4. For «Mottaker_navn» i e-postteksten: Klikk inn i brødtekstfeltet der du vil ha navnet, velg «Dynamic content» → `Mottaker_navn`

**Legg til respons til agenten:**
1. Klikk **«+»** under e-poststeget → **«Legg til handling»**
2. Søk etter **«Respond to Copilot»** / **«Svar til Copilot»**
3. Klikk **«+ Legg til output»** → **«Text»**
4. Navn: `Status`, verdi: `Velkomst-e-post er sendt til [Mottaker_epost]`

### Steg B3 – Lagre og test flyten

1. Klikk **«Lagre»** / **«Save»** øverst til høyre
2. Gi flyten navn: `Send velkomst-epost`
3. Klikk **«Publiser»** / **«Publish»** for å aktivere den
4. Gå tilbake til Copilot Studio-fanen

### Steg B4 – Koble flyten til agenten

1. Tilbake i Copilot Studio → **Handlinger** → **+ Legg til handling**
2. Velg **«Agent Flow»** fra listen
3. Du skal nå se flyten du nettopp lagret – `Send velkomst-epost`
4. Velg den og klikk **«Legg til»**
5. Beskriv handlingen for agenten ved å legge til et navn og beskrivelse:
   - Navn: `Send velkomst-epost`
   - Beskrivelse: `Sender en velkomst-e-post til en ny ansatt. Krever mottakers e-postadresse og navn.`

### Steg B5 – Test Agent Flow

I Test-panelet:
- `Kan du sende en velkomst-epost til Per Olsen på per.olsen@example.com?`

Agenten bør be deg om bekreftelse og deretter trigge flyten. Sjekk at e-posten faktisk ankommer!

> **Mottok du ikke e-post?** Sjekk søppelpost/spam. Sjekk også at flyten kjørte i Power Automate (gå til make.powerautomate.com → Mine flyter → Kjørehistorikk).

---

## Alternativ C – MCP-server (Model Context Protocol)

MCP er en åpen standard som gjør det enkelt å koble agenten til eksterne tjenester og verktøy.
I denne laben bruker vi et konkret `remote MCP`-eksempel mot SSB-data via TRY.

### Hva er MCP?

```
Agent ──► MCP-klient ──► MCP-server ──► Ekstern tjeneste
                                          (GitHub, Jira, 
                                           databaser, osv.)
```

MCP-servere fungerer som «broer» mellom agenten og tjenester. Agenten trenger ikke vite detaljene om APIet – MCP-serveren håndterer kommunikasjonen.

Eksempelfiler for denne delen ligger her:

- [`../eksempler/mcp-ssb-remote/README.md`](../eksempler/mcp-ssb-remote/README.md)

### Steg C0 – Bestill din egen tilgang

Gå til:

- `https://tools.try.no/ssb-mcp`

Der kan du bestille din egen tilgang til MCP-serveren. For workshop-formaal bruker vi dette som et gratis eksempel.

Du faar en personlig MCP-lenke eller noekkel paa e-post.

> **Viktig:** Ikke legg noekkelen inn i repo, slides eller delte dokumenter. Den skal lagres i connectionen i Copilot Studio.

### Steg C1 – Legg til MCP-serveren i Copilot Studio

1. Gå til **«Handlinger»** → **«+ Legg til handling»**
2. Velg **«MCP-server»** / **«MCP server»**
3. Velg oppsett for en eksisterende MCP-server

### Steg C2 – Konfigurer SSB-MCP fra TRY

Bruk disse verdiene:

| Felt | Verdi |
| --- | --- |
| **Server name** | `SSB MCP` |
| **Server description** | `Bruk denne serveren naar brukeren vil soeke i eller hente offentlig statistikk fra SSB.` |
| **Server URL** | `https://tools.try.no/ssb-mcp/mcp` |
| **Authentication type** | `API key` |
| **API key type** | `Query` |
| **Parameter name** | `key` |

Naar du oppretter connectionen, limer du inn din personlige noekkel fra TRY.

### Steg C3 – Legg serveren til agenten

1. Opprett en ny connection hvis Copilot Studio ber om det
2. Lim inn din personlige noekkel
3. Klikk **«Add to agent»** / **«Legg til i agent»**
4. Sjekk hvilke tools som blir oppdaget

Du vil typisk se verktøy som:

- `ssb_search`
- `ssb_table_metadata`
- `ssb_get_data`
- `ssb_get_url`

### Steg C4 – Test MCP-tilkoblingen i agenten

Prøv disse promptene:

- `Finn en SSB-tabell om befolkning i Norge`
- `Vis metadata for tabellen 07459`
- `Hent data fra en SSB-tabell om befolkning`
- `Lag en delbar URL for en SSB-forespoersel`

Dette er et nyttig poeng i seg selv:

- API gir ofte en teknisk kontrakt
- MCP gjoer verktøyene oppdagbare og brukbare for agenten

---

## Alternativ D – REST API-verktøy

Her bruker vi et faktisk fungerende offentlig API:

- `Nager.Date`
- Endpoint: `https://date.nager.at/api/v3/PublicHolidays/2026/NO`

Dette er et viktig poeng i seg selv:

> En gyldig OpenAPI-spec er ikke nok. Du må validere hele kjeden:
> `DNS -> endpoint -> auth -> schema`

Eksempelfiler for denne delen ligger her:

- [`../eksempler/api-nager-date/README.md`](../eksempler/api-nager-date/README.md)
- [`../eksempler/api-nager-date/openapi.yaml`](../eksempler/api-nager-date/openapi.yaml)
- [`../eksempler/api-nager-date/request.http`](../eksempler/api-nager-date/request.http)

### Steg D0 – Test API-et først med curl eller Postman

Før du bygger noe i Copilot Studio, test at API-et faktisk svarer.

**curl-eksempel:**

```bash
curl -X GET "https://date.nager.at/api/v3/PublicHolidays/2026/NO" \
  -H "Accept: application/json"
```

Du bør få:

- `HTTP 200`
- en JSON-liste med norske helligdager

Hvis dette ikke fungerer:

- stopp her
- ikke bygg connector eller agent ennå
- feilen ligger i endpoint, DNS, nettverk eller API-et, ikke i agenten

### Steg D1 – Bygg integrasjonen i Copilot Studio

Det finnes to vanlige veier videre:

1. **REST API / OpenAPI-verktøy** direkte i Copilot Studio
2. **Custom connector** i Power Platform hvis du vil gjenbruke integrasjonen flere steder

Start gjerne med den enkleste varianten som er tilgjengelig i miljøet ditt.

### Steg D2 – Legg inn OpenAPI-spesifikasjonen

Bruk spesifikasjonen fra:

- [`../eksempler/api-nager-date/openapi.yaml`](../eksempler/api-nager-date/openapi.yaml)

Hvis du legger den inn manuelt, ser den slik ut:

```yaml
openapi: 3.0.0
info:
  title: Norske helligdager
  version: "1.0"
  description: Henter norske offentlige helligdager fra Nager.Date
servers:
  - url: https://date.nager.at/api/v3
paths:
  /PublicHolidays/{year}/NO:
    get:
      summary: Hent norske helligdager for et gitt ar
      operationId: getPublicHolidaysNo
      parameters:
        - name: year
          in: path
          required: true
          description: Arstall, for eksempel 2026
          schema:
            type: integer
      responses:
        "200":
          description: Liste over norske helligdager
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    date:
                      type: string
                    localName:
                      type: string
                    name:
                      type: string
                    countryCode:
                      type: string
                    global:
                      type: boolean
                    types:
                      type: array
                      items:
                        type: string
```

Beskriv verktøyet tydelig for agenten:

- Navn: `Hent norske helligdager`
- Beskrivelse: `Bruk dette verktøyet når brukeren spør om norske helligdager for et bestemt år.`

### Steg D3 – Test verktøyet i agenten

Når verktøyet er lagt til, test i agenten:

- `Hvilke helligdager er det i 2026?`
- `Når er neste helligdag i Norge?`
- `Hent norske helligdager for 2027`

Hvis agenten ikke bruker verktøyet av seg selv, prøv en mer eksplisitt formulering:

- `Bruk verktøyet for norske helligdager og hent 2026`

### Steg D4 – Reflekter over hva som faktisk skjedde

Dette er arbeidsmønsteret vi vil at du skal lære:

1. Test API-et utenfor agenten
2. Bygg integrasjonen med OpenAPI eller custom connector
3. Test verktøyet i agenten
4. Juster beskrivelse, input og instrukser hvis agenten ikke velger verktøyet riktig

Dette mønsteret skal vi bruke igjen senere, blant annet for:

- Statens vegvesen-API
- remote MCP mot SSB
- self-hosted MCP-server for Minecraft

---

## Steg 5 – Se alle integrasjoner i sammenheng

Nå bør agenten din ha flere verktøy. Test disse scenariene som bruker kombinasjoner:

1. **Informasjon + handling:** `Jeg er ny ansatt. Kan du forklare hva som skjer dag 1, og sende meg en velkomst-e-post?`
2. **Live data:** `Hva er været i Oslo i dag?`
3. **API-data:** `Hvilke helligdager har vi igjen i 2026?`
4. **MCP-data:** `Finn en relevant SSB-tabell om befolkning og hent noen tall`

---

## Feilsøkingsguide

### Flyten kjører ikke
- Sjekk at flyten er **publisert** i Power Automate (ikke bare lagret)
- Sjekk at agenten har riktige tillatelser til å kalle flyten
- Åpne Power Automate og se «Kjørehistorikk» for flyten

### Connector-feil («Authentication failed»)
- Fjern connectoren og koble til på nytt
- Sjekk at din konto har tilgang til tjenesten du kobler til
- Noen connectorer krever premium-lisens i Power Platform

### MCP-server svarer ikke
- MCP-servere kan ha forsinkelse ved første tilkobling
- Sjekk nettverkstilgang (noen bedriftsnettverk blokkerer MCP-trafikk)
- Sjekk at `Server URL` er riktig
- Sjekk at API-noekkelen faktisk er lagt inn i connectionen
- Hvis serveren bruker query-auth, sjekk at parameteren heter `key`

### REST API-feil
- Test endpointet med `curl`, Postman eller VS Code REST Client før du går inn i agenten
- Sjekk at domenet faktisk finnes og at DNS-oppslag fungerer
- Sjekk at OpenAPI-spesifikasjonen peker til riktig base URL
- Sjekk at OpenAPI-spesifikasjonen er gyldig YAML
- Husk at en gyldig spec ikke beviser at API-et er tilgjengelig i runtime

### Agenten kaller ikke verktøyet
- Agenten kaller verktøy basert på om den forstår at spørsmålet er relevant
- Legg til i instruksjonene: «Bruk [verktøynavn]-verktøyet når brukeren spør om [emne]»
- Prøv å reformulere spørsmålet mer eksplisitt

---

## ✅ Checkpoint

- [ ] Minst én innebygd connector er lagt til og fungerer
- [ ] Agent Flow for velkomst-e-post er opprettet og testet
- [ ] Agenten kan trigge en automatisering basert på chat
- [ ] Du har koblet til en eksisterende MCP-server
- [ ] Du har testet et API med `curl` eller Postman før du koblet det inn
- [ ] Du har sett et eksempel på live data i et svar (fra weather eller API)

---

## Neste steg

Flott! Agenten kan nå hente data og utføre handlinger. I [Lab 4](lab-04-prompt-og-testing.md) skal vi systematisk teste og forbedre agenten – og lære hvordan vi gjør den enda bedre gjennom prompt engineering og iterativ testing.
