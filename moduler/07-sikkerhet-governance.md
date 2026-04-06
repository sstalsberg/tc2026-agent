# Modul 7: Governance, evaluering og publisering

Denne modulen handler om hva som må være på plass når en agent skal gå fra idé og prototype til noe som faktisk kan brukes i en virksomhet.

[Forrige: Modul 6](./06-agentarkitektur-og-multiagent.md) | [Til hovedside](../README.md) | [Neste: Modul 8](./08-avslutning.md)

## Læringsmål

- Forstå hvorfor governance må bygges inn fra starten
- Kjenne de viktigste styringslagene rundt en agent
- Forstå hvor Microsoft Agent 365 passer inn i styring, sikkerhet og drift
- Se hva som må evalueres før en agent settes i produksjon
- Forstå hvordan feedback, tracing og logging brukes til forbedring
- Vite hva publisering, lisens og kostnad betyr i drift

## Risiko i én agent

| Risiko | Hva som kan gå galt |
| --- | --- |
| For brede tilganger | Agenten ser eller gjør for mye |
| Svake guardrails | Skadelig eller uønsket output slipper gjennom |
| Manglende evaluering | Dårlig kvalitet oppdages først i produksjon |
| Lite sporbarhet | Det er uklart hva agenten gjorde, hvorfor og med hvilke data |
| Uklart eierskap | Ingen vet hvem som skal godkjenne eller følge opp |

## Risiko når det skalerer: agent sprawl

| Utfordring | Hva det betyr i praksis |
| --- | --- |
| For mange agenter uten oversikt | IT vet ikke hva som faktisk er i bruk |
| Uklar identitet | Det er uklart hvem agenten handler som |
| Utydelig eierskap | Ingen følger opp livssyklus, feil eller risiko |
| Shadow agents | Agenter tas i bruk utenfor etablerte kontrollflater |
| Større angrepsflate | Flere integrasjoner, flere rettigheter og mer compliance-risiko |

Governance handler derfor ikke bare om å sikre én agent, men om å styre en voksende agentportefølje.

## Fire styringslag rundt en agent

| Lag | Hva du må styre |
| --- | --- |
| Tilgang | Identitet, roller, autentisering, least privilege |
| Sikkerhet | Guardrails, innholdsfiltrering, dataflyt |
| Kvalitet | Testsett, evaluering, målinger og godkjenning |
| Drift | Publisering, overvåking, kostnad, versjonering og ansvar |

## Microsoft Agent 365 som kontrollplan

Per **6. april 2026** beskriver Microsoft Learn `Microsoft Agent 365` som en kontrollplan for AI-agenter.

Poenget er ikke å bygge agenten for deg, men å styre agentporteføljen på virksomhetsnivå:

- egen identitet med `Microsoft Entra Agent ID`
- samlet oversikt i `Microsoft 365 admin center` og `Agent Registry`
- kobling til `Purview`, `Defender`, observability og styrte verktøy
- dekning for både registrerte agenter og `shadow agents`
- dokumentert som del av `Frontier preview-programmet`

## De fem pilarene i Agent 365

| Pilar | Hva den gir deg |
| --- | --- |
| Registry | Full oversikt over agenter i virksomheten |
| Access Control | Styrt tilgang, policyer og least privilege |
| Visualization | Innsikt i forbindelser, bruk og atferd |
| Interoperability | Kobling til Work IQ, apper og arbeidsflyt |
| Security | Trusseldeteksjon, beskyttelse og respons |

## Hvorfor Agent 365 er interessant

- Hvordan oppdager vi hvilke agenter som er i bruk?
- Hvordan vet vi hvilken identitet de har?
- Hvordan begrenser vi hva de får tilgang til?
- Hvordan ser vi misbruk, feil og risikofylt adferd?
- Hvordan kobler vi dem til eksisterende sikkerhets- og compliance-arbeid?

## Agent 365 vs. plattformstyring

| Hvis du vil styre ... | Typisk sted |
| --- | --- |
| Agenter på tvers av plattformer | `Agent 365` |
| Samlet registry og kontrollplan | `Agent 365` / `Microsoft 365 admin center` |
| Agentidentitet og tilgang | `Microsoft Entra Agent ID` + `Microsoft 365 admin center` |
| Copilot Studio-spesifikke miljøvalg og ALM | `Power Platform admin center` og Copilot Studio |
| Førsteparts Copilot-opplevelser | `Microsoft 365 admin center` |

## Identitet og tilgang

