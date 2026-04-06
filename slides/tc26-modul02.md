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
# Modul 2
## Agentplattformer

---

# Microsoft-bygde agenter

| Agent | Kort forklart |
| --- | --- |
| `People (Frontier)` | Person- og organisasjonsagent i Microsoft 365 Copilot |
| `Workflows Agent (Frontier)` | Lager og kjører workflows med naturlig språk |
| `App Builder (Frontier)` | Lager lette, interaktive apper uten kode |
| `Cowork (Frontier)` | Utfører oppgaver på tvers av Microsoft 365 på dine vegne |
| `Planner (Frontier)` | Planner-agent i Copilot |
| `Learning (Frontier)` | Learning-agent i private preview |
| `Project Opal (Frontier)` | Oppgavebasert agent som kan jobbe asynkront via Cloud PC |

---

# Agentplattformer

- Samme agentidé kan bygges på flere måter, men plattformvalget påvirkes av utviklerkompetanse og krav til fleksibilitet
- Valg av plattform bestemmer hvilke data, verktøy, kanaler og sikkerhetsmekanismer som er tilgjengelige for agenten og sluttbrukeren

---

# Microsofts agentøkosystem

| Plattform | Hva den er | Når den passer |
| --- | --- | --- |
| Agent Builder i M365 Copilot | Deklarative agenter direkte i Microsoft 365 Copilot | Rask prototyping og personlig eller teamnær produktivitet |
| SharePoint agents | Agent bygget direkte over SharePoint-områder, biblioteker, mapper eller filer | Når agenten skal svare over et avgrenset dokumentsett i SharePoint eller Teams |
| Copilot Studio | Low-code og pro-code plattform for egne agenter | Du vil bygge en agent for team, prosess eller fagområde |
| Teams SDK | Kodebibliotek for samarbeidsagenter i Teams og Copilot | Når agenten skal jobbe i kanaler, møter eller annen gruppebasert samhandling |
| Microsoft 365 Agents SDK | Agentutvikling med kode for M365 Copilot, Teams, web og egne flater | Når du trenger å tilpasse agenten med egen kode, egne API-er m.m. |
| Microsoft AI Foundry Agent Service | Agenttjeneste i Azure med low-code og pro-code valg | Når du vil bygge, drifte, publisere og skalere i Azure |
| Microsoft Agent Framework (preview) | Rammeverk for orkestrering, workflows og multi-agent | Når flere spesialiserte agenter må samarbeide |

---

# Sammenligning av byggespor

| Egenskap | Copilot Studio | Teams SDK | Microsoft 365 Agents SDK | Foundry |
| --- | --- | --- | --- | --- |
| Tilnærming | Low-code | Pro-code | Pro-code | Low-code eller pro-code |
| Typisk verktøy | Copilot Studio UI | Visual Studio / VS Code | Visual Studio / VS Code + Agents Toolkit | Foundry portal eller Agents Toolkit |
| Publisering | Egen organisasjon | Organisasjon eller store (AppSource) | Organisasjon, store (AppSource) og flere kanaler | Organisasjon eller store (AppSource) |
| Kanaler | M365 Copilot, Teams, partnerapper, mobil og web | M365 Copilot og Teams | M365 Copilot, Teams, partnerapper, mobil og web | M365 Copilot og Teams |
| Orkestrering (planlegging) | Copilot Studio | Innebygd action planner | Du tar med egen orkestrering | Du tar med egen orkestrering |
| Modeller | Copilot Studio-modeller | Valgfrie modeller | Valgfrie modeller | Azure OpenAI (Foundry) eller egne modeller |
| Språk | PowerFX, YAML | C#, TypeScript, JavaScript, Python | C#, JavaScript, Python | Python og C# |

---

# Når du er i tvil om plattformvalg

![bg right:50% contain](../assets/tc01-ecosystem.jpg)

