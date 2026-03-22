# Sesjon 1: Velkommen og introduksjon til AI-agenter

> **Varighet:** 20 min presentasjon + 10 min lab  
> **Kilder:** [Copilot Studio 101 – Copilot Studio Dude](https://youtube.com/watch?v=3-tT9jIDGnQ), Microsoft Learn

## Læringsmål

- Forklare hva en AI-agent er og hvordan den skiller seg fra en chatbot
- Beskrive de tre agenttypene: Retrieval, Task og Autonomous
- Identifisere business case og verdidrivere for agenter i egen organisasjon

## Hva er en AI-agent?

En agent er **evolusjonen av business process automation + conversational bots**. Generativ AI gjør det mulig å blande automatisering og samtale i én opplevelse.

### Chatbot vs AI-agent

| Egenskap | Tradisjonell chatbot | AI-agent |
|----------|---------------------|----------|
| Logikk | If/then-regler | LLM-basert orkestrering |
| Datagrunnlag | Forhåndsdefinerte svar | Dynamisk søk over egne data (RAG) |
| Handlinger | Ingen eller hardkodet | Kaller APIer, verktøy, prosesser |
| Beslutningstaking | Regelbasert | Tar egne beslutninger innenfor rammer |
| Vedlikehold | Oppdater hvert enkelt svar | Oppdater instruksjoner og kunnskapskilder |
| Kanaler | Typisk én kanal | Multi-kanal (Teams, web, telefon m.m.) |

## Tre agenttyper

> **Gyllen regel:** Ikke start med autonomous – det er den mest avanserte typen.

| Type | Hva den gjør | Eksempel |
|------|-------------|---------|
| **Retrieval** | "ChatGPT grounded on your data" – søker og svarer | FAQ-agent over SharePoint-dokumenter |
| **Task** | Skriver til backend, bruker APIer/verktøy | Bestillings-agent som oppretter ordre i Dynamics 365 |
| **Autonomous** | Tenk jobbeskrivelse: hva er jobben, hvordan, hvilke verktøy, NÅR (trigger) | Faktura-agent som overvåker innboks og bokfører automatisk |

### Autonomous ≠ BPA

- BPA = if this, then that (regelbasert)
- Autonomous agent = tar egne beslutninger basert på kunnskap og verktøy
- Autonom agent trenger: **jobb** → **instruksjoner** → **verktøy** → **trigger**

## Business case

| Datapunkt | Kilde |
|-----------|-------|
| **1,3 milliarder** AI-agenter innen 2028 | IDC |
| Agenter i organisasjonen deles i tre kategorier: **Microsoft-agenter**, **partneragenter** og **egne agenter** | Microsoft |

**Verdidrivere:**
- Redusert manuelt arbeid på repetitive oppgaver
- Raskere responstid mot kunder og ansatte
- Skalerbar kunnskapsdeling (RAG over interne dokumenter)
- Frigjør ansatte til arbeid som krever menneskelig vurdering

## Lab: Definer ditt agentprosjekt (10 min)

Fyll ut for ditt eget case:

| Felt | Ditt svar |
|------|-----------|
| Agentens navn | |
| Hvilken type? (Retrieval / Task / Autonomous) | |
| Hvem er brukeren? | |
| Hvilket problem løser den? | |
| Hvilke datakilder trenger den? | |
| Hvilke handlinger skal den utføre? | |
| Kanal (Teams, web, telefon)? | |

**Starttips:** Begynn med Retrieval eller Task – bygg ut til Autonomous over tid.

## Lenker

- [Hva er Copilot Studio?](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [AI-basert orkestrering i Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview)
