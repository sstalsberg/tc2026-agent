# Lab 3 – Legg til verktøy og integrasjoner

**Tilhører:** Sesjon 3  
**Tidsestimat:** 25–35 minutter  
**Forutsetning:** [Lab 2](lab-02-kunnskap-og-data.md) fullført

---

## Mål for denne laben

Når du er ferdig skal du ha:
- Lagt til minst én innebygd connector (live data)
- Opprettet en enkel Agent Flow (Power Automate-automatisering)
- Forstått hva MCP er og sett det i bruk
- Prøvd et offentlig REST API-verktøy
- En handlingskraftig agent som ikke bare svarer, men *gjør* ting

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

### Hva er MCP?

```
Agent ──► MCP-klient ──► MCP-server ──► Ekstern tjeneste
                                          (GitHub, Jira, 
                                           databaser, osv.)
```

MCP-servere fungerer som «broer» mellom agenten og tjenester. Agenten trenger ikke vite detaljene om APIet – MCP-serveren håndterer kommunikasjonen.

### Steg C1 – Legg til en MCP-server i Copilot Studio

1. Gå til **«Handlinger»** → **«+ Legg til handling»**
2. Velg **«MCP-server»** / **«MCP server»**
3. Du vil se en liste over tilgjengelige innebygde MCP-servere

### Steg C2 – Koble til en innebygd MCP-server

**Alternativ: Microsoft Graph (via M365-connectoren)**

1. Velg **«Microsoft Graph»** fra MCP-listen (eller tilsvarende)
2. Klikk **«Koble til»** og logg inn med Microsoft-kontoen din
3. Velg hvilke tillatelser agenten skal ha (start med «Read»-tillatelser for e-post og kalender)
4. Klikk **«Legg til»**

**Test MCP-tilkoblingen:**
- `Kan du sjekke hvilke møter jeg har i morgen?`
- `Hva er de siste e-postene mine fra HR?`

> **OBS:** Vær bevisst på tillatelsene du gir. I workshop-sammenheng anbefales skrivebeskyttede tillatelser.

---

## Alternativ D – REST API-verktøy

La oss koble til et offentlig, gratis API for å demonstrere REST API-integrasjon. Vi bruker [feriepenger.no API](https://api.publicholidays.no) eller et annet norsk offentlig API.

### Steg D1 – Legg til et REST API

Vi bruker **Norwegian Public Holidays API** som et enkelt eksempel:

1. Gå til **«Handlinger»** → **«+ Legg til handling»**
2. Velg **«REST API»** / **«OpenAPI»**
3. Klikk **«Importer fra URL»** eller **«Legg inn OpenAPI-spesifikasjon»**

**OpenAPI-spesifikasjon (kopier inn):**
```yaml
openapi: 3.0.0
info:
  title: Norwegian Public Holidays
  version: "1.0"
  description: Henter norske helligdager
servers:
  - url: https://api.publicholidays.no
paths:
  /holidays/{year}:
    get:
      summary: Hent norske helligdager for et gitt år
      operationId: getHolidays
      parameters:
        - name: year
          in: path
          required: true
          schema:
            type: integer
          description: År (f.eks. 2026)
      responses:
        '200':
          description: Liste over helligdager
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    date:
                      type: string
                    name:
                      type: string
```

4. Klikk **«Legg til handling»** / **«Add action»**
5. Beskriv handlingen: `Henter norske offentlige helligdager for et gitt år`

### Steg D2 – Test REST API

I Test-panelet:
- `Hvilke helligdager er det i 2026?`
- `Er det en helligdag denne uken?`

---

## Steg 5 – Se alle integrasjoner i sammenheng

Nå bør agenten din ha flere verktøy. Test disse scenariene som bruker kombinasjoner:

1. **Informasjon + handling:** `Jeg er ny ansatt. Kan du forklare hva som skjer dag 1, og sende meg en velkomst-e-post?`
2. **Live data:** `Hva er været i Oslo i dag?`
3. **API-data:** `Hvilke helligdager har vi igjen i 2026?`

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
- Prøv en annen MCP-server fra listen

### REST API-feil
- Sjekk at API-URL-en er tilgjengelig (åpne i nettleseren)
- Sjekk at OpenAPI-spesifikasjonen er gyldig YAML
- Noen offentlige APIer kan ha nedetid

### Agenten kaller ikke verktøyet
- Agenten kaller verktøy basert på om den forstår at spørsmålet er relevant
- Legg til i instruksjonene: «Bruk [verktøynavn]-verktøyet når brukeren spør om [emne]»
- Prøv å reformulere spørsmålet mer eksplisitt

---

## ✅ Checkpoint

- [ ] Minst én innebygd connector er lagt til og fungerer
- [ ] Agent Flow for velkomst-e-post er opprettet og testet
- [ ] Agenten kan trigge en automatisering basert på chat
- [ ] Du har sett et eksempel på live data i et svar (fra weather eller API)

---

## Neste steg

Flott! Agenten kan nå hente data og utføre handlinger. I [Lab 4](lab-04-prompt-og-testing.md) skal vi systematisk teste og forbedre agenten – og lære hvordan vi gjør den enda bedre gjennom prompt engineering og iterativ testing.
