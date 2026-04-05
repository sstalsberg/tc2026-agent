# Modul 3: Instruksjoner, kunnskap og verktøy

I denne modulen går vi gjennom det som gjør en agent nyttig:

- gode instruksjoner
- kunnskap og grounding
- verktøy

Vi ser på hvordan disse delene henger sammen, og hvordan du kan begynne å tenke på dem når du utvikler din egen agentidé.

[Forrige: Modul 2](./02-agentplattformer.md) | [Til hovedside](../README.md) | [Neste: Modul 4](./04-prompt-engineering-og-kvalitet.md)

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

| Hva instruksjonen bør inneholde | Hvordan skrive den godt |
| --- | --- |
| Rolle og mål | Vær spesifikk og konkret |
| Oppgaver agenten løser | Prioriter det viktigste først |
| Kilder og verktøy den skal bruke, og når | Si når agenten skal bruke verktøy og når den skal la være |
| Hva den skal avvise, eskalere eller be om avklaring på | Definer handlingsrom og stoppkriterier |
| Hvordan svaret skal formateres | Gi tydelig format når det faktisk betyr noe |
| Eksempler på gode svar | Bruk 1-2 few-shot-eksempler når tone, struktur eller kvalitet er viktig |
| Rekkefølge hvis steg må tas i orden | Test steg for steg |

### Det som ofte mangler

| Mangler ofte | Hvorfor det betyr noe |
| --- | --- |
| Handlingsrom | Agenten må vite når den skal handle selv og når den skal spørre |
| Verktøybruk | Tydelige kriterier gir færre unødvendige bruk eller feil verktøykall |
| Stoppkriterier | Gjør det tydelig når oppgaven er ferdig og når den skal eskalere |
| Rekkefølge | Hvis steg må tas i riktig rekkefølge, bør instruksjonen si det eksplisitt |

Dette er viktig fordi agenten ellers må “gjette” mer.

### Praktisk råd

Start enkelt. Test. Juster én ting om gangen.

Det er som regel bedre å begynne med korte, tydelige instruksjoner og forbedre dem gradvis enn å starte med en lang tekstblokk full av regler.

### Eksempel: instruksjoner for pappavits-agenten

| Del | Eksempel |
| --- | --- |
| Rolle og mål | Du er Pappavits-agenten. Du skal underholde deltakerne med korte, trygge pappa-vitser på norsk bokmål. |
| Oppgaver | Lag én vits om gangen, lag en ny når brukeren ber om det, og tilpass tema hvis brukeren ønsker det. |
| Kilder og verktøy | Bruk ikke eksterne kilder eller verktøy. Bruk bare instruksjonene og egne språkferdigheter. |
| Avvise / avklare | Avvis støtende, hatefulle eller seksuelle vitser. Be om avklaring hvis temaet er uklart. |
| Svarformat | Svar med 2-4 korte linjer. Gi først vitsen, deretter ett kort oppfølgingsspørsmål. |
| Few-shot-eksempel | Eksempel: "Hva sa den ene kaffeputen til den andre? Skal vi ta en kopp?" Følg samme lette og tørre stil. |
| Rekkefølge | 1. Forstå tema eller ønske. 2. Lag én trygg vits. 3. Spør kort om brukeren vil ha en til. |

## Del 2: Kunnskap, kontekst og RAG

### Kunnskap og kontekst i M365

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

### Ustrukturert kunnskap vs. strukturerte data

Det er nyttig å skille mellom to typer kunnskap i en agent:

| Type | Hva det er | Typisk bruk |
| --- | --- | --- |
| Ustrukturert kunnskap | Dokumenter, nettsider, notater, e-poster og fritekst | Spørsmål, oppsummering, søk og forklaring |
| Strukturert data | Rader, felter og objekter som kunder, kontakter, saker, ordre og hendelser | Presise oppslag, regler, validering og handlinger |

- bruk dokumentkilder når brukeren trenger forklaring, kontekst eller siterbare svar
- bruk strukturert data når agenten må finne, oppdatere eller kontrollere konkrete felter og poster

### Måter å hente kunnskap på

