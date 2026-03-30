const modules = [
  {
    id: "modul1",
    title: "Modul 1 – Introduksjon til AI-agenter",
    shortTitle: "Modul 1",
    summary:
      "Hva er en agent? Hvilke byggeklosser består den av? Når er en agent passende løsning.",
    takeaways: [
      "En agent kombinerer språkmodell, styring, kunnskap og verktøy.",
      "Retrieval-, task- og autonomous-agenter passer til ulike behov og ulike typer oppgaver."
    ],
    practice:
      "Forklar agentideen din med tre setninger: Hvem er brukeren, hva skal agenten gjøre, og hvilken verdi gir den?",
    questions: [
      {
        prompt: "Hva beskriver best en AI-agent slik modulen definerer den?",
        options: [
          "Et intelligent program som bruker en eller flere språkmodeller til å forstå behov, resonnere og utføre oppgaver.",
          "En fast regelmotor uten språkforståelse som alltid følger samme flyt.",
          "En chatbot som kun leser opp ferdige svar fra en FAQ."
        ],
        correctIndex: 0,
        explanation:
          "Modulen beskriver agenten som et intelligent program som bruker språkmodeller til å forstå, resonnere og utføre oppgaver."
      },
      {
        prompt: "Hvordan ser Microsoft for seg at virksomheter tar i bruk agenter?",
        options: [
          "Som en portefølje av Microsoft-agenter, partneragenter og egne agenter bygget av virksomheten.",
          "Ved å standardisere på én agenttype og én leverandør for alt.",
          "Ved å bruke bare ferdige Microsoft-agenter og unngå egne løsninger."
        ],
        correctIndex: 0,
        explanation:
          "Modul 1 beskriver at virksomheter typisk vil ha en portefølje som består av Microsoft-agenter, partneragenter og egne agenter."
      },
      {
        prompt: "Hvilket eksempel passer best som task-agent?",
        options: [
          "En FAQ-agent over SharePoint-dokumenter.",
          "En agent som oppretter ordre i et CRM-system.",
          "En agent som overvåker innboks og bokfører fakturaer automatisk."
        ],
        correctIndex: 1,
        explanation:
          "Task-agenter bruker systemer og API-er for å utføre konkrete oppgaver, som å opprette en ordre i et CRM-system."
      },
      {
        prompt: "Når passer en agent typisk dårlig?",
        options: [
          "Når oppgaven følger helt faste regler uten rom for tolkning.",
          "Når behovet er variabelt og krever dialog.",
          "Når flere steg må håndteres før svar eller utførelse."
        ],
        correctIndex: 0,
        explanation:
          "Modulen peker på at helt faste regler og krav om null tolkning ofte er tegn på at en agent ikke er riktig løsning."
      },
      {
        prompt: "Hva kjennetegner en god første agentidé i laben?",
        options: [
          "En tydelig bruker, en tydelig oppgave og en tydelig verdi.",
          "Så mange verktøy og datakilder som mulig fra start.",
          "At agenten må være helt autonom før den er interessant."
        ],
        correctIndex: 0,
        explanation:
          "I modulteksten er dette kjernen i en god første agentidé: tydelig bruker, tydelig oppgave og tydelig verdi."
      }
    ]
  },
  {
    id: "modul2",
    title: "Modul 2 – Kom i gang med en agent",
    shortTitle: "Modul 2",
    summary:
      "Oversikt over Microsofts agentøkosystem og hvordan plattformvalg påvirker bygging, sikkerhet og kanalvalg.",
    takeaways: [
      "Plattformvalg påvirker hvor mye kode du skriver og hvem som kan bygge løsningen.",
      "Det finnes raske innganger i Microsoft 365 og mer avanserte byggespor med mer kontroll.",
      "Agentideen bør styre plattformvalget, ikke omvendt."
    ],
    practice:
      "Ta agentideen din og velg ett spor: rask start i Microsoft 365, egen virksomhetsagent eller pro-code/azure-spor. Noter hvorfor.",
    questions: [
      {
        prompt: "Hvilken plattform passer best når agenten skal svare over et tydelig avgrenset dokumentsett?",
        options: ["SharePoint agents", "Microsoft Agent Framework", "Microsoft 365 Agents SDK"],
        correctIndex: 0,
        explanation:
          "Riktig. SharePoint agents passer når agenten bygges direkte over et avgrenset innholdssett."
      },
      {
        prompt: "Hvilket valg passer best når du vil teste en idé raskt inne i Microsoft 365 Copilot?",
        options: ["Agent Builder i M365 Copilot", "Foundry Agent Service", "Agent Framework"],
        correctIndex: 0,
        explanation:
          "Riktig. Agent Builder er den raskeste inngangen for prototyping i Microsoft 365."
      },
      {
        prompt: "Når er Microsoft 365 Agents SDK spesielt relevant?",
        options: [
          "Når du trenger kode og kontroll over appopplevelsen i M365 Copilot, Teams, web eller egne flater.",
          "Når du bare vil svare over en mappe i SharePoint.",
          "Når du kun trenger enkel deklarativ bygging uten kode."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. SDK-sporet er relevant når kanalopplevelse og egen kode er viktig."
      },
      {
        prompt: "Hvilket byggespor passer best når managed runtime, RBAC, tracing og skalering i Azure er viktigst?",
        options: ["Copilot Studio", "Microsoft Foundry Agent Service", "SharePoint agents"],
        correctIndex: 1,
        explanation:
          "Riktig. Foundry Agent Service passer godt når du trenger Azure-plattform og mer avansert drift."
      },
      {
        prompt: "Når er Microsoft Agent Framework mest relevant?",
        options: [
          "Når flere spesialiserte agenter må samarbeide eller følge eksplisitte workflows i kode.",
          "Når du vil lage en enkel personlig agent i M365 Copilot.",
          "Når du bare trenger en FAQ-agent over ett dokumentsett."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Agent Framework er laget for orkestrering, workflows og multi-agent i kode."
      }
    ]
  },
  {
    id: "modul3",
    title: "Modul 3 – Instruksjoner, kunnskap og verktøy",
    shortTitle: "Modul 3",
    summary:
      "Det viktigste laget i en nyttig agent: gode instruksjoner, riktig grounding og bevisste valg av verktøy.",
    takeaways: [
      "Instruksjoner setter rolle, grenser, verktøybruk og stoppkriterier.",
      "Grounding handler om svar som bygger på faktiske kilder med riktig tilgang.",
      "Verktøy må velges på riktig nivå: innebygd, connector, prosess, API, MCP, A2A eller skill."
    ],
    practice:
      "Skriv ned ett eksempel på: en regel agenten skal følge, en kunnskapskilde den trenger, og ett verktøy den må bruke.",
    questions: [
      {
        prompt: "Hva mangler ofte i agentinstruksjoner, og gjør at agenten må gjette mer?",
        options: [
          "Handlingsrom, verktøybruk, stoppkriterier og rekkefølge.",
          "Fargevalg, logo og ikoner.",
          "Kostnadsestimat for plattformen."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. I workshopen er dette fire ting som ofte mangler, og som svekker agentens styring."
      },
      {
        prompt: "Hvorfor er few-shot-eksempler nyttige i instruksjoner?",
        options: [
          "De hjelper når tone, struktur og svarstil er viktig.",
          "De erstatter behovet for kunnskapskilder.",
          "De gjør at agenten ikke lenger trenger evaluering."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Eksempler på gode svar hjelper agenten å forstå forventet stil og struktur."
      },
      {
        prompt: "Hva betyr grounding i praksis?",
        options: [
          "At agenten alltid bruker den største modellen som finnes.",
          "At agenten svarer med utgangspunkt i faktiske kilder og kontekst.",
          "At agenten lagrer alt brukeren sier for alltid."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Grounding betyr at svaret bygger på kilder, ikke bare modellens generelle kunnskap."
      },
      {
        prompt: "Hvorfor er det viktig å beskrive en kunnskapskilde godt?",
        options: [
          "Fordi agenten bruker beskrivelsen for å velge riktig kilde, spesielt når flere kilder ligner på hverandre.",
          "Bare for at mennesker skal like oppsettet bedre.",
          "Kun for å få lavere lisenskostnad."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Gode beskrivelser hjelper agenten å velge riktig kunnskapskilde, og er ekstra viktige når antallet kilder vokser."
      },
      {
        prompt: "Hva er forskjellen på semantisk søk og chunking?",
        options: [
          "Semantisk søk finner mening; chunking deler dokumenter i mindre biter for bedre treff.",
          "Semantisk søk brukes bare i Teams; chunking brukes bare i Azure.",
          "Det er to ord for akkurat det samme."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Semantikk hjelper deg å finne riktig innhold, chunking hjelper deg å hente riktig utdrag."
      },
      {
        prompt: "Hvilket verktøynivå passer best når agenten skal kjøre flere kjente steg på tvers av systemer?",
        options: ["Prosess", "Variabler", "Innebygde verktøy"],
        correctIndex: 0,
        explanation:
          "Riktig. Prosess brukes når agenten må starte en sekvens av handlinger, ikke bare ett kall."
      },
      {
        prompt: "Når er Computer Use / GUI-automatisering mest aktuelt?",
        options: [
          "Når det finnes et godt API og en moden connector.",
          "Når det ikke finnes API, connector eller egnet workflow, og agenten må jobbe via et grensesnitt.",
          "Når du vil redusere antall tokens i alle scenarier."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Computer Use er et alternativ når andre, mer robuste integrasjoner ikke finnes."
      },
      {
        prompt: "Hva er MCP best beskrevet som?",
        options: [
          "Et standardisert lag for verktøy og kontekst som gjøres brukbart for agenten.",
          "Bare en ny type database.",
          "Et annet navn for SharePoint-agent."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. MCP standardiserer hvordan verktøy og kontekst eksponeres til agenter."
      }
    ]
  },
  {
    id: "modul4",
    title: "Modul 4 – Under panseret på en LLM",
    shortTitle: "Modul 4",
    summary:
      "Praktisk forståelse av hvordan modellen svarer, hva tokens betyr, og hvordan modellvalg og multimodalitet påvirker kvalitet og kostnad.",
    takeaways: [
      "Modellen genererer svar token for token ut fra inputpakken den får.",
      "Kvalitet avhenger av instruksjoner, kontekst, verktøyresultater og modellvalg.",
      "Temperatur, top-p og multimodalitet må brukes bevisst."
    ],
    practice:
      "Vurder agentideen din: trenger den mest fart, resonnering eller multimodal forståelse? Skriv ett første modellvalg og hvorfor.",
    questions: [
      {
        prompt: "Hva skjer i hovedsak når en LLM svarer?",
        options: [
          "Den slår opp et ferdig fasitsvar i en database.",
          "Den predikerer neste token steg for steg ut fra inputen den får.",
          "Den kjøper automatisk mer kontekst fra nettet hver gang."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Det er derfor kvaliteten på inputen betyr så mye."
      },
      {
        prompt: "Hva mener vi med inputpakken til modellen?",
        options: [
          "Hele kombinasjonen av instruksjoner, brukerforespørsel, grounding, verktøyresultater og relevant historikk.",
          "Bare det brukeren skrev i siste melding.",
          "Kun systemprompten."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Prompt i bred forstand er hele inputpakken modellen faktisk får."
      },
      {
        prompt: "Når bør du starte med lav temperatur?",
        options: [
          "Når agenten skal være presis, stabil og faktabasert.",
          "Når du vil ha mest mulig kreativ variasjon i alle svar.",
          "Når du vil slippe å evaluere agenten."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Lav temperatur passer bedre for fakta, verktøybruk og forutsigbare svar."
      },
      {
        prompt: "Hvilken modelltype prioriterer du typisk for flertrinns logikk og krevende analyse?",
        options: ["Reasoning-modell", "Small language model", "Ren multimodal modell uten tekstbehov"],
        correctIndex: 0,
        explanation:
          "Riktig. Reasoning-modeller er typisk bedre på komplekse problemer og flertrinns resonnering."
      },
      {
        prompt: "Når gir multimodalitet mest verdi?",
        options: [
          "Når visuell eller auditiv kontekst faktisk er viktig, som skjermbilder, dokumentlayout eller tale.",
          "Når du bare har korte tekstspørsmål.",
          "Når du vil bruke så få tokens som mulig."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Multimodalitet gir verdi når tekst alene ikke dekker oppgaven godt nok."
      },
      {
        prompt: "Hvorfor bør du ikke bruke multimodalitet bare fordi det er mulig?",
        options: [
          "Det kan gi mer kostnad, mer kompleksitet og er ikke nødvendig hvis tekst er nok.",
          "Det fungerer bare i forskningsprosjekter.",
          "Det kan ikke kombineres med andre verktøy."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Hvis ren tekst er nok, er det ofte enklere, billigere og lettere å styre."
      }
    ]
  },
  {
    id: "modul5",
    title: "Modul 5 – Kodeagenter (ekstern økt)",
    shortTitle: "Modul 5",
    summary:
      "Ekstern økt, men tatt med i portalen for å knytte kodeagenter til resten av workshopens tankesett.",
    takeaways: [
      "De samme agentmønstrene dukker opp igjen i utviklerverktøy og kodeflyt.",
      "Kodeagenter bruker også instruksjoner, kontekst og verktøy.",
      "Verdien ligger ofte i effektivisering av analyse, endringer, testing og dokumentasjon."
    ],
    practice:
      "Tenk på en utvikleroppgave du gjør ofte. Hva kunne en kodeagent hjulpet deg med: analyse, endring, test, dokumentasjon eller review?",
    questions: [
      {
        prompt: "Hva er hovedpoenget med å ha kodeagenter som ekstern økt i dette løpet?",
        options: [
          "Å vise at de samme agentmønstrene også brukes i utviklerverktøy og kodeflyt.",
          "Å erstatte alle andre moduler i workshopen.",
          "Å gjøre Copilot Studio irrelevant."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Modul 5 er med for å vise at prinsippene fra workshopen også gjelder i pro-code-scenarier."
      },
      {
        prompt: "Hvilken type arbeid kan en kodeagent typisk hjelpe med?",
        options: [
          "Generering av tester, dokumentasjon, analyser og forslag til kodeendringer.",
          "Bare design av PowerPoint-temaer.",
          "Kun lisenshåndtering i Microsoft 365."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Kodeagenter brukes ofte i utviklerflyt til analyse, endringer, test og dokumentasjon."
      },
      {
        prompt: "Hvilke tre prinsipper går igjen fra resten av workshopen og inn i kodeagenter?",
        options: [
          "Instruksjoner, kontekst og verktøy.",
          "Bare hastighet, hosting og CSS.",
          "Kun modellvalg og branch-navn."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Kodeagenter er fortsatt agenter: de trenger styring, relevant kontekst og riktige verktøy."
      }
    ]
  },
  {
    id: "modul6",
    title: "Modul 6 – Agentarkitektur og multi-agent",
    shortTitle: "Modul 6",
    summary:
      "Når du bør holde deg til én agent, når du bør splitte i flere, og hvordan orkestrering, topics og A2A passer inn.",
    takeaways: [
      "Start enkelt, og splitt først når ansvar, eierskap eller presisjon tilsier det.",
      "Multi-agent kan gi spesialisering, sporbarhet og gjenbruk.",
      "Orkestratorlaget styrer valg mellom topics, tools, knowledge og andre agenter."
    ],
    practice:
      "Vurder agentideen din: trenger du egentlig multi-agent, eller vil bedre avgrensning i én agent være nok akkurat nå?",
    questions: [
      {
        prompt: "Hva er en typisk gevinst med multi-agent?",
        options: [
          "Mer spesialisering og enklere vedlikehold av delansvar.",
          "At alle sikkerhetsbehov forsvinner.",
          "At man aldri lenger trenger evaluering."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Multi-agent kan gi tydeligere roller, bedre gjenbruk og bedre sporbarhet."
      },
      {
        prompt: "Hvilket mønster beskriver at flere agenter jobber samtidig på samme oppgave?",
        options: ["Sekvens", "Parallell", "Handoff"],
        correctIndex: 1,
        explanation:
          "Riktig. Parallellmønsteret brukes når flere perspektiver kan jobbe samtidig."
      },
      {
        prompt: "Hva er et typisk tegn på at én agent bør splittes i flere?",
        options: [
          "Beskrivelser overlapper, ulike team eier ulike domener, eller agenten har for mange valg.",
          "At agenten bare har en enkel FAQ-oppgave.",
          "At man vil unngå all form for styring."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Når ansvar og metadata begynner å flyte sammen, er oppdeling ofte et bedre designvalg."
      },
      {
        prompt: "Hva skiller en connected agent fra en child agent i Copilot Studio?",
        options: [
          "Connected agent er mer selvstendig og kan styres og gjenbrukes separat.",
          "Child agent er alltid ekstern og eies av et annet team.",
          "Det er ingen reell forskjell."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Child agents er inne i samme løsning, connected agents er mer selvstendige og kan ha eget domene og livssyklus."
      },
      {
        prompt: "Hva er orkestratorlagets hovedjobb?",
        options: [
          "Å velge mellom topics, tools, knowledge og andre agenter, og styre rekkefølge og kontekst.",
          "Å erstatte behovet for instruksjoner.",
          "Å lagre alle filer i OneDrive."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Orkestratorlaget er arkitekturlaget som styrer hva som skal skje videre."
      },
      {
        prompt: "Hvilket A2A-begrep beskriver agentens maskinlesbare visittkort?",
        options: ["Artifact", "Agent Card", "Topic"],
        correctIndex: 1,
        explanation:
          "Riktig. Agent Card beskriver kapabiliteter, endepunkt og auth for agenten."
      }
    ]
  },
  {
    id: "modul7",
    title: "Modul 7 – Governance, evaluering og publisering",
    shortTitle: "Modul 7",
    summary:
      "Hvordan en agent går fra prototype til noe som kan brukes forsvarlig i en virksomhet.",
    takeaways: [
      "Governance må bygges inn fra start, ikke legges på til slutt.",
      "Tilgang, sikkerhet, kvalitet og drift er fire ulike styringslag.",
      "Feedback, observabilitet og tydelig ansvar er nødvendig i drift."
    ],
    practice:
      "Se på agentideen din som om den skal i produksjon i morgen. Hvilke tre ting må være avklart for at du skal stole på den?",
    questions: [
      {
        prompt: "Hvorfor trenger agenter governance?",
        options: [
          "Fordi agenten kan hente data, bruke verktøy og utføre handlinger med reelle konsekvenser.",
          "Bare for å tilfredsstille formelle krav til presentasjoner.",
          "Kun når agenten er bygget i Azure."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Governance handler om at agenten er en virksomhetsløsning, ikke bare en smart demo."
      },
      {
        prompt: "Hvilke fire styringslag bruker workshopen som mental modell?",
        options: [
          "Tilgang, sikkerhet, kvalitet og drift.",
          "Bruker, modell, design og budsjett.",
          "Kode, nettverk, database og CSS."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Disse fire lagene gjør governance mer konkret og lettere å fordele ansvar i."
      },
      {
        prompt: "Hva betyr minste privilegium i agentkontekst?",
        options: [
          "Agenten skal bare ha tilgang til det den faktisk trenger.",
          "Agenten skal ha admin-rettigheter i test for sikkerhets skyld.",
          "Agenten skal bruke flest mulig connectorer for fleksibilitet."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Least privilege er et grunnprinsipp for trygg tilgangsstyring."
      },
      {
        prompt: "Hva bør et godt testsett inneholde i tillegg til vanlige spørsmål?",
        options: [
          "Vanskelige spørsmål, utenfor scope, sikkerhetstester og verktøy/prosessflyt.",
          "Kun spørsmål som allerede virker fint i demo.",
          "Bare ett langt dokument som agenten leser."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Testsettet må dekke både normal bruk, grenser, sikkerhet og handlinger."
      },
      {
        prompt: "Hva er en Correlation ID nyttig for?",
        options: [
          "Å binde sammen hele kjeden på tvers av verktøy, kall og agenter.",
          "Å velge fargepalett for klienten.",
          "Å lage kortere prompttekster."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Correlation ID gjør observabilitet og feilsøking på tvers av kjeder mulig."
      },
      {
        prompt: "Hva er forskjellen på kanal og klient?",
        options: [
          "Kanal er hvor agenten publiseres; klient er grensesnittet brukeren faktisk møter.",
          "Kanal er alltid Teams, klient er alltid web.",
          "Det er to ord for det samme."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Skillet hjelper når du diskuterer publisering og brukeropplevelse."
      },
      {
        prompt: "Hvorfor er publisering mer enn å trykke Publish?",
        options: [
          "Fordi du må avklare tilgang, identitet i drift, versjonering og godkjenning.",
          "Fordi modellen må trenes på nytt hver gang.",
          "Fordi publisering automatisk løser kostnadsproblemer."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Publisering er et kontrollpunkt, ikke bare en knapp."
      }
    ]
  },
  {
    id: "modul8",
    title: "Modul 8 – Avslutning, oppsummering og deling",
    shortTitle: "Modul 8",
    summary:
      "Oppsummering av løpet, deling av læring og en siste sjekk på om deltakerne ser den røde tråden fra idé til drift.",
    takeaways: [
      "Hele workshopen kan leses som en reise fra oppgavevalg til drift.",
      "Demoer og refleksjon gjør læringen tydelig.",
      "Målet er ikke perfekt leveranse, men tydelige valg og neste steg."
    ],
    practice:
      "Svar kort på to ting: Hva er det viktigste du tar med deg, og hva vil du teste videre først?",
    questions: [
      {
        prompt: "Hva er første steg i den røde tråden i workshopen?",
        options: [
          "Finne en god oppgave for en agent.",
          "Velge den dyreste modellen.",
          "Bygge multi-agent fra dag én."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Workshopen starter med problemet og bruken, ikke med teknologien."
      },
      {
        prompt: "Hva er et godt demoformat i avslutningen?",
        options: [
          "Forklar hva du bygde, hvem agenten er for, en ting den gjør bra og en ting du vil forbedre videre.",
          "Les opp hele instruksjonsfilen ord for ord.",
          "Vis bare lisensmatrisen."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Demoen skal være kort, tydelig og fokusert på verdi, valg og videre forbedring."
      },
      {
        prompt: "Hvilke tre lag ble oppsummert som det som gjør agenten nyttig i praksis?",
        options: [
          "Instruksjoner, kunnskapskilder og verktøy.",
          "Bilder, lyd og video.",
          "CSS, backend og hosting."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Dette er kjernelaget fra modul 3 som gjenbrukes i resten av workshopen."
      },
      {
        prompt: "Hva er et godt tegn på at workshopen har gjort jobben sin?",
        options: [
          "At deltakerne sitter igjen med språk, struktur og erfaring nok til å bygge videre.",
          "At alle har bygget en perfekt produksjonsklar agent.",
          "At ingen endret mening underveis."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Målet er bevisste valg og videre fremdrift, ikke perfekt ferdig produkt."
      }
    ]
  }
];

const storageKey = "tc26-modultester-state-v1";
const moduleNav = document.querySelector("#module-nav");
const moduleView = document.querySelector("#module-view");
const completedModulesEl = document.querySelector("#completed-modules");
const correctAnswersEl = document.querySelector("#correct-answers");
const overallProgressEl = document.querySelector("#overall-progress");
const progressFillEl = document.querySelector("#progress-fill");
const resetButton = document.querySelector("#reset-progress");

let state = loadState();

function loadState() {
  const empty = {
    activeModuleId: modules[0].id,
    answers: {}
  };

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return empty;
    }

    const parsed = JSON.parse(raw);
    return {
      activeModuleId: modules.some((module) => module.id === parsed.activeModuleId)
        ? parsed.activeModuleId
        : modules[0].id,
      answers: parsed.answers || {}
    };
  } catch (error) {
    return empty;
  }
}

function saveState() {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function resetModuleAnswers(moduleId) {
  Object.keys(state.answers).forEach((key) => {
    if (key.startsWith(`${moduleId}::`)) {
      delete state.answers[key];
    }
  });
}

function questionKey(moduleId, questionIndex) {
  return `${moduleId}::${questionIndex}`;
}

function getQuestionState(moduleId, questionIndex) {
  return state.answers[questionKey(moduleId, questionIndex)] || null;
}

function getModuleProgress(module) {
  const total = module.questions.length;
  const correct = module.questions.reduce((sum, question, questionIndex) => {
    const answerState = getQuestionState(module.id, questionIndex);
    return sum + (answerState?.correct ? 1 : 0);
  }, 0);

  return {
    correct,
    total,
    completed: total > 0 && correct === total
  };
}

function getGlobalProgress() {
  const totalQuestions = modules.reduce(
    (sum, module) => sum + module.questions.length,
    0
  );
  const correctAnswers = modules.reduce(
    (sum, module) => sum + getModuleProgress(module).correct,
    0
  );
  const completedModules = modules.reduce(
    (sum, module) => sum + (getModuleProgress(module).completed ? 1 : 0),
    0
  );

  return {
    totalQuestions,
    correctAnswers,
    completedModules,
    totalModules: modules.length,
    percentage:
      totalQuestions === 0
        ? 0
        : Math.round((correctAnswers / totalQuestions) * 100)
  };
}

function renderNav() {
  moduleNav.innerHTML = "";

  modules.forEach((module) => {
    const progress = getModuleProgress(module);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-nav__button${
      state.activeModuleId === module.id ? " is-active" : ""
    }`;
    button.addEventListener("click", () => {
      state.activeModuleId = module.id;
      saveState();
      render();
    });

    button.innerHTML = `
      <div class="module-nav__top">
        <span class="module-nav__title">${module.shortTitle}</span>
        <span class="module-nav__badge">${
          progress.completed ? "Fullført" : `${progress.correct}/${progress.total}`
        }</span>
      </div>
      <div class="module-nav__meta">${module.title.replace(`${module.shortTitle} – `, "")}</div>
    `;

    moduleNav.appendChild(button);
  });
}

function renderModule() {
  const module = modules.find((item) => item.id === state.activeModuleId) || modules[0];
  const progress = getModuleProgress(module);
  const hasModuleAnswers = module.questions.some((_, questionIndex) =>
    Boolean(getQuestionState(module.id, questionIndex))
  );

  const questionMarkup = module.questions
    .map((question, questionIndex) => renderQuestion(module, question, questionIndex))
    .join("");

  moduleView.innerHTML = `
    <section class="module-card">
      <div class="module-card__header">
        <div>
          <h2>${module.title}</h2>
          <p class="module-card__summary">${module.summary}</p>
        </div>
        <div class="module-card__actions">
          <div class="module-card__tag">${progress.correct}/${progress.total} riktige</div>
          <button
            type="button"
            class="button button--ghost button--module-reset"
            id="reset-module"
            ${hasModuleAnswers ? "" : "disabled"}
          >
            Nullstill modul
          </button>
        </div>
      </div>

      <div class="two-column">
        <div class="callout">
          <h3>Det viktigste du skal sitte igjen med</h3>
          <ul>
            ${module.takeaways.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="callout">
          <h3>Prøv i praksis</h3>
          <p>${module.practice}</p>
        </div>
      </div>
    </section>

    <section class="question-list">
      ${questionMarkup}
    </section>

    <section class="summary-card">
      <strong>Tips:</strong> Deltakerne kan bruke denne modulen som repetisjon etter foredraget, eller som kontrollspørsmål i grupper.
    </section>
  `;

  attachQuestionHandlers(module);
  attachModuleResetHandler(module);
}

function renderQuestion(module, question, questionIndex) {
  const answerState = getQuestionState(module.id, questionIndex);
  const hasAnswered = Boolean(answerState);
  const statusLabel = hasAnswered
    ? answerState.correct
      ? "Godkjent"
      : "Prøv igjen"
    : "Ikke besvart";
  const statusClass = hasAnswered
    ? answerState.correct
      ? " is-correct"
      : " is-wrong"
    : "";

  const optionsMarkup = question.options
    .map((option, optionIndex) => {
      const selected = answerState?.selectedIndex === optionIndex;
      const isCorrect = hasAnswered && optionIndex === question.correctIndex;
      const isWrong = selected && hasAnswered && !answerState.correct;
      const className = [
        "option",
        selected ? "is-selected" : "",
        isCorrect ? "is-correct" : "",
        isWrong ? "is-wrong" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button
          type="button"
          class="${className}"
          data-module-id="${module.id}"
          data-question-index="${questionIndex}"
          data-option-index="${optionIndex}"
          ${hasAnswered ? "disabled" : ""}
        >
          ${option}
        </button>
      `;
    })
    .join("");

  let feedbackMarkup = "";
  if (hasAnswered) {
    feedbackMarkup = `
      <div class="feedback${answerState.correct ? " is-correct" : " is-wrong"}">
        ${answerState.correct ? "Riktig." : "Ikke helt."} ${question.explanation}
      </div>
    `;
  }

  return `
    <article class="question-card">
      <div class="question-card__top">
        <div>
          <span class="question-card__label">Spørsmål ${questionIndex + 1}</span>
          <p>${question.prompt}</p>
        </div>
        <span class="question-card__status${statusClass}">${statusLabel}</span>
      </div>
      <div class="options">${optionsMarkup}</div>
      ${feedbackMarkup}
    </article>
  `;
}

function attachQuestionHandlers(module) {
  moduleView.querySelectorAll(".option:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = Number(button.dataset.questionIndex);
      const optionIndex = Number(button.dataset.optionIndex);
      const question = module.questions[questionIndex];

      if (getQuestionState(module.id, questionIndex)) {
        return;
      }

      state.answers[questionKey(module.id, questionIndex)] = {
        selectedIndex: optionIndex,
        correct: optionIndex === question.correctIndex
      };

      saveState();
      render();
    });
  });
}

function attachModuleResetHandler(module) {
  const resetModuleButton = moduleView.querySelector("#reset-module");
  if (!resetModuleButton) {
    return;
  }

  resetModuleButton.addEventListener("click", () => {
    resetModuleAnswers(module.id);
    saveState();
    render();
  });
}

function renderStats() {
  const progress = getGlobalProgress();
  completedModulesEl.textContent = `${progress.completedModules}/${progress.totalModules}`;
  correctAnswersEl.textContent = `${progress.correctAnswers}/${progress.totalQuestions}`;
  overallProgressEl.textContent = `${progress.percentage}%`;
  progressFillEl.style.width = `${progress.percentage}%`;
}

function render() {
  renderStats();
  renderNav();
  renderModule();
}

resetButton.addEventListener("click", () => {
  state = {
    activeModuleId: modules[0].id,
    answers: {}
  };
  saveState();
  render();
});

render();
