---
marp: true
theme: default
paginate: true
size: 16:9
title: Bygg din egen AI-agent
description: Teknocamp 2026 - 2-dagers hands-on workshop
style: |
  :root {
    --bg: #f5f8ff;
    --panel: rgba(255, 255, 255, 0.84);
    --panel-2: rgba(244, 248, 255, 0.9);
    --ink: #13233f;
    --muted: #667996;
    --accent: #149e8e;
    --accent-2: #5a8dff;
    --accent-warm: #f2a83b;
    --line: #c9d6eb;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    font-size: 25px;
    line-height: 1.42;
    color: var(--ink);
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 12% 14%, rgba(20, 158, 142, 0.11), transparent 24%),
      radial-gradient(circle at 84% 12%, rgba(90, 141, 255, 0.12), transparent 22%),
      linear-gradient(180deg, #fbfdff 0%, #f2f7ff 56%, #eef4ff 100%);
    padding: 56px 68px 48px;
    border-left: 6px solid var(--accent);
  }

  section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(90, 141, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(90, 141, 255, 0.07) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.18), transparent 76%);
    pointer-events: none;
  }

  section > * {
    position: relative;
    z-index: 1;
  }

  section.lead,
  section.divider,
  section.action {
    background:
      radial-gradient(circle at 16% 18%, rgba(20, 158, 142, 0.16), transparent 28%),
      radial-gradient(circle at 86% 14%, rgba(90, 141, 255, 0.18), transparent 24%),
      linear-gradient(135deg, #fafdff 0%, #edf5ff 54%, #e7f6f3 100%);
  }

  section.lead {
    justify-content: center;
    padding-right: 40%;
  }

  section.divider {
    text-align: center;
    padding-top: 120px;
  }

  section.action {
    border-left-color: var(--accent-warm);
    box-shadow: inset 0 0 0 1px rgba(242, 168, 59, 0.18);
  }

  h1,
  h2,
  h3 {
    margin: 0 0 0.35em;
    color: var(--ink);
  }

  h1,
  h2 {
    font-family: "SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  h1 {
    font-size: 1.58em;
  }

  h2 {
    font-size: 1.02em;
  }

  h3 {
    font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    font-size: 0.48em;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--accent-2);
  }

  section.lead h1,
  section.divider h1 {
    font-size: 1.88em;
  }

  section.lead h2,
  section.divider h2 {
    color: rgba(19, 35, 63, 0.74);
  }

  section.action h3 {
    display: inline-flex;
    padding: 0.35em 0.72em;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid rgba(90, 141, 255, 0.18);
    color: #b76e10;
  }

  p,
  li {
    color: var(--ink);
    line-height: 1.44;
  }

  strong {
    color: var(--accent);
  }

  section.action strong {
    color: #b76e10;
  }

  section.action li::marker {
    color: var(--accent-warm);
  }

  ul,
  ol {
    padding-left: 1.08em;
  }

  li {
    margin: 0.16em 0;
  }

  li::marker {
    color: var(--accent);
  }

  table {
    display: table !important;
    width: calc(100% + 40px) !important;
    max-width: none !important;
    margin: 0.55em -20px 0.95em;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    font-size: 0.67em;
    border: 1px solid #c4d5ef;
    border-radius: 22px;
    overflow: hidden;
    clip-path: inset(0 round 22px);
    background: var(--panel-2);
    box-shadow: 0 14px 32px rgba(76, 104, 164, 0.12);
  }

  th,
  td {
    padding: 11px 12px;
    border: 0;
    vertical-align: top;
    background: transparent;
  }

  tbody {
    background: var(--panel-2);
  }

  th {
    background: linear-gradient(180deg, #d9e7ff 0%, #d2e2ff 100%) !important;
    color: #10213e;
    border-bottom: 1px solid var(--line);
    font-weight: 700;
    text-align: left !important;
  }

  tr + tr td {
    border-top: 1px solid var(--line);
  }

  th:first-child,
  td:first-child {
    padding-left: 18px;
  }

  th:last-child,
  td:last-child {
    padding-right: 18px;
  }

  tr:first-child th:first-child {
    border-top-left-radius: 22px;
  }

  tr:first-child th:last-child {
    border-top-right-radius: 22px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 22px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 22px;
  }

  code {
    background: rgba(90, 141, 255, 0.08);
    color: var(--accent-2);
    border-radius: 6px;
    padding: 0.08em 0.28em;
    font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  }

  section.visual {
    display: flex;
    align-items: center;
    justify-content: center;
    background:
      radial-gradient(circle at 18% 14%, rgba(20, 158, 142, 0.09), transparent 24%),
      radial-gradient(circle at 82% 20%, rgba(90, 141, 255, 0.1), transparent 20%),
      linear-gradient(180deg, #fbfdff 0%, #eef4ff 100%);
    border-left-color: #8fb0ea;
  }

  section.visual::before {
    display: none;
  }

  section.visual p {
    margin: 0;
    width: 100%;
    text-align: center;
  }

  section.visual img {
    max-width: 94%;
    max-height: 560px;
    border-radius: 18px;
    box-shadow: 0 24px 60px rgba(76, 104, 164, 0.18);
  }

  section::after {
    font-size: 0.46em;
    color: var(--muted);
    font-weight: 700;
  }

  section.lead::after,
  section.divider::after,
  section.action::after {
    content: "";
  }
---

<!-- _class: lead -->
# Modul 7
## Governance, evaluering
## og publisering

---

# Hvorfor trenger agenter governance?

| Risiko | Hva som kan gå galt |
| --- | --- |
| For brede tilganger | Agenten ser eller gjør for mye |
| Svake guardrails | Skadelig eller uønsket output slipper gjennom |
| Manglende evaluering | Dårlig kvalitet oppdages først i produksjon |
| Lite sporbarhet | Det er uklart hva agenten gjorde og hvorfor |
| Uklart eierskap | Ingen vet hvem som skal godkjenne eller følge opp |

---

# Agent sprawl: hvorfor dette blir et IT-problem

| Utfordring | Hva det betyr i praksis |
| --- | --- |
| For mange agenter uten oversikt | IT vet ikke hva som faktisk er i bruk |
| Uklar identitet | Det er uklart hvem agenten handler som |
| Utydelig eierskap | Ingen følger opp livssyklus, feil eller risiko |
| Shadow agents | Agenter tas i bruk utenfor etablerte kontrollflater |
| Større angrepsflate | Flere integrasjoner, flere rettigheter og mer compliance-risiko |

Governance handler derfor ikke bare om én agent.  
Det handler om å styre en voksende agentportefølje.

---

# Fire styringslag rundt en agent

| Lag | Hva du må styre |
| --- | --- |
| Tilgang | Identitet, roller, autentisering, least privilege |
| Sikkerhet | Guardrails, innholdsfiltrering, dataflyt |
| Kvalitet | Testsett, evaluering, målinger og godkjenning |
| Drift | Publisering, overvåking, kostnad og ansvar |

---

# Microsoft Agent 365 som kontrollplan

- Per **30. mars 2026** beskriver Microsoft Learn `Microsoft Agent 365`
  som en kontrollplan for AI-agenter
- Poenget er ikke å bygge agenten for deg
- Poenget er å styre agentporteføljen på virksomhetsnivå

Kjernetanker:

- egen identitet med `Microsoft Entra Agent ID`
- samlet oversikt i `Microsoft 365 admin center` og `Agent Registry`
- kobling til `Purview`, `Defender`, observability og styrte verktøy
- kan omfatte egne registrerte agenter og `shadow agents`
- dokumentert som del av `Frontier preview-programmet`

---

# De fem pilarene i Agent 365

| Pilar | Hva den gir deg |
| --- | --- |
| Registry | Full oversikt over agenter i virksomheten |
| Access Control | Styrt tilgang, policyer og least privilege |
| Visualization | Innsikt i forbindelser, bruk og adferd |
| Interoperability | Kobling til Work IQ, apper og arbeidsflyt |
| Security | Trusseldeteksjon, beskyttelse og respons |

Dette er nyttig fordi Agent 365 ikke bare er identitet.  
Det er et bredere styringslag rundt agentene.

---

# Hvordan Agent 365 passer mot governance-lagene

| Lag | Hvordan Agent 365 bidrar |
| --- | --- |
| Tilgang | Agentidentitet, registry, least privilege, Conditional Access og sponsorskap |
| Sikkerhet | Defender, runtime-beskyttelse, prompt shield, policyer og trusselhåndtering |
| Kvalitet | Observabilitet, sporbarhet og innsikt som gjør evaluering mer konkret |
| Drift | Sentral administrasjon, agentoversikt, onboarding, livssyklus og policyhåndheving |

---

# Hvorfor Agent 365 er interessant

`Microsoft Agent 365` er relevant når spørsmålet ikke lenger er:

- Hvordan bygger vi én agent?

men:

- Hvordan oppdager vi hvilke agenter som er i bruk?
- Hvordan vet vi hvilken identitet de har?
- Hvordan begrenser vi hva de får tilgang til?
- Hvordan ser vi misbruk, feil og risikofylt adferd?
- Hvordan kobler vi dem til eksisterende sikkerhets- og compliance-arbeid?

Det er et styringslag for agentporteføljen,  
ikke bare et nytt byggespor.

---

# Agent 365 vs. plattformstyring

| Hvis du vil styre ... | Typisk sted |
| --- | --- |
| Agenter på tvers av plattformer | `Agent 365` |
| Agentidentitet, tilgang og registry | `Microsoft 365 admin center` + `Entra Agent ID` |
| Copilot Studio-spesifikke miljøvalg og ALM | `Power Platform admin center` og Copilot Studio |
| Førsteparts Copilot-opplevelser | `Microsoft 365 admin center` |

Husk:

- `Agent 365` ligger over flere byggespor
- plattformspesifikke adminflater forsvinner ikke

---

# Identitet og tilgang

| Prinsipp | Hvorfor det betyr noe |
| --- | --- |
| Minste privilegium | Agenten skal bare ha tilgang til det den trenger |
| Tydelig identitet | Du må vite om agenten handler som bruker eller som egen identitet |
| Rollebasert tilgang | Ulike personer trenger ulik rett til å bygge, publisere og bruke |
| Skille mellom dev og prod | Testtilganger skal ikke bli produksjonstilganger |

---

# Guardrails og sikkerhet

| Kontroll | Hva den beskytter mot |
| --- | --- |
| Input- og output-filtrering | Skadelig eller uønsket input og output før tools og svar brukes |
| Prompt shields | Direkte og indirekte prompt injection |
| Grounding og siteringer | Hallusinasjoner og svak sporbarhet |
| Human in the loop | Feil ved sensitive eller irreversible handlinger |
| Policyer på verktøy og connectorer | At agenten bruker feil system eller data |

---

# Copilot Studio: hvordan usikkert innhold håndteres

| Mekanisme | Trigges av | Brukeren ser | Hva du justerer |
| --- | --- | --- | --- |
| `Responsible AI filtering` | Sikkerhets- eller policybrudd i input eller output | `ContentFiltered` i debug eller blokkert/custom feilmelding i runtime | Juster filtere og sikkerhetsnivå |
| `Unknown intent fallback` | Ingen god match i trigger, topic eller kjent handlingsspor | `Vennligst omformuler` eller eskalering til fallback | Legg til triggerfraser, knowledge eller tydeligere routing |
| `Agent instructions` | Sporsperrer eller custom scope-regler i agenten | Høflig avvisning eller forklaring | Gå gjennom instruksjoner, scope og regler |

Husk:

- input filtreres før agenten handler
- output filtreres før svaret sendes
- fallback og avvisning er også guardrails

---

# Evaluering før produksjon

| Hva du bør måle | Eksempler |
| --- | --- |
| Kvalitet | Relevans, presisjon, fullstendighet |
| Sikkerhet | Prompt injection, policybrudd, sensitiv data |
| Verktøybruk | Kaller agenten riktig tool, topic eller annen agent? |
| Grounding | Er svarene støttet av riktige kilder? |
| Robusthet | Fungerer løsningen på tvetydige og vanskelige spørsmål? |

---

# Hva bør et testsett inneholde?

| Type test | Hvorfor den trengs |
| --- | --- |
| Vanlige spørsmål | Sjekker normal bruk |
| Vanskelige spørsmål | Sjekker grenser og tvetydighet |
| Utenfor scope | Sjekker avvisning og guardrails |
| Sikkerhetstester | Sjekker injection og policybrudd |
| Verktøy- og prosessflyt | Sjekker at riktig handling trigges |

---

# Feedback og observabilitet

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

---

# Monitoring med Application Insights

| Hva du får | Eksempler |
| --- | --- |
| Samtaletelemetri | Inn- og utgående meldinger og events |
| Topic- og verktøyinnsikt | Hvilke topics og handlinger som faktisk trigges |
| Egne events | Custom telemetry fra topic eller prosess |
| Driftssikt | Latency, exceptions, total conversations og trender |

I praksis:

- Koble agenten til `Application Insights` via connection string i `Settings > Advanced`
- Bruk `Logs` for KQL-spørringer

---

# Hvordan forbedrer du en agent over tid?

1. Samle feedback og driftsdata
2. Finn mønstre i feil, misforståelser og dårlige svar
3. Rett én ting om gangen:
   instruksjoner, kunnskap, verktøy, modell eller guardrails
4. Kjør evaluering på nytt
5. Publiser ny versjon når endringen faktisk er bedre

---

# Forbedringssløyfe for agenter

| Trinn | Hva du gjør |
| --- | --- |
| Test | Kjør et fast testsett mot agenten |
| Analyser | Se hvilke svar som feiler og hvorfor |
| Forbedre | Juster instruksjoner, kunnskap, verktøy eller struktur |
| Publiser | Gjør endringen tilgjengelig i riktig miljø |
| Evaluer på nytt | Kjør samme testsett igjen og sammenlign resultatet |

Læringspunkter:

- Få og tydelige instruksjonsregler fungerer ofte bedre enn en lang regelbok
- Testcaser bør helst kjøres isolert, så én feil ikke forurenser resten av samtalen
- Instruksjoner alene har et tak; noen feil krever bedre verktøy, struktur eller eksempler

---

# Kanal og klient

| Begrep | Hva det betyr |
| --- | --- |
| Kanal | Stedet agenten publiseres til, for eksempel Teams, M365 Copilot, web eller app |
| Klient | Grensesnittet brukeren faktisk møter, for eksempel Teams-chat, webchat eller en egendefinert app |

Hvorfor dette betyr noe:

- En kanal sier hvor agenten er tilgjengelig
- En klient sier hvordan opplevelsen faktisk ser ut for brukeren

---

# Teams som kanal: det du må huske

- Teams husker samtaler over tid, så gammel kontekst kan påvirke nye svar
- Test alltid i faktisk Teams-klient, ikke bare i studio eller webchat
- Verifiser at ny versjon faktisk er tatt i bruk etter publisering
- Sjekk opplevelsen i både desktop og mobil hvis agenten skal brukes bredt

Poenget er at Teams ikke bare er en kanal, men en klient med egen brukeropplevelse og egen konteksthistorikk.

---

# Publisering er mer enn å trykke "Publish"

| Spørsmål | Hva du må avklare |
| --- | --- |
| Hvor skal agenten brukes? | Teams, M365 Copilot, web, API, app |
| Hvem skal få tilgang? | Individ, gruppe, avdeling eller hele virksomheten |
| Hvilken identitet brukes i drift? | Brukerens, agentens eller en tjenesteidentitet |
| Hvordan håndteres versjoner? | Dev, test og produksjon bør skilles |
| Hvem godkjenner endringer? | Fag, sikkerhet, IT eller produkteier |

---

# Lisens og kostnad må inn tidlig

| Plattformtype | Hva du må tenke på |
| --- | --- |
| Microsoft 365 / Copilot Studio | Brukerlisenser, tenant-lisens, Copilot Credits, premium connectorer |
| Foundry | Modellkostnad, tokens, evaluering, observabilitet og Azure-forbruk |
| Kodeagenter | Modellforbruk, hosting, nettverk, logging og egne integrasjoner |

---

# Roller og ansvar i en agentløsning

| Rolle | Typisk ansvar |
| --- | --- |
| Produkteier | Mål, prioritering og verdi |
| Fageier | Innhold, regler og kvalitet |
| Utvikler / maker | Bygging, integrasjon og testing |
| Sikkerhet / IT | Policyer, tilgang, governance og publisering |
| Drift / plattformteam | Overvåking, kostnad og livssyklus |

---

# Laboppgave: Gjør agenten klar for produksjon

| Spørsmål | Notater |
| --- | --- |
| Hvilke tilganger trenger agenten faktisk? | |
| Hvilke feil eller misbruk må dere teste for? | |
| Hvilke målinger viser om agenten lykkes? | |
| Hvordan samler dere feedback fra brukere? | |
| Hvem må godkjenne publisering? | |
| Hva er de viktigste kostnadsdriverne? | |

---

# Hva har vi gått igjennom i denne modulen?

1. Hvorfor governance, sikkerhet og evaluering må bygges inn fra starten
2. Hvordan Microsoft Agent 365 kan fungere som kontrollplan rundt identitet, observabilitet og sikkerhet
3. Hvordan feedback, tracing og målinger brukes til å forbedre agenten
4. Hva publisering, tilgang og lisens betyr når agenten skal i produksjon

---

<!-- _class: lead -->
# Modul 7 - Addendum
## Fra governance-prinsipp til operativ kvalitet

---

# Kvalitetsutfordringen i én slide

| Problem | Løsning | Verdi |
| --- | --- | --- |
| Agenten "virker" i test, men er ikke robust i praksis | Kjør strukturert review med score, funn og anbefaling | Raskere forbedring og tryggere produksjonssetting |
| Kvalitet sitter i hodet til enkeltpersoner | Standardiser vurderingskriterier og dokumentasjon | Konsistent kvalitet på tvers av team |
| Uklart hva som må forbedres først | Prioriter "high impact"-funn først | Bedre effekt av innsats og tid |

---

# Review-flyt i 5 steg

1. **Velg agent** (fra miljø eller opplastet løsning)
2. **Kjør analyse** (topic, instruksjoner, struktur, test-signaler)
3. **Prioriter funn** (start med høy alvorlighet)
4. **Forbedre agenten** (navn, beskrivelser, scope, instruksjoner)
5. **Re-kjør review** og dokumenter forbedring i score

Tips: bruk PDF-eksport for å dele funn med maker-teamet.

---

# Score-tolkning og release-gate (forslag)

| Score | Tolkning | Tiltak |
| --- | --- | --- |
| 0-59 | Ikke klar | Stopp release. Gjør strukturelle forbedringer. |
| 60-79 | Delvis klar | Forbedre toppfunn og re-test før bred deling. |
| 80-100 | Klar kandidat | Kan gå til pilot/produksjon med normal oppfølging. |

Forslag: Definer en lokal kvalitetsterskel per miljø (dev/test/prod).

---

# Copilot Studio vs. M365 deklarativ agent

| Område | Copilot Studio-agent | M365 deklarativ agent |
| --- | --- | --- |
| Fokus i review | Instruksjoner + topics + variabler + struktur | Primært instruksjonskvalitet og manifestkvalitet |
| Typiske funn | Uklare topic-navn, overlapp, routing-gap, tool-omfang | Svak markdown-struktur, for få conversation starters |
| Bruksscenario | Mer komplekse agenter med bredere orkestrering | Lettere agenter for konkrete M365-scenarier |

Poeng: begge trenger governance, men review-tyngden er ulik.

---

# Før/etter-eksempler du kan vise live

| Før | Etter |
| --- | --- |
| Topic: `Fix problem` | Topic: `Feilsøk VPN-tilkobling` |
| Beskrivelse: "send epost til HR" | "Send e-post til HR ved spørsmål om rekruttering; ikke bruk for onboarding" |
| Instruksjon: "usually try to..." | "Always do X. Never do Y. Only do Z when ..." |

Poeng: bedre språk gir bedre orkestrering og færre feilroutinger.

---

# Begrensninger og roadmap (ærlig slide)

**Ikke alt dekkes i én analyse:**
- enkelte tredjepartsintegrasjoner
- utvalgte agent-til-agent-scenarier
- funksjoner avhengig av preview/beta-API-er

**Anbefaling:**
- kommuniser "in scope / out of scope" tydelig
- bruk review som kvalitetssikring, ikke som eneste risikokontroll

---

# ALM og modenhetsreise

| Nivå | Praktisk gjennomføring |
| --- | --- |
| 1. Manuell review | Kjør review ved milepæler i utvikling |
| 2. Team-basert kvalitetssyklus | Fast review-ritme + forbedringslogg |
| 3. Pipeline-gate | Automatisk kontroll før deploy (når støtte er tilgjengelig) |

Målbildet er CI/CD med kvalitetssjekk som standard, ikke unntak.

---

# Call to action for partnerteam

Neste steg etter denne sesjonen:

1. Velg **1 kritisk agent** for gjennomgang
2. Samle nødvendig input (miljø/løsning + kontaktperson)
3. Kjør review og prioriter toppfunn
4. Book kort forbedringsøkt med maker-teamet
5. Re-kjør review og dokumenter effekt

**Mål:** høyere kvalitet, raskere produksjonsmodning, mindre risiko.
