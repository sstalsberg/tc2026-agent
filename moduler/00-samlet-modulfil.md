# TechnoCamp 2026 – Samlet modulfil

Denne filen samler modulinnholdet fra `moduler/` i én sammenhengende markdown-fil.

## Innhold

- [Modul 1: Introduksjon til AI-agenter](#modul-1-introduksjon-til-ai-agenter)
- [Modul 2: Kom i gang med en agent](#modul-2-kom-i-gang-med-en-agent)
- [Modul 3: Instruksjoner, kunnskap og verktøy](#modul-3-instruksjoner-kunnskap-og-verktøy)
- [Modul 4: Under panseret på en LLM](#modul-4-under-panseret-på-en-llm)
- [Modul 6: Agentarkitektur og multi-agent](#modul-6-agentarkitektur-og-multi-agent)
- [Modul 7: Governance, evaluering og publisering](#modul-7-governance-evaluering-og-publisering)
- [Modul 8: Avslutning, oppsummering og deling](#modul-8-avslutning-oppsummering-og-deling)

> Modul 5 er en ekstern økt og finnes ikke som egen markdown-fil i `moduler/`, og er derfor ikke flettet inn her.

---

<!-- Kilde: 01-introduksjon-til-agenter.md -->

# Modul 1: Introduksjon til AI-agenter

Denne sesjonen handler om å forstå hva en agent er, hvilke typer agenter som finnes, når de passer godt, og hvordan du kan begynne å tenke på din egen agentidé.

## Læringsmål

- Forstå hva en AI-agent er og hvilke byggeklosser den består av
- Skille mellom retrieval-, task- og autonomous-agenter
- Vurdere når en agent passer godt, og når den ikke er riktig løsning

## Hva er en AI-agent?

En AI-agent er et intelligent program som bruker en eller flere språkmodeller til å forstå behov, resonnere og utføre oppgaver for en bruker eller et system.

Det viktige her er kombinasjonen av tre ting:

- Agenten kan forstå naturlig språk
- Agenten kan bruke kontekst, kunnskap og instruksjoner til å velge hva den bør gjøre
- Agenten kan ofte gjøre mer enn å bare svare, for eksempel hente informasjon eller utføre handlinger

Det er derfor nyttig å tenke på en agent som noe mer enn en tradisjonell chatbot. En god agent er ikke bare en samtaleopplevelse. Den er en kombinasjon av språkmodell, styring, kunnskap og verktøy.

## Hva består en agent av?

| Byggekloss | Rolle |
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

## Tre agenttyper

I workshopen bruker vi tre enkle kategorier:

| Type | Hva den gjør | Eksempel |
| --- | --- | --- |
| Retrieval | Søker og svarer over egne data | FAQ-agent over SharePoint-dokumenter |
| Task | Skriver til backend, bruker API-er | Bestillingsagent som oppretter ordre i et CRM-system |
| Autonomous | Jobber mot mål, instruksjoner, verktøy og triggere | Fakturaagent som overvåker innboks og bokfører |

## Når passer en agent godt?

| Passer godt | Passer dårlig |
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

## Lab: Beskriv agentideen din

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

En god første agentidé er ofte enkel. Den trenger ikke være “stor”. Det viktigste er at den har:

- en tydelig bruker
- en tydelig oppgave
- en tydelig verdi

## Oppsummering

Etter denne sesjonen skal deltakerne sitte igjen med tre ting:

1. En enkel og presis forståelse av hva en AI-agent er
2. Et språk for å skille mellom retrieval, task og autonomous
3. Et første utkast til en egen agentidé som kan videreutvikles i resten av workshopen

## Lenker

- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)

---

<!-- Kilde: 02-agentplattformer.md -->

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

---

<!-- Kilde: 03-instruksjoner-kunnskap-verktoy.md -->

# Modul 3: Instruksjoner, kunnskap og verktøy

Denne modulen så går vi igjennom det som gjør en agent nyttig:

- gode instruksjoner
- kunnskap og grounding
- verktøy

Vi ser på hvordan disse delene henger sammen, og hvordan du kan begynne å tenke på dem når du utvikler din egen agentidé.

## Læringsmål

- Forstå hva instruksjoner er og hvordan de skrives
- Se hvordan kunnskap, kontekst og grounding påvirker kvaliteten på svarene
- Forstå hvor RAG passer inn, og hvorfor retrieval-laget betyr mye for agenten
- Skille mellom forskjellige typer verktøy og vite når de passer
- Kjenne forskjellen mellom connectors, prosess, API, MCP, A2A og skills

## Del 1: Instruksjoner

### Hva er instruksjoner?

Instruksjoner er rammene agenten jobber innenfor. De forteller agenten:

- hva den skal gjøre
- hva den ikke skal gjøre
- hvilke prioriteringer som gjelder
- hvordan den skal svare

En nyttig måte å tenke på er at instruksjoner er styringsmekanismen for agentens rolle og handlingsrom.

### Hva bør instruksjonen inneholde?

| Hva instruksjonen bør inneholde | Hvorfor det betyr noe |
| --- | --- |
| Rolle og mål | Agenten må vite hvem den er og hva som er viktigst |
| Oppgaver agenten løser | Hjelper agenten å fokusere på riktig type arbeid |
| Kilder og verktøy den skal bruke, og når | Reduserer feil verktøybruk og unødvendige kall |
| Hva den skal avvise, eskalere eller be om avklaring på | Definerer grenser og stoppkriterier |
| Hvordan svaret skal formateres | Sikrer riktig stil, struktur og brukeropplevelse |
| Eksempler på gode svar | Few-shot-eksempler hjelper når tone og struktur er viktig |
| Rekkefølge hvis steg må tas i orden | Viktig når agenten skal følge en bestemt prosess |

### Det som ofte mangler

Fire ting mangler ofte i agentinstruksjoner:

- handlingsrom
- verktøybruk
- stoppkriterier
- rekkefølge

Dette er viktig fordi agenten ellers må “gjette” mer.

### Praktisk råd

Start enkelt. Test. Juster én ting om gangen.

Det er som regel bedre å begynne med korte, tydelige instruksjoner og forbedre dem gradvis enn å starte med en lang tekstblokk full av regler.

## Del 2: Kunnskap, kontekst og grounding

### Kunnskap og kontekst i Microsoft 365

Når vi sier at en agent er “grounded”, mener vi at den svarer med utgangspunkt i faktiske kilder og kontekst, ikke bare modellens generelle kunnskap.

| Prinsipp | Kort forklart |
| --- | --- |
| Kunnskap gir agenten grounding | SharePoint, Teams, web og filer gir kontekst til svaret |
| Grounding øker relevans | Svar bygger på kilder, ikke bare modellkunnskap |
| Tilgang må respekteres | Brukeren skal bare få svar fra data vedkommende har tilgang til |
| Siteringer gir kontroll | Brukeren kan se hvor svaret kommer fra |

To praktiske følger av dette er:

- avgrens kunnskapsgrunnlaget når du vil ha presise svar
- begrens generell kunnskap når du vil redusere støy

Det er også viktig å skille mellom varige kunnskapskilder og filer som brukeren laster opp i samtalen. En fil i selve dialogen blir del av konteksten for den samtalen, men er normalt ikke en permanent kunnskapskilde i agenten.

### Måter å hente kunnskap på

Det finnes flere måter å hente kunnskap på i Microsoft-økosystemet:

- Graph + semantisk indeks i Microsoft 365
- SharePoint som kunnskapskilde i Copilot Studio
- opplastede eller synkroniserte filer
- connectors for live oppslag
- Azure AI Search for klassisk RAG
- agentic retrieval i Azure AI Search / Foundry IQ

### Hvor passer RAG inn?

RAG står for Retrieval-Augmented Generation.

En enkel forklaring er:

1. Brukeren spør
2. Systemet henter relevant kontekst fra en kilde eller indeks
3. Modellen får både spørsmålet og den hentede konteksten
4. Agenten svarer, gjerne med siteringer

RAG er altså ett mønster for å hente relevant kontekst før modellen svarer.

### Hvorfor er RAG vanskelig i praksis?

I teorien virker RAG enkelt. I praksis er det flere utfordringer:

- brukere spør ofte vagt eller samtalebasert
- innhold ligger i mange ulike systemer
- modellen kan ikke få “alt”, bare et begrenset utvalg
- svar må komme raskt
- sikkerhet og tilgangsstyring må holdes intakt

Det betyr at retrieval-laget er like viktig som selve modellen.

### Hva må retrieval-laget gjøre godt?

Et godt retrieval-lag må:

- forstå mening, ikke bare ord
- finne på tvers av riktige kilder
- begrense hvor mye kontekst som sendes inn
- bevare sporbarhet og siteringer
- respektere tilgang og autentisering

Det er derfor grounding handler om mer enn bare “å koble til en datakilde”.

### Semantisk søk og chunking

To begreper er spesielt viktige:

- **Semantisk søk**: systemet finner mening og sammenheng, ikke bare identiske ord
- **Chunking**: store dokumenter deles opp i mindre biter før de søkes i eller indekseres

Semantisk søk hjelper systemet å finne riktig innhold.
Chunking hjelper systemet å hente riktig utdrag.

Hvis chunkene er for store, blir konteksten upresis.
Hvis de er for små, kan du miste sammenheng.

### Hva avgjør kvaliteten på kunnskapssvar?

Kvaliteten på svar som er basert på kunnskap og kontekst avhenger av flere ting:

- metadata og struktur
- ferskhet
- chunking og semantikk
- tilgangsstyring
- scope og støy
- datakvalitet og eierskap

### Hvorfor beskrive kunnskapskilden?

I Copilot Studio brukes beskrivelsen når agenten skal velge riktig kunnskapskilde.
I Foundry / Foundry IQ påvirker beskrivelser og retrieval instructions query planning.

Kort sagt:

- en god beskrivelse hjelper agenten å forstå når en kilde bør brukes
- en dårlig beskrivelse gjør kildevalget mindre presist

### Praktisk gotcha: 25-kildersgrensen i Copilot Studio

I Copilot Studio gjelder en praktisk grense:

- hvis agenten har mer enn 25 kunnskapskilder, filtreres de først ned
- filtreringen bruker navn og beskrivelse
- opplastede filer teller ikke mot denne grensen

Dette gjør kildebeskrivelser ekstra viktige. Hvis mange kilder ligner på hverandre i navn og beskrivelse, blir det vanskeligere å velge riktig.

### Hvordan teste grounding og retrieval?

Når du tester en agent med kunnskapskilder, er det viktig å teste både:

- søk direkte i kilden først
- test både eksakte og semantiske spørsmål
- test med ulike brukere
- test hvor raskt endringer i kilden blir søkbare
- test smalere scope og metadatafiltre

Dette er et viktig poeng: du bør ikke bare teste “om agenten svarer”, men også hvorfor den svarer som den gjør.

## Del 3: Verktøy i agenter

### Hva mener vi med verktøy?

Et verktøy er agentens evne til å hente data eller utføre handlinger.

Det betyr at agenten går utover ren tekstgenerering. Agenten kan for eksempel:

- hente informasjon fra et system
- starte en prosess
- opprette eller oppdatere data
- bruke andre agenter eller eksterne tjenester

### Verktøynivåene i modulen

I del 3 brukes denne oversikten:

| Nivå | Rolle |
| --- | --- |
| Innebygde verktøy | Bruke det plattformen allerede har |
| Connectors | Koble på flere systemer |
| Prosess | Kjøre flere steg på tvers av systemer |
| API | Mulighet for full kontroll over logikk og data |
| MCP | Standardisert lag for verktøy og kontekst |
| A2A | La en agent bruke en annen agent |
| Skills | Gjenbrukbar arbeidsmåte for agenter |

### Innebygde verktøy

Dette er funksjonalitet plattformen allerede har tilgang til, særlig i Microsoft 365 Copilot.

Eksempler:

- SharePoint og OneDrive
- Outlook
- Teams
- Microsoft 365-data via Graph, Semantic Index og brukerens tilgangsmodell

Det er viktig å forstå at dette normalt ikke er direkte API-kall fra agenten slik du ville gjort i en vanlig integrasjon. Dette er grounding og handlinger som plattformen allerede kan støtte gjennom Microsoft 365-laget.

### Variabler og samtalekontekst

Kunnskap er ikke det samme som samtalekontekst.

Variabler brukes når agenten må holde på informasjon som gjelder i akkurat denne dialogen eller prosessen, for eksempel:

- svar brukeren allerede har gitt
- hvilken kanal eller rolle samtalen gjelder
- kontekst som skal sendes videre til flow, tool eller annet topic

I Copilot Studio er disse typene vanlige:

| Type | Bruk |
| --- | --- |
| Topic-variabler | Verdier som bare brukes i ett topic eller steg |
| Globale variabler | Verdier som brukes på tvers av topics i samme sesjon |
| Systemvariabler | Informasjon om bruker, kanal og aktivitet |
| Environment variables | Konfigurasjon fra plattformen |

Dette er nyttig å ha med fordi agenten ofte trenger både:

- kunnskap for å vite noe
- variabler for å huske hva som gjelder i samtalen akkurat nå

### Connectors

En connector er i praksis et innpakket API med definerte handlinger.

Det viktige her er:

- rask integrasjon
- strukturert input/output
- begrenset operasjonssett

Connectoren eksponerer som regel ikke hele systemets API, bare et utvalg av handlinger.

### Run a Prompt / AI prompt som verktøy

Noen ganger er ikke riktig verktøy et API eller en flow, men et eget prompt.

I Copilot Studio kan et prompt kjøres som en egen tool med:

- egne inputvariabler
- eget modellvalg
- strukturert output

Dette passer godt når du trenger:

- klassifisering eller ekstraksjon
- fast struktur på svaret, for eksempel JSON
- en gjenbrukbar AI-operasjon som oppsummering, sentiment eller transformasjon

Det samme mønsteret finnes også i Foundry og kodeagenter: en tydelig prompt-basert action med klart input og output.

### Computer Use / GUI-automatisering

Noen ganger finnes det verken API, connector eller egnet workflow. Da kan GUI-automatisering være et alternativ.

I Copilot Studio brukes dette gjennom `Computer Use`, hvor agenten kan tolke skjermen og bruke virtuell mus og tastatur.

Det viktigste å forstå er:

- verktøyet bruker syn og resonnering for å tolke UI
- det passer best når en tjeneste mangler API eller annen integrasjon
- det er tregere og mer sårbart enn API-basert integrasjon

Derfor bør dette brukes når andre og mer robuste integrasjonsformer ikke er tilgjengelige.

### Prosess

Prosess betyr at agenten bruker en sekvens av handlinger, ikke bare ett kall.

Typiske teknologier er:

- Power Automate
- Azure Logic Apps

Et viktig skille i modulen er:

- agenten resonnerer
- flowen utfører

Prosess passer godt når stegene er kjent, og når flere systemer må oppdateres i riktig rekkefølge.

### Prosessmønstre: agent flow og event trigger

To mønstre går igjen i mange agentplattformer:

| Mønster | Hva det betyr | Typisk bruk |
| --- | --- | --- |
| Agent flow / workflow | En definert sekvens av steg som agenten kan starte | Repeterbare prosesser, godkjenning, oppdatering av flere systemer |
| Event trigger | En hendelse starter agenten eller prosessen uten at brukeren spør i chat | Ny e-post, ny fil, ny rad, tidsplan, webhook eller business event |

Navnene varierer mellom plattformer, men prinsippet er det samme:

- Copilot Studio bruker agent flows og event triggers
- Foundry bruker workflows, actions og eksterne triggere
- kodeagenter kan starte fra scheduler, webhook, queue eller backend-jobb

### Hvordan agenten bruker prosess

To vanlige forløp er:

1. Brukerinitiert: Agent → Prosess → Systemer → Prosess → Agent
2. Hendelsesdrevet: Hendelse → Prosess → Systemer → Prosess → Agent

Dette understreker et viktig skille:

- agenten velger og resonnerer
- prosessen utfører og standardiserer

### Prosess: styrker, begrensninger og når det passer

| Styrker | Begrensninger | Bruk når |
| --- | --- | --- |
| Orkestrerer flere systemer i én operasjon | Kan oppleves tregt i chat | Prosessen er definert |
| Standardiserer samme prosess hver gang | Dårlig egnet for avansert dynamisk resonnering | Stegene er kjent på forhånd |
| Kan trigges av bruker, tidsplan eller hendelse | Krever god styring av auth, logging og feil | Flere systemer må oppdateres eller følges opp automatisk |

### API som verktøy

Et API er en kontrollert inngang til et system.

For agentbruk er det viktig at API-et ikke bare finnes, men at det er tydelig beskrevet:

- hva det gjør
- hvilke input som forventes
- hva som kommer tilbake
- hvordan autentisering håndteres
- hvilket schema eller kontrakt som gjelder

Et godt agent-API er derfor ikke bare “et endpoint som finnes”, men en tydelig kontrakt som beskriver hva agenten kan gjøre og hvordan den skal gjøre det.

### MCP: Model Context Protocol

MCP er et standardisert lag som gjør verktøy og kontekst tilgjengelig for agenten på en strukturert måte.

Det viktige poenget i modulen er:

- API gir tilgang
- MCP gjør verktøy og kontekst brukbare for agenten

MCP tilfører:

- struktur
- semantikk
- oppdagbarhet
- kontekstflyt

Dette gjør det lettere for agenten å forstå hvilke verktøy som finnes og hvordan de skal brukes.

### Hva består MCP av, og hvordan fungerer det?

| Byggekloss | Rolle |
| --- | --- |
| MCP server | Eksponerer verktøy og kontekst |
| Tools | Konkrete operasjoner agenten kan bruke |
| Context | Gjør relevant kontekst tilgjengelig for agenten |
| Schema | Beskriver input, output og hensikt |
| Discovery | Lar agenten se hvilke verktøy som finnes |
| Execution | Kjøring mot underliggende systemer |

Den enkle flyten er:

Agent → MCP → API / data / kontekst → MCP → Agent

### API vs MCP

En nyttig huskeregel er:

- API = “kall denne funksjonen”
- MCP = “her er verktøyene og konteksten du kan bruke”

Eller enda enklere:

- API gir tilgang til funksjoner
- MCP gjør verktøy og kontekst brukbare for agenten

### A2A: agent som verktøy

A2A betyr at én agent kan bruke en annen agent via en standard protokoll.

Dette passer når den andre agenten allerede har:

- egen logikk
- egne verktøy
- egne workflows

Det er altså ikke meningen at én agent skal “gjøre alt”. Noen ganger er det bedre å la en spesialisert agent gjøre jobben.

### Tool, API, MCP og skill: hva er forskjellen?

| Begrep | Hva det er |
| --- | --- |
| Tool | Én konkret handling agenten kan utføre |
| API | Teknisk kontrakt til et system |
| MCP | Standardisert verktøylag for agenten |
| Skill | Arbeidsmåte, instruksjoner og støttemateriell for en oppgavetype |

### Skills

En skill er ikke bare et verktøy, men en gjenbrukbar arbeidsmåte. Den kan bestå av:

- instruksjoner
- scripts eller kommandoer
- ressurser og referansemateriale
- strukturert metadata, ofte i en `SKILL.md`

Et nyttig skille er:

- et tool lar agenten gjøre noe
- en skill lærer agenten hvordan den bør løse en type oppgave

### Eksempel på skill-tenkning

En skill gir ikke bare tilgang til en operasjon, men en oppskrift for hvordan agenten bør jobbe.

| Oppgave | Hva skillen gir agenten |
| --- | --- |
| Feilsøke en deployment | Vet hvilke logger, statuskommandoer og checks som bør kjøres |
| Gjennomgå en pull request | Følger en standard review-metode og sjekker risikoer |
| Lage et nytt API | Vet hvilke filer, maler og teststeg som normalt trengs |

## Hvordan velge riktig nivå?

- bruk innebygde verktøy når plattformen allerede dekker behovet
- bruk connectors når du trenger standard integrasjoner raskt
- bruk prosess når du må orkestrere flere steg
- bruk API når du trenger mer kontroll
- bruk MCP når du vil standardisere verktøy og kontekst for agentbruk
- bruk A2A når en annen agent faktisk bør gjøre jobben
- bruk skills når du vil standardisere arbeidsmåte for kodeagenter

## Lab i sesjon 3

### 1. Skriv forslag til instruksjon

Tenk gjennom:

- rolle og mål
- 2–3 oppgaver agenten skal løse
- hvilke kilder og verktøy den kan bruke
- hva den ikke skal gjøre
- hvordan svaret skal se ut
- når den skal be om avklaring

### 2. Test grounding og retrieval

Skriv tre spørsmål agenten bør kunne svare godt på, og vurder:

- hvilken kilde hvert svar bør komme fra
- om kilden trenger bedre struktur, metadata eller chunking
- hva som skjer med eksakte versus semantiske spørsmål
- om siteringer og tilgang fungerer som forventet

### 3. Vurder verktøyvalg

Ta utgangspunkt i en oppgave eller agentidé, og vurder:

- hva som bør være innebygd
- hva som bør være connector
- hva som bør være prosess
- hva som bør være API
- hva som eventuelt bør være MCP, A2A eller skill

Beskriv deretter ett valgt verktøy mer konkret:

- navn
- formål
- input
- output
- read eller write
- tilgang og godkjenning

## Oppsummering

Etter denne modulen bør du sitte igjen med:

1. Evnen til å skrive tydeligere instruksjoner
2. En bedre forståelse av hvordan kunnskap, kontekst, grounding og RAG påvirker kvalitet
3. Et tydeligere språk for å velge og beskrive verktøy i agenten

## Lenker

- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- [Knowledge in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio)
- [Generative orchestration in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions)
- [Azure AI Search: Retrieval-augmented generation overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
- [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)

---

<!-- Kilde: 04-prompt-engineering-og-kvalitet.md -->

# Modul 4: Under panseret på en LLM

Denne modulen handler om hva som faktisk skjer når en språkmodell svarer, og hvorfor modellvalg, kontekst og multimodalitet påvirker kvalitet, kostnad og responstid.

Målet er ikke å gå dypt inn i modellteori, men å gi et praktisk språk for å forstå:

- hva modellen egentlig jobber med
- hvorfor input betyr så mye
- hvordan du velger riktig modell for en agent
- når multimodalitet gir verdi

## Læringsmål

- Forstå hvordan en språkmodell bygger svar fra input og tokens
- Se hvordan instruksjoner, kontekst og verktøyresultater blir del av modellens input
- Forstå hva kontekstvindu og tokenbruk betyr i praksis
- Forstå hvordan temperatur og top-p påvirker variasjon og kontroll
- Kjenne forskjellen på generalistmodeller, reasoning-modeller, små modeller og multimodale modeller
- Vurdere når multimodalitet gir verdi, og når ren tekst er nok

## Hva skjer når en LLM svarer?

Når en agent bruker en språkmodell, skjer det i grove trekk dette:

1. Agenten samler det som skal sendes inn
2. Instruksjoner, brukerforespørsel, kunnskap og eventuelle verktøyresultater bygges sammen
3. Innholdet deles opp i tokens
4. Modellen predikerer neste token steg for steg
5. Svaret returneres til agenten eller brukeren

Det viktige å forstå er at modellen ikke “slår opp” et fasitsvar slik en database gjør.

Den genererer et sannsynlig neste steg ut fra det den har fått inn. Derfor blir kvaliteten på inputen helt avgjørende.

## Hva består inputen til modellen av?

Når vi snakker om prompt i bred forstand, mener vi ofte hele inputpakken modellen får.

| Del | Rolle |
| --- | --- |
| Instruksjoner | Forteller hvordan modellen skal oppføre seg |
| Brukerforespørsel | Det brukeren faktisk spør om |
| Kunnskap / grounding | Dokumenter, data og kontekst som gjør svaret mer presist |
| Verktøyresultater | Strukturert data fra API-er, prosesser eller andre agenter |
| Samtalehistorikk | Tidligere meldinger som fortsatt er relevante |

Dette er en viktig erkjennelse i agentarbeid:

- kvaliteten kommer ikke bare fra modellen
- kvaliteten kommer fra hvordan du setter sammen inputen

En bedre modell kan hjelpe, men den kan ikke kompensere fullt ut for svak instruksjon, irrelevant kontekst eller dårlig verktøybruk.

## Tokens og kontekstvindu

For å forstå kostnad og begrensninger må du forstå to begreper:

| Begrep | Hva det betyr |
| --- | --- |
| Token | Små biter av tekst eller bildeinput som modellen behandler |
| Kontekstvindu | Hvor mye input og historikk modellen kan ha med samtidig |
| Input tokens | Alt du sender inn |
| Output tokens | Svaret modellen genererer |

I praksis betyr dette:

- lange instrukser, mye historikk og store dokumentutdrag bruker flere tokens
- flere tokens gir ofte høyere kostnad og mer ventetid
- hvis du presser inn for mye kontekst, kan viktig informasjon drukne
- bilder og andre multimodale inputformer bruker også tokens

Dette er en av grunnene til at gode instruksjoner og godt retrieval-design betyr så mye. Det handler ikke bare om kvalitet, men også om effektiv bruk av kontekstvinduet.

## Temperatur og top-p

I tillegg til modellvalg finnes det noen innstillinger som påvirker hvordan modellen svarer.

| Innstilling | Hva den styrer | Typisk bruk |
| --- | --- | --- |
| Temperatur | Hvor variert eller kreativ modellen er | Lav for fakta, verktøy og stabile svar |
| Top-p | Hvor bredt sett av sannsynlige tokens modellen velger fra | Finjustering av variasjon og kontroll |

Praktisk huskeregel:

- start lavt når agenten skal være presis og forutsigbar
- øk bare når oppgaven faktisk trenger mer variasjon eller kreativitet
- juster helst én innstilling om gangen, så du forstår hva som faktisk påvirker resultatet

## Hva påvirker kvaliteten på svaret?

Kvaliteten på et agentsvar avhenger av flere ting samtidig:

| Faktor | Hvorfor det betyr noe |
| --- | --- |
| Tydelige instruksjoner | Reduserer tvetydighet og styrer stil og format |
| Relevant kontekst | Gjør svar mer presise og mindre hallusinerte |
| Riktig modell | Ulike modeller er gode på ulike typer oppgaver |
| Strukturert output | Gjør svaret lettere å bruke videre i systemer |
| Test og iterasjon | Små justeringer kan gi stor effekt |

Det er derfor lurt å tenke i denne rekkefølgen:

1. Sørg for god input
2. Test kvaliteten
3. Bytt modell først når du faktisk ser at behovet er der

## Modelltyper du typisk velger mellom

I praksis velger du ofte mellom noen få hovedtyper av modeller:

| Modelltype | Styrke | Typisk bruk |
| --- | --- | --- |
| Generalistmodell | Balanse mellom språk, verktøy og hastighet | Standard chat, oppslag, arbeidsflyt |
| Reasoning-modell | Bedre på flertrinns logikk og krevende problemer | Analyse, planlegging, kode, matte |
| Small language model | Lavere kostnad og raskere respons | Enkle oppgaver, høy trafikk, edge |
| Multimodal modell | Kan forstå tekst og bilder sammen | Skjemaer, skjermbilder, dokumenter, inspeksjon |

Dette betyr ikke at du må ha én modelltype per agent. Men du bør vite hva du optimaliserer for.

## Hvordan velge riktig modell?

Et praktisk valg kan ofte beskrives slik:

| Hvis du trenger mest | Prioriter |
| --- | --- |
| Lav ventetid og lav kostnad | Mindre modell eller mini-variant |
| Høy kvalitet på vanskelige oppgaver | Reasoning-modell |
| Bilde + tekst i samme oppgave | Multimodal modell |
| Lange dokumenter eller mye historikk | Modell med stort kontekstvindu |
| Produksjon i stor skala | Stabil modell med god pris/ytelse |

En nyttig tommelregel er:

- start med en god generalistmodell
- bytt opp bare når kvaliteten krever det

Det er ofte bedre å forbedre instruksjoner, grounding og verktøyflyt først enn å hoppe rett til en dyrere modell.

## Multimodalitet: hva betyr det?

En multimodal modell kan bruke flere typer input i samme kall.

Vanlige modaliteter er:

- tekst
- bilder
- dokumenter med layout og tekst
- lyd eller tale
- skjermbilder eller UI-bilder

Verdien ligger i at modellen kan forstå sammenhengen mellom det som står og det som vises.

For en agent betyr dette at den ikke bare kan lese en tekstbeskrivelse av et skjema, men faktisk se skjemaet. Den kan ikke bare få vite at en bruker ser en feil i et system, men se skjermbildet av feilen.

## Når gir multimodalitet verdi?

Multimodalitet gir mest verdi når den visuelle eller auditive konteksten faktisk er viktig.

| Scenario | Hvorfor multimodal hjelper |
| --- | --- |
| Tolke skjermbilder | Agenten ser tekst, layout og UI-elementer |
| Lese dokumenter | Diagrammer, tabeller og struktur kan være viktige |
| Analysere bilder fra feltarbeid | Visuell kontekst mangler i ren tekst |
| Sammenligne bilde og tekst | Avvik mellom beskrivelse og faktisk innhold blir tydeligere |
| Talegrensesnitt | Brukeren kan snakke i stedet for å skrive |

Samtidig er det viktig å ikke bruke multimodalitet bare fordi det finnes.

Hvis ren tekst er nok, er løsningen ofte:

- enklere
- billigere
- raskere
- lettere å styre

## Begrensninger du må kjenne til

Språkmodeller og multimodale modeller har flere begrensninger du må regne med:

| Risiko | Konsekvens |
| --- | --- |
| Modellen kan hallusinere | Den svarer sikkert selv når grunnlaget er svakt |
| For mye kontekst | Viktig informasjon kan drukne |
| Feil modellvalg | Du betaler mer eller får dårligere kvalitet enn nødvendig |
| Multimodal input koster | Bilder og dokumenter kan bruke mange tokens |
| Sikkerhet og personvern | Bilder, lyd og dokumenter kan inneholde sensitiv informasjon |

Dette er også grunnen til at modulene om:

- grounding
- evaluering
- guardrails

er så viktige. En god agent handler ikke bare om å velge en smart modell. Den handler om å gjøre hele løsningen robust.

## Lab: Velg modell og modalitet

I denne laben skal du bruke agentideen din og vurdere hvilket modellspor som passer best.

| Spørsmål | Notater |
| --- | --- |
| Hvilken oppgave skal agenten løse? | |
| Trenger oppgaven mest språk, resonnering eller fart? | |
| Trenger agenten tekst, bilder, dokumenter eller lyd? | |
| Hvor viktig er lav kostnad i produksjon? | |
| Hva er et godt første modellvalg? | |

Diskuter også:

- Hva ville fått deg til å bytte modell senere?

Denne øvelsen er nyttig fordi den flytter fokus fra “hvilken modell er best?” til “hvilken modell passer best til oppgaven?”

## Oppsummering

Etter denne modulen bør du sitte igjen med tre ting:

1. En praktisk forståelse av hvordan en språkmodell bygger svar fra input og tokens
2. Et språk for å vurdere modellvalg ut fra kvalitet, kostnad og responstid
3. En forståelse av når multimodalitet gir verdi, og når ren tekst er nok

## Lenker

- [Azure OpenAI overview](https://learn.microsoft.com/azure/ai-foundry/openai/overview)
- [Prompt engineering techniques](https://learn.microsoft.com/azure/ai-foundry/openai/concepts/prompt-engineering)
- [Microsoft Foundry Models overview](https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview)
- [Use vision-enabled chat models](https://learn.microsoft.com/azure/foundry/openai/how-to/gpt-with-vision)
- [Develop a vision-enabled generative AI application](https://learn.microsoft.com/training/modules/develop-generative-ai-vision-apps/)

---

<!-- Kilde: 06-agentarkitektur-og-multiagent.md -->

# Modul 6: Agentarkitektur og multi-agent

Denne modulen handler om hvordan du går fra én agent til en mer sammensatt agentløsning.

Vi ser på:

- hvorfor du i noen tilfeller bør splitte én agent i flere
- hvilke arkitekturmønstre som finnes for samarbeid mellom agenter
- hva et orkestratorlag gjør
- hvordan `child agents`, `connected agents`, `topics` og `A2A` passer inn
- hva du må styre når flere agenter samarbeider

Målet er ikke å gjøre alle til multi-agent-arkitekter på én gang. Målet er å gi deg et språk for å vite når multi-agent gir verdi, og når det bare gjør løsningen mer komplisert.

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
| Du nærmer deg 30–40 valg i Copilot Studio | Presisjonen kan begynne å falle |
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

`A2A` står for `Agent-to-Agent` og beskriver en standardisert måte for agenter å snakke med andre agenter på tvers av plattformer.

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

I Microsoft Foundry finnes dette som en egen A2A tool. I Copilot Studio kan A2A-agenter kobles på som connected agents.

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
| Kontekstoverføring | Neste agent må få riktig mengde informasjon |
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

## Lenker

- [Copilot Studio generative orchestration](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-orchestration)
- [Add other agents in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)
- [Create and edit topics](https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics)
- [Microsoft Foundry agents overview](https://learn.microsoft.com/azure/foundry/agents/overview)
- [Microsoft Agent Framework orchestrations](https://learn.microsoft.com/agent-framework/workflows/orchestrations/)
- [A2A tool in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent)

---

<!-- Kilde: 07-sikkerhet-governance.md -->

# Modul 7: Governance, evaluering og publisering

Denne modulen handler om hva som må være på plass når en agent skal gå fra idé og prototype til noe som faktisk kan brukes i en virksomhet.

Vi ser på:

- hvorfor governance er nødvendig rundt agenter
- hvordan Microsoft Agent 365 kan fungere som kontrollplan for agentporteføljen
- hvordan tilgang, sikkerhet og guardrails må styres
- hvordan du evaluerer kvalitet før produksjon
- hvordan feedback og observabilitet brukes til forbedring
- hva publisering, lisens og roller betyr i praksis

Målet er å gjøre det tydelig at en agent ikke bare er en modell med litt instruksjoner. Når agenten skal i produksjon, blir den en løsning som må eies, styres, måles og forbedres.

## Læringsmål

- Forstå hvorfor governance må bygges inn fra starten
- Kjenne de viktigste styringslagene rundt en agent
- Forstå hvor Microsoft Agent 365 passer inn i styring, sikkerhet og drift
- Se hva som må evalueres før en agent settes i produksjon
- Forstå hvordan feedback, tracing og logging brukes til forbedring
- Vite hva publisering, lisens og kostnad betyr i drift
- Se hvilke roller som typisk må involveres

## Hvorfor trenger agenter governance?

En agent kan hente data, bruke verktøy, trigge prosesser og i noen tilfeller utføre handlinger med reelle konsekvenser.

Derfor holder det ikke å tenke på agenten som “bare en smart chat”.

Noen typiske risikoer er:

| Risiko | Hva som kan gå galt |
| --- | --- |
| For brede tilganger | Agenten ser eller gjør for mye |
| Svake guardrails | Skadelig eller uønsket output slipper gjennom |
| Manglende evaluering | Dårlig kvalitet oppdages først i produksjon |
| Lite sporbarhet | Det er uklart hva agenten gjorde og hvorfor |
| Uklart eierskap | Ingen vet hvem som skal godkjenne eller følge opp |

Hovedpoenget er enkelt:

- en agent må styres som en virksomhetsløsning
- ikke bare som en spennende demo

## Fire styringslag rundt en agent

Det er nyttig å tenke på governance som fire lag:

| Lag | Hva du må styre |
| --- | --- |
| Tilgang | Identitet, roller, autentisering, least privilege |
| Sikkerhet | Guardrails, innholdsfiltrering, dataflyt |
| Kvalitet | Testsett, evaluering, målinger og godkjenning |
| Drift | Publisering, overvåking, kostnad og ansvar |

Dette er en god huskeregel fordi mange team fokuserer tungt på ett lag, men glemmer de andre.

Et team kan for eksempel være gode på tilgangsstyring, men mangle systematisk evaluering.
Eller de kan ha god kvalitet i test, men ingen plan for publisering og kostnad i drift.

## Microsoft Agent 365 som kontrollplan

Per 30. mars 2026 beskriver Microsoft Learn `Microsoft Agent 365` som en kontrollplan for AI-agenter på tvers av hvor de er bygget eller kjøpt inn.

Det viktigste poenget er ikke at Agent 365 bygger agenten for deg.
Poenget er at Agent 365 skal gjøre det mulig å:

- gi agenten en tydelig identitet
- få oversikt over hvilke agenter som finnes i virksomheten
- styre tilgang, policyer og livssyklus
- koble agentene til observabilitet, sikkerhet og compliance

Microsoft beskriver blant annet disse kjernedelene:

| Del | Hva det betyr i praksis |
| --- | --- |
| Microsoft Entra Agent ID | Hver agent kan få egen identitet for tilgang, livssyklus og styring |
| Microsoft 365 admin center | IT kan se, overvåke og administrere agenter i en kjent kontrollflate |
| Agent Registry | Gir oversikt over registrerte agenter, agenter med Agent ID og eventuelle shadow agents |
| Purview og Defender | Kobler agentene til data governance, audit, trusseldeteksjon og respons |
| MCP og agentverktøy | Gjør det mulig å koble agenter til styrte verktøy og data i Microsoft 365 |

Det gjør Agent 365 relevant i denne modulen fordi det flytter diskusjonen fra:

- "hvordan bygger vi én agent?"

til:

- "hvordan styrer vi mange agenter på en virksomhetsmessig måte?"

Det er også viktig å være presis på modenhet:

- Per 30. mars 2026 er Agent 365 dokumentert som del av `Frontier preview-programmet`
- dokumentasjonen sier at funksjoner og tilgjengelighet kan endre seg i preview

## Hvordan Agent 365 passer mot governance-lagene

Hvis vi bruker de fire styringslagene i denne modulen, kan Agent 365 leses slik:

| Lag | Hvordan Agent 365 bidrar |
| --- | --- |
| Tilgang | Agentidentitet, registry, least privilege, Conditional Access og sponsorskap |
| Sikkerhet | Defender, runtime-beskyttelse, prompt shield, policyer og trusselhåndtering |
| Kvalitet | Observabilitet, sporbarhet og innsikt som gjør evaluering og forbedring mer konkret |
| Drift | Sentral administrasjon, agentoversikt, onboarding, livssyklus og policyhåndheving |

Dette betyr ikke at Agent 365 erstatter:

- gode instruksjoner
- testsett
- guardrails i selve agenten
- tydelige eiere og godkjenning

Men det betyr at virksomheten kan få en mer samlet måte å styre agentlandskapet på.

## Hvorfor Agent 365 er interessant i denne workshopen

I workshopen snakker vi mye om enkeltagenter, Copilot Studio, Foundry og kodeagenter.
Agent 365 er interessant fordi Microsoft beskriver det som laget over dette igjen:

- et styringslag for agentporteføljen
- ikke bare et nytt byggespor

Det gjør det spesielt relevant når spørsmålene blir:

- Hvordan oppdager vi hvilke agenter som faktisk er i bruk?
- Hvordan vet vi hvilken identitet en agent har?
- Hvordan begrenser vi hva agenten får tilgang til?
- Hvordan ser vi misbruk, feil og risikofylt adferd?
- Hvordan kobler vi agentene til eksisterende sikkerhets- og compliance-arbeid?

## Identitet og tilgang

Tilgangsstyring er et av de første områdene som må være på plass.

| Prinsipp | Hvorfor det betyr noe |
| --- | --- |
| Minste privilegium | Agenten skal bare ha tilgang til det den trenger |
| Tydelig identitet | Du må vite om agenten handler som bruker eller som egen identitet |
| Rollebasert tilgang | Ulike personer trenger ulik rett til å bygge, publisere og bruke |
| Skille mellom dev og prod | Testtilganger skal ikke bli produksjonstilganger |

Dette gjelder uansett plattform:

- Copilot Studio
- Microsoft Foundry
- kodeagenter og egne applikasjoner

Hvis du ikke vet hvilken identitet agenten bruker, eller hvilke rettigheter den faktisk har, blir resten av sikkerhetsarbeidet fort svakt.

## Guardrails og sikkerhet

Guardrails er et samleord for flere typer kontrollmekanismer rundt en agent.

| Kontroll | Hva den beskytter mot |
| --- | --- |
| Innholdsfiltrering | Skadelig eller uønsket input og output |
| Prompt shields | Direkte og indirekte prompt injection |
| Grounding og siteringer | Hallusinasjoner og svak sporbarhet |
| Human in the loop | Feil ved sensitive eller irreversible handlinger |
| Policyer på verktøy og connectorer | At agenten bruker feil system eller data |

Det viktige her er å ikke redusere guardrails til én teknisk funksjon.

Guardrails består ofte av flere lag samtidig:

- modellnivå
- innholdsfiltrering
- instruksjoner
- tilgangskontroll
- menneskelig kontroll ved behov

## Evaluering før produksjon

En agent bør ikke settes i produksjon bare fordi den “ser ut til å fungere”.

Du må vite hva du faktisk har testet.

| Hva du bør måle | Eksempler |
| --- | --- |
| Kvalitet | Relevans, presisjon, fullstendighet |
| Sikkerhet | Prompt injection, policybrudd, sensitiv data |
| Verktøybruk | Kaller agenten riktig tool, topic eller annen agent? |
| Grounding | Er svarene støttet av riktige kilder? |
| Robusthet | Fungerer løsningen på tvetydige og vanskelige spørsmål? |

Evaluer derfor med:

- faste testsett
- representative samtaler
- sammenligning mellom versjoner

Det er særlig viktig når agenten endres ofte. En liten justering i instruksjoner, modell eller kunnskapsgrunnlag kan gi uventede bivirkninger andre steder.

## Hva bør et testsett inneholde?

Et godt testsett bør dekke flere typer risiko og bruk:

| Type test | Hvorfor den trengs |
| --- | --- |
| Vanlige spørsmål | Sjekker normal bruk |
| Vanskelige spørsmål | Sjekker grenser og tvetydighet |
| Utenfor scope | Sjekker avvisning og guardrails |
| Sikkerhetstester | Sjekker injection og policybrudd |
| Verktøy- og prosessflyt | Sjekker at riktig handling trigges |

Målet er enkelt:

- fange feil før brukerne gjør det

Dette gjør også evaluering mer konkret. I stedet for å spørre “føles agenten bra?”, kan du spørre “hvor ofte løser den oppgaven vi faktisk vil at den skal løse?”

## Feedback og observabilitet

Når agenten er i bruk, trenger du både brukerinnsikt og teknisk observabilitet.

| Kilde | Hva du lærer |
| --- | --- |
| Brukerfeedback | Om agenten faktisk oppleves nyttig |
| Analytics | Hvilke spørsmål og mønstre som går bra eller dårlig |
| Traces | Hvilke steg, verktøy og agenter som ble brukt |
| Metrics og logs | Latency, feilrate, tokenbruk, kostnad og sikkerhetshendelser |
| Correlation ID | Binder sammen hele kjeden på tvers av verktøy og agenter |

Eksempler på plattformstøtte:

- Copilot Studio: analytics og plattformlogger
- Foundry og Azure: tracing, metrics og monitorering
- Purview og andre kontrollflater: revisjon og sporbarhet

Poenget er ikke bare å vite at noe gikk galt.
Du må kunne forklare hvor i kjeden det skjedde og hvorfor.

## Hvordan forbedrer du en agent over tid?

En god agent forbedres i en kontrollert sløyfe:

1. Samle feedback og driftsdata
2. Finn mønstre i feil, misforståelser og dårlige svar
3. Rett én ting om gangen:
   instruksjoner, kunnskap, verktøy, modell eller guardrails
4. Kjør evaluering på nytt
5. Publiser ny versjon når endringen faktisk er bedre

Dette er viktig fordi mange agentprosjekter feiler i drift, ikke i demo.

Problemet er sjelden at agenten aldri fungerte.
Problemet er at ingen hadde en god måte å oppdage, forklare og forbedre feilene på.

## Kanal og klient

Før du publiserer, er det nyttig å skille mellom hvor agenten er tilgjengelig og hvordan brukeren faktisk møter den.

| Begrep | Hva det betyr |
| --- | --- |
| Kanal | Stedet agenten publiseres til, for eksempel Teams, M365 Copilot, web eller app |
| Klient | Grensesnittet brukeren faktisk møter, for eksempel Teams-chat, webchat eller en egendefinert app |

Dette skillet gjør publiseringsdiskusjonen skarpere:

- kanalen sier hvor agenten er tilgjengelig
- klienten sier hvordan opplevelsen faktisk ser ut for brukeren

## Publisering er mer enn å trykke "Publish"

Publisering er et kontrollpunkt, ikke bare en teknisk handling.

| Spørsmål | Hva du må avklare |
| --- | --- |
| Hvor skal agenten brukes? | Teams, M365 Copilot, web, API, app |
| Hvem skal få tilgang? | Individ, gruppe, avdeling eller hele virksomheten |
| Hvilken identitet brukes i drift? | Brukerens, agentens eller en tjenesteidentitet |
| Hvordan håndteres versjoner? | Dev, test og produksjon bør skilles |
| Hvem godkjenner endringer? | Fag, sikkerhet, IT eller produkteier |

I praksis betyr dette at du må vite:

- hvem agenten er for
- hvor den skal eksponeres
- hva som må være godkjent før den går live

## Lisens og kostnad må inn tidlig

Mange agentprosjekter møter en praktisk stopper ikke i teknologi, men i lisens eller kostnadsmodell.

| Plattformtype | Hva du må tenke på |
| --- | --- |
| Microsoft 365 / Copilot Studio | Brukerlisenser, tenant-lisens, Copilot Credits, premium connectorer |
| Foundry | Modellkostnad, tokens, evaluering, observabilitet og Azure-forbruk |
| Kodeagenter | Modellforbruk, hosting, nettverk, logging og egne integrasjoner |

Hovedpoenget er:

- feil lisens- eller kostnadsmodell kan stoppe et ellers godt prosjekt

Derfor bør kostnadsbildet være med allerede når du designer agentløsningen, ikke først ved publisering.

## Roller og ansvar i en agentløsning

Når agenten går i produksjon, må ansvar fordeles tydelig.

| Rolle | Typisk ansvar |
| --- | --- |
| Produkteier | Mål, prioritering og verdi |
| Fageier | Innhold, regler og kvalitet |
| Utvikler / maker | Bygging, integrasjon og testing |
| Sikkerhet / IT | Policyer, tilgang, governance og publisering |
| Drift / plattformteam | Overvåking, kostnad og livssyklus |

Hvis ingen eier kvalitet og tilgang, blir agenten fort et driftsproblem.

Dette er kanskje et av de viktigste governance-poengene i hele modulen:

- uklart eierskap er i seg selv en risiko

## Lab: Gjør agenten klar for produksjon

I denne laben skal du se på agentideen eller agenten din som om den faktisk skulle publiseres.

| Spørsmål | Notater |
| --- | --- |
| Hvilke tilganger trenger agenten faktisk? | |
| Hvilke feil eller misbruk må dere teste for? | |
| Hvilke målinger viser om agenten lykkes? | |
| Hvordan samler dere feedback fra brukere? | |
| Hvem må godkjenne publisering? | |
| Hva er de viktigste kostnadsdriverne? | |

Poenget med øvelsen er å flytte tankegangen fra bygging til drift:

- Hva må være på plass før denne agenten er trygg å bruke?

## Oppsummering

Etter denne modulen bør du sitte igjen med fire ting:

1. Hvorfor governance, sikkerhet og evaluering må bygges inn fra starten
2. Hvordan Agent 365 kan fungere som kontrollplan rundt identitet, observabilitet og sikkerhet
3. Hvordan feedback, tracing og målinger brukes til å forbedre agenten
4. Hva publisering, tilgang og lisens betyr når agenten skal i produksjon

## Lenker

- [Overview of Microsoft Agent 365](https://learn.microsoft.com/microsoft-agent-365/overview)
- [Agent Management Essentials for Microsoft 365](https://learn.microsoft.com/copilot/microsoft-365/agent-essentials/agent-essentials-overview)
- [Secure AI agents at scale using Microsoft Agent 365](https://learn.microsoft.com/security/security-for-ai/agent-365-security)
- [Copilot Studio security and governance](https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance)
- [Assign licenses and manage access to Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing)
- [Copilot Studio analytics and effectiveness](https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-effectiveness)
- [Publish and deploy your agent in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Microsoft Foundry observability](https://learn.microsoft.com/azure/foundry/concepts/observability)
- [Publish and share agents in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/how-to/publish-agent)

---

<!-- Kilde: 08-avslutning.md -->

# Modul 8: Avslutning, oppsummering og deling

Denne avslutningsøkten samler trådene fra hele workshopen.

Planen er todelt:

- først oppsummere hva vi faktisk har gått gjennom
- deretter gi deltakerne tid til å dele, vise og reflektere over hva de har bygget

Målet er ikke å rekke én ting til. Målet er å sette læringen i system, synliggjøre progresjonen og gjøre neste steg tydelig.

## Læringsmål

- Oppsummere de viktigste prinsippene fra hele workshopen
- Presentere egen agentidé, prototype eller arkitekturskisse for andre
- Lære av andres valg, feil og erfaringer
- Sitte igjen med en tydelig plan for neste steg etter workshopen

## Hva har vi gått gjennom?

Gjennom workshopen har vi bygget opp en helhetlig forståelse av agentutvikling, fra idé til drift.

## Oppsummering av modulene

| Modul | Hovedtema | Kjerneinnsikt |
| --- | --- | --- |
| 1 | Introduksjon til AI-agenter | En agent er mer enn en chatbot. Den kombinerer modell, instruksjoner, kunnskap og verktøy |
| 2 | Kom i gang med en agent | Plattformvalg betyr noe. Ulike behov peker mot ulike byggespor |
| 3 | Instruksjoner, kunnskap og verktøy | Det er disse tre lagene som gjør agenten nyttig i praksis |
| 4 | Under panseret på en LLM | Kvalitet avhenger av input, modellvalg, kontekst og multimodalitet |
| 5 | Kodeagenter *(ekstern økt)* | Agentmønsteret gjelder også i utviklerverktøy, kodeflyt og pro-code-scenarier |
| 6 | Agentarkitektur og multi-agent | Start enkelt, men vit når det er riktig å splitte i flere agenter |
| 7 | Governance, evaluering og publisering | En agent må styres som en virksomhetsløsning, ikke bare bygges som en demo |

Det viktigste er ikke å huske hver detalj, men å forstå helheten.

Modul 5 holdes som en ekstern økt, men hører likevel naturlig inn i helheten fordi den viser hvordan de samme prinsippene dukker opp igjen i kodeagenter og utviklerverktøy.

## Den røde tråden i workshopen

Den enkleste måten å lese hele workshopen på er slik:

1. Finn en god oppgave for en agent
2. Velg riktig plattform og byggespor
3. Skriv gode instruksjoner
4. Koble på riktig kunnskap og riktige verktøy
5. Velg modell og modalitet bevisst
6. Design arkitektur, styring og drift for videre bruk

## Deling og demo

I denne delen er fokuset å dele det dere har laget så langt. Det kan være:

- en agentidé
- en prototype
- en instruksjon
- en kunnskapsskisse
- et verktøydesign
- en agentarkitektur

Det viktigste er ikke hvor ferdig løsningen er. Det viktigste er at du kan forklare hva du prøvde å få til, og hva du lærte.

## Forslag til demoformat

Et kort og effektivt format er:

1. Hva bygde du?
2. Hvem er agenten for?
3. Hva er én ting agenten gjør bra?
4. Hva er én ting du ville forbedret videre?

Et alternativ er å bruke dette skjemaet:

| Punkt | Hva du kan si |
| --- | --- |
| Problem | Hvilket behov prøver agenten å løse? |
| Målgruppe | Hvem skal bruke den? |
| Løsning | Hvordan har du tenkt agenten? |
| Viktigste valg | Modell, kunnskap, verktøy eller arkitektur |
| Læring | Hva fungerte? Hva var vanskelig? |
| Neste steg | Hva ville du gjort med mer tid? |

## Refleksjon etter demoene

Etter delingen kan det være nyttig å samle noen felles refleksjoner:

| Refleksjonsspørsmål | Notater |
| --- | --- |
| Hvilke mønstre gikk igjen i flere løsninger? | |
| Hvor slet flest? | |
| Hvilke agenttyper så vi flest av? | |
| Hva overrasket dere mest? | |

## Avsluttende runde

Hvis du vil ha en enkel avslutning i rommet, kan hver deltaker eller gruppe svare kort på én av disse:

- Hva er det viktigste du tar med deg?
- Hva vil du teste videre først?

## Oppsummering

Hele workshopen har i praksis handlet om dette:

1. Finne en god oppgave for en agent
2. Bygge opp agenten med riktige instruksjoner, kunnskapskilder og verktøy
3. Forstå modellvalg, arkitektur og drift godt nok til å gjøre bevisste valg

Hvis deltakerne sitter igjen med det, har workshopen gjort jobben sin.
