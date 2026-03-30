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
# Modul 6
## Agentarkitektur
## og multi-agent

---

# Hvorfor multi-agent?

| Gevinst | Hvorfor det hjelper |
| --- | --- |
| Spesialisering | Hver agent kan ha én tydelig rolle og færre verktøy |
| Enklere vedlikehold | Du kan endre eller bytte én agent uten å bygge om hele løsningen |
| Bedre sporbarhet | Det blir enklere å se hvem som gjorde hva i kjeden |
| Bedre kvalitet | Flere perspektiver kan gi bedre kontroll, review og kvalitetssikring |
| Skalerbarhet | Nye kapabiliteter kan legges til som egne spesialistagenter |

---

# Arkitekturmønstre for multi-agent

| Mønster | Hva det betyr | Typisk bruk |
| --- | --- | --- |
| Sekvens | Resultatet går fra agent A til B til C | Pipelines, stegvis behandling |
| Parallell | Flere agenter jobber parallelt på samme oppgave | Analyse fra flere perspektiver |
| Handoff | Kontroll flyttes til neste agent ved behov | Eskalering, ekspert-handoff |
| Group Chat | Flere agenter diskuterer i en koordinert samtale | Idémyldring, review, konsensus |
| Manager / orchestrator | En hovedagent delegerer til spesialister | Hub-and-spoke, connected agents |

---

# Når bør du splitte én agent i flere?

| Signal | Hva det betyr |
| --- | --- |
| Beskrivelser begynner å overlappe | Orkestratoren får vanskeligere for å velge riktig tool, topic eller agent |
| Du nærmer deg 30–40 valg i Copilot Studio | Microsoft anbefaler å vurdere splitting når presisjonen begynner å falle |
| Ulike team eier ulike domener | Connected agents gir tydeligere ansvar og livssyklus |
| Du trenger ulike modeller, auth eller policyer | Egen agent gir bedre styring |
| Kapabiliteten skal gjenbrukes flere steder | En connected agent er ofte bedre enn å kopiere logikk |


# Diskusjon: Trenger du multi-agent?

Ta utgangspunkt i agentideen din og diskuter:

| Spørsmål | Notater |
| --- | --- |
| Har løsningen tydelige delområder eller roller? | |
| Har ulike deler forskjellige verktøy, data eller eiere? | |
| Trenger du flere perspektiver eller review før svar? | |
| Holder én agent hvis du rydder i instruksjoner og verktøy? | |

---

# Copilot Studio - Child agents vs. connected agents

I Copilot Studio kan du bygge både child agents og connected agents for å dele opp løsningen i flere agenter. Hver tilnærming har sine styrker og passer for ulike scenarier.

|  | Child agent | Connected agent |
| --- | --- | --- |
| Plassering | Lettvektsagent inni hovedagenten | Separat agent i samme miljø eller eksternt |
| Orkestrering | Egen orkestrering, egne tools og knowledge | Egen orkestrering, egne innstillinger og eventuelt egen auth |
| Kontekst | Del av samme løsning | Samtalehistorikk kan sendes videre, eller begrenses |
| Gjenbruk | Best for ett avgrenset delproblem | Best for gjenbruk, eget domene eller eget team |
| Livssyklus | Forvaltes sammen med hovedagenten | Kan publiseres og styres separat |
| Typiske koblinger | Copilot Studio | Copilot Studio, Foundry, M365 Agents SDK, A2A |

---

# Orkestratorlaget i agentarkitekturen

| Orkestratorlaget gjør | Hvorfor det betyr noe |
| --- | --- |
| Velger mellom topics, tools, knowledge og andre agenter | Hindrer at alt havner i én stor agent med for mange ansvar |
| Bestemmer rekkefølge og avhengigheter | Gjør at steg skjer i riktig orden og med riktig kontekst |
| Samler resultater fra flere spesialister | Brukeren får ett samlet svar i stedet for mange delresultater |
| Håndterer feil, retry og fallback | Systemet blir mer robust når én del feiler |
| Holder kontroll på kontekst, state og sporbarhet | Du ser lettere hva som skjedde hvor i kjeden |

---

# Hvor ligger orkestreringen i ulike plattformer?

| Plattform | Hvor orkestreringen ligger |
| --- | --- |
| Copilot Studio | Generativ orkestrering som velger topics, tools, knowledge og andre agenter |
| Microsoft Foundry - prompt agents | Tjenesten håndterer orkestreringen automatisk |
| Microsoft Foundry - workflow agents | Workflows orkestrerer steg, branching og agent-til-agent-mønstre |
| Microsoft Foundry - hosted agents | Du skriver orkestreringslogikken selv i kode, inkludert tool calls, flertrinns resonnering og agentkoordinering, mens Foundry håndterer runtime, skalering og infrastruktur |
| Agent Framework | Du bruker ferdige workflow-orkestratorer som sequential, concurrent, handoff, group chat og magentic (manager) for å styre flyt, kontekst og human-in-the-loop i kode |

