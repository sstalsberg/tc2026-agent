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
