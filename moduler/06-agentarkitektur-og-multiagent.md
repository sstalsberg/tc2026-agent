# Modul 6: Agentarkitektur og multi-agent

Denne modulen handler om hvordan du går fra én agent til en mer sammensatt agentløsning.

Vi ser på:

- hvorfor du i noen tilfeller bør splitte én agent i flere
- hvilke arkitekturmønstre som finnes for samarbeid mellom agenter
- hva et orkestratorlag gjør
- hvordan `child agents`, `connected agents`, `topics` og `A2A` passer inn
- hva du må styre når flere agenter samarbeider

Målet er ikke å gjøre alle til multi-agent-arkitekter på én gang. Målet er å gi deg et språk for å vite når multi-agent gir verdi, og når det bare gjør løsningen mer komplisert.

[Forrige: Modul 4](./04-prompt-engineering-og-kvalitet.md) | [Til hovedside](../README.md) | [Neste: Modul 7](./07-sikkerhet-governance.md)

## Læringsmål

- Forstå hvorfor multi-agent kan gi bedre spesialisering, gjenbruk og sporbarhet
- Kjenne de vanligste multi-agent-mønstrene
- Se når én agent bør splittes i flere
- Forstå forskjellen på `child agents` og `connected agents`
- Se hva orkestratorlaget gjør i Copilot Studio, Foundry og kodebaserte rammeverk
- Kjenne til `topics`, `human in the loop` og `A2A`

## Hvorfor multi-agent?

En naturlig første tanke når en agent vokser, er å legge inn litt mer kunnskap, litt flere verktøy og litt flere regler i samme agent.

Det kan fungere en stund. Men etter hvert blir løsningen ofte vanskeligere å styre.

Multi-agent blir interessant når du trenger:

- tydeligere spesialisering
- enklere vedlikehold
- bedre sporbarhet
- bedre kvalitet gjennom flere perspektiver
- skalerbarhet når nye kapabiliteter skal legges til

| Gevinst | Hvorfor det hjelper |
| --- | --- |
| Spesialisering | Hver agent kan ha én tydelig rolle og færre verktøy |
| Enklere vedlikehold | Du kan endre eller bytte én agent uten å bygge om hele løsningen |
| Bedre sporbarhet | Det blir enklere å se hvem som gjorde hva i kjeden |
| Bedre kvalitet | Flere perspektiver kan gi bedre kontroll, review og kvalitetssikring |
| Skalerbarhet | Nye kapabiliteter kan legges til som egne spesialistagenter |

Det betyr ikke at multi-agent alltid er riktig. Ofte er én agent fortsatt best. Men når løsningens ansvar begynner å bli for bredt, kan oppdeling være et bedre arkitekturvalg.

## Arkitekturmønstre for multi-agent

Det finnes flere vanlige måter å organisere samarbeid mellom agenter på:

| Mønster | Hva det betyr | Typisk bruk |
| --- | --- | --- |
| Sekvens | Resultatet går fra agent A til B til C | Pipelines, stegvis behandling |
| Parallell | Flere agenter jobber parallelt på samme oppgave | Analyse fra flere perspektiver |
| Handoff | Kontroll flyttes til neste agent ved behov | Eskalering, ekspert-handoff |
| Group Chat | Flere agenter diskuterer i en koordinert samtale | Idémyldring, review, konsensus |
| Manager / orchestrator | En hovedagent delegerer til spesialister | Hub-and-spoke, connected agents |

Disse mønstrene er nyttige fordi de viser at multi-agent ikke er én ting. Det er flere måter å organisere ansvar og flyt på.

Et sekvensmønster passer ofte godt når stegene må skje i bestemt rekkefølge.
Et parallelt mønster passer bedre når flere perspektiver kan jobbe samtidig.
Et manager-mønster passer godt når én hovedagent skal holde oversikt og delegere videre.

## Når bør du splitte én agent i flere?

En praktisk tommelfingerregel er å starte med én agent og splitte senere.

Noen typiske signaler på at det kan være på tide å dele opp løsningen er:

| Signal | Hva det betyr |
| --- | --- |
| Beskrivelser begynner å overlappe | Orkestratoren får vanskeligere for å velge riktig tool, topic eller agent |
| Du nærmer deg 30–40 valg i Copilot Studio | Microsoft anbefaler å vurdere splitting når presisjonen begynner å falle |
| Ulike team eier ulike domener | Egen agent gir tydeligere ansvar og livssyklus |
| Du trenger ulike modeller, auth eller policyer | Egen agent gir bedre styring |
| Kapabiliteten skal gjenbrukes flere steder | En connected agent er ofte bedre enn å kopiere logikk |

Det viktigste her er ikke et eksakt tall.
Det viktigste er at agenten blir vanskeligere å styre når:

- for mange valg ligner på hverandre
- for mange ansvar ligger i samme løsning
- samme agent må håndtere veldig ulike roller

## Diskusjon: Trenger du multi-agent?

Før du deler opp løsningen, er det nyttig å stoppe opp og vurdere om behovet faktisk er der.

Diskuter for agentideen din:

| Spørsmål | Hva du leter etter |
| --- | --- |
| Har løsningen tydelige delområder eller roller? | Tegn på at spesialisering kan gi verdi |
| Har ulike deler forskjellige verktøy, data eller eiere? | Tegn på at ansvar bør skilles |
| Trenger du flere perspektiver eller review før svar? | Tegn på at fleragentmønster kan bedre kvaliteten |
| Holder én agent hvis du rydder i instruksjoner og verktøy? | Sjekk om multi-agent egentlig bare skjuler et designproblem |

## Copilot Studio - Child agents vs. connected agents

I Copilot Studio er dette en nyttig skillelinje når du vil dele opp løsningen.

|  | Child agent | Connected agent |
| --- | --- | --- |
| Plassering | Lettvektsagent inni hovedagenten | Separat agent i samme miljø eller eksternt |
| Orkestrering | Egen orkestrering, egne tools og knowledge | Egen orkestrering, egne innstillinger og eventuelt egen auth |
| Kontekst | Del av samme løsning | Samtalehistorikk kan sendes videre, eller begrenses |
| Gjenbruk | Best for ett avgrenset delproblem | Best for gjenbruk, eget domene eller eget team |
| Livssyklus | Forvaltes sammen med hovedagenten | Kan publiseres og styres separat |
| Typiske koblinger | Copilot Studio internt | Copilot Studio, Foundry, Microsoft 365 Agents SDK eller A2A |

En enkel måte å forstå forskjellen på er:

- `child agent` er en underagent i samme løsning
- `connected agent` er en mer selvstendig agent som kobles på utenfra

Child agents passer godt når du vil isolere et delproblem uten å lage en full separat agentportefølje.
Connected agents passer bedre når du trenger gjenbruk, tydelig eierskap eller egne grenser for data, auth og livssyklus.

## Orkestratorlaget i agentarkitekturen

Når flere byggesteiner skal samarbeide, trenger du et lag som bestemmer hva som skal skje videre.

Det er dette vi mener med orkestratorlaget.

| Orkestratorlaget gjør | Hvorfor det betyr noe |
| --- | --- |
| Velger mellom topics, tools, knowledge og andre agenter | Hindrer at alt havner i én stor agent |
| Bestemmer rekkefølge og avhengigheter | Gjør at steg skjer i riktig orden |
| Samler resultater fra flere spesialister | Brukeren får ett samlet svar |
| Håndterer feil, retry og fallback | Løsningen blir mer robust |
| Holder kontroll på kontekst, state og sporbarhet | Det blir lettere å forstå hva som skjedde |

Poenget er at orkestrering er et arkitekturlag, ikke bare enda et verktøy.

## Hvor ligger orkestreringen i ulike plattformer?

Forskjellige plattformer legger orkestreringen på forskjellige steder:

| Plattform | Hvor orkestreringen ligger |
| --- | --- |
| Copilot Studio | Generativ orkestrering velger topics, tools, knowledge og andre agenter |
| Microsoft Foundry - prompt agents | Tjenesten håndterer orkestreringen automatisk |
| Microsoft Foundry - workflow agents | Workflows orkestrerer steg, branching og agent-til-agent-mønstre |
| Microsoft Foundry - hosted agents | Du skriver orkestreringslogikken selv i kode, inkludert tool calls, flertrinns resonnering og agentkoordinering, mens Foundry håndterer runtime, skalering og infrastruktur |
| Agent Framework | Du bruker ferdige workflow-orkestratorer som sequential, concurrent, handoff, group chat og magentic for å styre flyt, kontekst og human-in-the-loop i kode |

Dette er nyttig å forstå fordi multi-agent ikke alltid betyr samme tekniske løsning.

Noen ganger ligger orkestreringen i plattformen.
Andre ganger ligger den i workflow.
Og i kodeagenter kan den ligge fullt ut i din egen applikasjonslogikk.

## Hva velger orkestratorlaget i Copilot Studio?

I Copilot Studio med generativ orkestrering kan agenten velge mellom flere typer byggeklosser:

| Byggekloss | Hvordan den brukes |
| --- | --- |
| Topics | For dialogflyt, branching og avklaringer |
| Tools | Når agenten må hente data eller utføre handlinger |
| Knowledge | Når agenten trenger grounding fra kilder |
| Child agents | Når én del av løsningen bør isoleres i en underagent |
| Connected agents | Når et annet agentdomene eller en ekstern agent bør ta del av jobben |

Det viktige poenget her er at valg ikke bare handler om “hva finnes”, men om metadata og beskrivelser.

I praksis betyr det at gode navn, beskrivelser og tydelig avgrensning blir kritisk når løsningen vokser.

## Topics i Copilot Studio

Et topic er et samtaledesignmønster for å styre hvordan en del av dialogen skal gå videre.

Topics passer godt for:

- avklaringsspørsmål
- branching
- faste samtalemønstre
- dialogsteg som bør være mer deterministiske
- enkle og deterministiske eller mer komplekse og generative flyter som også kan kalle tools og andre agenter

Et topic er altså ikke bare “et spørsmålssvar”.
Det er en måte å definere hvordan en del av samtalen skal håndteres.

I Foundry brukes ikke topic-begrepet på samme måte. Der er de nærmeste parallellene:

- instructions
- workflows
- agentlogikk

## Human in the loop i agentiske prosesser

Når agenter går fra å svare til å handle, blir menneskelig kontroll viktigere.

| Når du bør ha menneskelig kontroll | Hvorfor |
| --- | --- |
| Før irreversible handlinger | Sending, publisering, sletting og bestilling bør ofte godkjennes |
| Når data er sensitive eller regulatoriske | Bedre kontroll på personvern og sikkerhet |
| Når agenten gjør vurderinger, ikke bare oppslag | Mennesker må eie viktige beslutninger |
| Når kvaliteten må være høy og sporbar | Review reduserer feil og gjør ansvar tydelig |
| Når autonomien øker | Mer selvstendige agenter trenger flere kontrollpunkt |

Dette er et viktig prinsipp også utenfor Copilot Studio.

Jo mer autonom en agent er, desto viktigere er det å ha:

- godkjenning
- review
- eskalering
- sporbarhet

## A2A – Agent-to-Agent-protokollen

`A2A` står for `Agent-to-Agent` og beskriver en åpen standardisert måte for agenter å snakke med andre agenter på tvers av plattformer.

Kort forklart:

- MCP kobler en agent til verktøy og data
- A2A kobler en agent til en annen agent

Det er særlig nyttig når den andre agenten allerede har:

- egen logikk
- egne workflows
- egne verktøy
- eller er bygget i et annet rammeverk

I praksis er dette relevant når du bygger en portefølje av agenter i stedet for én stor altmulig-agent.

| MCP | A2A |
| --- | --- |
| Verktøytilgang | Agent-til-agent kommunikasjon |
| Kobler LLM til funksjoner og data | Kobler agenter på tvers av plattformer |
| Én host → mange servere | Mange agenter → samarbeid via manifester |

