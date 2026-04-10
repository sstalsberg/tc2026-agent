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

# Modul 3 - Del 2

## Kunnskap, kontekst og RAG

---

# Kunnskap og kontekst i M365

| Prinsipp | Kort forklart |
| --- | --- |
| Kunnskap gir agenten grounding | SharePoint, Teams, web og filer gir kontekst til svaret |
| Grounding øker relevans | Svar bygger på kilder, ikke bare modellkunnskap |
| Tilgang må respekteres | Brukeren skal bare få svar fra data vedkommende har tilgang til |
| Siteringer gir kontroll | Brukeren kan se hvor svaret kommer fra |

- Avgrens kunnskapsgrunnlaget når du vil ha presise svar
- Begrens generell kunnskap når du trenger høy presisjon (varierer fra plattform til plattform)
- Filer lastet opp i en chat blir kontekst for dialogen, mens filer lastet opp i agentoppsettet kan bli varig kunnskapskilde

---
<!-- _class: action -->

### Ustrukturert kunnskap vs. Strukturerte data

Det er nyttig å skille mellom to typer kunnskap i en agent:

| Type | Hva det er | Typisk bruk |
| --- | --- | --- |
| Ustrukturert kunnskap | Dokumenter, nettsider, notater, e-poster og fritekst | Spørsmål, oppsummering, søk og forklaring |
| Strukturert data | Rader, felter og objekter som kunder, kontakter, saker, ordre og hendelser | brukes ofte til presise oppslag, regler, validering og handlinger |

- Bruk dokumentkilder når brukeren trenger forklaring, kontekst eller siterbare svar
- Bruk strukturert data når agenten må finne, oppdatere eller kontrollere konkrete felter og poster

---

# Hvor ligger opplastet agentkunnskap?

| Scenario | Hvor ligger filen? | Viktig nyanse |
| --- | --- | --- |
| Fil lastes opp direkte i en `declarative agent` | I en tenant-eid `SharePoint Embedded`-container | Ikke i vanlig SharePoint-site eller brukerens OneDrive |
| Eksisterende `SharePoint`- eller `OneDrive`-fil legges til som kilde | Blir liggende der den allerede lå | Agenten refererer filen, den flyttes ikke |
| Fil lastes opp i en vanlig chat | Blir kontekst for dialogen | Er normalt ikke en varig kunnskapskilde for agenten |

- I adminvisning og PowerShell vises containeren under applikasjonsnavnet `Declarative Agent`
- I `Microsoft 365 admin center > Agents > All agents` kan du se filnavn og `SharePoint container ID`

---

# Måter å hente kunnskap på i Microsoft-økosystemet

| Teknikk | Kort forklart | Styrke |
| --- | --- | --- |
| Graph + semantisk indeks | Innebygd grounding i M365 Copilot | Ingen egen indeks |
| Copilot Studio – SharePoint | SharePoint brukes som kunnskapskilde | Ferskt M365-innhold |
| Copilot Studio – filer | Opplastede eller synkroniserte filer brukes som kunnskap | Bra for avgrensede dokumentsett |
| Connectors | Oppslag direkte i kildesystemet | Live data |
| Azure AI Search – klassisk RAG | Egen indeks med hybrid, vektor og semantikk | Mest kontroll |
| Azure AI Search – agentic retrieval (preview) | LLM planlegger delspørringer og samler treff | Best for komplekse spørsmål |

---

# Hvilke strategier støttes hvor?

| Strategi | M365 Copilot | Copilot Studio | Microsoft Foundry |
| --- | --- | --- | --- |
| Graph + semantisk indeks | Ja | Delvis | Ikke innebygd |
| SharePoint / OneDrive | Ja | Ja | Ikke innebygd |
| Opplastede filer | Ja, embedded file content | Ja | Nei |
| Connectors som realtidskunnskap | Begrenset | Ja | Ikke innebygd |
| Egen indeks med hybrid / vektor / semantikk | Nei | Ja, via Dataverse eller Azure AI Search | Ja, via Azure AI Search |
| Agentic retrieval over kunnskapsbase | Nei | Via custom integrasjon | Ja, via Foundry IQ (preview) |

---

# Hvor passer RAG inn?

RAG = Retrieval-Augmented Generation

RAG er et mønster der relevant kontekst hentes før modellen svarer.

1. Brukeren spør
2. Systemet henter relevant kontekst fra kilder eller indeks
3. Modellen får spørsmål + kontekst
4. Agenten svarer, gjerne med siteringer

---

# Hvorfor er RAG vanskelig i praksis?

RAG er enkelt som idé, men kan være krevende i gjennomføring.

