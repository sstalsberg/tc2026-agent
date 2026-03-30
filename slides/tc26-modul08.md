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
# Modul 8
## Avslutning
## oppsummering og deling

---

# Hva har vi gått gjennom?

| Modul | Hovedtema | Kjerneinnsikt |
| --- | --- | --- |
| 1 | Introduksjon til AI-agenter | En agent er mer enn en chatbot |
| 2 | Kom i gang med en agent | Plattformvalg betyr noe |
| 3 | Instruksjoner, kunnskap og verktøy | Det er disse tre lagene som gjør agenten nyttig |
| 4 | Under panseret på en LLM | Kvalitet avhenger av input, modellvalg og kontekst |
| 5 | Kodeagenter *(ekstern økt)* | De samme agentmønstrene brukes også i kode og utviklerflyt |
| 6 | Agentarkitektur og multi-agent | Start enkelt, men vit når du bør splitte |
| 7 | Governance, evaluering og publisering | En agent må styres som en virksomhetsløsning |

---

# Den røde tråden i workshopen

1. Finn en god oppgave for en agent
2. Velg riktig plattform og byggespor
3. Skriv gode instruksjoner
4. Koble på riktig kunnskap og riktige verktøy
5. Velg modell og modalitet bevisst
6. Design arkitektur, styring og drift for videre bruk

---

# Deling og demo

Hva har dere laget i løpet av workshopen?

- en agentidé
- en prototype
- en instruksjon
- en kunnskapsskisse
- et verktøydesign
- en agentarkitektur

---

# Forslag til demoformat

1. Hva bygde du?
2. Hvem er agenten for?
3. Hva er én ting agenten gjør bra?
4. Hva er én ting du ville forbedret videre?

Alternativ:

| Punkt | Hva du kan si |
| --- | --- |
| Problem | Hvilket behov prøver agenten å løse? |
| Målgruppe | Hvem skal bruke den? |
| Løsning | Hvordan har du tenkt agenten? |
| Viktigste valg | Modell, kunnskap, verktøy eller arkitektur |
| Læring | Hva fungerte? Hva var vanskelig? |
| Neste steg | Hva ville du gjort med mer tid? |

---

# Refleksjon etter demoene

| Refleksjonsspørsmål | Notater |
| --- | --- |
| Hvilke mønstre gikk igjen i flere løsninger? | |
| Hvor slet flest? | |
| Hvilke agenttyper så vi flest av? | |
| Hva overrasket dere mest? | |

---

# Avsluttende runde

Velg én av disse:

- Hva er det viktigste du tar med deg?
- Hva vil du teste videre først?

---

# Oppsummering

Hele workshopen har i praksis handlet om dette:

1. Finne en god oppgave for en agent
2. Bygge opp agenten med riktige instruksjoner, kunnskapskilder og verktøy
3. Forstå modellvalg, arkitektur og drift godt nok til å gjøre bevisste valg
