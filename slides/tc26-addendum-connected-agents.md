---
marp: true
theme: default
paginate: true
title: Addendum - Connected Agents
---

<!-- _class: lead -->
# Addendum
## Connected Agents
### Mulige ekstra slides

---

# Når holder en agent, og nar trenger du connected agents?

| Velg en agent nar ... | Velg connected agents nar ... |
| --- | --- |
| Oppgaven har tydelig intent og avgrenset scope | Oppgaven kan deles i tydelige deldomener |
| Verktøyene er kjent pa forhand | Ulike agenter trenger ulike data, tools eller policyer |
| Du vil ha raske svar med lav latency | Flere spesialister ma jobbe i serie eller parallelt |
| Ett team eier hele loesningen | Flere team eier hver sin del |
| Du kan evaluere hele flyten som ett system | Du vil gjenbruke eksisterende agenter og evals |

Huskeregel:

- connected agents er et svar paa et brukerbehov
- ikke et maal i seg selv

---

# Copilot, Work IQ og det bredere agentokosystemet

Copilot er ikke bare en egen agentflate.
Det kan ogsa delta i et stoerre connected-agent-okosystem.

| Rolle | Hva det betyr |
| --- | --- |
| `Copilot som UI` | Brukeren moeter ett kjent grensesnitt i M365 |
| `Work IQ` | Gir tilgang til arbeidskontekst som dokumenter, e-post, moeter og relasjoner |
| `Copilot som MCP / A2A-deltaker` | Eksterne agenter kan bruke Copilot og Work IQ i stoerre flyter |
| `Eksterne agenter i Copilot` | Copilot kan utvides med flere spesialiserte agenter |

Poenget er:

- Copilot kan vaere inngangen til mange agenter
- men Copilot kan ogsa selv vaere en del av et stoerre agentsystem

---

# Hvordan connected agents bor oppleves for brukeren

Maalet er ikke at brukeren skal styre et helt agentkart selv.
Maalet er ett samlet, begripelig arbeidsforloep.

| Prinsipp | Hvorfor det betyr noe |
| --- | --- |
| En primar agentflate | Brukeren slipper aa velge mellom mange agenter selv |
| Subagenter kan vaere skjult | Reduserer kompleksitet i opplevelsen |
| Hovedagenten oppsummerer | Brukeren faar ett samlet svar |
| Sporbarhet ma vises | Brukeren og drift maa kunne se hvilke agenter som bidro |
| Human in the loop ved behov | Viktig nar flere agenter kan trigge sensitive handlinger |

Designregel:

- skjul intern kompleksitet
- vis ansvar, kilder og kontrollpunkter

