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

# Modul 3 - Del 1

## Instruksjoner

---

# Hva er instruksjoner?

- Instruksjoner er rammene som styrer hvordan agenten forstår, beslutter og handler
- De definerer hva agenten skal gjøre, hva den ikke skal gjøre og hvordan den skal svare
- Gode instruksjoner gir mer forutsigbar og konsistent oppførsel

---

# Hva bør instruksjonen inneholde?

| Hva instruksjonen bør inneholde | Hvordan skrive den godt |
| --- | --- |
| Rolle og mål | Vær spesifikk og konkret |
| Oppgaver agenten løser | Prioriter det viktigste først |
| Kilder og verktøy den skal bruke, og når | Si når agenten skal bruke verktøy og når den skal la være |
| Hva den skal avvise, eskalere eller be om avklaring på | Definer handlingsrom og stoppkriterier |
| Hvordan svaret skal formateres | Beskriv formatet når det betyr noe |
| Eksempler på gode svar | Bruk 1–2 few-shot-eksempler når tone, struktur eller kvalitet er viktig |
| Rekkefølge hvis steg må tas i orden | Beskriv steg-for-steg når rekkefølge er viktig |

Bruk gjerne LLM-en til å hjelpe deg med å skrive og forbedre instruksjonen

---

# Eksempel: instruksjoner for pappavits-agenten

| Del | Eksempel |
| --- | --- |
| Rolle og mål | Du er Pappavits-agenten. Du skal underholde deltakerne med korte, trygge pappa-vitser på norsk bokmål. |
| Oppgaver | Lag én vits om gangen. Lag en ny når brukeren ber om det, og tilpass tema hvis brukeren ønsker det. |
| Kilder og verktøy | Ikke bruk eksterne kilder eller verktøy. Bruk kun instruksjonene og egne språkferdigheter. |
| Avvise / avklare | Avvis støtende, hatefulle eller seksuelle vitser. Be om avklaring hvis temaet er uklart. |
| Svarformat | Svar med 2–4 korte linjer. Gi først vitsen, deretter ett kort oppfølgingsspørsmål. |
| Few-shot-eksempel | Eksempel: "Hva sa den ene kaffeputen til den andre? Skal vi ta en kopp?" Følg samme enkle og trygge stil. |
| Handlingsrom / stopp | Hvis brukeren skriver "en til", lag én ny vits uten å stille flere spørsmål. Oppgaven er ferdig når én trygg vits er levert. |
| Rekkefølge | 1. Forstå tema 2. Lag vits 3. Sjekk at den er trygg 4. Lever svaret |

---

# Det som ofte mangler i instruksjoner

| Mangler ofte | Hvorfor det betyr noe |
| --- | --- |
| Handlingsrom | Agenten må vite når den skal handle selv og når den skal spørre |
| Verktøybruk | Tydelige kriterier gir færre unødvendige eller feil verktøykall |
| Stoppkriterier | Gjør det tydelig når oppgaven er ferdig og når den skal eskalere |
| Rekkefølge | Hvis steg må tas i riktig rekkefølge, bør instruksjonen si det eksplisitt |

---

<!-- _class: action -->

### Lab
# Skriv forslag til instruksjon for din agent

| Del | Notater |
| --- | --- |
| Rolle og mål |  |
| 2–3 oppgaver agenten skal løse |  |
| Hvilke kilder eller verktøy agenten kan bruke |  |
| Hva agenten ikke skal gjøre |  |
| Hvordan svaret skal se ut |  |
| Når agenten skal spørre om avklaring |  |

Tips:

- Bruk Copilot eller annen LLM til å hjelpe deg med å skrive instruksjonen
- Bruk en prompt optimizer eller iterer manuelt for å forbedre den
- Legg ved 1–2 gode eksempler hvis agenten skal svare i en bestemt stil eller struktur
