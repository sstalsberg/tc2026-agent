# Modul 6: Agentarkitektur og multi-agent

Denne modulen handler om hvordan du går fra én agent til en mer sammensatt agentløsning.

Vi ser på når det lønner seg å splitte én agent i flere, hvilke samarbeidsmønstre som finnes, og hva du må styre når flere agenter jobber sammen.

[Forrige: Modul 4](./04-prompt-engineering-og-kvalitet.md) | [Til hovedside](../README.md) | [Neste: Modul 7](./07-sikkerhet-governance.md)

## Læringsmål

- Forstå hvorfor multi-agent kan gi bedre spesialisering, gjenbruk og sporbarhet
- Kjenne de vanligste multi-agent-mønstrene
- Se når én agent bør splittes i flere
- Forstå forskjellen på child agents og connected agents
- Se hva orkestratorlaget gjør i Copilot Studio, Foundry og kodebaserte rammeverk
- Kjenne til topics, A2A og human in the loop

## Hvorfor multi-agent?

| Gevinst | Hvorfor det hjelper |
| --- | --- |
| Spesialisering | Hver agent kan ha én tydelig rolle og færre verktøy |
| Enklere vedlikehold | Du kan endre eller bytte én agent uten å bygge om hele løsningen |
| Bedre sporbarhet | Det blir enklere å se hvem som gjorde hva i kjeden |
| Bedre kvalitet | Flere perspektiver kan gi bedre kontroll, review og kvalitetssikring |
| Skalerbarhet | Nye kapabiliteter kan legges til som egne spesialistagenter |

Multi-agent er ikke alltid riktig svar. Start enkelt, men kjenn igjen signalene som tilsier at løsningen bør deles opp.

## Arkitekturmønstre for multi-agent

| Mønster | Hva det betyr | Typisk bruk |
| --- | --- | --- |
| Sekvens | Resultatet går fra agent A til B til C | Pipelines, stegvis behandling |
| Parallell | Flere agenter jobber parallelt på samme oppgave | Analyse fra flere perspektiver |
| Handoff | Kontroll flyttes til neste agent ved behov | Eskalering, ekspert-handoff |
| Group Chat | Flere agenter diskuterer i en koordinert samtale | Idémyldring, review, konsensus |
| Manager / orchestrator | En hovedagent delegerer til spesialister | Hub-and-spoke, connected agents |

## Når bør du splitte én agent i flere?

| Signal | Hva det betyr |
| --- | --- |
| Beskrivelser begynner å overlappe | Orkestratoren får vanskeligere for å velge riktig tool, topic eller agent |
| Du nærmer deg 30-40 valg i Copilot Studio | Microsoft anbefaler å vurdere splitting når presisjonen begynner å falle |
| Ulike team eier ulike domener | Connected agents gir tydeligere ansvar og livssyklus |
| Du trenger ulike modeller, auth eller policyer | Egen agent gir bedre styring |
| Kapabiliteten skal gjenbrukes flere steder | En connected agent er ofte bedre enn å kopiere logikk |

## Når holder én agent, og når trenger du connected agents?

| Velg én agent når ... | Velg connected agents når ... |
| --- | --- |
| Oppgaven har tydelig intent og avgrenset scope | Oppgaven kan deles i tydelige deldomener |
| Verktøyene er kjent på forhånd | Ulike agenter trenger ulike data, verktøy eller policyer |
| Du vil ha raske svar med lav latency | Flere spesialister må jobbe i serie eller parallelt |
| Ett team eier hele løsningen | Flere team eier hver sin del |
| Du kan evaluere hele flyten som ett system | Du vil gjenbruke eksisterende agenter og evalueringer |

## Diskusjon: Trenger du multi-agent?

Ta utgangspunkt i agentideen din og vurder:

| Spørsmål | Notater |
| --- | --- |
| Har løsningen tydelige delområder eller roller? | |
| Har ulike deler forskjellige verktøy, data eller eiere? | |
| Trenger du flere perspektiver eller review før svar? | |
| Holder én agent hvis du rydder i instruksjoner og verktøy? | |

## Copilot Studio - Child agents vs. connected agents