I Microsoft Foundry finnes dette som en egen A2A tool i preview. I Copilot Studio kan A2A-agenter kobles på som connected agents i preview.

## A2A i praksis

| Begrep | Hva det betyr |
| --- | --- |
| Agent Card | Et maskinlesbart “visittkort” som beskriver agentens kapabiliteter, endepunkt og auth |
| Task | Selve oppgaven som sendes fra én agent til en annen |
| Artifacts | Resultater som kommer tilbake, for eksempel tekst, filer eller strukturert data |
| Discovery | Orkestratoren kan finne relevante agenter uten hardkoding |

Hovedidé:

- MCP gjør verktøy oppdagbare for agenten
- A2A gjør andre agenter oppdagbare for agenten

Når passer det?

- når en annen agent allerede eier sitt domene, sine verktøy og sin logikk

## Hva må du styre når flere agenter samarbeider?

Når flere agenter samarbeider, må du styre mer enn bare hva hver agent gjør alene.

| Du må styre | Hvorfor |
| --- | --- |
| Gode beskrivelser | Orkestratoren velger topics, tools og agenter ut fra metadata |
| Kontekstoverføring | Neste agent må få full samtalehistorikk eller et avgrenset oppdrag, avhengig av behov |
| Deterministiske handoff | Noe routing bør være eksplisitt, ikke overlatt til modellen |
| Prioritet og betingelser | Flere byggeklosser kan reagere på samme behov |
| Sporbarhet og logging | Viktig når flere systemer og agenter er involvert |
| Human in the loop | Kreves ofte når flere agenter kan trigge handlinger |

Dette er et godt eksempel på at multi-agent er like mye et styringsproblem som et designproblem.

## Vanlige fallgruver

Noen typiske feil går igjen:

- for mange agenter gir mer forsinkelse og mer kompleksitet enn verdi
- svake beskrivelser gjør at feil agent velges
- uklare grenser mellom hovedagent og underagenter gjør feilsøking vanskelig
- eksterne agenter krever tydelig ansvar for data, sikkerhet og godkjenning
- siteringer og sporbarhet kan bli svakere når svar går gjennom flere ledd
- uten human in the loop kan flere agenter gjøre feil uten at noen stopper dem

Derfor er det viktig å starte med et enkelt mønster, og bare øke kompleksiteten når det faktisk løser et problem.

## Lab

I denne laben kan du jobbe i to spor.

### Spor A – vurder om du trenger multi-agent

| Spørsmål | Notater |
| --- | --- |
| Har løsningen tydelige delområder eller roller? | |
| Har ulike deler forskjellige verktøy, data eller eiere? | |
| Trenger du flere perspektiver eller review før svar? | |
| Holder én agent hvis du rydder i instruksjoner og verktøy? | |

### Spor B – skisser en enkel agentarkitektur

1. Identifiser 2–3 domener i agentideen din
2. Velg et mønster som passer, for eksempel sekvens eller manager/orchestrator
3. Beskriv hvilke deler som kunne vært egne child agents eller connected agents
4. Noter hvor du trenger human in the loop

Målet med laben er ikke å bygge hele arkitekturen ferdig, men å trene på å se når oppdeling gir verdi.

## Oppsummering

Etter denne modulen bør du sitte igjen med:

1. En forståelse av hvorfor og når multi-agent kan være nyttig
2. Et språk for å beskrive mønstre som sekvens, handoff, group chat og orchestrator
3. En bedre forståelse av hvordan orkestrering, topics, child agents, connected agents og A2A henger sammen

[Forrige: Modul 4](./04-prompt-engineering-og-kvalitet.md) | [Til hovedside](../README.md) | [Neste: Modul 7](./07-sikkerhet-governance.md)

## Lenker

- [Copilot Studio generative orchestration](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-orchestration)
- [Add other agents in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)
- [Create and edit topics](https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics)
- [Microsoft Foundry agents overview](https://learn.microsoft.com/azure/foundry/agents/overview)
- [Microsoft Agent Framework orchestrations](https://learn.microsoft.com/agent-framework/workflows/orchestrations/)
- [A2A tool in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent)
