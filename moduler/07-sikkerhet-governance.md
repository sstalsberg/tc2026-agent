# Modul 7: Governance, evaluering og publisering

Denne modulen handler om hva som må være på plass når en agent skal gå fra idé og prototype til noe som faktisk kan brukes i en virksomhet.

Vi ser på:

- hvorfor governance er nødvendig rundt agenter
- hvordan tilgang, sikkerhet og guardrails må styres
- hvordan du evaluerer kvalitet før produksjon
- hvordan feedback og observabilitet brukes til forbedring
- hva publisering, lisens og roller betyr i praksis

Målet er å gjøre det tydelig at en agent ikke bare er en modell med litt instruksjoner. Når agenten skal i produksjon, blir den en løsning som må eies, styres, måles og forbedres.

## Læringsmål

- Forstå hvorfor governance må bygges inn fra starten
- Kjenne de viktigste styringslagene rundt en agent
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

Når agenten er i bruk, trenger du to typer innsikt:

- hva brukerne opplever
- hva systemet faktisk gjør

| Kilde | Hva du lærer |
| --- | --- |
| Brukerfeedback | Om svarene faktisk oppleves nyttige |
| Analytics | Hvilke spørsmål som går bra eller dårlig |
| Tracing | Hvilke steg, verktøy og agenter som ble brukt |
| Logging | Feil, latency, kostnad og sikkerhetshendelser |

God drift krever begge deler:

- kvantitative målinger
- kvalitative tilbakemeldinger

Hvis du bare ser på logger, kan du overse dårlig brukeropplevelse.
Hvis du bare ser på kommentarer, kan du overse tekniske mønstre og kostnadsdrivere.

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

Etter denne modulen bør du sitte igjen med tre ting:

1. Hvorfor governance, sikkerhet og evaluering må bygges inn fra starten
2. Hvordan feedback, tracing og målinger brukes til å forbedre agenten
3. Hva publisering, tilgang og lisens betyr når agenten skal i produksjon

## Lenker

- [Copilot Studio security and governance](https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance)
- [Assign licenses and manage access to Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing)
- [Copilot Studio analytics and effectiveness](https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-effectiveness)
- [Publish and deploy your agent in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Microsoft Foundry observability](https://learn.microsoft.com/azure/foundry/concepts/observability)
- [Publish and share agents in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/how-to/publish-agent)