I Copilot Studio kan du dele opp løsningen med både child agents og connected agents.

|  | Child agent | Connected agent |
| --- | --- | --- |
| Plassering | Lettvektsagent inni hovedagenten | Separat agent i samme miljø eller eksternt |
| Orkestrering | Egen orkestrering, egne tools og knowledge | Egen orkestrering, egne innstillinger og eventuelt egen auth |
| Kontekst | Del av samme løsning | Samtalehistorikk kan sendes videre, eller begrenses |
| Gjenbruk | Best for ett avgrenset delproblem | Best for gjenbruk, eget domene eller eget team |
| Livssyklus | Forvaltes sammen med hovedagenten | Kan publiseres og styres separat |
| Typiske koblinger | Copilot Studio | Copilot Studio, Foundry, M365 Agents SDK, A2A |

## Orkestratorlaget i agentarkitekturen

| Orkestratorlaget gjør | Hvorfor det betyr noe |
| --- | --- |
| Velger mellom topics, tools, knowledge og andre agenter | Hindrer at alt havner i én stor agent med for mange ansvar |
| Bestemmer rekkefølge og avhengigheter | Gjør at steg skjer i riktig orden og med riktig kontekst |
| Samler resultater fra flere spesialister | Brukeren får ett samlet svar i stedet for mange delresultater |
| Håndterer feil, retry og fallback | Systemet blir mer robust når én del feiler |
| Holder kontroll på kontekst, state og sporbarhet | Du ser lettere hva som skjedde hvor i kjeden |

## Hva velger orkestratorlaget i Copilot Studio?

| Byggekloss | Hvordan den brukes |
| --- | --- |
| Topics | For dialogflyt, branching og avklaringer |
| Tools | Når agenten må hente data eller utføre handlinger |
| Knowledge | Når agenten trenger grounding fra kilder |
| Child agents | Når én del av løsningen bør isoleres i en underagent |
| Connected agents | Når et annet agentdomene eller en ekstern agent bør ta del av jobben |

I generativ orkestrering velges disse byggesteinene ut fra beskrivelse, navn, parametere og samtalekontekst.

## Hvor ligger orkestreringen i ulike plattformer?

| Plattform | Hvor orkestreringen ligger |
| --- | --- |
| Copilot Studio | Generativ orkestrering som velger topics, tools, knowledge og andre agenter |
| Microsoft Foundry - prompt agents | Tjenesten håndterer orkestreringen automatisk |
| Microsoft Foundry - workflow agents | Workflows orkestrerer steg, branching og agent-til-agent-mønstre |
| Microsoft Foundry - hosted agents | Du skriver orkestreringslogikken selv i kode, mens Foundry håndterer runtime, skalering og infrastruktur |
| Agent Framework | Du bruker ferdige workflow-orkestratorer som sequential, concurrent, handoff, group chat og magentic |

## Topics i Copilot Studio

Et topic er et samtaledesignmønster for å styre dialogflyt.

- Topics passer godt for avklaringsspørsmål, branching og faste samtalemønstre.
- De kan være både deterministiske og mer generative.
- De kan også kalle tools og andre agenter.

I Foundry finnes ikke et direkte topic-begrep. Der ligger den samme logikken oftere i instructions, workflows og agentlogikk.

## A2A – Agent-to-Agent-protokollen

A2A er en åpen standard for agent-til-agent-kommunikasjon på tvers av plattformer.

| MCP | A2A |
| --- | --- |
| Verktøytilgang | Agent-til-agent kommunikasjon |
| Kobler LLM til funksjoner og data | Kobler agenter på tvers av plattformer |
| Én host -> mange servere | Mange agenter -> samarbeid via manifester |

## A2A i praksis

| Begrep | Hva det betyr |
| --- | --- |
| Agent Card | Et maskinlesbart visittkort som beskriver agentens kapabiliteter, endepunkt og auth |
| Task | Selve oppgaven som sendes fra én agent til en annen |
| Artifacts | Resultater som kommer tilbake, for eksempel tekst, filer eller strukturert data |
| Discovery | Orkestratoren kan finne relevante agenter uten hardkoding |