| Prinsipp | Hvorfor det betyr noe |
| --- | --- |
| Minste privilegium | Agenten skal bare ha tilgang til det den trenger |
| Tydelig identitet | Du må vite om agenten handler som bruker eller som egen identitet |
| Rollebasert tilgang | Ulike personer trenger ulik rett til å bygge, publisere og bruke |
| Skille mellom dev og prod | Testtilganger skal ikke bli produksjonstilganger |

## Guardrails og sikkerhet

| Kontroll | Hva den beskytter mot |
| --- | --- |
| Input- og output-filtrering | Skadelig eller uønsket input og output før tools og svar brukes |
| Beskyttelse mot prompt injection | Direkte og indirekte prompt injection |
| Grounding og siteringer | Hallusinasjoner og svak sporbarhet |
| Human in the loop | Feil ved sensitive eller irreversible handlinger |
| Policyer på verktøy og connectors | At agenten bruker feil system eller data |

## Copilot Studio: hvordan usikkert innhold håndteres

| Mekanisme | Trigges av | Brukeren ser | Hva du justerer |
| --- | --- | --- | --- |
| `Responsible AI filtering` | Sikkerhets- eller policybrudd i input eller output | `ContentFiltered` i debug eller blokkert/custom feilmelding i runtime | Gå gjennom content moderation policies og Responsible AI-oppsett |
| `Unknown intent fallback` | Ingen god match i trigger, topic eller kjent handlingsspor | `Vennligst omformuler` eller eskalering til fallback | Legg til triggerfraser, knowledge eller tydeligere routing |
| `Agent instructions` | Sporsperrer eller custom scope-regler i agenten | Høflig avvisning eller forklaring | Gå gjennom instruksjoner, scope og regler |

Husk:

- Input filtreres før agenten handler
- Output filtreres før svaret sendes
- fallback og avvisning er også guardrails
- I Teams finnes ikke en standard system-fallback-topic; lag en selv ved behov

## Evaluering før produksjon

| Hva du bør måle | Eksempler |
| --- | --- |
| Kvalitet | Relevans, presisjon, fullstendighet |
| Sikkerhet | Prompt injection, policybrudd, sensitiv data |
| Verktøybruk | Kaller agenten riktig verktøy, topic eller annen agent? |
| Grounding | Er svarene støttet av riktige kilder? |
| Robusthet | Fungerer løsningen på tvetydige og vanskelige spørsmål? |

## Hva bør et testsett inneholde?

| Type test | Hvorfor den trengs |
| --- | --- |
| Vanlige spørsmål | Sjekker normal bruk |
| Vanskelige spørsmål | Sjekker grenser og tvetydighet |
| Utenfor scope | Sjekker avvisning og guardrails |
| Sikkerhetstester | Sjekker injection og policybrudd |
| Verktøy- og prosessflyt | Sjekker at riktig handling trigges |

## Feedback og observabilitet

| Kilde | Hva du lærer |
| --- | --- |
| Brukerfeedback | Om agenten faktisk oppleves nyttig |
| Analytics | Hvilke spørsmål og mønstre som går bra eller dårlig |
| Traces | Hvilke steg, verktøy og agenter som ble brukt |
| Metrics og logs | Latency, feilrate, tokenbruk, kostnad og sikkerhetshendelser |
| Correlation ID | Binder sammen hele kjeden på tvers av verktøy, prosesser og agenter |

Eksempler på plattformstøtte:

- Copilot Studio: analytics og plattformlogger
- Foundry og Azure: tracing, metrics og monitorering
- Purview og andre kontrollflater: revisjon og sporbarhet

## Monitoring med Application Insights

| Hva du får | Eksempler |
| --- | --- |
| Samtaletelemetri | Inn- og utgående meldinger og events |
| Topic- og verktøyinnsikt | Hvilke topics og handlinger som faktisk trigges |
| Egne events | Custom telemetry fra topic eller prosess |
| Driftssikt | Latency, exceptions, total conversations og trender |

## Forbedringssløyfe for agenter

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

## Kanal og klient

| Begrep | Hva det betyr |
| --- | --- |
| Kanal | Stedet agenten publiseres til, for eksempel Teams, M365 Copilot, web eller app |
| Klient | Grensesnittet brukeren faktisk møter, for eksempel Teams-chat, webchat eller en egendefinert app |

Hvorfor dette betyr noe:

- En kanal sier hvor agenten er tilgjengelig
- En klient sier hvordan opplevelsen faktisk ser ut for brukeren

## Teams som kanal: det du må huske

- Teams husker samtaler over tid, så tidligere kontekst kan påvirke nye svar
- Test alltid i faktisk Teams-klient, ikke bare i studio eller webchat
- Verifiser at ny versjon faktisk er tatt i bruk etter publisering
- I Teams får brukere normalt siste publiserte innhold etter ny samtale, typisk etter 30 min inaktivitet eller ved `start over`
- Sjekk opplevelsen i både desktop og mobil hvis agenten skal brukes bredt

