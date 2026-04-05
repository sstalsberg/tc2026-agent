---
marp: true
theme: gaia
paginate: true
size: 16:9
title: Bygg din egen AI-agent
description: Teknocamp 2026 - 2-dagers hands-on workshop
style: |
  :root {
    --tc-ink: #16313b;
    --tc-muted: #4f6870;
    --tc-accent: #0e8b7f;
    --tc-accent-soft: #dff3ee;
    --tc-bg: #f7f5ef;
    --tc-line: #bfd7d1;
    --tc-dark: #10242c;
  }

  section {
    font-size: 28px;
    font-family: "Aptos", "Segoe UI", "Helvetica Neue", sans-serif;
    color: var(--tc-ink);
    background:
      radial-gradient(circle at top right, rgba(14, 139, 127, 0.08), transparent 26%),
      linear-gradient(180deg, #fbfaf6 0%, var(--tc-bg) 100%);
    padding: 64px 74px 56px;
  }

  section.lead {
    text-align: center;
    color: #f6fbfa;
    background:
      radial-gradient(circle at top left, rgba(126, 232, 209, 0.15), transparent 22%),
      radial-gradient(circle at bottom right, rgba(14, 139, 127, 0.28), transparent 28%),
      linear-gradient(145deg, #10242c 0%, #173b45 45%, #0f6f68 100%);
  }

  h1,
  h2,
  h3 {
    font-family: "Aptos Display", "Segoe UI", "Helvetica Neue", sans-serif;
    color: var(--tc-ink);
    letter-spacing: -0.02em;
    margin-bottom: 0.35em;
  }

  section.lead h1,
  section.lead h2,
  section.lead h3 {
    color: #f6fbfa;
  }

  h1 {
    font-size: 1.5em;
    padding-bottom: 0.18em;
    border-bottom: 5px solid var(--tc-accent);
    display: inline-block;
  }

  section.lead h1 {
    border-bottom-color: rgba(246, 251, 250, 0.9);
  }

  p,
  li {
    color: var(--tc-ink);
    line-height: 1.35;
  }

  strong {
    color: #0c5e59;
  }

  ul,
  ol {
    padding-left: 1.1em;
  }

  table {
    font-size: 0.72em;
    border-collapse: collapse;
    margin-top: 0.6em;
    width: 100%;
  }

  th {
    background: var(--tc-dark);
    color: #f6fbfa;
    border: 1px solid var(--tc-dark);
    font-weight: 700;
  }

  td {
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid var(--tc-line);
  }

  th,
  td {
    padding: 10px 12px;
    vertical-align: top;
  }

  section::after {
    font-size: 0.48em;
    color: var(--tc-muted);
    font-weight: 700;
  }

  code {
    background: rgba(16, 36, 44, 0.08);
    color: #0b5a55;
    border-radius: 6px;
    padding: 0.08em 0.28em;
  }

  hr {
    border: 0;
    height: 2px;
    background: var(--tc-line);
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
