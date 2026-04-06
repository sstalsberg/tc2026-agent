# Modul 3: Instruksjoner, kunnskap og verktøy

I denne modulen går vi gjennom det som gjør en agent nyttig i praksis:

- gode instruksjoner
- riktig kunnskap og grounding
- verktøy som lar agenten hente data eller utføre handlinger

[Forrige: Modul 2](./02-agentplattformer.md) | [Til hovedside](../README.md) | [Neste: Modul 4](./04-prompt-engineering-og-kvalitet.md)

## Læringsmål

- Forstå hva instruksjoner er og hvordan de skrives
- Se hvordan kunnskap, kontekst og grounding påvirker kvaliteten på svarene
- Forstå hvor RAG passer inn, og hvorfor retrieval-laget betyr mye for agenten
- Skille mellom ulike typer verktøy og vite når de passer
- Kjenne forskjellen mellom connectors, prosess, API, MCP, A2A og skills

## Del 1: Instruksjoner

### Hva er instruksjoner?

Instruksjoner er rammene som styrer hvordan agenten forstår, beslutter og handler.

De definerer:

- hva agenten skal gjøre
- hva den ikke skal gjøre
- hvilke prioriteringer som gjelder
- hvordan den skal svare

Gode instruksjoner gir mer forutsigbar og konsistent oppførsel.

### Hva bør instruksjonen inneholde?

| Hva instruksjonen bør inneholde | Hvordan skrive den godt |
| --- | --- |
| Rolle og mål | Vær spesifikk og konkret |
| Oppgaver agenten løser | Prioriter det viktigste først |
| Kilder og verktøy den skal bruke, og når | Si når agenten skal bruke verktøy og når den skal la være |
| Hva den skal avvise, eskalere eller be om avklaring på | Definer handlingsrom og stoppkriterier |
| Hvordan svaret skal formateres | Beskriv formatet når det betyr noe |
| Eksempler på gode svar | Bruk 1-2 few-shot-eksempler når tone, struktur eller kvalitet er viktig |
| Rekkefølge hvis steg må tas i orden | Beskriv steg for steg når rekkefølge er viktig |

Bruk gjerne en LLM til å hjelpe deg å skrive og forbedre instruksjonen, men test resultatet mot faktiske scenarier.

### Eksempel: instruksjoner for pappavits-agenten

| Del | Eksempel |
| --- | --- |
| Rolle og mål | Du er Pappavits-agenten. Du skal underholde deltakerne med korte, trygge pappa-vitser på norsk bokmål. |
| Oppgaver | Lag én vits om gangen. Lag en ny når brukeren ber om det, og tilpass tema hvis brukeren ønsker det. |
| Kilder og verktøy | Ikke bruk eksterne kilder eller verktøy. Bruk kun instruksjonene og egne språkferdigheter. |
| Avvise / avklare | Avvis støtende, hatefulle eller seksuelle vitser. Be om avklaring hvis temaet er uklart. |
| Svarformat | Svar med 2-4 korte linjer. Gi først vitsen, deretter ett kort oppfølgingsspørsmål. |
| Few-shot-eksempel | Eksempel: "Hva sa den ene kaffeputen til den andre? Skal vi ta en kopp?" Følg samme enkle og trygge stil. |
| Handlingsrom / stopp | Hvis brukeren skriver "en til", lag én ny vits uten å stille flere spørsmål. Oppgaven er ferdig når én trygg vits er levert. |
| Rekkefølge | 1. Forstå tema 2. Lag vits 3. Sjekk at den er trygg 4. Lever svaret |

### Det som ofte mangler i instruksjoner

| Mangler ofte | Hvorfor det betyr noe |
| --- | --- |
| Handlingsrom | Agenten må vite når den skal handle selv og når den skal spørre |
| Verktøybruk | Tydelige kriterier gir færre unødvendige eller feil verktøykall |
| Stoppkriterier | Gjør det tydelig når oppgaven er ferdig og når den skal eskalere |
| Rekkefølge | Hvis steg må tas i riktig rekkefølge, bør instruksjonen si det eksplisitt |

