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
