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

---

# Når trenger Copilot Studio hjelp fra Azure?

| Behov | Azure-spor | Hvorfor |
| --- | --- | --- |
| Mer kontroll på kunnskapsinnhenting | `Azure AI Search` | Egen indeks med hybrid, vektor og semantisk rangering |
| Vanskelige spørsmål over store kunnskapsdomener | `Foundry IQ / agentic retrieval` | LLM planlegger delspørringer og samler treff |
| Annen modell enn standardvalget | `Azure AI Foundry models` | Prompt-verktøyet kan bruke modeller fra Foundry |

---

# Hva består en deklarativ agent av?

| Del | Type | Rolle |
| --- | --- | --- |
| `manifest.json` + ikoner | App package | Pakker agenten som app i Teams og Microsoft 365 |
| `declarativeAgent.json` | Agentdefinisjon | Definerer navn, beskrivelse, instrukser og actions |
| `instructions` | Agentinnhold | Ligger ofte i `declarativeAgent.json`, men kan legges i egen tekstfil |
| `ai-plugin.json` + `openapi.yaml` | Valgfri action | Beskriver eksterne API-kall og operasjoner |
| `adaptiveCards/*.json` | Valgfri visning | Viser svar som kort i stedet for bare tekst |
| `env/` + `m365agents.yml` | Toolkit-prosjekt | Styrer provisjonering, bygg og publisering, ikke selve agentlogikken |

- Dette er typisk struktur for en deklarativ agent bygget med app package og Toolkit
- En code-first agent med Microsoft 365 Agents SDK har mer logikk i kode enn i disse JSON-filene

---

# Når holder én agent, og når trenger du connected agents?

| Velg én agent når ... | Velg connected agents når ... |
| --- | --- |
| Oppgaven har tydelig intent og avgrenset scope | Oppgaven kan deles i tydelige deldomener |
| Verktøyene er kjent på forhånd | Ulike agenter trenger ulike data, verktøy eller policyer |
| Du vil ha raske svar med lav latency | Flere spesialister må jobbe i serie eller parallelt |
| Ett team eier hele løsningen | Flere team eier hver sin del |
| Du kan evaluere hele flyten som ett system | Du vil gjenbruke eksisterende agenter og evalueringer |

---

# Copilot, Work IQ og det bredere agentøkosystemet

Copilot er ikke bare en egen agentflate.
Det kan også delta i et større connected-agent-økosystem.

| Rolle | Hva det betyr |
| --- | --- |
| `Copilot som UI` | Brukeren møter et kjent grensesnitt i M365 |
| `Work IQ` | Gir tilgang til arbeidskontekst som dokumenter, e-post, møter og relasjoner |
| `Copilot som MCP / A2A-deltaker` | Eksterne agenter kan bruke Copilot og Work IQ i større flyter |
| `Eksterne agenter i Copilot` | Copilot kan utvides med flere spesialiserte agenter |

Poenget er:

- Copilot kan være inngangen til mange agenter
- men Copilot kan også selv være en del av et større agentsystem

---

# Hvordan connected agents bør oppleves for brukeren

Målet er ikke at brukeren skal styre et helt agentkart selv.
Målet er et samlet, begripelig arbeidsforløp.

| Prinsipp | Hvorfor det betyr noe |
| --- | --- |
| En primær agentflate | Brukeren slipper å velge mellom mange agenter selv |
| Subagenter kan være skjult | Reduserer kompleksitet i opplevelsen |
| Hovedagenten oppsummerer | Brukeren får et samlet svar |
| Sporbarhet må vises | Brukeren og drift må kunne se hvilke agenter som bidro |
| Human in the loop ved behov | Viktig når flere agenter kan trigge sensitive handlinger |

Designregel:

- skjul intern kompleksitet
- vis ansvar, kilder og kontrollpunkter