| Utfordring | Hva det betyr i praksis |
| --- | --- |
| Spørsmålsforståelse | Brukere spør ofte vagt, samtalebasert eller med underforstått kontekst |
| Flere datakilder | Innhold ligger i SharePoint, databaser, web, blob-lagring og andre systemer |
| Tokenbegrensning | Modellen kan ikke få alt, bare de mest relevante utdragene |
| Responstid | Brukeren forventer svar på sekunder, ikke minutter |
| Sikkerhet og styring | Agenten må bare hente innhold brukeren faktisk har lov til å se |

---

# Hva må retrieval-laget gjøre godt?

| Behov | Typiske mekanismer |
| --- | --- |
| Forstå hensikt, ikke bare ord | Hybridt søk, vektorsøk, semantisk rangering og eventuelt agentic retrieval |
| Finne på tvers av kilder | Kunnskapskilder, indekser, connectors eller direkte oppslag |
| Begrense hvor mye kontekst som sendes inn | Chunking, top-k, terskler og utvalg av felter |
| Bevare sporbarhet | Siteringer, referanser og tydelig kildegrunnlag |
| Ivareta sikkerhet | Tilgangstrimming, filterbasert sikkerhet og riktig autentisering |

God grounding handler derfor ikke bare om språkmodellen, men også om hvor godt retrieval-laget er utformet.

---

# Semantisk søk og chunking

To nøkkelbegreper i grounding og RAG:

| Begrep | Kort forklart | Hvorfor det betyr noe |
| --- | --- | --- |
| Semantisk søk / rangering | Treffer på mening og sammenheng, ikke bare eksakte ord | Bedre treff når brukerens ordvalg ikke matcher dokumentet |
| Chunking | Store dokumenter deles i mindre biter før de indekseres og hentes | Gir mer presis kontekst og holder seg innenfor tokengrenser |

Kort sagt: semantikk hjelper systemet å finne riktig innhold, chunking hjelper det å hente riktig utdrag.

---

# Microsoft Foundry IQ / agentic retrieval

| Klassisk retrieval | Agentic retrieval |
| --- | --- |
| Én spørring inn mot én indeks | Flere delspørringer planlegges automatisk |
| Treffer primært på ett formulert spørsmål | Bruker også chat-historikk og underforstått kontekst |
| Godt nok for enklere spørsmål | Best for komplekse spørsmål og flere kunnskapskilder |

Agentic retrieval gjør typisk dette:

1. Leser hele spørsmålet og samtalekonteksten
2. Bryter det ned i delspørringer
3. Kjører dem parallelt
4. Reranker treff og returnerer grounding, referanser og aktivitetsplan

---

# Azure AI Search: fra dokument til treff

| Steg | Hva som skjer |
| --- | --- |
| Datakilde | Dokumenter hentes fra en støttet kilde |
| Indexer | Trekker innholdet inn i pipelinen |
| Chunking | Store dokumenter deles opp i mindre biter |
| Embeddings | Hver bit kan vektoriseres |
| Index | Tekstfelt og vektorfelt lagres i samme søkeindeks |
| Vectorizer | Brukerens spørsmål kan vektoriseres ved spørring |
| Ranking | Hybrid søk og semantisk rangering løfter de beste treffene |

- `Integrated vectorization` gjør chunking og vektorisering til en del av selve indekseringen
- Embeddings-modellen er et eget steg i `Azure OpenAI` eller `Microsoft Foundry`, ikke i Azure AI Search
- I Copilot Studio kan Azure AI Search legges inn som egen kunnskapskilde
- Eksempelrepo: `https://github.com/Azure/Copilot-Studio-and-Azure`

---

# Copilot Studio filer vs Azure AI Search

| Valg | Styrke | Når det passer |
| --- | --- | --- |
| `Filopplasting i Copilot Studio` | Raskt og enkelt å komme i gang | Mindre dokumentsett og enkel grounding |
| `Azure AI Search` | Mer kontroll på chunking, embeddings, metadata, hybridt og semantisk søk | Når kvalitet, kontroll og søkekonfigurasjon betyr mer |

Kort sagt:

- filopplasting er enklest å starte med
- Azure AI Search gir mer kontroll og ofte bedre retrieval i større eller viktigere kunnskapsdomener

---

# SharePoint i Azure: indeksert eller remote?

| Mønster | Hva det betyr | Når det passer |
| --- | --- | --- |
| `Indexed SharePoint` | Azure AI Search lager indeks over SharePoint-innhold | Når du vil ha mer kontroll på chunking, embeddings og søkeoppsett |
| `Remote SharePoint` | Innhold hentes direkte fra SharePoint ved spørring | Når du vil respektere brukerens tilgang direkte i M365 uten egen kopi |