### Instruksjoner vs. beskrivelser i Copilot Studio

|  | Instruksjoner | Beskrivelser |
| --- | --- | --- |
| Fokus | Hvordan agenten skal oppføre seg | Når noe skal brukes |
| Brukes til | Stil, regler, flyt og begrensninger | Når verktøy, topics eller agenter skal velges |
| Eksempel | "Bekreft før du lagrer" | "Dette verktøyet oppretter en ordre" |

- Instruksjoner styrer oppførsel og hvordan agenten responderer
- Beskrivelser hjelper orkestratoren å velge riktig verktøy eller agent

Hvis du skriver alt i instruksjoner, jobber du mot orkestratoren. Hvis du bruker beskrivelser riktig, jobber du med den.

### Lab: Skriv forslag til instruksjon for din agent

| Del | Notater |
| --- | --- |
| Rolle og mål |  |
| 2-3 oppgaver agenten skal løse |  |
| Hvilke kilder eller verktøy agenten kan bruke |  |
| Hva agenten ikke skal gjøre |  |
| Hvordan svaret skal se ut |  |
| Når agenten skal spørre om avklaring |  |

Tips:

- Bruk Copilot eller en annen LLM til å hjelpe deg å skrive instruksjonen
- Bruk en prompt optimizer eller iterer manuelt for å forbedre den
- Legg ved 1-2 gode eksempler hvis agenten skal svare i en bestemt stil eller struktur

## Del 2: Kunnskap, kontekst og RAG

### Kunnskap og kontekst i M365

Når vi sier at en agent er grounded, mener vi at den svarer med utgangspunkt i faktiske kilder og kontekst, ikke bare modellens generelle kunnskap.

| Prinsipp | Kort forklart |
| --- | --- |
| Kunnskap gir agenten grounding | SharePoint, Teams, web og filer gir kontekst til svaret |
| Grounding øker relevans | Svar bygger på kilder, ikke bare modellkunnskap |
| Tilgang må respekteres | Brukeren skal bare få svar fra data vedkommende har tilgang til |
| Siteringer gir kontroll | Brukeren kan se hvor svaret kommer fra |

- Avgrens kunnskapsgrunnlaget når du vil ha presise svar
- Begrens generell kunnskap når du trenger høy presisjon
- Filer brukeren laster opp i samtalen blir kontekst for dialogen, men er ikke en varig kunnskapskilde

### Ustrukturert kunnskap vs. strukturerte data

Det er nyttig å skille mellom to typer kunnskap i en agent:

| Type | Hva det er | Typisk bruk |
| --- | --- | --- |
| Ustrukturert kunnskap | Dokumenter, nettsider, notater, e-poster og fritekst | Spørsmål, oppsummering, søk og forklaring |
| Strukturert data | Rader, felter og objekter som kunder, kontakter, saker, ordre og hendelser | Presise oppslag, regler, validering og handlinger |

- Bruk dokumentkilder når brukeren trenger forklaring, kontekst eller siterbare svar
- Bruk strukturert data når agenten må finne, oppdatere eller kontrollere konkrete felter og poster

### Måter å hente kunnskap på i Microsoft-økosystemet

| Teknikk | Kort forklart | Styrke |
| --- | --- | --- |
| Graph + semantisk indeks | Innebygd grounding i M365 Copilot | Ingen egen indeks |
| Copilot Studio - SharePoint | SharePoint brukes som kunnskapskilde | Ferskt M365-innhold |
| Copilot Studio - filer | Opplastede eller synkroniserte filer brukes som kunnskap | Bra for avgrensede dokumentsett |
| Connectors | Oppslag direkte i kildesystemet | Live data |
| Azure AI Search - klassisk RAG | Egen indeks med hybrid, vektor og semantikk | Mest kontroll |
| Azure AI Search - agentic retrieval (preview) | LLM planlegger delspørringer og samler treff | Best for komplekse spørsmål |

### Hvilke strategier støttes hvor?

