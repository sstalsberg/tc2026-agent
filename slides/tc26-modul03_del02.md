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
- Filer brukeren laster opp i samtalen blir kontekst for dialogen, men er ikke en varig kunnskapskilde

---

### Ustrukturert kunnskap vs. Strukturerte data

Det er nyttig å skille mellom to typer kunnskap i en agent:

| Type | Hva det er | Typisk bruk |
| --- | --- | --- |
| Ustrukturert kunnskap | Dokumenter, nettsider, notater, e-poster og fritekst | Spørsmål, oppsummering, søk og forklaring |
| Strukturert data | Rader, felter og objekter som kunder, kontakter, saker, ordre og hendelser | brukes ofte til presise oppslag, regler, validering og handlinger |

- bruk dokumentkilder når brukeren trenger forklaring, kontekst eller siterbare svar
- bruk strukturert data når agenten må finne, oppdatere eller kontrollere konkrete felter og poster

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
| Graph + semantisk indeks | Ja | Ja (Delvis) | Ikke innebygd |
| SharePoint / OneDrive | Ja | Ja | Ikke innebygd |
| Opplastede filer | Ja, embedded file content | Ja | Nei |
| Connectors som realtidskunnskap | Begrenset | Ja | Ikke innebygd |
| Egen indeks med hybrid / vektor / semantikk | Nei | Ja, via Dataverse eller Azure AI Search | Ja, via Azure AI Search |
| Agentic retrieval over kunnskapsbase | Nei | Via custom integrasjon | Ja, via Foundry IQ (preview) |

---

# Hvor passer RAG inn?

RAG = Retrieval-Augmented Generation

RAG er ett av flere mønstre for å hente relevant kontekst før modellen svarer.

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

God grounding handler derfor ikke bare om språkmodellen, men også om hvor godt retrieval-laget er designet.

---

# Foundry IQ / agentic retrieval

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

# Semantisk søk og chunking

To nøkkelbegreper i grounding og RAG:

| Begrep | Kort forklart | Hvorfor det betyr noe |
| --- | --- | --- |
| Semantisk søk / rangering | Treffer på mening og sammenheng, ikke bare eksakte ord | Bedre treff når brukerens ordvalg ikke matcher dokumentet |
| Chunking | Store dokumenter deles i mindre biter før de indekseres og hentes | Gir mer presis kontekst og holder seg innenfor tokengrenser |

Kort sagt: semantikk hjelper systemet å finne riktig innhold, chunking hjelper det å hente riktig utdrag.

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
- I Copilot Studio kan Azure AI Search legges inn som egen kunnskapskilde

---

# SharePoint i Azure: indeksert eller remote?

| Mønster | Hva det betyr | Når det passer |
| --- | --- | --- |
| `Indexed SharePoint` | Azure AI Search lager indeks over SharePoint-innhold | Når du vil ha mer kontroll på chunking, embeddings og søkeoppsett |
| `Remote SharePoint` | Innhold hentes direkte fra SharePoint ved spørring | Når du vil respektere brukerens tilgang direkte i M365 uten egen kopi |

Viktig nyanse:

- `Remote SharePoint` bruker SharePoint ved query-tid
- `Indexed SharePoint` oppretter en full ingest-pipeline med data source, skillset, indexer og index

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

---

# Hvordan tester du tilgang og treff på kunnskap?

| Test | Hva du ser etter |
| --- | --- |
| Søk direkte i kilden først | Er dokumentet faktisk søkbart, og finnes teksten der du tror den finnes? |
| Test både eksakte og semantiske spørsmål | Treffer løsningen bare ord, eller også mening og sammenheng? |
| Test med ulike brukere | Fungerer tilgangstrimming slik at brukere ser forskjellig innhold der de skal? |
| Test etter endringer i kilden | Hvor raskt blir nye eller oppdaterte dokumenter søkbare? |
| Test smale scope og metadatafiltre | Blir svarene bedre når du snevrer inn kilde, område eller dokumenttype? |

Tips: Bruk Graph Explorer

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

- Ved generativ orkestrering: hvis agenten har mer enn 25 kunnskapskilder, filtrerer Copilot Studio dem først med en intern GPT basert på beskrivelsen
- Opplastede filer til agenten teller ikke mot denne 25-grensen
- Konsekvens: korte eller generiske beskrivelser gjør det vanskeligere å velge riktig kilde
- Tiltak: gi hver kilde tydelig navn, presis beskrivelse og et avgrenset ansvarsområde

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