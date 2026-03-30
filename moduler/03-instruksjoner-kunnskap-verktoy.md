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