| Strategi | M365 Copilot | Copilot Studio | Microsoft Foundry |
| --- | --- | --- | --- |
| Graph + semantisk indeks | Ja | Delvis | Ikke innebygd |
| SharePoint / OneDrive | Ja | Ja | Ikke innebygd |
| Opplastede filer | Ja, embedded file content | Ja | Nei |
| Connectors som realtidskunnskap | Begrenset | Ja | Ikke innebygd |
| Egen indeks med hybrid / vektor / semantikk | Nei | Ja, via Dataverse eller Azure AI Search | Ja, via Azure AI Search |
| Agentic retrieval over kunnskapsbase | Nei | Via custom integrasjon | Ja, via Foundry IQ (preview) |

### Hvor passer RAG inn?

RAG står for Retrieval-Augmented Generation.

Det er et mønster der relevant kontekst hentes før modellen svarer:

1. Brukeren spør
2. Systemet henter relevant kontekst fra kilder eller indeks
3. Modellen får spørsmål og kontekst
4. Agenten svarer, gjerne med siteringer

### Hvorfor er RAG vanskelig i praksis?

RAG er enkelt som idé, men kan være krevende i gjennomføring.

| Utfordring | Hva det betyr i praksis |
| --- | --- |
| Spørsmålsforståelse | Brukere spør ofte vagt, samtalebasert eller med underforstått kontekst |
| Flere datakilder | Innhold ligger i SharePoint, databaser, web, blob-lagring og andre systemer |
| Tokenbegrensning | Modellen kan ikke få alt, bare de mest relevante utdragene |
| Responstid | Brukeren forventer svar på sekunder, ikke minutter |
| Sikkerhet og styring | Agenten må bare hente innhold brukeren faktisk har lov til å se |

### Hva må retrieval-laget gjøre godt?

| Behov | Typiske mekanismer |
| --- | --- |
| Forstå hensikt, ikke bare ord | Hybridt søk, vektorsøk, semantisk rangering og eventuelt agentic retrieval |
| Finne på tvers av kilder | Kunnskapskilder, indekser, connectors eller direkte oppslag |
| Begrense hvor mye kontekst som sendes inn | Chunking, top-k, terskler og utvalg av felter |
| Bevare sporbarhet | Siteringer, referanser og tydelig kildegrunnlag |
| Ivareta sikkerhet | Tilgangstrimming, filterbasert sikkerhet og riktig autentisering |

God grounding handler derfor ikke bare om språkmodellen, men også om hvor godt retrieval-laget er utformet.

### Semantisk søk og chunking

| Begrep | Kort forklart | Hvorfor det betyr noe |
| --- | --- | --- |
| Semantisk søk / rangering | Treffer på mening og sammenheng, ikke bare eksakte ord | Bedre treff når brukerens ordvalg ikke matcher dokumentet |
| Chunking | Store dokumenter deles i mindre biter før de indekseres og hentes | Gir mer presis kontekst og holder seg innenfor tokengrenser |

Kort sagt: semantikk hjelper systemet å finne riktig innhold, og chunking hjelper det å hente riktig utdrag.

### Microsoft Foundry IQ / agentic retrieval

| Klassisk retrieval | Agentic retrieval |
| --- | --- |
| Én spørring inn mot én indeks | Flere delspørringer planlegges automatisk |
| Treffer primært på ett formulert spørsmål | Bruker også chat-historikk og underforstått kontekst |
| Godt nok for enklere spørsmål | Best for komplekse spørsmål og flere kunnskapskilder |

Agentic retrieval gjør typisk dette:

1. Leser hele spørsmålet og samtalekonteksten
2. Bryter det ned i delspørringer
3. Kjører dem parallelt
4. Reranker treff og returnerer grounding, referanser og aktivitetsplan

### Azure AI Search: fra dokument til treff

| Steg | Hva som skjer |
| --- | --- |
| Datakilde | Dokumenter hentes fra en støttet kilde |
| Indexer | Trekker innholdet inn i pipelinen |
| Chunking | Store dokumenter deles opp i mindre biter |
| Embeddings | Hver bit kan vektoriseres |
| Index | Tekstfelt og vektorfelt lagres i samme søkeindeks |
| Vectorizer | Brukerens spørsmål kan vektoriseres ved spørring |
| Ranking | Hybrid søk og semantisk rangering løfter de beste treffene |

- `Integrated vectorization` gjør chunking og vektorisering til en del av selve indekseringen
- Embeddings-modellen ligger typisk i `Azure OpenAI` eller `Microsoft Foundry`, ikke i Azure AI Search alene
- I Copilot Studio kan Azure AI Search legges inn som egen kunnskapskilde
- Eksempelrepo: `https://github.com/Azure/Copilot-Studio-and-Azure`

### Copilot Studio filer vs. Azure AI Search

| Valg | Styrke | Når det passer |
| --- | --- | --- |
| `Filopplasting i Copilot Studio` | Raskt og enkelt å komme i gang | Mindre dokumentsett og enkel grounding |
| `Azure AI Search` | Mer kontroll på chunking, embeddings, metadata, hybridt og semantisk søk | Når kvalitet, kontroll og søkekonfigurasjon betyr mer |

Kort sagt:

- filopplasting er enklest å starte med
- Azure AI Search gir mer kontroll og ofte bedre retrieval i større eller viktigere kunnskapsdomener

### SharePoint i Azure: indeksert eller remote?

| Mønster | Hva det betyr | Når det passer |
| --- | --- | --- |
| `Indexed SharePoint` | Azure AI Search lager indeks over SharePoint-innhold | Når du vil ha mer kontroll på chunking, embeddings og søkeoppsett |
| `Remote SharePoint` | Innhold hentes direkte fra SharePoint ved spørring | Når du vil respektere brukerens tilgang direkte i M365 uten egen kopi |

Viktige nyanser:

- `Remote SharePoint` krever at sluttbrukeren har en **Microsoft 365 Copilot-lisens**
- `Remote SharePoint` er bare tilgjengelig som knowledge source i **agentic retrieval** i preview, ikke i klassisk RAG

### Hva avgjør kvaliteten på kunnskapssvar?

| Faktor | Hvorfor det betyr noe |
| --- | --- |
| Metadata og struktur | Tydelige titler, kolonner og informasjonsarkitektur gjør filtering og ranking bedre |
| Ferskhet | Direkte søk i kilden gir ferskere svar enn kopierte indekser som synkroniseres periodisk |
| Chunking og semantikk | Lange dokumenter blir mer treffsikre når de deles opp og matches på mening, ikke bare ord |
| Tilgangsstyring | Brukeren skal bare få treff på innhold vedkommende faktisk har tilgang til |
| Scope og støy | Færre og mer presise kilder gir mindre irrelevant grounding |
| Datakvalitet og eierskap | Uten vedlikehold, opprydding og ansvarlige eiere forringes kunnskapsbasen over tid |

For strukturerte kilder som `Dataverse` og `Azure SQL` hjelper gode feltnavn, beskrivelser, synonymer og begrepsforklaringer agenten å tolke tabeller og kolonner riktigere.

### Hvordan tester du tilgang og treff på kunnskap?

| Test | Hva du ser etter |
| --- | --- |
| Søk direkte i kilden først | Er dokumentet faktisk søkbart, og finnes teksten der du tror den finnes? |
| Test både eksakte og semantiske spørsmål | Treffer løsningen bare ord, eller også mening og sammenheng? |
| Test med ulike brukere | Fungerer tilgangstrimming slik at brukere ser forskjellig innhold der de skal? |
| Test etter endringer i kilden | Hvor raskt blir nye eller oppdaterte dokumenter søkbare? |
| Test smale scope og metadatafiltre | Blir svarene bedre når du snevrer inn kilde, område eller dokumenttype? |

Tips: Bruk Graph Explorer eller søk direkte i SharePoint når du vil verifisere treff og tilgang.

### Hvorfor beskrive kunnskapskilden?

| Hvor | Hvorfor |
| --- | --- |
| Copilot Studio | Beskrivelsen hjelper agenten å velge riktig kilde og brukes når mange kunnskapskilder må filtreres |
| Microsoft Foundry / Foundry IQ | Beskrivelser og retrieval instructions påvirker query planning |
| SDK + Foundry | Samme effekt gjelder når agenten bruker Foundry IQ som kunnskapslag |

Kort sagt: en god beskrivelse hjelper agenten å forstå når en kilde bør brukes, og når den ikke bør brukes.

### Praktisk grense i Copilot Studio

- Ved generativ orkestrering: hvis agenten har mer enn 25 kunnskapskilder, filtrerer Copilot Studio dem først med en intern modell basert på beskrivelsen
- Korte eller generiske beskrivelser gjør det vanskeligere å velge riktig kilde
- Opplastede filer til agenten teller ikke mot denne 25-grensen

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

### Laboppgave: Test grounding og retrieval

| Punkt | Notater |
| --- | --- |
| Skriv 3 spørsmål agenten bør kunne svare godt på |  |
| Hvilken kilde hvert svar bør komme fra |  |
| Trenger kilden bedre struktur, metadata eller chunking? |  |
| Hva skjer hvis spørsmålet stilles både eksakt og semantisk? |  |
| Fungerer siteringer og tilgang som forventet? |  |

## Del 3: Verktøy i agenter

### Hva mener vi med verktøy?

Et verktøy er en konkret evne agenten har til å hente data eller utføre handlinger.

Det betyr at agenten går utover ren tekstgenerering. Den kan for eksempel:

- hente informasjon fra et system
- starte en prosess
- opprette eller oppdatere data
- bruke andre agenter eller eksterne tjenester

### Oversikt over forskjellige typer verktøy

| Nivå | Rolle |
| --- | --- |
| Innebygde verktøy | Bruke det plattformen allerede har |
| Connectors | Koble på flere systemer |
| Prosess | Kjører flere steg på tvers av systemer |
| API | Mulighet for full kontroll over logikk og data |
| MCP | Standardisert lag for verktøy og kontekst |
| A2A (preview) | La en agent bruke en annen agent |
| Skills (kodeagenter) | Gjenbrukbar arbeidsmåte for agenter |

### Innebygde verktøy

Dette er funksjonalitet agenten allerede har tilgang til via plattformen, typisk Microsoft 365 Copilot.

Eksempler:

- Dokumenter i SharePoint og OneDrive
- E-post og kalender i Outlook
- Teams-møter og chat
- Microsoft 365-data via Graph, Semantic Index og brukerens tilgangsmodell

Dette er grounding og plattformstøttet funksjonalitet, ikke et direkte API-kall slik du ville skrevet i en vanlig integrasjon.

### Variabler

Variabler brukes til å:

- huske svar brukeren allerede har gitt
- sende kontekst videre til flows, actions og andre topics

I Copilot Studio er disse typene vanlige:

| Type | Bruk |
| --- | --- |
| Topic-variabler | Verdier som bare brukes i ett topic eller steg |
| Globale variabler | Verdier som brukes på tvers av topics i samme sesjon |
| Systemvariabler | Informasjon om bruker, kanal og aktivitet |
| Environment variables | Konfigurasjon fra plattformen |

### Synonymer og regex: fra fritekst til strukturert input

| Mønster | Hva det gjør | Eksempel |
| --- | --- | --- |
| Synonymer | Fanger ulike ord for samme begrep | `leilighet`, `flat`, `apartment` |
| Lukket liste | Begrenser input til kjente valg | `hus`, `duplex`, `condo` |
| Regex | Fanger mønstre i tekst | `[1-5]` soverom, postnr, ordrenr |

- Dette er broen mellom fri tekst og variabler agenten faktisk kan bruke
- Det reduserer feil i oppslag, routing og verktøykall
- Det passer best når innholdet er kjent og variasjonene kan beskrives

### Connectors

En connector er en ferdig integrasjon mot et system, i praksis et innpakket API med definerte handlinger.

Eksempler:

- SharePoint connector
- Dataverse
- Salesforce
- ServiceNow
- Custom connector mot egen API via Power Platform

Fordelen er rask integrasjon med strukturert input og output, men du får som regel bare et avgrenset sett av operasjoner.

### Run a Prompt / AI prompt som verktøy

Copilot Studio kan kjøre et eget prompt som en tool, med egne inputvariabler, modellvalg og strukturert output.

| Godt valg når du trenger | Eksempel |
| --- | --- |
| Mer kontroll over format og regler | Returner JSON eller fast struktur |
| Presis ekstraksjon eller klassifisering | Trekk ut felter fra tekst eller sorter innhold |
| Gjenbrukbar AI-logikk | Oppsummering, sentiment eller teksttransformasjon |

Prompt-verktøyet utfører én avgrenset AI-oppgave.

### Eksempel: code interpreter i en prompt

- `Run a Prompt` kan utvides med `code interpreter`
- Prompten kan skrive og kjøre Python-kode
- Dette passer godt for dataanalyse, beregninger, visualiseringer og behandling av Excel-, Word-, PowerPoint- og PDF-filer
- Slås på i promptens `Settings` med `Enable code interpreter`
- Krever brukerautentisering
- Støtter ikke flere opplastede filer eller flere filutdata i samme prompt

### Computer Use / GUI-automatisering

I Copilot Studio lar `Computer Use` agenten bruke et nettsted eller en desktop-app med virtuell mus og tastatur.

- Verktøyet bruker syn og resonnering for å tolke skjermen og velge neste steg
- Det passer best når en tjeneste mangler API eller annen integrasjon
- Det er tregere og mer sårbart enn API-basert integrasjon

### Human in the loop i Copilot Studio

| Mønster | Hva det gjør |
| --- | --- |
| `Request for Information` | Agenten sender en forespørsel til et menneske og venter på svar |
| `Approval / review` | Et menneske kan godkjenne, avvise eller supplere informasjon |
| `Human supervision` | Agenten kan stoppe opp og be om hjelp når den er usikker |
| `Terskelbasert eskalering` | Agenten bruker en confidence score eller regel til å avgjøre når menneskelig hjelp skal involveres |

Typiske brukstilfeller:

- manglende informasjon
- godkjenning av kostnad eller bestilling
- avklaringer før agenten fortsetter

### Prosess

Prosess lar agenten utføre en definert arbeidsflyt med flere steg, ikke bare ett enkelt kall.

Typiske former:

- Agent flow / Power Automate
- Azure Logic Apps
- Backend-jobb, `n8n` eller kode i Foundry og kodeagenter

Eksempler:

- opprette Team, legge til medlemmer og sende varsling
- registrere sak, hente data og sende til godkjenning

### Prosessmønstre: agent flow og event trigger

| Mønster | Hva det betyr | Typisk bruk |
| --- | --- | --- |
| Agent flow / workflow | En definert sekvens av steg som agenten kan starte | Repeterbare prosesser, godkjenning, oppdatering av flere systemer |
| Event trigger | En hendelse starter agenten eller prosessen uten at brukeren spør i chat | Ny e-post, ny fil, ny rad, tidsplan, webhook eller business event |

Navnene varierer, men konseptet er det samme:

- Copilot Studio: agent flows og event triggers
- Foundry: workflows, actions og eksterne triggere
- Kodeagenter: scheduler, webhook, queue eller backend-prosess

### Agent + prosess: når bruker du hva?

| Bruk agent når du trenger | Bruk prosess når du trenger |
| --- | --- |
| Fleksibilitet i samtale og tolkning | Faste steg i kjent rekkefølge |
| Resonering og valg av neste handling | Forutsigbar kjøring hver gang |
| Hente inn kontekst fra bruker eller kilder | Standardisert prosess med logging og kontroll |
| Dynamisk valg av tools eller neste steg | Godkjenning, branching og systemoppdateringer |

Kort sagt:

- agenten velger og forstår
- workflowen utfører og standardiserer

### API som verktøy

Et API er en kontrollert og strukturert inngang til et system.

