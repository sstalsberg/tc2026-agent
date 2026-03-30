# Modul 2: Kom i gang med en agent

Målet er å få oversikt over Microsofts agentøkosystem og velge en fornuftig plattform for agenten.

## Læringsmål

- Forstå forskjellen mellom de viktigste agentplattformene i Microsoft-økosystemet
- Velge en byggeflate som passer agenten din

## Hvorfor er plattformvalg viktig?

Samme agentidé kan bygges på flere måter. Plattformvalget påvirker blant annet:

- hvor mye kode som trengs
- hvilke datakilder og verktøy som er tilgjengelige
- hvilke kanaler agenten kan publiseres til
- hvilke sikkerhets- og styringsmekanismer du får med
- hvem som faktisk kan bygge og forvalte agenten

## Microsofts agentøkosystem

| Plattform | Hva den er | Når den passer |
| --- | --- | --- |
| Agent Builder i M365 Copilot | Deklarative agenter direkte i Microsoft 365 Copilot | Rask prototyping og personlig eller teamnær produktivitet |
| SharePoint agents | Agenter bygget direkte over SharePoint-områder, biblioteker, mapper eller filer | Når agenten skal svare over et avgrenset dokumentsett |
| Copilot Studio | Low-code og pro-code plattform for egne agenter | Når du vil bygge en agent for team, prosess eller fagområde |
| Microsoft 365 Agents SDK | Agentutvikling med kode for M365 Copilot, Teams, web og egne flater | Når du trenger egen kode, egne API-er eller egendefinert appopplevelse |
| Microsoft Foundry Agent Service | Agenttjeneste i Azure med low-code og pro-code valg | Når du vil bygge, drifte, publisere og skalere i Azure |
| Microsoft Agent Framework (preview) | Rammeverk for orkestrering, workflows og multi-agent | Når flere spesialiserte agenter må samarbeide |

Microsoft tilbyr mange måter å bygge agenter på. Enten det er for personlig produktivitet, forretningsbrukere, eller utviklere.

## Tre raske innganger i Microsoft 365

For mange virksomheter er disse tre inngangene de mest aktuelle å starte med:

|  | Agent Builder i M365 Copilot | SharePoint agents | Copilot Studio |
| --- | --- | --- | --- |
| Hvem det er for | Sluttbrukere og superbrukere | Innholdseiere og fagmiljøer | Makers, konsulenter og utviklere |
| Hvor du bygger | Inne i Microsoft 365 Copilot | Fra et SharePoint-område, bibliotek, mappe eller filsett | Egen byggeflate |
| Typisk bruk | Enkel deklarativ agent for en rolle eller et team | Agent over et konkret dokumentsett eller prosjektrom | Agent med egne kanaler, verktøy, kunnskap og styring |
| Styrke | Lav terskel og rask oppstart | Kort vei fra innhold til nyttig agent | Mer kontroll og flere utvidelsesmuligheter |

## Tre byggevalg med mer kontroll

|  | Microsoft 365 Agents SDK | Microsoft Foundry Agent Service | Microsoft Agent Framework (preview) |
| --- | --- | --- | --- |
| Primært fokus | Bygge agent-apper for M365 Copilot, Teams, web og egne flater | Bygge, kjøre, drifte og publisere agenter i Azure | Orkestrere agenter, verktøy og workflows i kode |
| Velg dette når | Kanal og brukeropplevelse på tvers av flater er viktigst | Managed runtime, sikkerhet, verktøy og observability er viktigst | Flere agenter må samarbeide eller følge en tydelig flyt |
| Du eier selv | Appkode, integrasjoner og kanalopplevelse | Agentlogikk, konfigurasjon og Azure-oppsett | Orkestreringslogikk og hvordan agentene samarbeider |
| Typisk styrke | Tett på Teams og M365 Copilot | RBAC, tracing, verktøy, publisering og skalering | Multi-agent, state, human-in-the-loop og eksplisitte workflows |
| Typisk tradeoff | Mer ansvar for app og integrasjoner | Tettere kobling til Azure-plattformen | Ikke en ferdig kanalflate eller driftstjeneste alene |

## Hvordan kan du velge riktig?

Valget av byggeflate bør henge sammen med behovet ditt:

- **Agent Builder** når du vil teste en idé raskt inne i Microsoft 365
- **SharePoint agents** når dokumentgrunnlaget er tydelig avgrenset
- **Copilot Studio** når du vil bygge en ordentlig virksomhetsagent
- **Microsoft 365 Agents SDK** når du trenger kode og kontroll over appopplevelsen
- **Microsoft Foundry** når du trenger Azure-plattform, agentdrift og mer avansert styring
- **Agent Framework** når du trenger eksplisitt orkestrering og samarbeid mellom flere agenter

## Vår første agent: Pappavits-agenten

For å lære plattformen og tenkemåten starter vi med en veldig enkel agentidé: en pappavits-agent som skal lage korte, trygge pappa-vitser på norsk bokmål.

| Punkt | Første versjon |
| --- | --- |
| Hvem skal bruke den? | Deltakerne på TechnoCamp |
| Primær oppgave | Lage korte pappa-vitser på norsk |
| Verdi | Gir en enkel og underholdende opplevelse for deltakerne |

## Lab: Opprett den første agenten

Fokuser på disse enkle spørsmålene:

- Hva skal agenten hete?
- Hvem er den for?
- Hva er den primære oppgaven?
- Hva er den enkle verdien den skal gi?

## Oppsummering

Etter denne modulen bør du sitte igjen med fire ting:

1. En oversikt over de viktigste agentplattformene i Microsoft-økosystemet
2. En forståelse av forskjellen mellom raske innganger og mer avanserte byggevalg
3. En enkel modell for å velge passende plattform ut fra behov
4. Opprettet en første agentidé og testet i en av plattformene

## Lenker

- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)
- [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)

## Kildegrunnlag for bilder

- Skjermbilde: «Copilot Studio overview» (Microsoft Learn): https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio
