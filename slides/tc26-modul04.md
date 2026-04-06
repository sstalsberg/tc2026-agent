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
# Modul 4
## Under panseret på en LLM
### Modellvalg, kontekst og multimodalitet

---

# Hva skjer når en LLM svarer?

1. Agenten samler input
2. Instruksjoner, kontekst og eventuelle verktøyresultater bygges inn i prompten
3. Innholdet deles opp i tokens
4. Modellen predikerer neste token steg for steg
5. Svaret returneres, og kan eventuelt trigge verktøy eller nye steg

En språkmodell "slår ikke opp et fasitsvar".
Den genererer et sannsynlig neste steg basert på inputen den får.

---

# Hva består inputen til modellen av?

| Del | Rolle |
| --- | --- |
| Instruksjoner | Forteller hvordan modellen skal oppføre seg |
| Brukerforespørsel | Det brukeren faktisk ber om |
| Kunnskap / grounding | Relevante dokumenter, data eller kontekst |
| Verktøyresultater | Strukturert informasjon fra API-er, flows eller andre agenter |
| Samtalehistorikk | Tidligere meldinger som fortsatt er relevante |

---

# Tokens og kontekstvindu

| Begrep | Hva det betyr |
| --- | --- |
| Token | Små biter av tekst eller bildeinput som modellen behandler |
| Kontekstvindu | Hvor mye input og historikk modellen kan ha med samtidig |
| Input tokens | Alt du sender inn |
| Output tokens | Svaret modellen genererer |

Konsekvens:

- Flere tokens gir ofte høyere kostnad og mer ventetid
- For mye kontekst kan gjøre svaret tregere eller mindre presist
- Bildedata bruker også tokens i multimodale modeller

---

# Temperatur og top-p

| Innstilling | Hva den styrer | Typisk bruk |
| --- | --- | --- |
| Temperatur | Hvor variert eller kreativ modellen er | Lav for fakta, verktøy og stabile svar |
| Top-p | Hvor bredt sett av sannsynlige tokens modellen velger fra | Finjustering av variasjon og kontroll |

Praktisk huskeregel:

- Start lavt når agenten skal være presis og forutsigbar
- Øk bare når oppgaven faktisk trenger mer variasjon eller kreativitet

---

# Flere innstillinger som påvirker svar

| Innstilling | Hva den gjør | Vær obs på |
| --- | --- | --- |
| Repetition penalty | Demper gjentakelser og looper | For høy verdi kan gjøre teksten unaturlig |
| Presence penalty | Oppmuntrer modellen til å introdusere nye ord eller tema | Kan gjøre svaret mer utforskende enn ønsket |
| Frequency penalty | Demper ord som allerede er brukt mange ganger | Kan gi bedre variasjon, men også mindre flyt |

---

# Modelltyper du typisk velger mellom

| Modelltype | Styrke | Typisk bruk |
| --- | --- | --- |
| Generalistmodell | Balanse mellom språk, verktøy og hastighet | Standard chat, oppslag, arbeidsflyt |
| Reasoning-modell | Bedre på flertrinns logikk og vanskelige problemer | Analyse, planlegging, kode, matte |
| Small language model | Lavere kostnad og raskere respons | Enkle oppgaver, høy trafikk, edge |
| Multimodal modell | Kan forstå tekst og bilder sammen | Skjemaer, skjermbilder, dokumenter, inspeksjon |

---

# Hvordan velge riktig modell?

| Hvis du trenger mest | Prioriter |
| --- | --- |
| Lav ventetid og lav kostnad | Mindre modell eller mini-variant |
| Høy kvalitet på vanskelige oppgaver | Reasoning-modell |
| Bilde + tekst i samme oppgave | Multimodal modell |
| Lange dokumenter eller mye historikk | Modell med stort kontekstvindu |
| Produksjon i stor skala | Stabil modell med god pris/ytelse |

---

# Begrensninger du bør kjenne til

| Risiko | Konsekvens |
| --- | --- |
| Modellen kan hallusinere | Den svarer sikkert selv når grunnlaget er svakt |
| For mye kontekst | Viktig informasjon kan drukne |
| Feil modellvalg | Du betaler mer eller får dårligere kvalitet enn nødvendig |
| Multimodal input koster | Bilder og dokumenter kan bruke mange tokens |
| Sikkerhet og personvern | Bilder, lyd og dokumenter kan inneholde sensitiv informasjon |

---
<!-- _class: action -->

# Laboppgave: Velg modell og modalitet

| Spørsmål | Notater |
| --- | --- |
| Hvilken oppgave skal agenten løse? | |
| Trenger oppgaven mest språk, resonnering eller fart? | |
| Trenger agenten tekst, bilder, dokumenter eller lyd? | |
| Hvor viktig er lav kostnad i produksjon? | |
| Hva er et godt første modellvalg? | |

---

# Hva har vi gått igjennom i denne modulen?

1. Hvordan en språkmodell bygger svar fra instruksjoner, kontekst og tokens
2. Hvordan modellvalg påvirker kvalitet, kostnad og responstid
3. Når multimodalitet gir verdi, og når ren tekst er nok