| Byggekloss | Hva det betyr |
| --- | --- |
| Endpoint | URL til en funksjon eller ressurs |
| Metode | GET, POST, PUT, PATCH eller DELETE |
| Input | Data du sender inn, ofte JSON |
| Output | Strukturert svar tilbake |
| Auth | Hvem du er og hva du har lov til å gjøre |
| Schema | Tydelig kontrakt, ofte OpenAPI eller JSON schema |

### Hvordan kobler du et REST API til agenten?

| Del | Rolle |
| --- | --- |
| OpenAPI-beskrivelse | Forteller hvilke operasjoner, parametere og svar API-et har |
| Auth / connection | Lar agenten koble seg til API-et på riktig måte |
| Beskrivelser | Hjelper modellen å forstå når verktøyet skal brukes |
| Tool / action / connector | Gjør API-et tilgjengelig som ferdighet i agenten |
| Visning | Kan vises som tekst eller Adaptive Card |

### Hva et API gjør i agentkontekst

Når agenten kaller et API:

1. Forespørselen sendes til backend
2. Backend validerer, henter data eller kjører logikk
3. Backend returnerer et strukturert svar
4. Agenten tolker resultatet og svarer brukeren

Agenten trenger ikke bare tilgang til API-et, men også en god beskrivelse av hva API-et gjør, hvordan input ser ut og hva som kommer tilbake.

### MCP: Model Context Protocol

MCP er et standardisert lag som gjør verktøy og kontekst tilgjengelig på en strukturert måte, slik at agenten kan oppdage, forstå og bruke dem.

MCP tilfører struktur, semantikk, oppdagbarhet og kontekstflyt rundt hvordan verktøy brukes. Det flytter også kompleksitet fra agentprompt til et standardisert tjenestelag.

### Hva består MCP av, og hvordan fungerer det?

| Byggekloss | Rolle |
| --- | --- |
| MCP server | Eksponerer verktøy og kontekst |
| Tools | Konkrete operasjoner agenten kan bruke |
| Context | Gjør relevant kontekst tilgjengelig for agenten |
| Schema | Beskriver input, output og hensikt |
| Discovery | Lar agenten se hvilke verktøy som finnes |
| Execution | Kjøring mot underliggende systemer |

Forenklet flyt:

Agent -> MCP -> API / data / kontekst -> MCP -> Agent

### MCP i Azure: Logic Apps

| Mulighet | Hva det betyr |
| --- | --- |
| `Azure Logic Apps (Standard)` | Kan eksponere workflows som remote MCP-servere |
| `1400+ connectors` | Gjør det lett å lage tools mot SaaS, on-prem og Microsoft-tjenester |
| `Workflows som tools` | Et MCP-kall kan trigge en eksisterende arbeidsflyt |
| `Easy Auth / OAuth 2.0` | Gir innebygd auth for MCP-serveren |
| `Application Insights / Log Analytics` | Gir historikk, diagnostikk og sporbarhet |

Passer best når:

- du allerede har integrasjoner eller workflows i Logic Apps
- du vil lage MCP-tools raskt uten å bygge mye kode

### MCP i Azure: Azure Functions

| Mulighet | Hva det betyr |
| --- | --- |
| `Functions MCP extension` | Bygg MCP-server direkte med Functions-trigger/bindings-modellen |
| `Self-hosted MCP server` | Host en eksisterende MCP-server bygget med offisiell MCP SDK |
| `Built-in auth` | Beskytter serverendepunktet med innebygd autentisering |
| `Managed identity` | Godt spor for sikker tilgang til Azure-ressurser |
| `Serverless og skalerbar hosting` | Passer godt for kodebaserte og egendefinerte tools |

Passer best når:

- du vil bygge MCP i kode
- du trenger mer kontroll enn Logic Apps gir
- du allerede har en MCP-server du vil hoste i Azure

### Eksempel: Remote MCP mot SSB

Et konkret eksempel i materialet er TRY sin MCP-server for SSB-data.

- Bestill egen tilgang via `https://tools.try.no/ssb-mcp`
- Legg inn `Server URL`: `https://tools.try.no/ssb-mcp/mcp`
- Velg `Authentication`: `API key`
- Velg `Type`: `Query`
- Bruk parameter `key`