## Publisering er mer enn å trykke "Publish"

| Spørsmål | Hva du må avklare |
| --- | --- |
| Hvor skal agenten brukes? | Teams, M365 Copilot, web, API, app |
| Hvem skal få tilgang? | Individ, gruppe, avdeling eller hele virksomheten |
| Hvilken identitet brukes i drift? | Brukerens, agentens eller en tjenesteidentitet |
| Hvordan håndteres versjoner og miljøer? | Dev, test og produksjon bør skilles |
| Hvem godkjenner endringer? | Fag, sikkerhet, IT eller produkteier |

## Lisens og kostnad må inn tidlig

| Plattformtype | Hva du må tenke på |
| --- | --- |
| Microsoft 365 / Copilot Studio | Brukerlisenser, tenant-lisens, Copilot Credits, premium connectorer |
| Foundry | Modellkostnad, tokens, evaluering, observabilitet og Azure-forbruk |
| Kodeagenter | Modellforbruk, hosting, nettverk, logging og egne integrasjoner |

## Vanlige betalingsmodeller for agenter

| Modell | Godt valg når | Husk |
| --- | --- | --- |
| Microsoft 365 Copilot-lisens | Brukerne allerede er lisensiert for Copilot | Bruk av agenter følger lisensen for disse brukerne |
| Pay-as-you-go | Du vil starte smått eller har variabel bruk | Krever billing policy mot Azure |
| Prepaid capacity | Du vil kjøpe kapasitet på forhånd | Administreres som kapasitet i Power Platform |

- Noen deklarative agenter i Copilot Chat kan brukes uten ekstra kostnad når de bare er grounded i instruksjoner og offentlige nettsteder
- Lav eller uforutsigbar bruk passer ofte bedre med forbruksbasert modell

## Billing policy i praksis

| Del | Hva den styrer |
| --- | --- |
| `Azure subscription` + `resource group` | Hvor kostnaden bokføres |
| `All users` eller `Specific group` | Hvem som får bruke den forbruksbaserte tjenesten |
| Budsjett | Hvor mye som kan brukes i perioden |
| Varsler | Hvem som får beskjed ved terskler |
| Tjenestekobling | Hvilke Copilot-tjenester policyen gjelder for |

## Roller og ansvar i en agentløsning

| Rolle | Typisk ansvar |
| --- | --- |
| Produkteier | Mål, prioritering og verdi |
| Fageier | Innhold, regler og kvalitet |
| Utvikler / maker / konsulent | Bygging, integrasjon og testing |
| Sikkerhet / IT | Policyer, tilgang, governance og publisering |
| Drift / plattformteam | Overvåking, kostnad og livssyklus |

## Laboppgave: Gjør agenten klar for produksjon

| Spørsmål | Notater |
| --- | --- |
| Hvilke tilganger trenger agenten faktisk? | |
| Hvilke feil, misbruk eller edge cases må dere teste for? | |
| Hvilke målinger viser om agenten lykkes? | |
| Hvordan samler dere feedback fra brukere? | |
| Hvem må godkjenne publisering? | |
| Hva er de viktigste kostnadsdriverne? | |

## Hva har vi gått igjennom i denne modulen?

1. Hvorfor governance, sikkerhet og evaluering må bygges inn fra starten
2. Hvordan Microsoft Agent 365 kan fungere som kontrollplan rundt identitet, observabilitet og sikkerhet
3. Hvordan feedback, tracing og målinger brukes til kontinuerlig forbedring
4. Hva publisering, tilgang og lisens betyr når agenten skal i produksjon

[Forrige: Modul 6](./06-agentarkitektur-og-multiagent.md) | [Til hovedside](../README.md) | [Neste: Modul 8](./08-avslutning.md)

## Lenker

- [Overview of Microsoft Agent 365](https://learn.microsoft.com/microsoft-agent-365/overview)
- [Agent Management Essentials for Microsoft 365](https://learn.microsoft.com/copilot/microsoft-365/agent-essentials/agent-essentials-overview)
- [Secure AI agents at scale using Microsoft Agent 365](https://learn.microsoft.com/security/security-for-ai/agent-365-security)
- [Copilot Studio security and governance](https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance)
- [Assign licenses and manage access to Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing)
- [Copilot Studio analytics and effectiveness](https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-effectiveness)
- [Publish and deploy your agent in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Microsoft Foundry observability](https://learn.microsoft.com/azure/foundry/concepts/observability)
