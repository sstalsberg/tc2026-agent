---
marp: true
theme: gaia
paginate: true
size: 16:9
title: Addendum Modul 7
description: Governance, evaluering og publisering - operativ utvidelse
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
# Modul 7 - Addendum
## Fra governance-prinsipp til operativ kvalitet

---

# Kvalitetsutfordringen i én slide

| Problem | Løsning | Verdi |
| --- | --- | --- |
| Agenten "virker" i test, men er ikke robust i praksis | Kjør strukturert review med score, funn og anbefaling | Raskere forbedring og tryggere produksjonssetting |
| Kvalitet sitter i hodet til enkeltpersoner | Standardiser vurderingskriterier og dokumentasjon | Konsistent kvalitet på tvers av team |
| Uklart hva som må forbedres først | Prioriter "high impact"-funn først | Bedre effekt av innsats og tid |

---

# Review-flyt i 5 steg

1. **Velg agent** (fra miljø eller opplastet løsning)
2. **Kjør analyse** (topic, instruksjoner, struktur, test-signaler)
3. **Prioriter funn** (start med høy alvorlighet)
4. **Forbedre agenten** (navn, beskrivelser, scope, instruksjoner)
5. **Re-kjør review** og dokumenter forbedring i score

Tips: bruk PDF-eksport for å dele funn med maker-teamet.

---

# Score-tolkning og release-gate (forslag)

| Score | Tolkning | Tiltak |
| --- | --- | --- |
| 0-59 | Ikke klar | Stopp release. Gjør strukturelle forbedringer. |
| 60-79 | Delvis klar | Forbedre toppfunn og re-test før bred deling. |
| 80-100 | Klar kandidat | Kan gå til pilot/produksjon med normal oppfølging. |

Forslag: Definer en lokal kvalitetsterskel per miljø (dev/test/prod).

---

# Copilot Studio vs. M365 deklarativ agent

| Område | Copilot Studio-agent | M365 deklarativ agent |
| --- | --- | --- |
| Fokus i review | Instruksjoner + topics + variabler + struktur | Primært instruksjonskvalitet og manifestkvalitet |
| Typiske funn | Uklare topic-navn, overlapp, routing-gap, tool-omfang | Svak markdown-struktur, for få conversation starters |
| Bruksscenario | Mer komplekse agenter med bredere orkestrering | Lettere agenter for konkrete M365-scenarier |

Poeng: begge trenger governance, men review-tyngden er ulik.

---

# Før/etter-eksempler du kan vise live

| Før | Etter |
| --- | --- |
| Topic: `Fix problem` | Topic: `Feilsøk VPN-tilkobling` |
| Beskrivelse: "send epost til HR" | "Send e-post til HR ved spørsmål om rekruttering; ikke bruk for onboarding" |
| Instruksjon: "usually try to..." | "Always do X. Never do Y. Only do Z when ..." |

Poeng: bedre språk gir bedre orkestrering og færre feilroutinger.

---

# Begrensninger og roadmap (ærlig slide)

**Ikke alt dekkes i én analyse:**
- enkelte tredjepartsintegrasjoner
- utvalgte agent-til-agent-scenarier
- funksjoner avhengig av preview/beta-API-er

**Anbefaling:**
- kommuniser "in scope / out of scope" tydelig
- bruk review som kvalitetssikring, ikke som eneste risikokontroll

---

# ALM og modenhetsreise

| Nivå | Praktisk gjennomføring |
| --- | --- |
| 1. Manuell review | Kjør review ved milepæler i utvikling |
| 2. Team-basert kvalitetssyklus | Fast review-ritme + forbedringslogg |
| 3. Pipeline-gate | Automatisk kontroll før deploy (når støtte er tilgjengelig) |

Målbildet er CI/CD med kvalitetssjekk som standard, ikke unntak.

---

# Call to action for partnerteam

Neste steg etter denne sesjonen:

1. Velg **1 kritisk agent** for gjennomgang
2. Samle nødvendig input (miljø/løsning + kontaktperson)
3. Kjør review og prioriter toppfunn
4. Book kort forbedringsøkt med maker-teamet
5. Re-kjør review og dokumenter effekt

**Mål:** høyere kvalitet, raskere produksjonsmodning, mindre risiko.
