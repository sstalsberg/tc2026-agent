# Sesjon 2: Kom i gang – plattformer og første agent

> **Varighet:** 20 min presentasjon + 10 min lab  
> **Kilder:** [Copilot Studio 101](https://youtube.com/watch?v=3-tT9jIDGnQ), [Instructions & Descriptions](https://youtube.com/watch?v=hpsmUZviqhU), Microsoft Learn

## Læringsmål

- Forstå Microsofts agentøkosystem og hvor ulike plattformer passer
- Kjenne hovedkomponentene i Copilot Studio
- Forklare generative orchestration (plan → execute → unified response)
- Skille mellom instructions og descriptions
- Opprette din første agent

## Microsofts agentøkosystem

```
Copilot Chat → M365 Copilot → Microsoft Agents (extend) → Copilot Studio (build) → Azure AI Foundry → Third-party (MCP/A2A)
```

| Lag | Hva | Typisk bruker |
|----|-----|---------------|
| **Copilot Chat** | Gratis, enterprise-safe ChatGPT (web-grounded, ingen datadeling tilbake) | Alle ansatte |
| **M365 Copilot** | + Office Graph, personlig produktivitetsassistent | Lisensierte brukere |
| **Microsoft Agents** | Extend Copilot Chat / M365 Copilot med egne agenter | Utviklere / makers |
| **Copilot Studio** | Bygg standalone-agenter, full enterprise-kontroll | Pro-dev / makers |
| **Azure AI Foundry** | Fine-tuning, industri-modeller, kodebaserte agenter | Utviklere |
| **Third-party (MCP/A2A)** | Integrer eksterne agenter og verktøy | Alle plattformer |

> *"Should I use Copilot Studio or Azure AI Foundry? **YES. Use both.** Bruk verktøyene der de passer."*

### Copilot Studio vs Copilot Studio Light

| | Copilot Studio (full) | Copilot Studio Light |
|-|----------------------|---------------------|
| Målgruppe | Enterprise-utvikling | Citizen developer |
| Tilgang | Egen portal | Inne i M365 Copilot |
| Funksjoner | Topics, Tools, Channels, Policies, full kontroll | Declarative agents over Office Graph |
| Bruksområde | Standalone + extend | Begrens data i M365 Copilot |

## Copilot Studio = Conversational Orchestrator

Tenk på Copilot Studio som en **router i et IP-nettverk** – den tar inn en forespørsel og ruter til riktig komponent: et Topic, et verktøy, en kunnskapskilde, en child agent, en Azure AI Foundry-agent, eller en MCP-server.

## Hovedkomponenter i Copilot Studio

| Komponent | Hva det er | Nøkkeldetalj |
|-----------|-----------|---------------|
| **Topics** | Avansert modus – full kontroll som maker | Scripted flows, triggers, noder. Kun i full Copilot Studio |
| **Knowledge** | SaaS-basert RAG | SharePoint, filer, nettsider, Dataverse, SQL, Dynamics 365, Salesforce m.m. |
| **Tools** | APIer, prompts, MCP, connectors | 1500+ ferdige connectors, REST API, Power Automate flows, Computer Use |
| **Analytics** | Overvåking og forbedring | Effektivitet, brukertilfredshet, verktøybruk, evaluerings-sett |
| **Channels** | Brukerens kontaktpunkt | Teams, web, telefon, WhatsApp, Facebook Messenger, Slack, M365 Copilot |
| **Variables** | Data i conversation state | Topic-scope, global, cross-session. Ikke det samme som LLM-minne |

## Generative Orchestrator

```
Brukermelding
  → Orchestrator ser ALT: topics, tools, knowledge
    → Genererer en plan
      → Utfører plan (kan bruke flere verktøy i sekvens)
        → Unified Response Layer → Én samlet respons til brukeren
```

Hvis planen feiler → **Fallback system topic** → "Beklager, jeg forstod ikke" → eventuell eskalering.

## Instructions vs Descriptions

| | Instructions | Descriptions |
|-|-------------|-------------|
| **Formål** | Hvordan agenten skal *oppføre seg* | Hvordan noe skal *brukes* |
| **Eksempel** | "Svar alltid på norsk", "Aldri tilby fileksport" | "Denne agenten håndterer kontoinformasjon" |
| **Hvor** | Overview, child agents, topics | Verktøy, child agents, inputs |

**Tre tips fra praksis:**
1. **Start enkelt** – ikke skriv verbose instruksjoner fra start. Nudge med testing
2. **Bruk child agents** – flytt instruksjoner ned til grupper av verktøy i stedet for alt i overview
3. **Konsistent navngivning** – inputs/outputs må ha samme navn for at dynamic chaining skal fungere

## Plattformvalg

| Kriterium | Copilot Studio | Azure AI Foundry | Agents SDK (kode) | Semantic Kernel / LangChain |
|-----------|---------------|-----------------|-------------------|---------------------------|
| Målgruppe | Makers + pro-dev | Utviklere | Utviklere | Utviklere |
| Kodegrad | Low-code / pro-code | Pro-code | Full kode | Full kode |
| RAG | Innebygd (SaaS) | Bygg selv / AI Search | Bygg selv | Bygg selv |
| Orkestrering | Innebygd generativ | Azure-tjenester | Egen logikk | Egen logikk |
| Multi-agent | Child + Connected agents | Agent-patterns | Custom | Custom |
| Kanaler | 10+ ferdige | Custom | Custom | Custom |
| MCP-støtte | Ja (innebygd) | Via kode | Via kode | Via kode |
| Governance | Power Platform (DLP, Entra, Purview) | Azure (RBAC, VNet) | Azure / egendefinert | Egendefinert |
| Best for | Rask start, enterprise, multi-kanal | Spesialiserte AI-modeller, fine-tuning | Full kontroll, eksisterende kodebase | Fleksibilitet, open-source |

## Lab: Opprett første agent (10 min)

1. Gå til [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
2. Klikk **Create** → beskriv agenten med én setning (f.eks. "Hjelp ansatte finne info i personalhåndboken")
3. Vent til agenten er provisionert (ca. 30 sek)
4. Legg til **Knowledge** → velg **Public website** eller **File** → legg inn en kilde
5. Under **Settings** → slå av "Use general knowledge" for å unngå hallusinering
6. Test i chat-panelet: still et spørsmål som kilden kan svare på
7. Sjekk at svaret har **citations** tilbake til kilden

**Bonus:** Legg til et verktøy (connector) – prøv MSN Weather for en enkel test.

## Lenker

- [Hva er Copilot Studio?](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [AI-basert orkestrering](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview)
- [Azure AI Foundry – Agents](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview)
- [MCP i Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp)
