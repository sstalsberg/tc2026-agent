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

# Modul 3 - Del 1

## Instruksjoner

---

# Hva er instruksjoner?

- Instruksjoner er rammene agenten jobber innenfor
- De forteller agenten hva den skal gjøre, hva den ikke skal gjøre og hvordan den skal svare
- Gode instruksjoner gir mer forutsigbar oppførsel

---

# Hva bør instruksjonen inneholde?

| Hva instruksjonen bør inneholde | Hvordan skrive den godt |
| --- | --- |
| Rolle og mål | Vær spesifikk og konkret |
| Oppgaver agenten løser | Prioriter det viktigste først |
| Kilder og verktøy den skal bruke, og når | Si når agenten skal bruke verktøy og når den skal la være |
| Hva den skal avvise, eskalere eller be om avklaring på | Definer handlingsrom og stoppkriterier |
| Hvordan svaret skal formateres | Gi tydelig format når det faktisk betyr noe |
| Eksempler på gode svar | Bruk 1-2 few-shot-eksempler når tone, struktur eller kvalitet er viktig |
| Rekkefølge hvis steg må tas i orden |  Test steg for steg |

---

# Det som ofte mangler i instruksjoner

| Mangler ofte | Hvorfor det betyr noe |
| --- | --- |
| Handlingsrom | Agenten må vite når den skal handle selv og når den skal spørre |
| Verktøybruk | Tydelige kriterier gir færre unødvendige bruk eller feil verktøykall |
| Stoppkriterier | Gjør det tydelig når oppgaven er ferdig og når den skal eskalere |
| Rekkefølge | Hvis steg må tas i riktig rekkefølge, bør instruksjonen si det eksplisitt |

---

# Eksempel: instruksjoner for pappavits-agenten

| Del | Eksempel |
| --- | --- |
| Rolle og mål | Du er Pappavits-agenten. Du skal underholde deltakerne med korte, trygge pappa-vitser på norsk bokmål. |
| Oppgaver | Lag én vits om gangen, lag en ny når brukeren ber om det, og tilpass tema hvis brukeren ønsker det. |
| Kilder og verktøy | Bruk ikke eksterne kilder eller verktøy. Bruk bare instruksjonene og egne språkferdigheter. |
| Avvise / avklare | Avvis støtende, hatefulle eller seksuelle vitser. Be om avklaring hvis temaet er uklart. |
| Svarformat | Svar med 2-4 korte linjer. Gi først vitsen, deretter ett kort oppfølgingsspørsmål. |
| Few-shot-eksempel | Eksempel: "Hva sa den ene kaffeputen til den andre? Skal vi ta en kopp?" Følg samme enkle og trygge stil. |
| Handlingsrom / stopp | Hvis brukeren skriver "en til", lag én ny vits uten å spørre mer. Oppgaven er ferdig når én trygg vits er levert. |
| Rekkefølge | 1. Forstå tema 2. Lag vits 3. Sjekk at den er trygg 4. Lever svaret |

---

# Laboppgave: Skriv forslag til instruksjon for din agent

| Del | Notater |
| --- | --- |
| Rolle og mål |  |
| 2-3 oppgaver agenten skal løse |  |
| Hvilke kilder eller verktøy agenten kan bruke |  |
| Hva agenten ikke skal gjøre |  |
| Hvordan svaret skal se ut |  |
| Når agenten skal spørre om avklaring |  |

Tips:

- Bruk Copilot til å hjelpe deg med å skrive instruksjonen
- Bruk en prompt optimizer til å forbedre den
- Legg ved 1-2 gode eksempler hvis agenten skal svare i en bestemt stil eller struktur
