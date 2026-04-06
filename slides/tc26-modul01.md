---
marp: false
theme: default
paginate: true
size: 16:9
title: Bygg din egen AI-agent
description: TechnoCamp 2026 - Modul 1 tech light variant
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
![bg right:28% contain](../assets/agent-camp-banner.png)

# Bygg din egen AI-agent

## TechnoCamp 2026

---

<!-- _class: divider -->
# Modul 1
## Introduksjon til AI-agenter

---

# Hva er en AI-agent?

![bg right:50% contain](../assets/tc01-agent.png)

En AI-agent er et intelligent program som bruker en eller flere språkmodeller til å forstå kontekst, ta beslutninger og utføre handlinger ved hjelp av verktøy for en bruker eller et system.

---

# Hva består en agent av?

| Nøkkeldel | Rolle |
| --- | --- |
| Språkmodell | Forstår språk, resonnerer og svarer |
| Instruksjoner | Setter rolle, grenser og prioriteringer |
| Kunnskap | Gir tilgang til dokumenter, data og kontekst |
| Verktøy | Lar agenten gjøre noe i systemer og API-er |
| Minne / state | Husker kontekst og tidligere interaksjoner |
| Orkestrering (Planlegging) | Velger neste steg og rekkefølge |
| Trigger | Starter fra brukerinput eller en hendelse (event) |

Ikke alle agenter bruker eller trenger å bruke alle delene.

---

![bg contain](../assets/agents-system-cea.png)

---

# Agenttyper med eksempler

![bg right:50% contain](../assets/tc01-spectrum.jpg)

| Type | Hva den gjør | Eksempel |
| --- | --- | --- |
| Retrieval | Leser og svarer over egne data | FAQ-agent over SharePoint-dokumenter |
| Task / Action | Utfører handlinger i systemer | Bestillingsagent som mottar og oppretter ordre i et CRM-system |
| Orkestrator | Planlegger og kombinerer flere steg | Fakturaagent som overvåker innboks og bokfører |

---

# Når passer en agent godt?

| Når det passer godt | Når det ikke passer |
| --- | --- |
| Variabelt eller uklart behov | Helt faste regler og skjemaer |
| Kombinasjon av kunnskap og handling | Krav om deterministisk og 100 % korrekt resultat (f.eks. finansielle beregninger) |
| Flere steg før svar eller utførelse | Irreversible handlinger uten godkjenning |
| Dialog, oppfølging og kontekst | Dårlige eller motstridende datakilder |

---

<!-- _class: action -->
# Hvorfor satse på AI-agenter?

Estimert 1,3 milliarder AI-agenter innen 2028 (IDC)

- **Produktivitet:** mindre manuelt arbeid og raskere oppfølging
- **Kvalitet:** mer konsistente svar og færre feil
- **Compliance:** bedre sporbarhet, logging og tilgangsstyring
- **Skalering:** samme mønster kan brukes på tvers av team og prosesser

For Atea betyr dette både interne gevinster og nye leveranser til kunder.

---

# Tre skift i måten vi jobber på

- AI-assistenten blir et nytt grensesnitt for arbeid
- Agenter orkestrerer flere steg og handlinger
- Et lag av AI kobler sammen dokumenter, møter, chat og forretningsdata

Verdien flytter seg fra å lete i systemer til å få svar og utført oppgaver direkte i arbeidsflyten.

---

# Hvordan Microsoft tenker virksomheter tar i bruk agenter

**Tre kilder til agenter**

- Microsoft-agenter
- Partneragenter (ServiceNow, SAP, Salesforce, etc.)
- Egne agenter bygget av virksomheten på egne eller tredjeparts plattformer

---

<!-- _class: action -->

### Diskusjon

- Hvilken oppgave gjør du i dag som en agent kunne løst 80 % av?
- Hva er den største risikoen ved å la en agent handle autonomt i din virksomhet?
- Copilot Studio vs. å kode selv: hva foretrekker du, og hvorfor?
- Er 1,3 milliarder innen 2028 noe du tror skjer og hvilke muligheter, utfordringer, trusseler skaper det for IT-bransjen?

---

# Noen forslag til agentideer

| Idé | Typisk verdi | Mulig plattform |
| --- | --- | --- |
| Tilbudsassistent | Raskere tilbudsarbeid | Copilot Studio |
| Onboarding-guide | Raskere svar til nyansatte | Copilot Studio |
| Driftsvarsel-agent | Raskere oppfølging av hendelser | Microsoft AI Foundry |
| Kompetanseassistent | Finne riktig konsulent raskere | Copilot Studio |
| Møteforbereder | Bedre forberedte kundemøter | Microsoft 365 Agents SDK |
| Teknisk FAQ-bot | Skalerbar kunnskapsdeling | Copilot Studio |

---

<!-- _class: action -->

### Lab

# Beskriv din første agentidé

| Punkt | Notater |
| --- | --- |
| Navn på agenten |  |
| Hvem skal bruke den? |  |
| Primær oppgave – hvilken konkret handling eller verdi skal agenten levere? |  |
| Forretningsverdi |  |

**Gruppen gir tilbakemelding på hver idé:**

- Er problemet agenten skal løse tydelig?
- Er agentens målgruppe definert?

---

# Hva har vi gått igjennom i denne modulen?

1. Kan forklare hva en AI-agent er og hvilke deler den består av
2. Skiller mellom ulike agenttyper og når de passer godt
3. Beskriver en første agentidé med målgruppe, oppgave og verdi