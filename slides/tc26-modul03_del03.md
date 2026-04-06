---
marp: true
theme: default
paginate: true
size: 16:9
title: Bygg din egen AI-agent
description: Teknocamp 2026 - 2-dagers hands-on workshop
style: |
  :root {
    --bg: #f5f8ff;
    --panel: rgba(255, 255, 255, 0.84);
    --panel-2: rgba(244, 248, 255, 0.9);
    --ink: #13233f;
    --muted: #667996;
    --accent: #149e8e;
    --accent-2: #5a8dff;
    --accent-warm: #f2a83b;
    --line: #c9d6eb;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    font-size: 25px;
    line-height: 1.42;
    color: var(--ink);
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 12% 14%, rgba(20, 158, 142, 0.11), transparent 24%),
      radial-gradient(circle at 84% 12%, rgba(90, 141, 255, 0.12), transparent 22%),
      linear-gradient(180deg, #fbfdff 0%, #f2f7ff 56%, #eef4ff 100%);
    padding: 56px 68px 48px;
    border-left: 6px solid var(--accent);
  }

  section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(90, 141, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(90, 141, 255, 0.07) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.18), transparent 76%);
    pointer-events: none;
  }

  section > * {
    position: relative;
    z-index: 1;
  }

  section.lead,
  section.divider,
  section.action {
    background:
      radial-gradient(circle at 16% 18%, rgba(20, 158, 142, 0.16), transparent 28%),
      radial-gradient(circle at 86% 14%, rgba(90, 141, 255, 0.18), transparent 24%),
      linear-gradient(135deg, #fafdff 0%, #edf5ff 54%, #e7f6f3 100%);
  }

  section.lead {
    justify-content: center;
    padding-right: 40%;
  }

  section.divider {
    text-align: center;
    padding-top: 120px;
  }

  section.action {
    border-left-color: var(--accent-warm);
    box-shadow: inset 0 0 0 1px rgba(242, 168, 59, 0.18);
  }

  h1,
  h2,
  h3 {
    margin: 0 0 0.35em;
    color: var(--ink);
  }

  h1,
  h2 {
    font-family: "SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  h1 {
    font-size: 1.58em;
  }

  h2 {
    font-size: 1.02em;
  }

  h3 {
    font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    font-size: 0.48em;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--accent-2);
  }

  section.lead h1,
  section.divider h1 {
    font-size: 1.88em;
  }

  section.lead h2,
  section.divider h2 {
    color: rgba(19, 35, 63, 0.74);
  }

  section.action h3 {
    display: inline-flex;
    padding: 0.35em 0.72em;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid rgba(90, 141, 255, 0.18);
    color: #b76e10;
  }

  p,
  li {
    color: var(--ink);
    line-height: 1.44;
  }

  strong {
    color: var(--accent);
  }

  section.action strong {
    color: #b76e10;
  }

  section.action li::marker {
    color: var(--accent-warm);
  }

  ul,
  ol {
    padding-left: 1.08em;
  }

  li {
    margin: 0.16em 0;
  }

  li::marker {
    color: var(--accent);
  }

  table {
    display: table !important;
    width: calc(100% + 40px) !important;
    max-width: none !important;
    margin: 0.55em -20px 0.95em;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    font-size: 0.67em;
    border: 1px solid #c4d5ef;
    border-radius: 22px;
    overflow: hidden;
    clip-path: inset(0 round 22px);
    background: var(--panel-2);
    box-shadow: 0 14px 32px rgba(76, 104, 164, 0.12);
  }

  th,
  td {
    padding: 11px 12px;
    border: 0;
    vertical-align: top;
    background: transparent;
  }

  tbody {
    background: var(--panel-2);
  }

  th {
    background: linear-gradient(180deg, #d9e7ff 0%, #d2e2ff 100%) !important;
    color: #10213e;
    border-bottom: 1px solid var(--line);
    font-weight: 700;
    text-align: left !important;
  }

  tr + tr td {
    border-top: 1px solid var(--line);
  }

  th:first-child,
  td:first-child {
    padding-left: 18px;
  }

  th:last-child,
  td:last-child {
    padding-right: 18px;
  }

  tr:first-child th:first-child {
    border-top-left-radius: 22px;
  }

  tr:first-child th:last-child {
    border-top-right-radius: 22px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 22px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 22px;
  }

  code {
    background: rgba(90, 141, 255, 0.08);
    color: var(--accent-2);
    border-radius: 6px;
    padding: 0.08em 0.28em;
    font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  }

  section.visual {
    display: flex;
    align-items: center;
    justify-content: center;
    background:
      radial-gradient(circle at 18% 14%, rgba(20, 158, 142, 0.09), transparent 24%),
      radial-gradient(circle at 82% 20%, rgba(90, 141, 255, 0.1), transparent 20%),
      linear-gradient(180deg, #fbfdff 0%, #eef4ff 100%);
    border-left-color: #8fb0ea;
  }

  section.visual::before {
    display: none;
  }

  section.visual p {
    margin: 0;
    width: 100%;
    text-align: center;
  }

  section.visual img {
    max-width: 94%;
    max-height: 560px;
    border-radius: 18px;
    box-shadow: 0 24px 60px rgba(76, 104, 164, 0.18);
  }

  section::after {
    font-size: 0.46em;
    color: var(--muted);
    font-weight: 700;
  }

  section.lead::after,
  section.divider::after,
  section.action::after {
    content: "";
  }
---

<!-- _class: lead -->
# Modul 3 - del 3
## Verktøy i agenter
### Fra innebygde verktøy til MCP og skills

---

# Hva mener vi med verktøy?

- Et verktøy er en konkret evne agenten har til å hente data eller utføre handlinger

---

# Oversikt over forskjellige typer verktøy

| Nivå | Rolle |
| --- | --- |
| Innebygde verktøy | Bruke det plattformen allerede har |
| Connectors | Koble på flere systemer |
| Prosess | Kjører flere steg på tvers av systemer |
| API | Mulighet for full kontroll over logikk og data |
| MCP | Standardisert lag for verktøy og kontekst |
| A2A (preview) | La en agent bruke en annen agent |
| Skills (kodeagenter) | Gjenbrukbar arbeidsmåte for agenter |

---

# Innebygde verktøy

Funksjonalitet agenten allerede har tilgang til via plattformen, typisk Microsoft 365 Copilot.

Eksempler:

- Dokumenter i SharePoint og OneDrive
- E-post og kalender i Outlook
- Teams-møter og chat
- Microsoft 365-data via Graph, Semantic Index og brukerens tilgangsmodell

Dette er kunnskap/grounding via Microsoft 365-plattformen, ikke et direkte API-kall fra agenten slik som i en vanlig integrasjon.

---

# Variabler

Variabler brukes til å:

- Huske svar brukeren allerede har gitt
- Sende kontekst videre til flows, actions og andre topics

I Copilot Studio har du tre typer variabler:

| Type | Bruk |
| --- | --- |
| Topic-variabler | Verdier som bare brukes i ett topic eller steg |
| Globale variabler | Verdier som brukes på tvers av topics i samme sesjon |
| Systemvariabler | Informasjon om bruker, kanal og aktivitet |
| Environment variables | Konfigurasjon fra plattformen |


---

# Synonymer og regex: fra fritekst til strukturert input

| Mønster | Hva det gjør | Eksempel |
| --- | --- | --- |
| Synonymer | Fanger ulike ord for samme begrep | `leilighet`, `flat`, `apartment` |
| Lukket liste | Begrenser input til kjente valg | `hus`, `duplex`, `condo` |
| Regex | Fanger mønstre i tekst | `[1-5]` soverom, postnr, ordrenr |

- Dette er broen mellom fri tekst og variabler agenten faktisk kan bruke
- Reduserer feil i oppslag, routing og verktøykall
- Passer best når innholdet er kjent og variasjonene kan beskrives

---

# Connectors

En connector er en ferdig integrasjon mot et system, i praksis et innpakket API med definerte handlinger, typisk tilgjengelig i Copilot Studio og Power Platform.
Connectoren eksponerer vanligvis et avgrenset sett av operasjoner, ikke hele API-et.

Eksempler:

- SharePoint connector
- Dataverse
- Salesforce
- ServiceNow
- Custom connector mot egen API via Power Platform

---

# Run a Prompt / AI prompt som verktøy

Copilot Studio kan kjøre et eget prompt som en tool, med egne inputvariabler, modellvalg og strukturert output.

| Godt valg når du trenger | Eksempel |
| --- | --- |
| Mer kontroll over format og regler | Returner JSON eller fast struktur |
| Presis ekstraksjon eller klassifisering | Trekk ut felter fra tekst eller sorter innhold |
| Gjenbrukbar AI-logikk | Oppsummering, sentiment eller teksttransformasjon |

- Prompt-verktøyet utfører én avgrenset AI-oppgave

Tilsvarende mønster finnes også i Foundry og kodeagenter: en prompt-basert action med tydelig input og output.

---

# Eksempel: code interpreter i en prompt

- `Run a Prompt` kan utvides med `code interpreter`
- Prompten kan skrive og kjøre Python-kode
- Godt valg for dataanalyse, beregninger, visualiseringer og behandling av Excel-, Word-, PowerPoint- og PDF-filer
- Bruk dette når agenten må behandle data eller filer, ikke bare oppsummere tekst
- Slås på i promptens `Settings` med `Enable code interpreter`
- Krever brukerautentisering
- Støtter ikke flere opplastede filer eller flere filutdata i samme prompt

---

# Computer Use / GUI-automatisering

I Copilot Studio er `Computer Use` en funksjonalitet som lar agenten bruke et nettsted eller en desktop-app med virtuell mus og tastatur.

- Verktøyet bruker syn + resonnering for å tolke skjermen og velge neste steg
- Passer best når en tjeneste mangler API eller annen form for connector
- Mye tregere enn API-integrasjon, så bør brukes når ingen andre alternativer er tilgjengelige

---

# Human in the loop i Copilot Studio

| Mønster | Hva det gjør |
| --- | --- |
| `Request for Information` | Agenten sender en forespørsel til et menneske og venter på svar |
| `Approval / review` | Et menneske kan godkjenne, avvise eller supplere informasjon |
| `Human supervision` | Agenten kan stoppe opp og be om hjelp når den er usikker |
| `Terskelbasert eskalering` | Agenten bruker en confidence score eller regel til å avgjøre når menneskelig hjelp skal involveres |

Human in the loop trigges enten eksplisitt (approval) eller implisitt (confidence under terskel)

**Typiske brukstilfeller:**

- manglende informasjon
- godkjenning av kostnad eller bestilling
- avklaringer før agenten fortsetter

---

# Prosess

Prosess lar agenten utføre en definert arbeidsflyt med flere steg, ikke bare ett enkelt kall.

Typiske former:

- Agent flow / Power Automate
- Azure Logic Apps
- Backend-jobb, n8n, eller kode i Foundry og kodeagenter

Eksempler:

- Opprette Team, legge til medlemmer og sende varsling
- Registrere sak, hente data og sende til godkjenning

---

# Prosessmønstre: agent flow og event trigger

| Mønster | Hva det betyr | Typisk bruk |
| --- | --- | --- |
| Agent flow / workflow | En definert sekvens av steg som agenten kan starte | Repeterbare prosesser, godkjenning, oppdatering av flere systemer |
| Event trigger | En hendelse starter agenten eller prosessen uten at brukeren spør i chat | Ny e-post, ny fil, ny rad, tidsplan, webhook eller business event |

Navnene varierer, men konseptet er det samme:

- Copilot Studio: agent flows og event triggers
- Foundry: workflows, actions og eksterne triggere
- Kodeagenter: scheduler, webhook, queue eller backend-prosess

**Flyt (forenklet):**
- Brukerinitiert: Agent → Prosess → Systemer → Prosess → Agent
- Hendelsesdrevet: Hendelse → Prosess → Systemer → Prosess → Agent

---

# Agent + prosess: når bruker du hva?

| Bruk agent når du trenger | Bruk prosess (workflow) når du trenger |
| --- | --- |
| Fleksibilitet i samtale og tolkning | Faste steg i kjent rekkefølge |
| Resonering og valg av neste handling | Forutsigbar kjøring hver gang |
| Hente inn kontekst fra bruker eller kilder | Standardisert prosess med logging og kontroll |
| Dynamisk valg av tools eller neste steg | Godkjenning, branching og systemoppdateringer |

- agenten velger og forstår
- workflowen utfører og standardiserer

---

# API som verktøy

Et API er en kontrollert og strukturert inngang til et system.

| Byggekloss | Hva det betyr |
| --- | --- |
| Endpoint | URL til en funksjon eller ressurs |
| Metode | GET, POST, PUT, PATCH eller DELETE |
| Input | Data du sender inn, ofte JSON |
| Output | Strukturert svar tilbake |
| Auth | Hvem du er og hva du har lov til å gjøre |
| Schema | Tydelig kontrakt, ofte OpenAPI eller JSON schema |

---

# Hvordan kobler du et REST API til agenten?

| Del | Rolle |
| --- | --- |
| OpenAPI-beskrivelse | Forteller hvilke operasjoner, parametere og svar API-et har |
| Auth / connection | Lar agenten koble seg til API-et på riktig måte |
| Beskrivelser | Hjelper modellen å forstå når verktøyet skal brukes |
| Tool / action / connector | Gjør API-et tilgjengelig som ferdighet i agenten |
| Visning | Kan vises som tekst eller Adaptive Card |

---

# Hva et API gjør i agentkontekst

Når agenten kaller et API:

1. Forespørselen sendes til backend
2. Backend validerer, henter data eller kjører logikk
3. Backend returnerer et strukturert svar
4. Agenten tolker resultatet og svarer brukeren

I praksis trenger agenten ikke bare tilgang til et API, men også en god beskrivelse av hva API-et gjør, hvordan input ser ut og hva som kommer tilbake.

---

# MCP: Model Context Protocol

MCP er et standardisert lag som gjør verktøy og kontekst tilgjengelig på en strukturert måte, slik at agenten kan oppdage, forstå og bruke dem.

MCP tilfører struktur, semantikk, oppdagbarhet og kontekstflyt rundt hvordan verktøy brukes.
Det flytter også kompleksitet fra agentprompt til et standardisert tjenestelag.

---

# Hva består MCP av, og hvordan fungerer det?

| Byggekloss | Rolle |
| --- | --- |
| MCP server | Eksponerer verktøy og kontekst |
| Tools | Konkrete operasjoner agenten kan bruke |
| Context | Gjør relevant kontekst tilgjengelig for agenten |
| Schema | Beskriver input, output og hensikt |
| Discovery | Lar agenten se hvilke verktøy som finnes |
| Execution | Kjøring mot underliggende systemer |

**Forenklet flyt:**

Agent → MCP → API / data / kontekst → MCP → Agent

---

# MCP i Azure: Logic Apps

| Mulighet | Hva det betyr |
| --- | --- |
| `Azure Logic Apps (Standard)` | Kan eksponere workflows som remote MCP-servere |
| `1400+ connectors` | Gjør det lett å lage tools mot SaaS, on-prem og Microsoft-tjenester |
| `Workflows som tools` | Et MCP-kall kan trigge en eksisterende arbeidsflyt |
| `Easy Auth / OAuth 2.0` | Gir innebygd auth for MCP-serveren |
| `Application Insights / Log Analytics` | Gir historikk, diagnostikk og sporbarhet |

Passer best når:

- du allerede har integrasjoner eller workflows i Logic Apps
- du vil lage MCP-tools raskt uten å bygge mye kode

---

# MCP i Azure: Azure Functions

| Mulighet | Hva det betyr |
| --- | --- |
| `Functions MCP extension` | Bygg MCP-server direkte med Functions-trigger/bindings-modellen |
| `Self-hosted MCP server` | Host en eksisterende MCP-server bygget med offisiell MCP SDK |
| `Built-in auth` | Beskytter serverendepunktet med innebygd autentisering |
| `Managed identity` | Godt spor for sikker tilgang til Azure-ressurser |
| `Serverless og skalerbar hosting` | Passer godt for kodebaserte og egendefinerte tools |

Passer best når:

- du vil bygge MCP i kode
- du trenger mer kontroll enn Logic Apps gir
- du allerede har en MCP-server du bare vil hoste i Azure

---
<!-- _class: action -->
### Eksempel
# Remote MCP mot SSB

- Et konkret eksempel er TRY sin MCP-server for SSB-data
- Bestill egen tilgang via `https://tools.try.no/ssb-mcp`
- I Agenten legger du inn:
  - `Server URL`: `https://tools.try.no/ssb-mcp/mcp`
  - `Authentication`: `API key`
  - `Type`: `Query`
  - `Parameter`: `key`
- Typiske tools: `ssb_search`, `ssb_table_metadata`, `ssb_get_data`

---

# API vs MCP

- API = "kall denne funksjonen"
- MCP = "her er verktøyene du kan bruke"

Eller:

- API gir tilgang til funksjoner
- MCP gjør verktøy og kontekst brukbare for agenten

---

# A2A: agent som verktøy

- Agent2Agent gjør det mulig å koble én agent til en annen via en standard protokoll
- I Microsoft Foundry er A2A en egen tool-type for å koble til andre agenter
- I Copilot Studio kan du koble til en ekstern agent via en A2A connection
- Bruk A2A når den andre agenten allerede har egen logikk, egne verktøy eller egne workflows
- Vi går dypere inn i multi-agent arkitektur i modul 6

---

# Skills

Skills (ferdigheter) er gjenbrukbare moduler som lærer agenten hvordan den bør løse en type oppgave, ikke bare hva den kan kalle.

En skill består typisk av:

- Instruksjoner for hvordan agenten skal løse en type oppgave
- Scripts eller kommandoer agenten kan bruke
- Ressurser og referansemateriale
- Strukturert metadata, ofte i en `SKILL.md` eller tilsvarende instruksjonsfil
- Eksempelrepo: `https://github.com/microsoft/skills`

En skill lærer agenten hvordan den bør jobbe, ikke bare hva den kan kalle.

---

# Eksempel på skill-tenkning

| Oppgave | Hva skillen gir agenten |
| --- | --- |
| Feilsøke en deployment | Vet hvilke logs, statuskommandoer og checks som bør kjøres |
| Gjennomgå en pull request | Følger en standard review-metode og sjekker risikoer |
| Lage et nytt API | Vet hvilke filer, maler og teststeg som normalt trengs |

---

# Tool, API, MCP og skill: hva er forskjellen?

| Begrep | Hva det er |
| --- | --- |
| Tool | Én konkret handling agenten kan utføre |
| API | Teknisk kontrakt til et system |
| MCP | Standardisert verktøylag for agenten |
| Skill | Arbeidsmåte, instruksjoner og støttemateriell for en oppgavetype |

---

<!-- _class: action -->

### Lab

# Vurder verktøyvalg

Ta utgangspunkt i en oppgave, prosess eller agentidé du kjenner.

| Behov | Valg | Hvorfor |
| --- | --- | --- |
| Hente data fra M365 |  |  |
| Koble til eksternt system |  |  |
| Orkestrere flere steg |  |  |
| Trenge full kontroll over logikk |  |  |
| Standardisere verktøy for flere agenter |  |  |

Velg mellom: innebygde verktøy, connectors, prosess, API, MCP, A2A eller skill.

---
<!-- _class: action -->

### Lab

# Beskriv ett valgt verktøy

| Del | Notater |
| --- | --- |
| Navn på verktøyet |  |
| Hva skal agenten bruke det til? |  |
| Hvilken input trenger verktøyet? |  |
| Hva skal komme tilbake? |  |
| Skal det være read eller write? |  |
| Hvem må ha tilgang eller godkjenne bruk? |  |

Diskuter: passer dette best som connector, prosess, API, MCP-tool, A2A eller skill?

---

# Hva har vi gått igjennom i denne modulen?

1. Forstår hvordan verktøy brukes i agenter på tvers av nivåer
2. Forstår forskjellen på verktøynivåer som connectors, prosess, API og MCP
3. Kan velge riktig verktøy eller mønster for en konkret agentløsning