- Prøv `Agent Platform Advisor`
- Den hjelper deg å velge mellom Microsofts agentplattformer ut fra scenario og krav
- Lenke: `https://microsoft.github.io/cat/agent-platform-advisor/index.html`

---

# Tre raske innganger i Microsoft 365

|  | Agent Builder i M365 Copilot | SharePoint agents | Copilot Studio |
| --- | --- | --- | --- |
| Hvem det er for | Sluttbrukere og superbrukere | Innholdseiere og fagmiljøer | Makers, konsulenter og utviklere |
| Hvor du bygger | Inne i Microsoft 365 Copilot | Fra et SharePoint-område, bibliotek, mappe eller filsett | Egen byggeflate |
| Typisk bruk | En enkel deklarativ agent for en rolle eller et team | En agent over et konkret dokumentsett eller prosjektrom | En agent med egne kanaler, verktøy, kunnskap og styring |
| Styrke | Lav terskel og rask oppstart | Kort vei fra innhold til nyttig agent | Mer kontroll og flere utvidelsesmuligheter |

---

# Tre byggevalg med mer kontroll

|  | Microsoft 365 Agents SDK | Microsoft AI Foundry Agent Service | Microsoft Agent Framework (preview) |
| --- | --- | --- | --- |
| Primært fokus | Bygge agent-apper for M365 Copilot, Teams, web og egne flater | Bygge, kjøre, drifte og publisere agenter i Azure | Orkestrere agenter, verktøy og workflows i kode |
| Velg dette når | Kanal og brukeropplevelse på tvers av flater er viktigst | Managed runtime, sikkerhet, verktøy og observability er viktigst | Flere agenter må samarbeide eller følge en tydelig flyt |
| Du eier selv | Appkode, integrasjoner og kanalopplevelse | Agentlogikk, konfigurasjon og Azure-oppsett | Orkestreringslogikk og hvordan agentene samarbeider |
| Typisk styrke | Tett på Teams og Copilot | RBAC, tracing, verktøy, publisering og skalering | Multi-agent, state, human-in-the-loop og eksplisitte workflows |
| Typisk tradeoff | Mer ansvar for app og integrasjoner | Tettere kobling til Azure-plattformen | Ikke en ferdig kanalflate eller driftstjeneste alene |

---

# Hva er en custom engine agent?

![bg right:50% contain](../assets/agents-system-cea.png)

- Mer fleksibel enn en ren deklarativ agent
- Du styrer orkestrering (planlegging), modellvalg og integrasjoner eksplisitt
- Kan bygges low-code i `Copilot Studio` (custom engine)
- Kan bygges pro-code med `Teams SDK`, `Microsoft 365 Agents SDK` eller `Microsoft AI Foundry`-agenter integrert i Microsoft 365
- Godt valg når standard Copilot-opplevelser ikke er nok, eller når du trenger mer avansert arbeidsflyt og proaktiv automasjon

---

<!-- _class: action -->

### Demo – fra idé til første agent (5 min)
# Vår første agent: Pappavits-agenten

| Punkt | Første versjon |
| --- | --- |
| Målgruppe | Deltakere på TechnoCamp |
| Oppgave | Generere korte pappa-vitser på norsk |
| Input | Enkelt prompt (f.eks. tema eller tilfeldig) |
| Output | 1–3 korte vitser (maks 2 linjer per vits) |
| Verdi | Rask, enkel og underholdende opplevelse som viser agentflyt |

- Opprett agent i valgt plattform (f.eks. Copilot Studio)
- Legg inn instruksjon/prompt (rolle + stil)
- Test i chat (iterer raskt på prompt)
- Publiser til Teams eller Copilot

---

# Hva har vi gått igjennom i denne modulen?

1. Kan forklare forskjellen på plattformene i Microsoft-økosystemet
2. Kan velge en byggeflate basert på behov og krav
3. Har opprettet og testet en enkel agent (Pappavits-agenten)

---

![Implementering](../assets/tc02-implementation.jpg)