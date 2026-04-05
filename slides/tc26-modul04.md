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

Praktisk huskeregel:

- Juster disse først når du faktisk ser repetisjon eller monotone svar
- Mer kontekst er ikke alltid bedre: lengre historikk kan koste mer og gi tregere eller svakere svar

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

# Multimodalitet: hva betyr det?

En multimodal modell kan bruke flere typer input i samme kall.

Vanlige modaliteter:

- Tekst
- Bilder
- Dokumenter med layout og tekst
- Lyd eller tale
- Skjermbilder eller UI-bilder

---

# Begrensninger du må kjenne til

| Risiko | Konsekvens |
| --- | --- |
| Modellen kan hallusinere | Den svarer sikkert selv når grunnlaget er svakt |
| For mye kontekst | Viktig informasjon kan drukne |
| Feil modellvalg | Du betaler mer eller får dårligere kvalitet enn nødvendig |
| Multimodal input koster | Bilder og dokumenter kan bruke mange tokens |
| Sikkerhet og personvern | Bilder, lyd og dokumenter kan inneholde sensitiv informasjon |

---

# Laboppgave: Velg modell og modalitet

| Spørsmål | Notater |
| --- | --- |
| Hvilken oppgave skal agenten løse? | |
| Trenger oppgaven mest språk, resonnering eller fart? | |
| Trenger agenten tekst, bilder, dokumenter eller lyd? | |
| Hvor viktig er lav kostnad i produksjon? | |
| Hva er et godt første modellvalg? | |

Diskuter også:

- Hva ville fått deg til å bytte modell senere?

---

# Hva har vi gått igjennom i denne modulen?

1. Hvordan en språkmodell bygger svar fra instruksjoner, kontekst og tokens
2. Hvordan modellvalg påvirker kvalitet, kostnad og responstid
3. Når multimodalitet gir verdi, og når ren tekst er nok
