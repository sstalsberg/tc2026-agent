# Modul 1: Introduksjon til AI-agenter

Denne sesjonen gir et felles språk for hva en AI-agent er, hvilke typer agenter som finnes, når de passer godt, og hvordan du kan beskrive din første agentidé.

[Til hovedside](../README.md) | [Neste: Modul 2](./02-agentplattformer.md)

## Læringsmål

- Forklare hva en AI-agent er og hvilke deler den består av
- Skille mellom retrieval-, task/action- og orkestratoragenter
- Vurdere når en agent passer godt, og når andre løsninger er bedre
- Beskrive en første agentidé med målgruppe, oppgave og verdi

## Hva er en AI-agent?

En AI-agent er et intelligent program som bruker en eller flere språkmodeller til å forstå kontekst, ta beslutninger og utføre handlinger ved hjelp av verktøy for en bruker eller et system.

Det viktige er at agenten ikke bare genererer tekst. Den kan også:

- forstå naturlig språk og brukerintensjon
- bruke instruksjoner, kunnskap og kontekst for å velge hva den bør gjøre
- hente informasjon eller utføre handlinger i andre systemer

## Hva består en agent av?

| Nøkkeldel | Rolle |
| --- | --- |
| Språkmodell | Forstår språk, resonnerer og svarer |
| Instruksjoner | Setter rolle, grenser og prioriteringer |
| Kunnskap | Gir tilgang til dokumenter, data og kontekst |
| Verktøy | Lar agenten gjøre noe i systemer og API-er |
| Minne / state | Husker kontekst og tidligere interaksjoner |
| Orkestrering (planlegging) | Velger neste steg og rekkefølge |
| Trigger | Starter fra brukerinput eller en hendelse |

Ikke alle agenter trenger alle delene. En enkel retrieval-agent klarer seg ofte med modell, instruksjoner og kunnskap, mens mer sammensatte agenter i tillegg trenger verktøy, state og orkestrering.

## Agenttyper med eksempler

| Type | Hva den gjør | Eksempel |
| --- | --- | --- |
| Retrieval | Leser og svarer over egne data | FAQ-agent over SharePoint-dokumenter |
| Task / Action | Utfører handlinger i systemer | Bestillingsagent som mottar og oppretter ordre i et CRM-system |
| Orkestrator | Planlegger og kombinerer flere steg | Fakturaagent som overvåker innboks og bokfører |

## Når passer en agent godt?

| Når det passer godt | Når det ikke passer |
| --- | --- |
| Variabelt eller uklart behov | Helt faste regler og skjemaer |
| Kombinasjon av kunnskap og handling | Krav om deterministisk og 100 % korrekt resultat |
| Flere steg før svar eller utførelse | Irreversible handlinger uten godkjenning |
| Dialog, oppfølging og kontekst | Dårlige eller motstridende datakilder |

## Hvorfor satse på AI-agenter?

I presentasjonen brukes IDC-estimatet om **1,3 milliarder AI-agenter innen 2028** som et bilde på retningen i markedet.

De viktigste verdidriverne er:

- **Produktivitet:** mindre manuelt arbeid og raskere oppfølging
- **Kvalitet:** mer konsistente svar og færre feil
- **Compliance:** bedre sporbarhet, logging og tilgangsstyring
- **Skalering:** samme mønster kan brukes på tvers av team og prosesser

For Atea betyr dette både interne gevinster og nye leveranser til kunder.

## Tre skift i måten vi jobber på

- AI-assistenten blir et nytt grensesnitt for arbeid
- Agenter orkestrerer flere steg og handlinger
- Et lag av AI kobler sammen dokumenter, møter, chat og forretningsdata

Verdien flytter seg fra å lete i systemer til å få svar og utført oppgaver direkte i arbeidsflyten.

## Hvordan Microsoft tenker virksomheter tar i bruk agenter

Microsoft beskriver typisk tre kilder til agenter i en virksomhet:

- Microsoft-agenter
- partneragenter fra leverandører som ServiceNow, SAP og Salesforce
- egne agenter bygget av virksomheten på egne eller tredjeparts plattformer

Poenget er ikke bare å bygge én agent, men å forstå hvordan ulike agenttyper inngår i en samlet agentportefølje.

## Noen forslag til agentideer

| Idé | Typisk verdi | Mulig plattform |
| --- | --- | --- |
| Tilbudsassistent | Raskere tilbudsarbeid | Copilot Studio |
| Onboarding-guide | Raskere svar til nyansatte | Copilot Studio |
| Driftsvarsel-agent | Raskere oppfølging av hendelser | Microsoft AI Foundry |
| Kompetanseassistent | Finne riktig konsulent raskere | Copilot Studio |
| Møteforbereder | Bedre forberedte kundemøter | Microsoft 365 Agents SDK |
| Teknisk FAQ-bot | Skalerbar kunnskapsdeling | Copilot Studio |

## Diskusjon i grupper

- Hvilken oppgave gjør du i dag som en agent kunne løst 80 % av?
- Hva er den største risikoen ved å la en agent handle autonomt i din virksomhet?
- Copilot Studio vs. å kode selv: hva foretrekker du, og hvorfor?
- Hvis agentbruk vokser kraftig de neste årene, hvilke muligheter, utfordringer og trusler skaper det for IT-bransjen?

## Lab: Beskriv din første agentidé

| Punkt | Notater |
| --- | --- |
| Navn på agenten |  |
| Hvem skal bruke den? |  |
| Primær oppgave – hvilken konkret handling eller verdi skal agenten levere? |  |
| Forretningsverdi |  |

Gruppen gir tilbakemelding på hver idé:

- Er problemet agenten skal løse tydelig?
- Er agentens målgruppe definert?

## Hva har vi gått igjennom i denne modulen?

1. Kan forklare hva en AI-agent er og hvilke deler den består av
2. Skiller mellom ulike agenttyper og når de passer godt
3. Beskriver en første agentidé med målgruppe, oppgave og verdi

[Til hovedside](../README.md) | [Neste: Modul 2](./02-agentplattformer.md)

## Lenker

- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [Microsoft AI Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)