| Teknikk | Kort forklart | Styrke |
| --- | --- | --- |
| Graph + semantisk indeks | Innebygd grounding i M365 Copilot | Ingen egen indeks |
| Copilot Studio – SharePoint | SharePoint brukes som kunnskapskilde | Ferskt M365-innhold |
| Copilot Studio – filer | Opplastede eller synkroniserte filer brukes som kunnskap | Bra for avgrensede dokumentsett |
| Connectors | Oppslag direkte i kildesystemet | Live data |
| Azure AI Search – klassisk RAG | Egen indeks med hybrid, vektor og semantikk | Mest kontroll |
| Azure AI Search – agentic retrieval (preview) | LLM planlegger delspørringer og samler treff | Best for komplekse spørsmål |

### Hvilke strategier støttes hvor?

| Strategi | M365 Copilot | Copilot Studio | Microsoft Foundry |
| --- | --- | --- | --- |
| Graph + semantisk indeks | Ja | Ja (delvis) | Ikke innebygd |
| SharePoint / OneDrive | Ja | Ja | Ikke innebygd |
| Opplastede filer | Ja, embedded file content | Ja | Nei |
| Connectors som realtidskunnskap | Begrenset | Ja | Ikke innebygd |
| Egen indeks med hybrid / vektor / semantikk | Nei | Ja, via Dataverse eller Azure AI Search | Ja, via Azure AI Search |
| Agentic retrieval over kunnskapsbase | Nei | Via custom integrasjon | Ja, via Foundry IQ (preview) |

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

### Azure AI Search: fra dokument til treff

Når du bruker Azure AI Search som kunnskapsmotor, går innholdet typisk gjennom denne pipelinen:

| Steg | Hva som skjer |
| --- | --- |
| Datakilde | Dokumenter hentes fra en støttet kilde |
| Indexer | Innholdet trekkes inn i pipelinen |
| Chunking | Store dokumenter deles opp i mindre biter |
| Embeddings | Hver bit kan vektoriseres |
| Index | Tekstfelt og vektorfelt lagres i samme søkeindeks |
| Vectorizer | Brukerens spørsmål kan vektoriseres ved spørring |
| Ranking | Hybridt søk og semantisk rangering løfter de beste treffene |

Viktige nyanser:

- `Integrated vectorization` gjør chunking og vektorisering til en del av selve indekseringen
- embeddings kommer normalt fra en modell i `Azure OpenAI` eller `Microsoft Foundry`, ikke fra Azure AI Search alene
- det er ofte en fordel å bruke samme embedding-spor ved indeksering og ved spørring
- i Copilot Studio kan Azure AI Search legges inn som egen kunnskapskilde

### Copilot Studio-filer vs. Azure AI Search

To vanlige valg for dokumentgrunnlag i Copilot Studio er:

| Valg | Styrke | Når det passer |
| --- | --- | --- |
| Filopplasting i Copilot Studio | Raskt og enkelt å komme i gang | Mindre dokumentsett og enkel grounding |
| Azure AI Search | Mer kontroll på chunking, embeddings, metadata, hybridt og semantisk søk | Når kvalitet, kontroll og søkekonfigurasjon betyr mer |

Kort sagt:

- filopplasting er enklest å starte med
- Azure AI Search gir mer kontroll og ofte bedre retrieval i større eller viktigere kunnskapsdomener

### Hva avgjør kvaliteten på kunnskapssvar?

Kvaliteten på svar som er basert på kunnskap og kontekst avhenger av flere ting:

- metadata og struktur
- ferskhet
- chunking og semantikk
- tilgangsstyring
- scope og støy
- datakvalitet og eierskap

For strukturerte kilder som Dataverse og Azure SQL hjelper gode feltnavn, beskrivelser, synonymer og begrepsforklaringer agenten å tolke tabeller og kolonner riktigere.

### Hvorfor beskrive kunnskapskilden?

I Copilot Studio brukes beskrivelsen når agenten skal velge riktig kunnskapskilde.
I Foundry / Foundry IQ påvirker beskrivelser og retrieval instructions query planning.

Kort sagt:

- en god beskrivelse hjelper agenten å forstå når en kilde bør brukes
- en dårlig beskrivelse gjør kildevalget mindre presist

### Praktisk grense i Copilot Studio

I Copilot Studio gjelder en praktisk grense:

- hvis agenten har mer enn 25 kunnskapskilder, filtreres de først ned
- filtreringen bruker navn og beskrivelse
- opplastede filer teller ikke mot denne grensen

Dette gjør kildebeskrivelser ekstra viktige. Hvis mange kilder ligner på hverandre i navn og beskrivelse, blir det vanskeligere å velge riktig.

### Hvordan tester du tilgang og treff på kunnskap?

| Test | Hva du ser etter |
| --- | --- |
| Søk direkte i kilden først | Er dokumentet faktisk søkbart, og finnes teksten der du tror den finnes? |
| Test både eksakte og semantiske spørsmål | Treffer løsningen bare ord, eller også mening og sammenheng? |
| Test med ulike brukere | Fungerer tilgangstrimming slik at brukere ser forskjellig innhold der de skal? |
| Test etter endringer i kilden | Hvor raskt blir nye eller oppdaterte dokumenter søkbare? |
| Test smale scope og metadatafiltre | Blir svarene bedre når du snevrer inn kilde, område eller dokumenttype? |

Dette er et viktig poeng: du bør ikke bare teste “om agenten svarer”, men også hvorfor den svarer som den gjør.

Tips: Bruk Graph Explorer når du vil verifisere tilgang, treff og hva Microsoft 365 faktisk returnerer.

### Kunnskapspipeline med Copilot

| Steg | Navn | Hva skjer |
| --- | --- | --- |
| 1 | Meldingen vurderes | Sjekker om meldingen er trygg å behandle |
| 2 | Spørsmålet optimaliseres | Omskriver spørsmålet med samtalekontekst |
| 3 | Informasjon hentes | Søker enten direkte i kilden eller i en indeks, avhengig av strategi |
| 4 | Innhold oppsummeres | LLM oppsummerer med Responsible AI-guardrails |
| 5 | Kildegrunnlag valideres | Bekrefter opphav og lager siteringer |
| 6 | Svaret modereres | Dobbeltsjekker svaret for uønsket innhold |
| 7 | Respons returneres | Returnerer svar, siteringer og logger |

## Del 3: Verktøy i agenter

### Hva mener vi med verktøy?

Et verktøy er agentens evne til å hente data eller utføre handlinger.

Det betyr at agenten går utover ren tekstgenerering. Agenten kan for eksempel:

- hente informasjon fra et system
- starte en prosess
- opprette eller oppdatere data
- bruke andre agenter eller eksterne tjenester

### Fra innebygde verktøy til MCP og skills

Del 3 går fra plattformnære verktøy til mer standardiserte integrasjons- og samarbeidsmønstre.

### Oversikt over forskjellige type verktøy

| Nivå | Rolle |
| --- | --- |
| Innebygde verktøy | Bruke det plattformen allerede har |
| Connectors | Koble på flere systemer |
| Prosess | Kjøre flere steg på tvers av systemer |
| API | Mulighet for full kontroll over logikk og data |
| MCP | Standardisert lag for verktøy og kontekst |
| A2A (preview) | La en agent bruke en annen agent |
| Skills (kodeagenter) | Gjenbrukbar arbeidsmåte for agenter |

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

### Synonymer og regex: fra fritekst til strukturert input

| Mønster | Hva det gjør | Eksempel |
| --- | --- | --- |
| Synonymer | Fanger ulike ord for samme begrep | `leilighet`, `flat`, `apartment` |
| Lukket liste | Begrenser input til kjente valg | `hus`, `duplex`, `condo` |
| Regex | Fanger mønstre i tekst | `[1-5]` soverom, postnr, ordrenr |

- dette er broen mellom fri tekst og variabler agenten faktisk kan bruke
- det reduserer feil i oppslag, routing og verktøykall
- det passer best når innholdet er kjent og variasjonene kan beskrives

### Connectors

En connector er i praksis et innpakket API med definerte handlinger.

Det viktige her er:

- rask integrasjon
- strukturert input/output
- begrenset operasjonssett

Connectoren eksponerer som regel ikke hele systemets API, bare et utvalg av handlinger.

Eksempler:

- SharePoint connector
- Dataverse
- Salesforce
- ServiceNow
- Custom connector mot egen API via Power Platform

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