Hovedidéen er enkel:

- MCP gjør verktøy oppdagbare for agenten
- A2A gjør andre agenter oppdagbare for agenten

## Copilot, Work IQ og det bredere agentøkosystemet

Copilot er ikke bare en egen agentflate. Det kan også delta i et større connected-agent-økosystem.

| Rolle | Hva det betyr |
| --- | --- |
| `Copilot som UI` | Brukeren møter et kjent grensesnitt i M365 |
| `Work IQ` | Gir tilgang til arbeidskontekst som dokumenter, e-post, møter og relasjoner |
| `Copilot som MCP / A2A-deltaker` | Eksterne agenter kan bruke Copilot og Work IQ i større flyter |
| `Eksterne agenter i Copilot` | Copilot kan utvides med flere spesialiserte agenter |

## Hva må du styre når flere agenter samarbeider?

| Du må styre | Hvorfor |
| --- | --- |
| Gode beskrivelser | Orkestratoren velger topics, tools og andre agenter ut fra metadata |
| Kontekstoverføring | Avgjør om neste agent skal få full samtalehistorikk eller bare et avgrenset oppdrag |
| Deterministiske handoff | Bruk eksplisitt redirect når routing ikke bør overlates til modellen |
| Prioritet og betingelser | Flere byggeklosser kan reagere på samme behov |
| Sporbarhet og logging | Viktig når connected agents ligger utenfor hovedagenten |
| Human in the loop | Kreves ofte når flere agenter kan trigge sensitive handlinger |

## Vanlige fallgruver i multi-agent

- For mange agenter gir mer forsinkelse og større testområde enn verdi
- Svake beskrivelser gjør at feil agent velges
- Uklare grenser mellom hovedagent og connected agent gjør feilsøking vanskelig
- Eksterne agenter krever tydelig ansvar for dataflyt, sikkerhet og godkjenning
- Siteringer og sporbarhet kan bli svakere når svar sendes mellom flere agenter
- Uten human in the loop kan flere agenter handle feil uten kontroll

## Hvordan connected agents bør oppleves for brukeren

| Prinsipp | Hvorfor det betyr noe |
| --- | --- |
| En primær agentflate | Brukeren slipper å velge mellom mange agenter selv |
| Subagenter kan være skjult | Reduserer kompleksitet i opplevelsen |
| Hovedagenten oppsummerer | Brukeren får et samlet svar |
| Sporbarhet må vises | Brukeren og drift må kunne se hvilke agenter som bidro |
| Human in the loop ved behov | Viktig når flere agenter kan trigge sensitive handlinger |

## Lab

### Spor A – vurder om du trenger multi-agent

| Spørsmål | Notater |
| --- | --- |
| Har løsningen tydelige delområder eller roller? | |
| Har ulike deler forskjellige verktøy, data eller eiere? | |
| Trenger du flere perspektiver eller review før svar? | |
| Holder én agent hvis du rydder i instruksjoner og verktøy? | |

### Spor B – skisser en enkel agentarkitektur

Beskriv kort:

- hovedagentens rolle
- hvilke spesialister som eventuelt trengs
- hvilke verktøy eller kunnskapskilder hver agent skal eie
- hvor du trenger human in the loop

## Oppsummering

1. Multi-agent gir verdi når ansvar, verktøy eller eierskap bør skilles
2. Orkestrering er et eget arkitekturlag som styrer topics, tools, knowledge og andre agenter
3. Connected agents, A2A og gode beskrivelser er sentrale når løsningen vokser

[Forrige: Modul 4](./04-prompt-engineering-og-kvalitet.md) | [Til hovedside](../README.md) | [Neste: Modul 7](./07-sikkerhet-governance.md)

## Lenker

- [Copilot Studio generative orchestration](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-orchestration)
- [Add other agents in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)
- [Create and edit topics](https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics)
- [Microsoft Foundry agents overview](https://learn.microsoft.com/azure/foundry/agents/overview)
- [Microsoft Agent Framework orchestrations](https://learn.microsoft.com/agent-framework/workflows/orchestrations/)
- [A2A tool in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent)
