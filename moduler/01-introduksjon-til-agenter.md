# Modul 1: Introduksjon til AI-agenter

Denne sesjonen handler om å forstå hva en agent er, hvilke typer agenter som finnes, når de passer godt, og hvordan du kan begynne å tenke på din egen agentidé.

[Til hovedside](../README.md) | [Neste: Modul 2](./02-agentplattformer.md)

## Læringsmål

- Forstå hva en AI-agent er og hvilke deler den har
- Skille mellom retrieval-, task- og autonomous-agenter
- Vurdere når en agent passer godt, og når den ikke er riktig løsning
- Beskrive en første agentidé med målgruppe, oppgave og verdi

## Hva er en AI-agent?

En AI-agent er et intelligent program som bruker en eller flere språkmodeller til å forstå behov, resonnere og utføre oppgaver for en bruker eller et system.

Det viktige her er kombinasjonen av tre ting:

- Agenten kan forstå naturlig språk
- Agenten kan bruke kontekst, kunnskap og instruksjoner til å velge hva den bør gjøre
- Agenten kan ofte gjøre mer enn å bare svare, for eksempel hente informasjon eller utføre handlinger

Det er derfor nyttig å tenke på en agent som noe mer enn en tradisjonell chatbot. En god agent er ikke bare en samtaleopplevelse. Den er en kombinasjon av språkmodell, styring, kunnskap og verktøy.

## Hva består en agent av?

| Nøkkeldel | Rolle |
| --- | --- |
| Språkmodell | Forstår språk, resonnerer og svarer |
| Instruksjoner | Setter rolle, grenser og prioriteringer |
| Kunnskap | Gir tilgang til dokumenter, data og kontekst |
| Verktøy | Lar agenten gjøre noe i systemer og API-er |
| Orkestrering | Velger neste steg og rekkefølge |
| Trigger | Starter fra brukerinput eller en hendelse |

En agent trenger ikke nødvendigvis alle disse delene. En enkel retrieval-agent trenger kanskje bare språkmodell, instruksjoner og kunnskap. Orkestrering og triggere blir mer fremtredende når agenten skal løse flertrinnsoppgaver eller jobbe mer autonomt.

En enkel måte å lese tabellen på er dette:

- Språkmodellen er motoren
- Instruksjonene sier hvordan motoren skal oppføre seg
- Kunnskap gir faktagrunnlag
- Verktøy gjør at agenten kan handle
- Orkestrering styrer flyten
- Triggeren avgjør når agenten starter

## Agenttyper med eksempler

I workshopen bruker vi tre enkle kategorier:

| Type | Hva den gjør | Eksempel |
| --- | --- | --- |
| Retrieval | Søker og svarer over egne data | FAQ-agent over SharePoint-dokumenter |
| Task | Skriver til backend, bruker API-er | Bestillingsagent som oppretter ordre i et CRM-system |
| Autonomous | Jobber mot mål, instruksjoner, verktøy og triggere | Fakturaagent som overvåker innboks og bokfører |

## Når passer en agent godt?

| Når det passer godt | Når det ikke passer |
| --- | --- |
| Variabelt eller uklart behov | Helt faste regler og skjemaer |
| Kombinasjon av kunnskap og handling | Krav om høy presisjon uten rom for tolkning |
| Flere steg før svar eller utførelse | Irreversible handlinger uten godkjenning |
| Dialog, oppfølging og kontekst | Dårlige eller motstridende datakilder |

## Hvorfor satse på AI-agenter?

I presentasjonen brukes IDC-tallet om **1,3 milliarder AI-agenter innen 2028** som et signal om retning. Det viktigste poenget er likevel ikke prognosen i seg selv, men hva agentmønsteret kan gi virksomheter i praksis.

Typiske verdidrivere er:

- produktivitet og lavere kostnad
- bedre kvalitet og nøyaktighet
- compliance og sikkerhet
- skalering på tvers av team og prosesser

For en virksomhet som Atea betyr dette to ting samtidig:

- intern effektivisering i egne arbeidsprosesser
- nye leveranser og nye løsningsmønstre ut mot kunder

Agenter kan derfor brukes både som et internt verktøy og som en ny leveranseform.

## Hvordan Microsoft tenker virksomheter tar i bruk agenter

Microsoft ser for seg at virksomheter vil ha en portefølje av agenter som består av tre hovedkilder:

- Microsoft-agenter
- partneragenter
- egne agenter bygget av virksomheten

Noen agenter får du ferdig fra Microsoft. Andre kommer som del av produkter fra partnere som ServiceNow, SAP eller Salesforce. Resten bygger du selv for å dekke egne behov.

Poenget er ikke bare å “lage en agent”, men å forstå hvordan forskjellige agenttyper kan inngå i en helhet.

## Noen forslag til agentideer

Modulen bruker noen enkle eksempler for å vise hvordan forskjellige behov peker mot forskjellige plattformer:

| Idé | Typisk verdi | Mulig plattform |
| --- | --- | --- |
| Tilbudsassistent | Raskere tilbudsarbeid | Copilot Studio |
| Onboarding-guide | Raskere svar til nyansatte | Copilot Studio |
| Driftsvarsel-agent | Raskere oppfølging av hendelser | Microsoft Foundry |
| Kompetanseassistent | Finne riktig konsulent raskere | Copilot Studio |
| Møteforbereder | Bedre forberedte kundemøter | Microsoft 365 Agents SDK |
| Teknisk FAQ-bot | Skalerbar kunnskapsdeling | Copilot Studio |

Disse eksemplene er ikke fasit, men de illustrerer at plattformvalg ofte henger sammen med behovet:

- **Copilot Studio** passer godt når du vil bygge raskt med low-code/no-code og tett Microsoft 365-integrasjon
- **Microsoft Foundry** passer godt når du trenger mer kontroll, mer avansert agentlogikk eller en mer pro-code-orientert tilnærming
- **Microsoft 365 Agents SDK** passer godt når du bygger kodebaserte agenter som skal fungere i Microsoft 365 Copilot, Teams, web eller egne apper

Vi går dypere inn i plattformvalg senere i kurset. I denne sesjonen er poenget bare å se at ulike agentideer ofte peker mot ulike tekniske spor.

## Diskusjon i grupper

- Hvilken jobb gjør du i dag som en agent kunne gjort 80 % av?
- Hva er den største risikoen ved å la en agent handle autonomt i din virksomhet?
- Når ville du valgt Copilot Studio, og når ville du heller kodet selv?
- Hvis agentbruk virkelig vokser kraftig de neste årene, hvilke muligheter og utfordringer skaper det for IT-bransjen?

## Laboppgave: Beskriv din første agentidé

I laben skal du ikke designe hele løsningen. Du skal beskrive kjernen i idéen.

Bruk disse feltene:

| Punkt | Notater |
| --- | --- |
| Navn på agenten |  |
| Hvem skal bruke den? |  |
| Primær oppgave – hva skal agenten gjøre? |  |
| Forretningsverdi |  |

Når dere gir hverandre tilbakemelding, er det spesielt to ting som er viktige:

- Er problemet agenten skal løse tydelig?
- Er målgruppen tydelig definert?

### Gruppen gir tilbakemelding på hver idé

Gruppen gir tilbakemelding før 2-3 frivillige deler agentideen sin i plenum.

En god første agentidé er ofte enkel. Den trenger ikke være “stor”. Det viktigste er at den har:

- en tydelig bruker
- en tydelig oppgave
- en tydelig verdi

## Hva har vi gått igjennom i denne modulen?

Etter denne sesjonen skal deltakerne sitte igjen med tre ting:

1. Forstå hva en AI-agent er og hvilke deler den har
2. Skille mellom ulike agenttyper og når de passer godt
3. Beskrive en første agentidé med målgruppe, oppgave og verdi

[Til hovedside](../README.md) | [Neste: Modul 2](./02-agentplattformer.md)

## Lenker

- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)
