const modules = [
  {
    id: "modul1",
    title: "Modul 1 – Introduksjon til AI-agenter",
    shortTitle: "Modul 1",
    summary:
      "Grunnforstaelse av hva en agent er, hvilke byggeklosser den bestar av, og nar agent faktisk passer som losning.",
    takeaways: [
      "En agent er mer enn en chatbot fordi den kan kombinere modell, instruksjoner, kunnskap og verktøy.",
      "Ikke alle agenter trenger alle byggeklosser, men du bor kjenne dem.",
      "Retrieval-, task- og autonomous-agenter loser ulike typer oppgaver."
    ],
    practice:
      "Forklar agentideen din med tre setninger: Hvem er brukeren, hva skal agenten gjore, og hvilken verdi gir den?",
    questions: [
      {
        prompt: "Hva gjor en AI-agent til mer enn en tradisjonell chatbot?",
        options: [
          "At den alltid er publisert i Teams.",
          "At den kombinerer modell, instruksjoner, kunnskap og ofte verktøy.",
          "At den alltid kan jobbe helt autonomt."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. I workshopen er kjernepoenget at agenten ikke bare prater, men bruker styring, kontekst og ofte handlinger."
      },
      {
        prompt: "Hvilken byggekloss avgjor nar agenten starter?",
        options: ["Trigger", "Kunnskap", "Orkestrering"],
        correctIndex: 0,
        explanation:
          "Riktig. Triggeren sier nar agenten starter, enten fra brukerinput eller en hendelse."
      },
      {
        prompt: "Hvilket eksempel passer best som retrieval-agent?",
        options: [
          "En FAQ-agent over SharePoint-dokumenter.",
          "En agent som oppretter ordre i et CRM-system.",
          "En agent som overvaker innboks og bokforer fakturaer automatisk."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Retrieval-agenten svarer over egne data, ofte dokumenter eller kunnskapskilder."
      },
      {
        prompt: "Nar passer en agent typisk darlig?",
        options: [
          "Nar behovet er variabelt og krever dialog.",
          "Nar flere steg ma handteres over tid.",
          "Nar oppgaven folger helt faste regler uten rom for tolkning."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Hvis alt er helt fast og deterministisk, er ikke agent alltid riktig verktoy."
      },
      {
        prompt: "Hvilken agenttype passer best for en losning som overvaker e-post og handler mot et mal over tid?",
        options: ["Retrieval", "Task", "Autonomous"],
        correctIndex: 2,
        explanation:
          "Riktig. Autonomous-agenter jobber mot mal, triggere og verktøy over tid."
      }
    ]
  },
  {
    id: "modul2",
    title: "Modul 2 – Kom i gang med en agent",
    shortTitle: "Modul 2",
    summary:
      "Oversikt over Microsofts agentokosystem og hvordan plattformvalg paavirkker bygging, sikkerhet og kanalvalg.",
    takeaways: [
      "Plattformvalg paavirkker hvor mye kode du skriver og hvem som kan bygge losningen.",
      "Det finnes raske innganger i Microsoft 365 og mer avanserte byggespor med mer kontroll.",
      "Agentideen bor styre plattformvalget, ikke omvendt."
    ],
    practice:
      "Ta agentideen din og velg ett spor: rask start i Microsoft 365, egen virksomhetsagent eller pro-code/azure-spor. Noter hvorfor.",
    questions: [
      {
        prompt: "Hvilken plattform passer best nar agenten skal svare over et tydelig avgrenset dokumentsett?",
        options: ["SharePoint agents", "Microsoft Agent Framework", "Microsoft 365 Agents SDK"],
        correctIndex: 0,
        explanation:
          "Riktig. SharePoint agents passer nar agenten bygges direkte over et avgrenset innholdssett."
      },
      {
        prompt: "Hvilket valg passer best nar du vil teste en ide raskt inne i Microsoft 365 Copilot?",
        options: ["Agent Builder i M365 Copilot", "Foundry Agent Service", "Agent Framework"],
        correctIndex: 0,
        explanation:
          "Riktig. Agent Builder er den raskeste inngangen for prototyping i Microsoft 365."
      },
      {
        prompt: "Nar er Microsoft 365 Agents SDK spesielt relevant?",
        options: [
          "Nar du trenger kode og kontroll over appopplevelsen i M365 Copilot, Teams, web eller egne flater.",
          "Nar du bare vil svare over en mappe i SharePoint.",
          "Nar du kun trenger enkel deklarativ bygging uten kode."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. SDK-sporet er relevant nar kanalopplevelse og egen kode er viktig."
      },
      {
        prompt: "Hvilket byggespor passer best nar managed runtime, RBAC, tracing og skalering i Azure er viktigst?",
        options: ["Copilot Studio", "Microsoft Foundry Agent Service", "SharePoint agents"],
        correctIndex: 1,
        explanation:
          "Riktig. Foundry Agent Service passer godt nar du trenger Azure-plattform og mer avansert drift."
      },
      {
        prompt: "Nar er Microsoft Agent Framework mest relevant?",
        options: [
          "Nar flere spesialiserte agenter ma samarbeide eller folge eksplisitte workflows i kode.",
          "Nar du vil lage en enkel personlig agent i M365 Copilot.",
          "Nar du bare trenger en FAQ-agent over ett dokumentsett."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Agent Framework er laget for orkestrering, workflows og multi-agent i kode."
      }
    ]
  },
  {
    id: "modul3",
    title: "Modul 3 – Instruksjoner, kunnskap og verktoy",
    shortTitle: "Modul 3",
    summary:
      "Det viktigste laget i en nyttig agent: gode instruksjoner, riktig grounding og bevisste valg av verktoy.",
    takeaways: [
      "Instruksjoner setter rolle, grenser, verktøybruk og stoppkriterier.",
      "Grounding handler om svar som bygger pa faktiske kilder med riktig tilgang.",
      "Verktøy ma velges pa riktig niva: innebygd, connector, prosess, API, MCP, A2A eller skill."
    ],
    practice:
      "Skriv ned ett eksempel pa: en regel agenten skal folge, en kunnskapskilde den trenger, og ett verktoy den ma bruke.",
    questions: [
      {
        prompt: "Hva mangler ofte i agentinstruksjoner, og gor at agenten ma gjette mer?",
        options: [
          "Handlingsrom, verktoybruk, stoppkriterier og rekkefolge.",
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
          "De hjelper nar tone, struktur og svarstil er viktig.",
          "De erstatter behovet for kunnskapskilder.",
          "De gjor at agenten ikke lenger trenger evaluering."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Eksempler pa gode svar hjelper agenten a forsta forventet stil og struktur."
      },
      {
        prompt: "Hva betyr grounding i praksis?",
        options: [
          "At agenten alltid bruker den storste modellen som finnes.",
          "At agenten svarer med utgangspunkt i faktiske kilder og kontekst.",
          "At agenten lagrer alt brukeren sier for alltid."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Grounding betyr at svaret bygger pa kilder, ikke bare modellens generelle kunnskap."
      },
      {
        prompt: "Hvorfor er det viktig a beskrive en kunnskapskilde godt?",
        options: [
          "Fordi agenten bruker beskrivelsen for a velge riktig kilde, spesielt nar flere kilder ligner pa hverandre.",
          "Bare for at mennesker skal like oppsettet bedre.",
          "Kun for a fa lavere lisenskostnad."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Gode beskrivelser hjelper agenten a velge riktig kunnskapskilde, og er ekstra viktige nar antallet kilder vokser."
      },
      {
        prompt: "Hva er forskjellen pa semantisk sok og chunking?",
        options: [
          "Semantisk sok finner mening; chunking deler dokumenter i mindre biter for bedre treff.",
          "Semantisk sok brukes bare i Teams; chunking brukes bare i Azure.",
          "Det er to ord for akkurat det samme."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Semantikk hjelper deg a finne riktig innhold, chunking hjelper deg a hente riktig utdrag."
      },
      {
        prompt: "Hvilket verktoyniva passer best nar agenten skal kjore flere kjente steg pa tvers av systemer?",
        options: ["Prosess", "Variabler", "Innebygde verktoy"],
        correctIndex: 0,
        explanation:
          "Riktig. Prosess brukes nar agenten ma starte en sekvens av handlinger, ikke bare ett kall."
      },
      {
        prompt: "Nar er Computer Use / GUI-automatisering mest aktuelt?",
        options: [
          "Nar det finnes et godt API og en moden connector.",
          "Nar det ikke finnes API, connector eller egnet workflow, og agenten ma jobbe via et grensesnitt.",
          "Nar du vil redusere antall tokens i alle scenarier."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Computer Use er et alternativ nar andre, mer robuste integrasjoner ikke finnes."
      },
      {
        prompt: "Hva er MCP best beskrevet som?",
        options: [
          "Et standardisert lag for verktoy og kontekst som gjores brukbart for agenten.",
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
    title: "Modul 4 – Under panseret pa en LLM",
    shortTitle: "Modul 4",
    summary:
      "Praktisk forstaelse av hvordan modellen svarer, hva tokens betyr, og hvordan modellvalg og multimodalitet paavirkker kvalitet og kostnad.",
    takeaways: [
      "Modellen genererer svar token for token ut fra inputpakken den far.",
      "Kvalitet avhenger av instruksjoner, kontekst, verktoyresultater og modellvalg.",
      "Temperatur, top-p og multimodalitet ma brukes bevisst."
    ],
    practice:
      "Vurder agentideen din: trenger den mest fart, resonnering eller multimodal forstaelse? Skriv ett forste modellvalg og hvorfor.",
    questions: [
      {
        prompt: "Hva skjer i hovedsak nar en LLM svarer?",
        options: [
          "Den slaar opp et ferdig fasitsvar i en database.",
          "Den predikerer neste token steg for steg ut fra inputen den far.",
          "Den kjoper automatisk mer kontekst fra nettet hver gang."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Det er derfor kvaliteten pa inputen betyr sa mye."
      },
      {
        prompt: "Hva mener vi med inputpakken til modellen?",
        options: [
          "Hele kombinasjonen av instruksjoner, brukerforesporsel, grounding, verktoyresultater og relevant historikk.",
          "Bare det brukeren skrev i siste melding.",
          "Kun systemprompten."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Prompt i bred forstand er hele inputpakken modellen faktisk far."
      },
      {
        prompt: "Nar bor du starte med lav temperatur?",
        options: [
          "Nar agenten skal være presis, stabil og faktabasert.",
          "Nar du vil ha mest mulig kreativ variasjon i alle svar.",
          "Nar du vil slippe a evaluere agenten."
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
          "Riktig. Reasoning-modeller er typisk bedre pa komplekse problemer og flertrinns resonnering."
      },
      {
        prompt: "Nar gir multimodalitet mest verdi?",
        options: [
          "Nar visuell eller auditiv kontekst faktisk er viktig, som skjermbilder, dokumentlayout eller tale.",
          "Nar du bare har korte tekstsporsmal.",
          "Nar du vil bruke sa fa tokens som mulig."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Multimodalitet gir verdi nar tekst alene ikke dekker oppgaven godt nok."
      },
      {
        prompt: "Hvorfor bor du ikke bruke multimodalitet bare fordi det er mulig?",
        options: [
          "Det kan gi mer kostnad, mer kompleksitet og er ikke nodvendig hvis tekst er nok.",
          "Det fungerer bare i forskningsprosjekter.",
          "Det kan ikke kombineres med andre verktoy."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Hvis ren tekst er nok, er det ofte enklere, billigere og lettere a styre."
      }
    ]
  },
  {
    id: "modul5",
    title: "Modul 5 – Kodeagenter (ekstern okt)",
    shortTitle: "Modul 5",
    summary:
      "Ekstern okt, men tatt med i portalen for a knytte kodeagenter til resten av workshopens tankesett.",
    takeaways: [
      "De samme agentmønstrene dukker opp igjen i utviklerverktoy og kodeflyt.",
      "Kodeagenter bruker ogsa instruksjoner, kontekst og verktoy.",
      "Verdien ligger ofte i effektivisering av analyse, endringer, testing og dokumentasjon."
    ],
    practice:
      "Tenk pa en utvikleroppgave du gjor ofte. Hva kunne en kodeagent hjulpet deg med: analyse, endring, test, dokumentasjon eller review?",
    questions: [
      {
        prompt: "Hva er hovedpoenget med a ha kodeagenter som ekstern okt i dette lopet?",
        options: [
          "A vise at de samme agentmønstrene ogsa brukes i utviklerverktoy og kodeflyt.",
          "A erstatte alle andre moduler i workshopen.",
          "A gjøre Copilot Studio irrelevant."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Modul 5 er med for a vise at prinsippene fra workshopen ogsa gjelder i pro-code-scenarier."
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
          "Instruksjoner, kontekst og verktoy.",
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
      "Nar du bor holde deg til én agent, nar du bor splitte i flere, og hvordan orkestrering, topics og A2A passer inn.",
    takeaways: [
      "Start enkelt, og splitt forst nar ansvar, eierskap eller presisjon tilsier det.",
      "Multi-agent kan gi spesialisering, sporbarhet og gjenbruk.",
      "Orkestratorlaget styrer valg mellom topics, tools, knowledge og andre agenter."
    ],
    practice:
      "Vurder agentideen din: trenger du egentlig multi-agent, eller vil bedre avgrensning i én agent være nok akkurat na?",
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
        prompt: "Hvilket mønster beskriver at flere agenter jobber samtidig pa samme oppgave?",
        options: ["Sekvens", "Parallell", "Handoff"],
        correctIndex: 1,
        explanation:
          "Riktig. Parallellmønsteret brukes nar flere perspektiver kan jobbe samtidig."
      },
      {
        prompt: "Hva er et typisk tegn pa at én agent bor splittes i flere?",
        options: [
          "Beskrivelser overlapper, ulike team eier ulike domener, eller agenten har for mange valg.",
          "At agenten bare har en enkel FAQ-oppgave.",
          "At man vil unngå all form for styring."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Nar ansvar og metadata begynner a flyte sammen, er oppdeling ofte et bedre designvalg."
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
          "Riktig. Child agents er inne i samme losning, connected agents er mer selvstendige og kan ha eget domene og livssyklus."
      },
      {
        prompt: "Hva er orkestratorlagets hovedjobb?",
        options: [
          "A velge mellom topics, tools, knowledge og andre agenter, og styre rekkefolge og kontekst.",
          "A erstatte behovet for instruksjoner.",
          "A lagre alle filer i OneDrive."
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
      "Hvordan en agent gar fra prototype til noe som kan brukes forsvarlig i en virksomhet.",
    takeaways: [
      "Governance ma bygges inn fra start, ikke legges pa til slutt.",
      "Tilgang, sikkerhet, kvalitet og drift er fire ulike styringslag.",
      "Feedback, observabilitet og tydelig ansvar er nødvendig i drift."
    ],
    practice:
      "Se pa agentideen din som om den skal i produksjon i morgen. Hvilke tre ting ma være avklart for at du skal stole pa den?",
    questions: [
      {
        prompt: "Hvorfor trenger agenter governance?",
        options: [
          "Fordi agenten kan hente data, bruke verktoy og utfore handlinger med reelle konsekvenser.",
          "Bare for a tilfredsstille formelle krav til presentasjoner.",
          "Kun nar agenten er bygget i Azure."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Governance handler om at agenten er en virksomhetslosning, ikke bare en smart demo."
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
          "Riktig. Disse fire lagene gjør governance mer konkret og lettere a fordele ansvar i."
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
        prompt: "Hva bor et godt testsett inneholde i tillegg til vanlige spørsmål?",
        options: [
          "Vanskelige spørsmål, utenfor scope, sikkerhetstester og verktoy/prosessflyt.",
          "Kun spørsmål som allerede virker fint i demo.",
          "Bare ett langt dokument som agenten leser."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Testsettet ma dekke både normal bruk, grenser, sikkerhet og handlinger."
      },
      {
        prompt: "Hva er en Correlation ID nyttig for?",
        options: [
          "A binde sammen hele kjeden pa tvers av verktoy, kall og agenter.",
          "A velge fargepalett for klienten.",
          "A lage kortere prompttekster."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Correlation ID gjor observabilitet og feilsoking pa tvers av kjeder mulig."
      },
      {
        prompt: "Hva er forskjellen pa kanal og klient?",
        options: [
          "Kanal er hvor agenten publiseres; klient er grensesnittet brukeren faktisk moter.",
          "Kanal er alltid Teams, klient er alltid web.",
          "Det er to ord for det samme."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Skillet hjelper nar du diskuterer publisering og brukeropplevelse."
      },
      {
        prompt: "Hvorfor er publisering mer enn a trykke Publish?",
        options: [
          "Fordi du ma avklare tilgang, identitet i drift, versjonering og godkjenning.",
          "Fordi modellen ma trenes pa nytt hver gang.",
          "Fordi publisering automatisk loser kostnadsproblemer."
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
      "Oppsummering av lopet, deling av laging og en siste sjekk pa om deltakerne ser den rode traden fra ide til drift.",
    takeaways: [
      "Hele workshopen kan leses som en reise fra oppgavevalg til drift.",
      "Demoer og refleksjon gjor læringen tydelig.",
      "Målet er ikke perfekt leveranse, men tydelige valg og neste steg."
    ],
    practice:
      "Svar kort pa to ting: Hva er det viktigste du tar med deg, og hva vil du teste videre forst?",
    questions: [
      {
        prompt: "Hva er forste steg i den rode traden i workshopen?",
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
          "Forklar hva du bygde, hvem agenten er for, en ting den gjor bra og en ting du vil forbedre videre.",
          "Les opp hele instruksjonsfilen ord for ord.",
          "Vis bare lisensmatrisen."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Demoen skal være kort, tydelig og fokusert pa verdi, valg og videre forbedring."
      },
      {
        prompt: "Hvilke tre lag ble oppsummert som det som gjor agenten nyttig i praksis?",
        options: [
          "Instruksjoner, kunnskapskilder og verktoy.",
          "Bilder, lyd og video.",
          "CSS, backend og hosting."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Dette er kjernelaget fra modul 3 som gjenbrukes i resten av workshopen."
      },
      {
        prompt: "Hva er et godt tegn pa at workshopen har gjort jobben sin?",
        options: [
          "At deltakerne sitter igjen med språk, struktur og erfaring nok til a bygge videre.",
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
          progress.completed ? "Fullfort" : `${progress.correct}/${progress.total}`
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
        <div class="module-card__tag">${progress.correct}/${progress.total} riktige</div>
      </div>

      <div class="two-column">
        <div class="callout">
          <h3>Det viktigste du skal sitte igjen med</h3>
          <ul>
            ${module.takeaways.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="callout">
          <h3>Prov i praksis</h3>
          <p>${module.practice}</p>
        </div>
      </div>
    </section>

    <section class="question-list">
      ${questionMarkup}
    </section>

    <section class="summary-card">
      <strong>Tips:</strong> Deltakerne kan bruke denne modulen som repetisjon etter foredraget, eller som kontrollsporsmal i grupper.
    </section>
  `;

  attachQuestionHandlers(module);
}

function renderQuestion(module, question, questionIndex) {
  const answerState = getQuestionState(module.id, questionIndex);
  const hasAnswered = Boolean(answerState);
  const statusLabel = hasAnswered
    ? answerState.correct
      ? "Godkjent"
      : "Prov igjen"
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
          <span class="question-card__label">Sporsmal ${questionIndex + 1}</span>
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
  moduleView.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = Number(button.dataset.questionIndex);
      const optionIndex = Number(button.dataset.optionIndex);
      const question = module.questions[questionIndex];

      state.answers[questionKey(module.id, questionIndex)] = {
        selectedIndex: optionIndex,
        correct: optionIndex === question.correctIndex
      };

      saveState();
      render();
    });
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