---

# Hva velger orkestratorlaget i Copilot Studio?

| Byggekloss | Hvordan den brukes |
| --- | --- |
| Topics | For dialogflyt, branching og avklaringer |
| Tools | Når agenten må hente data eller utføre handlinger |
| Knowledge | Når agenten trenger grounding fra kilder |
| Child agents | Når én del av løsningen bør isoleres i en underagent |
| Connected agents | Når et annet agentdomene eller en ekstern agent bør ta del av jobben |

I generativ orkestrering velges disse byggesteinene ut fra beskrivelse, navn, parametere og samtalekontekst.

---

# Topics i Copilot Studio

Samtaledesignmønster for å styre dialogflyt

- Et topic definerer hvordan en del av samtalen skal gå videre
- Topics passer godt for dialogsteg, avklaringsspørsmål, branching og faste samtalemønstre
- Kan være enkle og deterministiske, eller mer komplekse og generative, kan også kalle tools og andre agenter
- I Foundry finnes ikke et direkte topic-begrep; nærmeste er instructions, workflows og agentlogikk

---

# Human in the loop i agentiske prosesser

| Når du bør ha menneskelig kontroll | Hvorfor |
| --- | --- |
| Før irreversible handlinger | Sending, publisering, sletting og bestilling bør ofte godkjennes |
| Når data er sensitive eller regulatoriske | Gir bedre kontroll på personvern, sikkerhet og etterlevelse |
| Når agenten gjør vurderinger, ikke bare oppslag | Mennesker må eie beslutninger som påvirker kunder, ansatte eller økonomi |
| Når kvaliteten må være høy og sporbar | Review reduserer feil og gjør ansvar tydelig |
| Når autonomien øker | Jo mer selvstendig agenten er, desto viktigere er kontrollpunkt og eskalering |

---

# A2A – Agent-to-Agent-protokollen

Åpen standard for agent-til-agent kommunikasjon på tvers av plattformer  
Gjør det mulig å sende oppgaver til andre agenter med strukturert metadata  
Egnet når den andre agenten har egen logikk, egne workflows eller er bygget i et annet rammeverk  
I Foundry finnes dette som en A2A tool (preview)  
I Copilot Studio kan du koble til A2A-agenter som connected agents (preview)

| MCP | A2A |
| --- | --- |
| Verktøytilgang | Agent-til-agent kommunikasjon |
| Kobler LLM til funksjoner og data | Kobler agenter på tvers av plattformer |
| Én host → mange servere | Mange agenter → samarbeid via manifester |

---

# A2A i praksis

| Begrep | Hva det betyr |
| --- | --- |
| Agent Card | Et maskinlesbart "visittkort" som beskriver agentens kapabiliteter, endepunkt og auth |
| Task | Selve oppgaven som sendes fra én agent til en annen |
| Artifacts | Resultater som kommer tilbake, for eksempel tekst, filer eller strukturert data |
| Discovery | Orkestratoren kan finne relevante agenter uten hardkoding |

Hovedidé:

- MCP gjør verktøy oppdagbare for agenten
- A2A gjør andre agenter oppdagbare for agenten

Når passer det?

- Når en annen agent allerede eier sitt domene, sine verktøy og sin logikk

---

# Hva må du styre når flere agenter samarbeider?

| Du må styre | Hvorfor |
| --- | --- |
| Gode beskrivelser | Orkestratoren velger topics, tools og andre agenter ut fra metadata |
| Kontekstoverføring | Avgjør om neste agent skal få full samtalehistorikk eller bare et avgrenset oppdrag |
| Deterministiske handoff | Bruk eksplisitt redirect fra topic når routing ikke bør overlates til modellen |
| Prioritet og betingelser | Topics og child agents kan reagere på samme hendelser og må koordineres |
| Sporbarhet og logging | Viktig når connected agents ligger utenfor hovedagenten |
| Human in the loop | Kreves ofte når flere agenter kan utløse sensitive handlinger |

---

# Vanlige fallgruver i multi-agent

- For mange agenter gir mer forsinkelse og større testområde enn verdi
- Svake beskrivelser gjør at feil agent velges
- Uklare grenser mellom hovedagent og connected agent gjør feilsøking vanskelig
- Eksterne agenter krever tydelig ansvar for dataflyt, sikkerhet og godkjenning
- Siteringer og sporbarhet kan bli svakere når svar sendes mellom flere agenter
- Uten human in the loop kan flere agenter handle feil eller uønskede handlinger uten at noen har kontroll
