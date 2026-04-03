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
# Bygg din egen AI-agent
## TechnoCamp 2026

---

<!-- _class: lead -->
# Modul 1
## Introduksjon til AI-agenter

---

# Hva er en AI-agent?

En AI-agent er et intelligent program som bruker en eller flere språkmodeller til å forstå behov, resonnere og utføre oppgaver for en bruker eller et system.

---

# Hva består en agent av?

| Byggekloss | Rolle |
| --- | --- |
| Språkmodell | Forstår språk, resonnerer og svarer |
| Instruksjoner | Setter rolle, grenser og prioriteringer |
| Kunnskap | Gir tilgang til dokumenter, data og kontekst |
| Verktøy | Lar agenten gjøre noe i systemer og API-er |
| Orkestrering | Velger neste steg og rekkefølge |
| Trigger | Starter fra brukerinput eller en hendelse |

Ikke alle agenter trenger å bruke alle delene.

---

![Agentflyt](../assets/tc01-agent.png)

---

# Tre agenttyper

| Type | Hva den gjør | Eksempel |
| --- | --- | --- |
| Retrieval | Søker og svarer over egne data | FAQ-agent over SharePoint-dokumenter |
| Task | Skriver til backend, bruker APIer | Bestillingsagent som oppretter ordre i et CRM-system |
| Autonomous | Jobber mot mål, instruksjoner, verktøy og triggere | Fakturaagent som overvåker innboks og bokfører |

---

![Agenttyper](../assets/tc01-spectrum.jpg)

---



# Når passer en agent godt?

| Passer godt | Passer dårlig |
| --- | --- |
| Variabelt eller uklart behov | Helt faste regler og skjemaer |
| Kombinasjon av kunnskap og handling | Krav om høy presisjon uten rom for tolkning |
| Flere steg før svar eller utførelse | Irreversible handlinger uten godkjenning |
| Dialog, oppfølging og kontekst | Dårlige eller motstridende datakilder |

---

# Hvorfor satse på AI-agenter?

**1,3 milliarder AI-agenter innen 2028 (IDC)**

**Verdi**
- Produktivitet og lavere kostnad
- Bedre kvalitet og nøyaktighet
- Compliance og sikkerhet
- Skalering på tvers av team og prosesser

For Atea betyr dette både intern bruk og nye leveranser til kunder.

---

# Hvordan Microsoft tenker virksomheter tar i bruk agenter

**Tre kilder til agenter**
- Microsoft-agenter
- Partneragenter (ServiceNow, SAP, Salesforce, etc.)
- Egne agenter bygget av virksomheten på andre plattformer

---

# Diskusjon i grupper

- Hvilken jobb gjør du i dag som en agent kunne gjort 80 % av?
- Hva er den største risikoen ved å la en agent handle autonomt i din virksomhet?
- Copilot Studio vs. å kode selv: hva foretrekker du, og hvorfor?
- Er 1,3 milliarder innen 2028 noe du tror skjer og hvilke muligheter, utfordringer, trusseler skaper det for IT-bransjen?

---

# Noen forslag til agentideer

| Idé | Typisk verdi | Mulig plattform |
| --- | --- | --- |
| Tilbudsassistent | Raskere tilbudsarbeid | Copilot Studio |
| Onboarding-guide | Raskere svar til nyansatte | Copilot Studio |
| Driftsvarsel-agent | Raskere oppfølging av hendelser | Microsoft Foundry |
| Kompetanseassistent | Finne riktig konsulent raskere | Copilot Studio |
| Møteforbereder | Bedre forberedte kundemøter | Microsoft 365 Agents SDK |
| Teknisk FAQ-bot | Skalerbar kunnskapsdeling | Copilot Studio |

---

# Laboppgave: Beskriv agentideen din

| Punkt | Notater |
| --- | --- |
| Navn på agenten |  |
| Hvem skal bruke den? |  |
| Primær oppgave - hva skal agenten gjøre? |  |
| Forretningsverdi |  |

### Gruppen gir tilbakemelding på hver idé:

- Er problemet agenten skal løse tydelig?
- Er agentens målgruppe definert?

2-3 frivillige deler agentideen sin i plenum.

---

# Hva har vi gått igjennom i denne modulen?

1. Forstår hva en AI-agent er og hva den består av
2. Skiller mellom ulike agenttyper og når de passer godt
3. Beskriver en første agentidé med målgruppe, oppgave og verdi