Typiske tools er `ssb_search`, `ssb_table_metadata` og `ssb_get_data`.

### API vs. MCP

- API = kall denne funksjonen
- MCP = her er verktøyene du kan bruke

Eller sagt på en annen måte:

- API gir tilgang til funksjoner
- MCP gjør verktøy og kontekst brukbare for agenten

### A2A: agent som verktøy

- Agent2Agent gjør det mulig å koble én agent til en annen via en standard protokoll
- I Microsoft Foundry er A2A en egen tool-type for å koble til andre agenter
- I Copilot Studio kan du koble til en ekstern agent via en A2A connection
- Bruk A2A når den andre agenten allerede har egen logikk, egne verktøy eller egne workflows
- Vi går dypere inn i multi-agent-arkitektur i modul 6

### Skills

Skills er gjenbrukbare moduler som lærer agenten hvordan den bør løse en type oppgave, ikke bare hva den kan kalle.

En skill består typisk av:

- instruksjoner for hvordan agenten skal løse en type oppgave
- scripts eller kommandoer agenten kan bruke
- ressurser og referansemateriale
- strukturert metadata, ofte i en `SKILL.md` eller tilsvarende instruksjonsfil

En skill lærer agenten hvordan den bør jobbe, ikke bare hva den kan kalle.

### Eksempel på skill-tenkning

| Oppgave | Hva skillen gir agenten |
| --- | --- |
| Feilsøke en deployment | Vet hvilke logs, statuskommandoer og checks som bør kjøres |
| Gjennomgå en pull request | Følger en standard review-metode og sjekker risikoer |
| Lage et nytt API | Vet hvilke filer, maler og teststeg som normalt trengs |

### Tool, API, MCP og skill: hva er forskjellen?

| Begrep | Hva det er |
| --- | --- |
| Tool | Én konkret handling agenten kan utføre |
| API | Teknisk kontrakt til et system |
| MCP | Standardisert verktøylag for agenten |
| Skill | Arbeidsmåte, instruksjoner og støttemateriell for en oppgavetype |

### Lab: Vurder verktøyvalg

Ta utgangspunkt i en oppgave, prosess eller agentidé du kjenner.

| Behov | Valg | Hvorfor |
| --- | --- | --- |
| Hente data fra M365 |  |  |
| Koble til eksternt system |  |  |
| Orkestrere flere steg |  |  |
| Trenge full kontroll over logikk |  |  |
| Standardisere verktøy for flere agenter |  |  |

Velg mellom: innebygde verktøy, connectors, prosess, API, MCP, A2A eller skill.

### Lab: Beskriv ett valgt verktøy

| Del | Notater |
| --- | --- |
| Navn på verktøyet |  |
| Hva skal agenten bruke det til? |  |
| Hvilken input trenger verktøyet? |  |
| Hva skal komme tilbake? |  |
| Skal det være read eller write? |  |
| Hvem må ha tilgang eller godkjenne bruk? |  |

Diskuter: passer dette best som connector, prosess, API, MCP-tool, A2A eller skill?

## Hva har vi gått igjennom i denne modulen?

1. Forstår hvordan instruksjoner og beskrivelser styrer agentens oppførsel og valg
2. Forstår hvordan grounding, retrieval og RAG påvirker kvaliteten på svar
3. Kan velge riktig verktøy eller mønster for en konkret agentløsning

[Forrige: Modul 2](./02-agentplattformer.md) | [Til hovedside](../README.md) | [Neste: Modul 4](./04-prompt-engineering-og-kvalitet.md)

## Lenker

- [Copilot Studio knowledge sources](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-overview)
- [Azure AI Search overview](https://learn.microsoft.com/azure/search/search-what-is-azure-search)
- [Microsoft Foundry agentic retrieval](https://learn.microsoft.com/azure/foundry/agents/concepts/retrieval-augmented-generation)
- [Copilot Studio custom connectors and actions](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors)
- [Model Context Protocol](https://modelcontextprotocol.io/introduction)
- [A2A tool in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent)
- [Microsoft skills repository](https://github.com/microsoft/skills)
