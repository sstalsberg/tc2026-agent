---
marp: true
theme: gaia
paginate: true
size: 16:9
title: Bygg din egen AI-agent
description: Teknocamp 2026 - 2-dagers hands-on workshop
style: |
  :root {
    --tc-ink: #16313b;
    --tc-muted: #4f6870;
    --tc-accent: #0e8b7f;
    --tc-accent-soft: #dff3ee;
    --tc-bg: #f7f5ef;
    --tc-line: #bfd7d1;
    --tc-dark: #10242c;
  }

  section {
    font-size: 28px;
    font-family: "Aptos", "Segoe UI", "Helvetica Neue", sans-serif;
    color: var(--tc-ink);
    background:
      radial-gradient(circle at top right, rgba(14, 139, 127, 0.08), transparent 26%),
      linear-gradient(180deg, #fbfaf6 0%, var(--tc-bg) 100%);
    padding: 64px 74px 56px;
  }

  section.lead {
    text-align: center;
    color: #f6fbfa;
    background:
      radial-gradient(circle at top left, rgba(126, 232, 209, 0.15), transparent 22%),
      radial-gradient(circle at bottom right, rgba(14, 139, 127, 0.28), transparent 28%),
      linear-gradient(145deg, #10242c 0%, #173b45 45%, #0f6f68 100%);
  }

  h1,
  h2,
  h3 {
    font-family: "Aptos Display", "Segoe UI", "Helvetica Neue", sans-serif;
    color: var(--tc-ink);
    letter-spacing: -0.02em;
    margin-bottom: 0.35em;
  }

  section.lead h1,
  section.lead h2,
  section.lead h3 {
    color: #f6fbfa;
  }

  h1 {
    font-size: 1.5em;
    padding-bottom: 0.18em;
    border-bottom: 5px solid var(--tc-accent);
    display: inline-block;
  }

  section.lead h1 {
    border-bottom-color: rgba(246, 251, 250, 0.9);
  }

  p,
  li {
    color: var(--tc-ink);
    line-height: 1.35;
  }

  strong {
    color: #0c5e59;
  }

  ul,
  ol {
    padding-left: 1.1em;
  }

  table {
    font-size: 0.72em;
    border-collapse: collapse;
    margin-top: 0.6em;
    width: 100%;
  }

  th {
    background: var(--tc-dark);
    color: #f6fbfa;
    border: 1px solid var(--tc-dark);
    font-weight: 700;
  }

  td {
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid var(--tc-line);
  }

  th,
  td {
    padding: 10px 12px;
    vertical-align: top;
  }

  section::after {
    font-size: 0.48em;
    color: var(--tc-muted);
    font-weight: 700;
  }

  code {
    background: rgba(16, 36, 44, 0.08);
    color: #0b5a55;
    border-radius: 6px;
    padding: 0.08em 0.28em;
  }

  hr {
    border: 0;
    height: 2px;
    background: var(--tc-line);
  }
---

<!-- _class: lead -->
# Modul 3 - del 3
## Verktøy i agenter
### Fra innebygde verktøy til MCP og skills

---

# Hva mener vi med verktøy?

- Et verktøy er agentens evne til å hente data eller utføre handlinger

---

# Oversikt over forskjellige type verktøy

| Nivå | Rolle |
| --- | --- |
| Innebygde verktøy | Bruke det plattformen allerede har |
| Connectors | Koble på flere systemer |
| Prosess | Kjøre flere steg på tvers av systemer |
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

Dette er grounding via Microsoft 365-plattformen, ikke et direkte API-kall fra agenten på samme måte som i en vanlig integrasjon.

---

# Variabler

Variabler brukes til å:

- huske svar brukeren allerede har gitt
- sende kontekst videre til flows, actions og andre topics

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

- Prompt-verktøyet utfører én spesifikk AI-oppgave

Tilsvarende mønster finnes også i Foundry og kodeagenter: en prompt-basert action med tydelig input og output.

---

# Computer Use / GUI-automatisering

I Copilot Studio er `Computer Use` en funksjonalitet som lar agenten bruke et nettsted eller en desktop-app med virtuell mus og tastatur.

- Verktøyet bruker syn + resonnering for å tolke skjermen og velge neste steg
- Passer best når en tjeneste mangler API eller annen form for connector
- Mye tregere enn API-integrasjon, så bør brukes når ingen andre alternativer ikke er tilgjengelige

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

---

# Hvordan agenten bruker prosess

To vanlige mønstre:

1. Brukerinitiert
2. Hendelsesdrevet

Flyt:
Brukerinitiert: Agent → Prosess → Systemer → Prosess → Agent
Hendelsesdrevet: Hendelse → Prosess → Systemer → Prosess → Agent

Viktig skille:

- Agenten resonnerer og velger
- Flowen utfører og standardiserer

---

# Prosess: styrker, begrensninger og når det passer

| Styrker | Begrensninger | Bruk når |
| --- | --- | --- |
| Orkestrerer flere systemer i én operasjon | Kan oppleves tregt i chat | Prosessen er definert |
| Standardiserer samme prosess hver gang | Dårlig egnet for avansert dynamisk resonnering | Stegene er kjent på forhånd |
| Kan trigges av bruker, tidsplan eller hendelse | Krever god styring av auth, logging og feil | Flere systemer må oppdateres eller følges opp automatisk |

---

# API som verktøy

Et API er en kontrollert inngang til et system.

| Byggekloss | Hva det betyr |
| --- | --- |
| Endpoint | URL til en funksjon eller ressurs |
| Metode | GET, POST, PUT, PATCH eller DELETE |
| Input | Data du sender inn, ofte JSON |
| Output | Strukturert svar tilbake |
| Auth | Hvem du er og hva du har lov til å gjøre |
| Schema | Tydelig kontrakt, ofte OpenAPI eller JSON schema |

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

MCP tilfører struktur, semantikk, oppdagbarhet og kontekstflyt rundt verktøybruken.
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

Flyt:

Agent → MCP → API / data / kontekst → MCP → Agent

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

En skill lærer agenten hvordan den bør jobbe, ikke bare hva den kan kalle.

---

# Tool, API, MCP og skill: hva er forskjellen?

| Begrep | Hva det er |
| --- | --- |
| Tool | Én konkret handling agenten kan utføre |
| API | Teknisk kontrakt til et system |
| MCP | Standardisert verktøylag for agenten |
| Skill | Arbeidsmåte, instruksjoner og støttemateriell for en oppgavetype |

---

# Eksempel på skill-tenkning

| Oppgave | Hva skillen gir agenten |
| --- | --- |
| Feilsøke en deployment | Vet hvilke logs, statuskommandoer og checks som bør kjøres |
| Gjennomgå en pull request | Følger en standard review-metode og sjekker risikoer |
| Lage et nytt API | Vet hvilke filer, maler og teststeg som normalt trengs |

---

# Laboppgave: Vurder verktøyvalg

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

# Laboppgave: Beskriv ett valgt verktøy

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

1. Skriver tydeligere instruksjoner med rolle, mål, handlingsrom, stoppkriterier og svarformat
2. Forstår hvordan kunnskap, kontekst, grounding og RAG påvirker kvaliteten på agentsvar
3. Skiller mellom verktøynivåer som innebygde verktøy, connectors, prosess, API, MCP, A2A og skills
