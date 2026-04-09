const moduleDefinitions = [
  {
    id: "modul1",
    title: "Modul 1 – Introduksjon til AI-agenter",
    shortTitle: "Modul 1",
    summary:
      "Hva er en agent, hvilke byggeklosser består den av, når passer den, og hvordan beskriver du en første agentidé.",
    takeaways: [
      "En agent kombinerer språkmodell, instruksjoner, kunnskap, verktøy og ofte state, orkestrering og triggere.",
      "Retrieval-, task/action- og orkestratoragenter løser ulike typer behov.",
      "En god første agentidé har tydelig bruker, tydelig oppgave og tydelig verdi."
    ],
    practice:
      "Forklar agentideen din med tre setninger: Hvem er brukeren, hva skal agenten gjøre, og hvilken verdi gir den?",
    questions: [
      {
        prompt: "Hva beskriver best en AI-agent slik modulen definerer den?",
        options: [
          "En fast regelmotor uten språkforståelse som alltid følger samme flyt.",
          "En chatbot som kun leser opp ferdige svar fra en FAQ.",
          "Et intelligent program som bruker en eller flere språkmodeller til å forstå kontekst, ta beslutninger og utføre handlinger ved hjelp av verktøy."
        ],
        correctIndex: 2,
        explanation:
          "Modulen beskriver agenten som et intelligent program som bruker språkmodeller til å forstå kontekst, ta beslutninger og utføre handlinger."
      },
      {
        prompt: "Hva er rollen til minne / state i en agent?",
        options: [
          "Å huske kontekst og tidligere interaksjoner når det er relevant.",
          "Å bestemme hvilket lisensnivå agenten trenger i produksjon.",
          "Å publisere agenten til riktig kanal."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Minne / state er delen som lar agenten holde på relevant kontekst og tidligere interaksjoner."
      },
      {
        prompt: "Hvilket eksempel passer best som task / action-agent?",
        options: [
          "En FAQ-agent over SharePoint-dokumenter.",
          "En agent som mottar og oppretter ordre i et CRM-system.",
          "En agent som planlegger og kombinerer flere steg på tvers av systemer."
        ],
        correctIndex: 1,
        explanation:
          "Task / action-agenter bruker systemer og API-er for å utføre konkrete handlinger, som å opprette en ordre i et CRM-system."
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
          "Riktig. Modulen beskriver en portefølje av Microsoft-agenter, partneragenter og egne agenter."
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
          "Så mange verktøy og datakilder som mulig fra start.",
          "At agenten må være helt autonom før den er interessant.",
          "En tydelig bruker, en tydelig oppgave og en tydelig verdi."
        ],
        correctIndex: 2,
        explanation:
          "I modulteksten er dette kjernen i en god første agentidé: tydelig bruker, tydelig oppgave og tydelig verdi."
      }
    ]
  },
  {
    id: "modul2",
    title: "Modul 2 – Agentplattformer",
    shortTitle: "Modul 2",
    summary:
      "Oversikt over Microsofts agentøkosystem og hvordan du velger riktig byggespor.",
    takeaways: [
      "Samme agentidé kan bygges på flere måter, men plattformvalget påvirker data, verktøy, kanaler og styring.",
      "Microsoft 365 har raske innganger, mens SDK-, Teams- og Foundry-spor gir mer kontroll.",
      "Custom engine og Agent Framework er relevante når du trenger mer eksplisitt orkestrering eller avansert arbeidsflyt."
    ],
    practice:
      "Ta agentideen din og velg ett spor: rask start i Microsoft 365, virksomhetsagent i Copilot Studio, eller pro-code/Azure. Noter hvorfor.",
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
        options: ["Agent Builder i M365 Copilot", "Microsoft Foundry Agent Service", "Teams SDK"],
        correctIndex: 0,
        explanation:
          "Agent Builder er den raskeste inngangen for prototyping i Microsoft 365."
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
          "SDK-sporet er relevant når kanalopplevelse og egen kode er viktig."
      },
      {
        prompt: "Hvilket byggespor passer best når managed runtime, RBAC, tracing og skalering i Azure er viktigst?",
        options: ["Copilot Studio", "Microsoft Foundry Agent Service", "SharePoint agents"],
        correctIndex: 1,
        explanation:
          "Foundry Agent Service passer godt når du trenger Azure-plattform og mer avansert drift."
      },
      {
        prompt: "Hva kjennetegner en custom engine agent?",
        options: [
          "Den er mer fleksibel enn en ren deklarativ agent, og du styrer orkestrering, modellvalg og integrasjoner mer eksplisitt.",
          "Det er bare et annet navn på SharePoint agents.",
          "Det er kun en agenttype som brukes i Power Automate."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Custom engine-agenten er relevant når standard Copilot-opplevelser ikke er nok."
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
          "Agent Framework er laget for orkestrering, workflows og multi-agent i kode."
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
          "Fargevalg, logo og ikoner.",
          "Kostnadsestimat for plattformen.",
          "Handlingsrom, verktøybruk, stoppkriterier og rekkefølge."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. I workshopen er dette fire ting som ofte mangler, og som svekker agentens styring."
      },
      {
        prompt: "Hva er hovedforskjellen på instruksjoner og beskrivelser i Copilot Studio?",
        options: [
          "Instruksjoner styrer oppførsel; beskrivelser hjelper orkestratoren å velge når noe skal brukes.",
          "Instruksjoner brukes bare til design; beskrivelser brukes bare til sikkerhet.",
          "Det er to ord for det samme."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Instruksjoner sier hvordan agenten skal oppføre seg, mens beskrivelser hjelper når verktøy, topics eller agenter skal velges."
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
        prompt: "Hvorfor er retrieval-laget så viktig i RAG?",
        options: [
          "Fordi det finner relevant kontekst, begrenser hva som sendes inn, og må respektere tilgang og sikkerhet.",
          "Fordi det automatisk erstatter behovet for instruksjoner og evaluering.",
          "Fordi det bare handler om å gjøre dokumentene penere i søkeindeksen."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Retrieval-laget er ansvarlig for å hente riktig kontekst, begrense input og bevare sikkerhet og sporbarhet."
      },
      {
        prompt: "Hva er forskjellen på semantisk søk og chunking?",
        options: [
          "Semantisk søk brukes bare i Teams; chunking brukes bare i Azure.",
          "Det er to ord for akkurat det samme.",
          "Semantisk søk finner mening; chunking deler dokumenter i mindre biter for bedre treff."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Semantikk hjelper deg å finne riktig innhold, chunking hjelper deg å hente riktig utdrag."
      },
      {
        prompt: "Hvilket verktøynivå passer best når agenten skal kjøre flere kjente steg på tvers av systemer?",
        options: ["Variabler", "Connectors", "Prosess"],
        correctIndex: 2,
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
          "Bare en ny type database.",
          "Et annet navn for SharePoint-agent.",
          "Et standardisert lag for verktøy og kontekst som gjøres brukbart for agenten."
        ],
        correctIndex: 2,
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
          "Bare det brukeren skrev i siste melding.",
          "Kun systemprompten.",
          "Hele kombinasjonen av instruksjoner, brukerforespørsel, grounding, verktøyresultater og relevant historikk."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Prompt i bred forstand er hele inputpakken modellen faktisk får."
      },
      {
        prompt: "Når bør du starte med lav temperatur?",
        options: [
          "Når du vil ha mest mulig kreativ variasjon i alle svar.",
          "Når du vil slippe å evaluere agenten.",
          "Når agenten skal være presis, stabil og faktabasert."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Lav temperatur passer bedre for fakta, verktøybruk og forutsigbare svar."
      },
      {
        prompt: "Hvilken modelltype prioriterer du typisk for flertrinns logikk og krevende analyse?",
        options: ["Small language model", "Reasoning-modell", "Ren multimodal modell uten tekstbehov"],
        correctIndex: 1,
        explanation:
          "Riktig. Reasoning-modeller er typisk bedre på komplekse problemer og flertrinns resonnering."
      },
      {
        prompt: "Når gir multimodalitet mest verdi?",
        options: [
          "Når du bare har korte tekstspørsmål.",
          "Når du vil bruke så få tokens som mulig.",
          "Når visuell eller auditiv kontekst faktisk er viktig, som skjermbilder, dokumentlayout eller tale."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Multimodalitet gir verdi når tekst alene ikke dekker oppgaven godt nok."
      },
      {
        prompt: "Hvorfor bør du ikke bruke multimodalitet bare fordi det er mulig?",
        options: [
          "Det fungerer bare i forskningsprosjekter.",
          "Det kan gi mer kostnad, mer kompleksitet og er ikke nødvendig hvis tekst er nok.",
          "Det kan ikke kombineres med andre verktøy."
        ],
        correctIndex: 1,
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
          "Å erstatte alle andre moduler i workshopen.",
          "Å gjøre Copilot Studio irrelevant.",
          "Å vise at de samme agentmønstrene også brukes i utviklerverktøy og kodeflyt."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Modul 5 er med for å vise at prinsippene fra workshopen også gjelder i pro-code-scenarier."
      },
      {
        prompt: "Hvilken type arbeid kan en kodeagent typisk hjelpe med?",
        options: [
          "Bare design av PowerPoint-temaer.",
          "Generering av tester, dokumentasjon, analyser og forslag til kodeendringer.",
          "Kun lisenshåndtering i Microsoft 365."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Kodeagenter brukes ofte i utviklerflyt til analyse, endringer, test og dokumentasjon."
      },
      {
        prompt: "Hvilke tre prinsipper går igjen fra resten av workshopen og inn i kodeagenter?",
        options: [
          "Bare hastighet, hosting og CSS.",
          "Kun modellvalg og branch-navn.",
          "Instruksjoner, kontekst og verktøy."
        ],
        correctIndex: 2,
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
          "At alle sikkerhetsbehov forsvinner.",
          "At man aldri lenger trenger evaluering.",
          "Mer spesialisering og enklere vedlikehold av delansvar."
        ],
        correctIndex: 2,
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
          "At agenten bare har en enkel FAQ-oppgave.",
          "Beskrivelser overlapper, ulike team eier ulike domener, eller agenten har for mange valg.",
          "At man vil unngå all form for styring."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Når ansvar og metadata begynner å flyte sammen, er oppdeling ofte et bedre designvalg."
      },
      {
        prompt: "Hva skiller en connected agent fra en child agent i Copilot Studio?",
        options: [
          "Child agent er alltid ekstern og eies av et annet team.",
          "Det er ingen reell forskjell.",
          "Connected agent er mer selvstendig og kan styres og gjenbrukes separat."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Child agents er inne i samme løsning, connected agents er mer selvstendige og kan ha eget domene og livssyklus."
      },
      {
        prompt: "Hva er orkestratorlagets hovedjobb?",
        options: [
          "Å erstatte behovet for instruksjoner.",
          "Å lagre alle filer i OneDrive.",
          "Å velge mellom topics, tools, knowledge og andre agenter, og styre rekkefølge og kontekst."
        ],
        correctIndex: 2,
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
      "Hvordan en agent går fra prototype til noe som kan brukes forsvarlig og styres i en virksomhet.",
    takeaways: [
      "Governance må bygges inn fra start, ikke legges på til slutt.",
      "Tilgang, sikkerhet, kvalitet og drift er fire ulike styringslag.",
      "Agent 365, observabilitet og tydelige roller blir viktige når agenten går i produksjon."
    ],
    practice:
      "Se på agentideen din som om den skal i produksjon i morgen. Hvilke tre ting må være avklart for at du skal stole på den?",
    questions: [
      {
        prompt: "Hvorfor trenger agenter governance?",
        options: [
          "Bare for å tilfredsstille formelle krav til presentasjoner.",
          "Kun når agenten er bygget i Azure.",
          "Fordi agenten kan hente data, bruke verktøy og utføre handlinger med reelle konsekvenser."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Governance handler om at agenten er en virksomhetsløsning, ikke bare en smart demo."
      },
      {
        prompt: "Hvilke fire styringslag bruker workshopen som mental modell?",
        options: [
          "Bruker, modell, design og budsjett.",
          "Tilgang, sikkerhet, kvalitet og drift.",
          "Kode, nettverk, database og CSS."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Disse fire lagene gjør governance mer konkret og lettere å fordele ansvar i."
      },
      {
        prompt: "Hva er Microsoft Agent 365 best beskrevet som i modulen?",
        options: [
          "En kontrollplan for agentporteføljen på tvers av plattformer, med identitet, registry og observability.",
          "Et nytt navn på Copilot Studio.",
          "Et krav om å bruke én bestemt modell i alle agenter."
        ],
        correctIndex: 0,
        explanation:
          "Riktig. Modulen beskriver Agent 365 som et styringslag eller kontrollplan for agentporteføljen."
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
          "Kun spørsmål som allerede virker fint i demo.",
          "Bare ett langt dokument som agenten leser.",
          "Vanskelige spørsmål, utenfor scope, sikkerhetstester og verktøy/prosessflyt."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Testsettet må dekke både normal bruk, grenser, sikkerhet og handlinger."
      },
      {
        prompt: "Hva er en Correlation ID nyttig for?",
        options: [
          "Å velge fargepalett for klienten.",
          "Å lage kortere prompttekster.",
          "Å binde sammen hele kjeden på tvers av verktøy, kall og agenter."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Correlation ID gjør observabilitet og feilsøking på tvers av kjeder mulig."
      },
      {
        prompt: "Hva er forskjellen på kanal og klient?",
        options: [
          "Kanal er alltid Teams, klient er alltid web.",
          "Kanal er hvor agenten publiseres; klient er grensesnittet brukeren faktisk møter.",
          "Det er to ord for det samme."
        ],
        correctIndex: 1,
        explanation:
          "Riktig. Skillet hjelper når du diskuterer publisering og brukeropplevelse."
      },
      {
        prompt: "Hvorfor er publisering mer enn å trykke Publish?",
        options: [
          "Fordi modellen må trenes på nytt hver gang.",
          "Fordi publisering automatisk løser kostnadsproblemer.",
          "Fordi du må avklare tilgang, identitet i drift, versjonering og godkjenning."
        ],
        correctIndex: 2,
        explanation:
          "Riktig. Publisering er et kontrollpunkt, ikke bare en knapp."
      }
    ]
  }
];

function hashString(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed) {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function pickNextTargetIndex(counts, previousIndex, random) {
  const available = counts
    .map((remaining, index) => ({ remaining, index }))
    .filter(({ remaining, index }) => remaining > 0 && index !== previousIndex);
  const pool = available.length
    ? available
    : counts
        .map((remaining, index) => ({ remaining, index }))
        .filter(({ remaining }) => remaining > 0);
  const shuffledPool = [...pool];

  for (let index = shuffledPool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffledPool[index], shuffledPool[swapIndex]] = [
      shuffledPool[swapIndex],
      shuffledPool[index]
    ];
  }

  shuffledPool.sort((left, right) => right.remaining - left.remaining);
  return shuffledPool[0].index;
}

function buildTargetIndexes(questionCount, optionCount, seedKey) {
  const counts = Array.from(
    { length: optionCount },
    () => Math.floor(questionCount / optionCount)
  );
  const startIndex = hashString(seedKey) % optionCount;

  for (let extraIndex = 0; extraIndex < questionCount % optionCount; extraIndex += 1) {
    counts[(startIndex + extraIndex) % optionCount] += 1;
  }

  const random = createRandom(hashString(`${seedKey}:sequence`));
  const indexes = [];
  let previousIndex = null;

  while (indexes.length < questionCount) {
    const nextIndex = pickNextTargetIndex(counts, previousIndex, random);
    counts[nextIndex] -= 1;
    indexes.push(nextIndex);
    previousIndex = nextIndex;
  }

  return indexes;
}

function reorderQuestionOptions(question, targetCorrectIndex) {
  if (question.correctIndex === targetCorrectIndex) {
    return question;
  }

  const correctOption = question.options[question.correctIndex];
  const incorrectOptions = question.options.filter(
    (_, optionIndex) => optionIndex !== question.correctIndex
  );
  const options = [];
  let incorrectIndex = 0;

  for (let optionIndex = 0; optionIndex < question.options.length; optionIndex += 1) {
    if (optionIndex === targetCorrectIndex) {
      options.push(correctOption);
      continue;
    }

    options.push(incorrectOptions[incorrectIndex]);
    incorrectIndex += 1;
  }

  return {
    ...question,
    options,
    correctIndex: targetCorrectIndex
  };
}

function rebalanceModuleQuestions(modules) {
  return modules.map((module) => {
    const questions = [...module.questions];
    const questionsByOptionCount = module.questions.reduce((groups, question, questionIndex) => {
      const optionCount = question.options.length;
      const group = groups.get(optionCount) || [];
      group.push({ question, questionIndex });
      groups.set(optionCount, group);
      return groups;
    }, new Map());

    questionsByOptionCount.forEach((entries, optionCount) => {
      const targetIndexes = buildTargetIndexes(
        entries.length,
        optionCount,
        `${module.id}:${optionCount}`
      );

      entries.forEach(({ question, questionIndex }, entryIndex) => {
        questions[questionIndex] = reorderQuestionOptions(
          question,
          targetIndexes[entryIndex]
        );
      });
    });

    return {
      ...module,
      questions
    };
  });
}

// Keep the authored answer data readable, but rebalance option order deterministically in the UI.
const modules = rebalanceModuleQuestions(moduleDefinitions);

const agentFunFacts = [
  "IDC-estimatet som brukes i workshopen peker mot 1,3 milliarder AI-agenter innen 2028.",
  "En retrieval-agent trenger ofte bare språkmodell, instruksjoner og kunnskap for å være nyttig.",
  "Det er først når agenten skal løse flertrinnsoppgaver at orkestrering virkelig blir synlig.",
  "Mange av de beste agentidéene starter smått: én tydelig bruker, én tydelig oppgave og én tydelig verdi.",
  "Agenter gir ofte mest verdi når de kombinerer kunnskap med handling, ikke bare genererer tekst.",
  "En virksomhet vil sjelden ende opp med én agent. Ofte vokser det fram en hel portefølje over tid."
];

const storageKey = "tc26-modultester-state-v3";
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
  const moduleIndex = modules.findIndex((item) => item.id === state.activeModuleId);
  const module = modules[moduleIndex] || modules[0];
  const progress = getModuleProgress(module);
  const hasModuleAnswers = module.questions.some((_, questionIndex) =>
    Boolean(getQuestionState(module.id, questionIndex))
  );
  const funFact = agentFunFacts[moduleIndex % agentFunFacts.length];

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
      <strong>Visste du at?</strong> ${funFact}
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