### Eksempel: code interpreter i en prompt

Et konkret eksempel på `Run a Prompt` i Copilot Studio er å slå på `code interpreter` i prompt-verktøyet.

Da kan prompten ikke bare generere tekst, men også skrive og kjøre Python-kode for å:

- analysere data
- gjøre beregninger og statistikk
- lese, oppdatere og returnere Excel-filer
- behandle Word-, PowerPoint- og PDF-filer
- lage visualiseringer som grafer og diagrammer

Dette passer når agenten må gjøre faktisk databehandling eller filbehandling, ikke bare oppsummere eller klassifisere tekst.

Praktisk betyr det:

- opprett en `Prompt` som tool i agenten
- åpne `Settings` for prompten
- slå på `Enable code interpreter`
- gi prompten tydelige instruksjoner for input og ønsket output, for eksempel `Return as Excel` eller `Return as JSON`

Viktige begrensninger og krav:

- agenten må bruke brukerautentisering; scenarier uten brukerautentisering fungerer ikke
- flere opplastede filer i samme prompt støttes ikke
- flere filutdata i samme prompt støttes ikke
- oppfølgingsspørsmål over flere turns om en opplastet fil støttes ikke

### Computer Use / GUI-automatisering

Noen ganger finnes det verken API, connector eller egnet workflow. Da kan GUI-automatisering være et alternativ.

I Copilot Studio brukes dette gjennom `Computer Use`, hvor agenten kan tolke skjermen og bruke virtuell mus og tastatur.

Det viktigste å forstå er:

- verktøyet bruker syn og resonnering for å tolke UI
- det passer best når en tjeneste mangler API eller annen integrasjon
- det er tregere og mer sårbart enn API-basert integrasjon

Derfor bør dette brukes når andre og mer robuste integrasjonsformer ikke er tilgjengelige.

### Human in the loop i Copilot Studio

`Human in the loop` er ikke bare et generelt prinsipp. I Copilot Studio finnes det som konkrete funksjoner i agent- og workflow-design.

| Mønster | Hva det gjør |
| --- | --- |
| `Request for Information` | Agenten sender en forespørsel til et menneske og venter på svar |
| `Approval / review` | Et menneske kan godkjenne, avvise eller supplere informasjon |
| `Human supervision` | Agenten kan stoppe opp og be om hjelp når den er usikker |

Typiske brukstilfeller:

- manglende informasjon
- godkjenning av kostnad eller bestilling
- avklaringer før agenten fortsetter

### Prosess

Prosess betyr at agenten bruker en sekvens av handlinger, ikke bare ett kall.

Typiske former og teknologier er:

- Power Automate
- Azure Logic Apps
- backend-jobb, `n8n` eller kode i Foundry og kodeagenter

Eksempler:

- opprette Team, legge til medlemmer og sende varsling
- registrere sak, hente data og sende til godkjenning

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

### Agent + workflow: når bruker du hva?

Et nyttig skille er:

| Bruk agent når du trenger | Bruk workflow når du trenger |
| --- | --- |
| Fleksibilitet i samtale og tolkning | Faste steg i kjent rekkefølge |
| Resonering og valg av neste handling | Forutsigbar kjøring hver gang |
| Hente inn kontekst fra bruker eller kilder | Standardisert prosess med logging og kontroll |
| Dynamisk valg av tools eller neste steg | Godkjenning, branching og systemoppdateringer |

Husk:

- agenten velger og forstår
- workflowen utfører og standardiserer
- ofte er riktig mønster `agent + workflow`, ikke `agent vs workflow`

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

| Byggekloss | Hva det betyr |
| --- | --- |
| Endpoint | URL til en funksjon eller ressurs |
| Metode | `GET`, `POST`, `PUT`, `PATCH` eller `DELETE` |
| Input | Data du sender inn, ofte JSON |
| Output | Strukturert svar tilbake |
| Auth | Hvem du er og hva du har lov til å gjøre |
| Schema | Tydelig kontrakt, ofte OpenAPI eller JSON Schema |

For agentbruk er det viktig at API-et ikke bare finnes, men at det er tydelig beskrevet:

- hva det gjør
- hvilke input som forventes
- hva som kommer tilbake
- hvordan autentisering håndteres
- hvilket schema eller kontrakt som gjelder

Et godt agent-API er derfor ikke bare “et endpoint som finnes”, men en tydelig kontrakt som beskriver hva agenten kan gjøre og hvordan den skal gjøre det.

### Hva et API gjør i agentkontekst

Når agenten kaller et API:

1. Forespørselen sendes til backend
2. Backend validerer, henter data eller kjører logikk
3. Backend returnerer et strukturert svar
4. Agenten tolker resultatet og svarer brukeren

I praksis trenger agenten ikke bare tilgang til et API, men også en god beskrivelse av hva API-et gjør, hvordan input ser ut og hva som kommer tilbake.

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

### MCP i Azure: Logic Apps

En praktisk vei til MCP i Azure er `Azure Logic Apps (Standard)`.

| Mulighet | Hva det betyr |
| --- | --- |
| Logic Apps som MCP-server | Kan eksponere workflows som remote MCP-servere |
| `1400+ connectors` | Gjør det lett å lage tools mot SaaS, on-prem og Microsoft-tjenester |
| Workflows som tools | Et MCP-kall kan trigge en eksisterende arbeidsflyt |
| Easy Auth / OAuth 2.0 | Gir innebygd auth for MCP-serveren |
| Application Insights / Log Analytics | Gir historikk, diagnostikk og sporbarhet |

Dette passer best når:

- du allerede har integrasjoner eller workflows i Logic Apps
- du vil lage MCP-tools raskt uten å bygge mye kode

### MCP i Azure: Azure Functions

Hvis du vil ha mer kodekontroll, er `Azure Functions` et godt alternativ.

| Mulighet | Hva det betyr |
| --- | --- |
| Functions MCP extension | Bygg MCP-server direkte med Functions-trigger/bindings-modellen |
| Self-hosted MCP server | Host en eksisterende MCP-server bygget med offisiell MCP SDK |
| Built-in auth | Beskytter serverendepunktet med innebygd autentisering |
| Managed identity | Godt spor for sikker tilgang til Azure-ressurser |
| Serverless og skalerbar hosting | Passer godt for kodebaserte og egendefinerte tools |

Dette passer best når:

- du vil bygge MCP i kode
- du trenger mer kontroll enn Logic Apps gir
- du allerede har en MCP-server du vil hoste i Azure

### Eksempel: remote MCP mot SSB

Et nyttig workshop-eksempel er en eksisterende MCP-server for SSB-data.

Her trenger du ikke bygge serveren selv. I stedet kobler du agenten til en ferdig MCP-server, og agenten faar tilgang til verktøy som:

- `ssb_search`
- `ssb_table_metadata`
- `ssb_get_data`
- `ssb_get_url`

Praktisk betyr dette:

- deltakerne bestiller egen tilgang hos `https://tools.try.no/ssb-mcp`

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

I Microsoft Foundry finnes dette som en A2A tool i preview. I Copilot Studio kan du koble til en ekstern agent via en A2A connection i preview.

Vi går dypere inn i multi-agent arkitektur i modul 6.

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
- eksempelrepo: `https://github.com/microsoft/skills`
- ressurskatalog: `https://awesome-copilot.github.com/`

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

### Laboppgave: Skriv forslag til instruksjon for din agent

Tenk gjennom:

- rolle og mål
- 2–3 oppgaver agenten skal løse
- hvilke kilder og verktøy den kan bruke
- hva den ikke skal gjøre
- hvordan svaret skal se ut
- når den skal be om avklaring

Tips:

- bruk Copilot til å hjelpe deg med å skrive instruksjonen
- bruk en prompt optimizer til å forbedre den
- legg ved 1-2 gode eksempler hvis agenten skal svare i en bestemt stil eller struktur

### Laboppgave: Test grounding og retrieval

Skriv tre spørsmål agenten bør kunne svare godt på, og vurder:

- hvilken kilde hvert svar bør komme fra
- om kilden trenger bedre struktur, metadata eller chunking
- hva som skjer med eksakte versus semantiske spørsmål
- om siteringer og tilgang fungerer som forventet

### Laboppgave: Vurder verktøyvalg

Ta utgangspunkt i en oppgave eller agentidé, og vurder:

