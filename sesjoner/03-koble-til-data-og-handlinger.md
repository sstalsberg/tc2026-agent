# Sesjon 3: Koble til data og handlinger

> 20 min presentasjon + lab

## Læringsmål

- Forstå de fem lagene i en agent
- Forklare RAG-pipelinen og hva som skjer i hvert steg
- Kjenne til de ulike verktøytypene (prompts, flows, connectors, REST, MCP)
- Forstå MCP-protokollen og hvorfor den er viktig

---

## Agentens fem lag

```
┌─────────────────────────────┐
│  5. Publisering              │  Teams, web, telefoni, WhatsApp …
├─────────────────────────────┤
│  4. Autonomi                 │  Triggere, planer, selvstendige beslutninger
├─────────────────────────────┤
│  3. Verktøy                  │  APIs, flows, MCP, connectors, prompts
├─────────────────────────────┤
│  2. Kunnskap                 │  RAG – søk i SharePoint, filer, SQL, web …
├─────────────────────────────┤
│  1. Instruksjoner            │  Oppførsel, guardrails, formatering
└─────────────────────────────┘
```

Hvert lag bygger på det forrige. Start med instruksjoner og kunnskap før du legger til verktøy og autonomi.

---

## RAG forklart

```
Bruker-spørsmål
  → Embedding (tekst → vektor)
    → Vektorsøk (finn relevante chunks)
      → Kontekst + spørsmål → LLM
        → Svar med siteringer
```

**Nøkkelpunkt:** Copilot Studio ingester IKKE data – den søker hos kilden (Bing for web, Graph for SharePoint, osv.). Kvaliteten på indeksering hos kilden påvirker kvaliteten på svaret direkte.

---

## Knowledge pipeline (7 steg)

| Steg | Navn | Hva skjer |
|------|------|-----------|
| 1 | Message moderation | Sjekker om brukerens melding er trygg å behandle |
| 2 | Query optimization | Omskriver spørsmålet med samtalekontekst ("Hvor lang er den?" → "Hvor lang er riven jeg snakker om?") |
| 3 | Information retrieval | Søker hos kilden – **ingen inngest** – bruker kildens egen søketjeneste |
| 4 | Summarization | LLM oppsummerer søkeresultatene med Responsible AI-guardrails |
| 5 | Provenance validation | Bekrefter at svaret stammer fra kildedataene → lager siteringer |
| 6 | Summary moderation | Dobbeltsjekker svaret for uønsket innhold |
| 7 | Response | Returnerer svar + siteringer til bruker, logger alt |

---

## Verktøytyper

| Type | Beskrivelse | Typisk bruk |
|------|-------------|-------------|
| **Prompt** | Kall en LLM med egne instruksjoner; støtter flere modeller | Oppsummering, klassifisering, generering |
| **Flow** (Power Automate) | Visuell prosessautomatisering med inputs/outputs | Godkjenninger, dataskriving, integrasjoner |
| **Computer Use** | Virtuell maskin klikker gjennom UI (preview) | Legacy-apper uten API |
| **Custom Connector** | 1 500+ ferdige + bygg egne (Power Platform) | SaaS-integrasjoner |
| **REST API** | Direkte HTTP-kall til RESTful endepunkter | Egne backend-systemer |
| **MCP** | Model Context Protocol – åpen standard for AI-verktøy | Se utvidet seksjon under |

---

## MCP – Model Context Protocol

### Hva er MCP?

- Åpen protokoll startet av Anthropic, adoptert av Microsoft, OpenAI m.fl.
- Kalles "USB for AI" – én standard for å koble LLM-apper til verktøy og data
- Bygger på JSON-RPC 2.0 med stateful sessions
- Inspirert av LSP (Language Server Protocol): LSP standardiserte IDE-språkstøtte → MCP standardiserer AI-verktøyintegrasjon

### Arkitektur

```
┌──────────────┐     ┌──────────┐     ┌──────────────┐     ┌────────────────┐
│  Host        │────▶│  Client  │────▶│  Server      │────▶│  Verktøy/Data  │
│  (LLM-app)   │     │  (1:1)   │     │  (lokal/sky) │     │                │
└──────────────┘     └──────────┘     └──────────────┘     └────────────────┘
```

- **Host:** LLM-applikasjonen (Copilot Studio, Claude Desktop, VS Code …)
- **Client:** Connector i host-appen, én klient per server
- **Server:** Eksponerer capabilities – lokal prosess eller remote tjeneste

### Tre byggeklosser

| Byggekloss | Forklaring | Eksempel | Kontrollert av |
|------------|-----------|----------|----------------|
| **Tools** | Funksjoner LLM aktivt kan kalle | Søk flyreiser, send melding, opprett sak | Modellen |
| **Resources** | Passive datakilder (read-only) | Les dokumenter, database-schema, kalender | Applikasjonen |
| **Prompts** | Gjenbrukbare instruksjonsmaler | Ferdigdefinerte arbeidsflyter, maler | Brukeren |

### MCP i Copilot Studio

- Hvert verktøy fra MCP-server → automatisk én **action** i Copilot Studio
- Navn, beskrivelse, inputs/outputs arves fra serveren
- **Dynamisk oppdatering:** endringer på server reflekteres automatisk
- Generative orchestration MÅ være aktivert
- Forhåndsbygde Microsoft MCP-connectors: Dataverse, Dynamics 365 (Sales, Finance, Supply Chain, Service), Fabric

### Tre steg for å ta i bruk MCP

1. **Opprett MCP-server** (via SDK – TypeScript, Python, C# m.fl.)
2. **Publiser som connector** (YAML-schema)
3. **Legg til i agent** → "Add an action" → søk etter MCP-server

### Eksempler på MCP-servere

GitHub · Slack · Salesforce · Snowflake · Figma · Filsystem · Kalendere · PostgreSQL · Google Drive

### Hvorfor viktig for konsulenter

- **Bygg én gang, bruk overalt** – samme integrasjon fungerer i alle agenter/plattformer
- Enterprise governance: Virtual Network, DLP, auth – alt tilgjengelig
- Sentralisert MCP-proxy gir kontroll og observability
- Kunder vil etterspørre MCP-støtte – konkurransefordel å beherske dette nå

---

## Lab: Utvid agent med datakilde eller handling

1. Legg til en kunnskapskilde (f.eks. offentlig nettside eller fil) i agenten din
2. Test med 3 spørsmål – vurder siteringer og svar-kvalitet
3. Legg til et verktøy (f.eks. en prompt-action eller connector)
4. Still et spørsmål som krever at agenten bruker verktøyet
5. Inspiser planleggeren (rationale) for å forstå hvorfor verktøyet ble valgt

---

## Microsoft Learn

- [Koble til kunnskap i Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview) – RAG-pipelinen og kunnskapskilder
- [MCP i Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp) – Oppsett og bruk av MCP-servere
- [MCP-spesifikasjon](https://modelcontextprotocol.io/specification/2025-06-18/architecture) – Offisiell arkitekturdokumentasjon
- [Prompt Engineering (Azure OpenAI)](https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering) – Best practices for prompts