Viktige nyanser:

- `Remote SharePoint` krever at sluttbrukeren har en **Microsoft 365 Copilot-lisens**
- `Remote SharePoint` er kun tilgjengelig som knowledge source i **agentic retrieval** (preview) — ikke i klassisk RAG


---

# Hva avgjør kvaliteten på kunnskapssvar?

| Faktor | Hvorfor det betyr noe |
| --- | --- |
| Metadata og struktur | Tydelige titler, kolonner og informasjonsarkitektur gjør filtering og ranking bedre |
| Ferskhet | Direkte søk i kilden gir ferskere svar enn kopierte indekser som synkroniseres periodisk |
| Chunking og semantikk | Lange dokumenter blir mer treffsikre når de deles opp og matches på mening, ikke bare ord |
| Tilgangsstyring | Brukeren skal bare få treff på innhold vedkommende faktisk har tilgang til |
| Scope og støy | Færre og mer presise kilder gir mindre irrelevant grounding |
| Datakvalitet og eierskap | Uten vedlikehold, opprydding og ansvarlige eiere forringes kunnskapsbasen over tid |

For strukturerte kilder som `Dataverse` og `Azure SQL` hjelper gode feltnavn, beskrivelser, synonymer og begrepsforklaringer agenten å tolke tabeller og kolonner riktigere.
For `SharePoint` og opplastede filer er mindre og mer målrettede kilder ofte bedre enn store mapper, lange dokumenter og tung spesialformatering.

---

# Hvordan tester du tilgang og treff på kunnskap?

| Test | Hva du ser etter |
| --- | --- |
| Søk direkte i kilden først | Er dokumentet faktisk søkbart, og finnes teksten der du tror den finnes? |
| Test både eksakte og semantiske spørsmål | Treffer løsningen bare ord, eller også mening og sammenheng? |
| Test med ulike brukere | Fungerer tilgangstrimming slik at brukere ser forskjellig innhold der de skal? |
| Test etter endringer i kilden | Hvor raskt blir nye eller oppdaterte dokumenter søkbare? |
| Test smale scope og metadatafiltre | Blir svarene bedre når du snevrer inn kilde, område eller dokumenttype? |

Tips: Bruk Graph Explorer eller søk direkte i SharePoint

---

# Hvorfor beskrive kunnskapskilden?

| Hvor | Hvorfor |
| --- | --- |
| Copilot Studio | Beskrivelsen hjelper agenten å velge riktig kilde og brukes når mange kunnskapskilder må filtreres
| Microsoft Foundry / Foundry IQ | Beskrivelser og retrieval instructions påvirker query planning |
| SDK + Foundry | Samme effekt gjelder når agenten bruker Foundry IQ som kunnskapslag

Kort sagt: en god beskrivelse hjelper agenten å forstå når en kilde bør brukes og når den ikke bør brukes.

---

# Praktisk grense i Copilot Studio

- Ved generativ orkestrering: hvis agenten har mer enn 25 kunnskapskilder, filtrerer Copilot Studio dem først med en intern modell (GPT) basert på beskrivelsen
  - Konsekvens: korte eller generiske beskrivelser gjør det vanskeligere å velge riktig kilde
  - Tiltak: gi hver kilde tydelig navn, presis beskrivelse og et avgrenset ansvarsområde
- Opplastede filer til agenten teller ikke mot denne 25-grensen


---

# Kunnskapspipeline med Copilot

| Steg | Navn | Hva skjer |
| --- | --- | --- |
| 1 | Meldingen vurderes | Sjekker om meldingen er trygg å behandle |
| 2 | Spørsmålet optimaliseres | Omskriver spørsmålet med samtalekontekst |
| 3 | Informasjon hentes | Søker enten direkte i kilden eller i en indeks, avhengig av strategi |
| 4 | Innhold oppsummeres | LLM oppsummerer med Responsible AI-guardrails |
| 5 | Kildegrunnlag valideres | Bekrefter opphav og lager siteringer |
| 6 | Svaret modereres | Dobbeltsjekker svaret for uønsket innhold |
| 7 | Respons returneres | Returnerer svar, siteringer og logger |

---

# Laboppgave: Test grounding og retrieval

| Punkt | Notater |
| --- | --- |
| Skriv 3 spørsmål agenten bør kunne svare godt på |  |
| Hvilken kilde hvert svar bør komme fra |  |
| Trenger kilden bedre struktur, metadata eller chunking? |  |
| Hva skjer hvis spørsmålet stilles både eksakt og semantisk? |  |
| Fungerer siteringer og tilgang som forventet? |  |