| Behov | Valg | Hvorfor |
| --- | --- | --- |
| Hente data fra M365 |  |  |
| Koble til eksternt system |  |  |
| Orkestrere flere steg |  |  |
| Trenge full kontroll over logikk |  |  |
| Standardisere verktøy for flere agenter |  |  |

Velg mellom: innebygde verktøy, connectors, prosess, API, MCP, A2A eller skill.

### Laboppgave: Beskriv ett valgt verktøy

Beskriv ett valgt verktøy mer konkret:

- navn
- formål
- input
- output
- read eller write
- tilgang og godkjenning

Diskuter til slutt om dette passer best som connector, prosess, API, MCP-tool, A2A eller skill.

## Hva har vi gått igjennom i denne modulen?

Etter denne modulen bør du sitte igjen med:

1. Skrive tydeligere instruksjoner med rolle, mål, handlingsrom, stoppkriterier og svarformat
2. Forstå hvordan kunnskap, kontekst, grounding og RAG påvirker kvaliteten på agentsvar
3. Skille mellom verktøynivåer som innebygde verktøy, connectors, prosess, API, MCP, A2A og skills

[Forrige: Modul 2](./02-agentplattformer.md) | [Til hovedside](../README.md) | [Neste: Modul 4](./04-prompt-engineering-og-kvalitet.md)

## Lenker

- Offisiell oversikt over hva Copilot Studio er: [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- Offisiell dokumentasjon for hvordan kunnskap fungerer i Copilot Studio: [Knowledge in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio)
- Offisiell forklaring av generativ orkestrering i Copilot Studio: [Generative orchestration in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions)
- Offisiell dokumentasjon for Azure AI Search som kunnskapskilde i Copilot Studio: [Knowledge source: Azure AI Search](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-azure-ai-search)
- Offisiell veiledning for hvordan du gjør SharePoint og embedded files mer treffsikre i deklarative agenter: [Optimize content retrieval](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/optimize-content-retrieval)
- Offisiell oversikt over RAG-mønsteret i Azure AI Search: [Azure AI Search: Retrieval-augmented generation overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
- Eksempelrepo som viser hvordan Copilot Studio kan brukes sammen med Azure-tjenester: [Copilot Studio and Azure (eksempelrepo)](https://github.com/Azure/Copilot-Studio-and-Azure)
- Offisiell oversikt over agenttjenester i Microsoft Foundry: [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- Offisiell veiledning for å koble en agent til en eksisterende MCP-server: [Connect your agent to an existing MCP server](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent)
- Offisiell veiledning for å lage en MCP-server i Azure Logic Apps: [Create a Logic Apps MCP server](https://learn.microsoft.com/en-us/azure/logic-apps/create-model-context-protocol-server-standard)
- Offisiell steg-for-steg for MCP med Azure Functions: [Azure Functions MCP tutorial](https://learn.microsoft.com/en-us/azure/azure-functions/functions-mcp-tutorial)
- Offisiell dokumentasjon for self-hosted MCP-servere i Azure Functions: [Self-hosted MCP servers on Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/self-hosted-mcp-servers)
- Eksempelrepo som viser en MCP-server hostet i Azure Web App / App Service og koblet til Copilot Studio: [spotify-mcp](https://github.com/ifiecas/spotify-mcp)
- Bloggpost fra Microsoft CAT om å bygge Copilot Studio-agenter fra YAML: [Skills for Copilot Studio: Build agents from YAML code, up to 20x Faster](https://microsoft.github.io/mcscatblog/posts/skills-for-copilot-studio/)
- Artikkel med innebygd video som viser Azure SQL som kunnskapskilde i Copilot Studio, inkludert synonymer og begrepsforklaringer på kolonner: [Copilot Studio: Connect An Azure SQL Database As Knowledge](https://www.matthewdevaney.com/copilot-studio-connect-an-azure-sql-database-as-knowledge/)
- Eksempel på en offentlig MCP-server mot SSB-data: [TRY SSB MCP](https://tools.try.no/ssb-mcp)
- Samleside med eksempler og ressurser rundt GitHub Copilot og agentbruk: [Awesome GitHub Copilot](https://awesome-copilot.github.com/)
