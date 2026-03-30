# Modul 4: Under panseret på en LLM

Denne modulen handler om hva som faktisk skjer når en språkmodell svarer, og hvorfor modellvalg, kontekst og multimodalitet påvirker kvalitet, kostnad og responstid.

Målet er ikke å gå dypt inn i modellteori, men å gi et praktisk språk for å forstå:

- hva modellen egentlig jobber med
- hvorfor input betyr så mye
- hvordan du velger riktig modell for en agent
- når multimodalitet gir verdi

## Læringsmål

- Forstå hvordan en språkmodell bygger svar fra input og tokens
- Se hvordan instruksjoner, kontekst og verktøyresultater blir del av modellens input
- Forstå hva kontekstvindu og tokenbruk betyr i praksis
- Forstå hvordan temperatur og top-p påvirker variasjon og kontroll
- Kjenne forskjellen på generalistmodeller, reasoning-modeller, små modeller og multimodale modeller
- Vurdere når multimodalitet gir verdi, og når ren tekst er nok

## Hva skjer når en LLM svarer?

Når en agent bruker en språkmodell, skjer det i grove trekk dette:

1. Agenten samler det som skal sendes inn
2. Instruksjoner, brukerforespørsel, kunnskap og eventuelle verktøyresultater bygges sammen
3. Innholdet deles opp i tokens
4. Modellen predikerer neste token steg for steg
5. Svaret returneres til agenten eller brukeren

Det viktige å forstå er at modellen ikke “slår opp” et fasitsvar slik en database gjør.

Den genererer et sannsynlig neste steg ut fra det den har fått inn. Derfor blir kvaliteten på inputen helt avgjørende.

## Hva består inputen til modellen av?

Når vi snakker om prompt i bred forstand, mener vi ofte hele inputpakken modellen får.

| Del | Rolle |
| --- | --- |
| Instruksjoner | Forteller hvordan modellen skal oppføre seg |
| Brukerforespørsel | Det brukeren faktisk spør om |
| Kunnskap / grounding | Dokumenter, data og kontekst som gjør svaret mer presist |
| Verktøyresultater | Strukturert data fra API-er, prosesser eller andre agenter |
| Samtalehistorikk | Tidligere meldinger som fortsatt er relevante |

Dette er en viktig erkjennelse i agentarbeid:

- kvaliteten kommer ikke bare fra modellen
- kvaliteten kommer fra hvordan du setter sammen inputen

En bedre modell kan hjelpe, men den kan ikke kompensere fullt ut for svak instruksjon, irrelevant kontekst eller dårlig verktøybruk.

## Tokens og kontekstvindu

For å forstå kostnad og begrensninger må du forstå to begreper:

| Begrep | Hva det betyr |
| --- | --- |
| Token | Små biter av tekst eller bildeinput som modellen behandler |
| Kontekstvindu | Hvor mye input og historikk modellen kan ha med samtidig |
| Input tokens | Alt du sender inn |
| Output tokens | Svaret modellen genererer |

I praksis betyr dette:

- lange instrukser, mye historikk og store dokumentutdrag bruker flere tokens
- flere tokens gir ofte høyere kostnad og mer ventetid
- hvis du presser inn for mye kontekst, kan viktig informasjon drukne
- bilder og andre multimodale inputformer bruker også tokens

Dette er en av grunnene til at gode instruksjoner og godt retrieval-design betyr så mye. Det handler ikke bare om kvalitet, men også om effektiv bruk av kontekstvinduet.

## Temperatur og top-p

I tillegg til modellvalg finnes det noen innstillinger som påvirker hvordan modellen svarer.

| Innstilling | Hva den styrer | Typisk bruk |
| --- | --- | --- |
| Temperatur | Hvor variert eller kreativ modellen er | Lav for fakta, verktøy og stabile svar |
| Top-p | Hvor bredt sett av sannsynlige tokens modellen velger fra | Finjustering av variasjon og kontroll |

Praktisk huskeregel:

- start lavt når agenten skal være presis og forutsigbar
- øk bare når oppgaven faktisk trenger mer variasjon eller kreativitet
- juster helst én innstilling om gangen, så du forstår hva som faktisk påvirker resultatet

## Hva påvirker kvaliteten på svaret?

Kvaliteten på et agentsvar avhenger av flere ting samtidig:

| Faktor | Hvorfor det betyr noe |
| --- | --- |
| Tydelige instruksjoner | Reduserer tvetydighet og styrer stil og format |
| Relevant kontekst | Gjør svar mer presise og mindre hallusinerte |
| Riktig modell | Ulike modeller er gode på ulike typer oppgaver |
| Strukturert output | Gjør svaret lettere å bruke videre i systemer |
| Test og iterasjon | Små justeringer kan gi stor effekt |

Det er derfor lurt å tenke i denne rekkefølgen:

1. Sørg for god input
2. Test kvaliteten
3. Bytt modell først når du faktisk ser at behovet er der

## Modelltyper du typisk velger mellom

I praksis velger du ofte mellom noen få hovedtyper av modeller:

