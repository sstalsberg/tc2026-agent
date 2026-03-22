# Sesjon 5 – Agentarkitektur og multi-agent

**Dag 2 | 20 min presentasjon + lab**

## Læringsmål

- Forstå forskjellen mellom child agents og connected agents
- Kjenne arkitekturmønstrene Hub-and-spoke, Pipeline og Collaborative
- Vite når én agent holder og når du trenger multi-agent
- Kjenne A2A-protokollen og hva den muliggjør

## 5.1 Child agents vs. connected agents

| | Child agent | Connected agent |
|---|---|---|
| **Plassering** | Embedded i hovedagenten | Standalone, egen applikasjon |
| **State** | Deler conversation state med forelder | Deler IKKE state – egen minnekontekst |
| **Innhold** | Tools + knowledge + instructions som komponent | Full agent med egen auth/settings |
| **Oppdatering** | Du importerer og kontrollerer versjon | Endringer propagerer automatisk |
| **Gjenbruk** | Komponent – importeres i flere agenter | Integreres via endepunkt |
| **Bygges med** | Copilot Studio | Copilot Studio, Fabric, Azure Foundry, M365 SDK, A2A |

**Child agents** – embedded, solution-aware, gjenbrukbare. Pakker verktøy + kunnskap med egne instruksjoner. Orkestreres kun ved behov. *«Mest underrated feature i Copilot Studio.»*

**Connected agents** – standalone applikasjoner med egen auth, settings og state. Endringer propagerer uten deploy: *«If someone makes a change to that connected agent, the changes go in without you pushing a button.»* Ikke microservice-arkitektur – tenk integrasjon.

## 5.2 Arkitekturmønstre

### Hub-and-spoke
```
          ┌──────────────┐
          │ Orchestrator │
          └──────┬───────┘
       ┌─────────┼─────────┐
       ▼         ▼         ▼
    HR-agent  IT-agent  Finans-agent
```
Orchestrator ruter til spesialist. Klare grenser, men orchestrator kan bli flaskehals.

### Pipeline
```
Bruker → [Hent data] → [Analyser] → [Rapport] → Svar
```
Sekvensiell kjede. Enkel å forstå, men feiler én agent stopper alt.

### Collaborative
Parallell behandling → koordinator sammenstiller. Raskere, men kompleks synkronisering.

## 5.3 Én agent vs. multi-agent

| Dimensjon | Én agent | Multi-agent |
|---|---|---|
| Verktøy | < 10–15 tools | 30+ tools, tydelige domener |
| Ansvarsområde | Én klar rolle | Flere team eier kapabiliteter |
| Latency | Lavest | Ekstra rundturer |
| Feilsøking | Enkelt | Komplekst – feil i kjeder |
| Vedlikehold | Alt på ett sted | Distribuert eierskap |

**Tommelregel:** Start med én agent. Splitt først når kompleksiteten krever det.

## 5.4 A2A-protokollen

- Åpen protokoll (Google + Microsoft mfl.) for agent-til-agent på tvers av plattformer
- **Agent Card:** JSON-manifest – kapabiliteter, endepunkt, auth (agentens visittkort)
- **Task → Artifacts:** Arbeidsenhet mellom agenter med strukturert output
- Manifest-drevet oppdagelse: orchestrator finner agenter automatisk
- MCP + A2A utfyller hverandre: MCP = verktøytilgang, A2A = agent-til-agent

## Lab

**Spor A – Multi-agent (avansert):**
1. Identifiser 2–3 domener i din agentløsning
2. Velg mønster (hub-and-spoke anbefales for start)
3. Opprett child agent med smal instruksjon + egne verktøy
4. Koble til hovedagent og test delegering

**Spor B – Poler enkeltagent:**
1. Legg til ny kunnskapskilde
2. Forbedre svarformat med instruksjoner
3. Kjør testsettet fra sesjon 4 på nytt
4. Peer-review med en annen deltaker

## Lenker

- [Multi-agent patterns – Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/multi-agent-patterns)
- [AI agent design patterns – Azure Architecture](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns)
- [Connected agents – Azure Foundry](https://learn.microsoft.com/en-us/azure/foundry-classic/agents/how-to/connected-agents)
- [A2A Protocol](https://a2aprotocol.org)