| Modelltype | Styrke | Typisk bruk |
| --- | --- | --- |
| Generalistmodell | Balanse mellom språk, verktøy og hastighet | Standard chat, oppslag, arbeidsflyt |
| Reasoning-modell | Bedre på flertrinns logikk og krevende problemer | Analyse, planlegging, kode, matte |
| Small language model | Lavere kostnad og raskere respons | Enkle oppgaver, høy trafikk, edge |
| Multimodal modell | Kan forstå tekst og bilder sammen | Skjemaer, skjermbilder, dokumenter, inspeksjon |

Dette betyr ikke at du må ha én modelltype per agent. Men du bør vite hva du optimaliserer for.

## Hvordan velge riktig modell?

Et praktisk valg kan ofte beskrives slik:

| Hvis du trenger mest | Prioriter |
| --- | --- |
| Lav ventetid og lav kostnad | Mindre modell eller mini-variant |
| Høy kvalitet på vanskelige oppgaver | Reasoning-modell |
| Bilde + tekst i samme oppgave | Multimodal modell |
| Lange dokumenter eller mye historikk | Modell med stort kontekstvindu |
| Produksjon i stor skala | Stabil modell med god pris/ytelse |

En nyttig tommelregel er:

- start med en god generalistmodell
- bytt opp bare når kvaliteten krever det

Det er ofte bedre å forbedre instruksjoner, grounding og verktøyflyt først enn å hoppe rett til en dyrere modell.

## Multimodalitet: hva betyr det?

En multimodal modell kan bruke flere typer input i samme kall.

Vanlige modaliteter er:

- tekst
- bilder
- dokumenter med layout og tekst
- lyd eller tale
- skjermbilder eller UI-bilder

Verdien ligger i at modellen kan forstå sammenhengen mellom det som står og det som vises.

For en agent betyr dette at den ikke bare kan lese en tekstbeskrivelse av et skjema, men faktisk se skjemaet. Den kan ikke bare få vite at en bruker ser en feil i et system, men se skjermbildet av feilen.

## Når gir multimodalitet verdi?

Multimodalitet gir mest verdi når den visuelle eller auditive konteksten faktisk er viktig.

| Scenario | Hvorfor multimodal hjelper |
| --- | --- |
| Tolke skjermbilder | Agenten ser tekst, layout og UI-elementer |
| Lese dokumenter | Diagrammer, tabeller og struktur kan være viktige |
| Analysere bilder fra feltarbeid | Visuell kontekst mangler i ren tekst |
| Sammenligne bilde og tekst | Avvik mellom beskrivelse og faktisk innhold blir tydeligere |
| Talegrensesnitt | Brukeren kan snakke i stedet for å skrive |

Samtidig er det viktig å ikke bruke multimodalitet bare fordi det finnes.

Hvis ren tekst er nok, er løsningen ofte:

- enklere
- billigere
- raskere
- lettere å styre

## Begrensninger du må kjenne til

Språkmodeller og multimodale modeller har flere begrensninger du må regne med:

| Risiko | Konsekvens |
| --- | --- |
| Modellen kan hallusinere | Den svarer sikkert selv når grunnlaget er svakt |
| For mye kontekst | Viktig informasjon kan drukne |
| Feil modellvalg | Du betaler mer eller får dårligere kvalitet enn nødvendig |
| Multimodal input koster | Bilder og dokumenter kan bruke mange tokens |
| Sikkerhet og personvern | Bilder, lyd og dokumenter kan inneholde sensitiv informasjon |

Dette er også grunnen til at modulene om:

- grounding
- evaluering
- guardrails

er så viktige. En god agent handler ikke bare om å velge en smart modell. Den handler om å gjøre hele løsningen robust.

## Lab: Velg modell og modalitet

I denne laben skal du bruke agentideen din og vurdere hvilket modellspor som passer best.

| Spørsmål | Notater |
| --- | --- |
| Hvilken oppgave skal agenten løse? | |
| Trenger oppgaven mest språk, resonnering eller fart? | |
| Trenger agenten tekst, bilder, dokumenter eller lyd? | |
| Hvor viktig er lav kostnad i produksjon? | |
| Hva er et godt første modellvalg? | |

Diskuter også:

- Hva ville fått deg til å bytte modell senere?

Denne øvelsen er nyttig fordi den flytter fokus fra “hvilken modell er best?” til “hvilken modell passer best til oppgaven?”

## Oppsummering

Etter denne modulen bør du sitte igjen med tre ting:

1. En praktisk forståelse av hvordan en språkmodell bygger svar fra input og tokens
2. Et språk for å vurdere modellvalg ut fra kvalitet, kostnad og responstid
3. En forståelse av når multimodalitet gir verdi, og når ren tekst er nok

## Lenker

- [Azure OpenAI overview](https://learn.microsoft.com/azure/ai-foundry/openai/overview)
- [Prompt engineering techniques](https://learn.microsoft.com/azure/ai-foundry/openai/concepts/prompt-engineering)
- [Microsoft Foundry Models overview](https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview)
- [Use vision-enabled chat models](https://learn.microsoft.com/azure/foundry/openai/how-to/gpt-with-vision)
- [Develop a vision-enabled generative AI application](https://learn.microsoft.com/training/modules/develop-generative-ai-vision-apps/)
