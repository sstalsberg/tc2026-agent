# Modul 4: Under panseret på en LLM

Denne modulen handler om hva som faktisk skjer når en språkmodell svarer, og hvorfor modellvalg, kontekst og multimodalitet påvirker kvalitet, kostnad og responstid.

[Forrige: Modul 3](./03-instruksjoner-kunnskap-verktoy.md) | [Til hovedside](../README.md) | [Neste: Modul 6](./06-agentarkitektur-og-multiagent.md)

## Læringsmål

- Forstå hvordan en språkmodell bygger svar fra instruksjoner, kontekst og tokens
- Se hva som faktisk inngår i modellens input
- Forstå hvordan tokenbruk og kontekstvindu påvirker kvalitet, kostnad og fart
- Kjenne til innstillinger som temperatur, top-p og repetisjonskontroll
- Velge mellom generalist-, reasoning-, små og multimodale modeller

## Hva skjer når en LLM svarer?

Når en agent bruker en språkmodell, skjer dette i grove trekk:

1. Agenten samler input
2. Instruksjoner, kontekst og eventuelle verktøyresultater bygges inn i prompten
3. Innholdet deles opp i tokens
4. Modellen predikerer neste token steg for steg
5. Svaret returneres, og kan eventuelt trigge verktøy eller nye steg

En språkmodell slår ikke opp et fasitsvar. Den genererer et sannsynlig neste steg basert på inputen den får.

## Hva består inputen til modellen av?

| Del | Rolle |
| --- | --- |
| Instruksjoner | Forteller hvordan modellen skal oppføre seg |
| Brukerforespørsel | Det brukeren faktisk ber om |
| Kunnskap / grounding | Relevante dokumenter, data eller kontekst |
| Verktøyresultater | Strukturert informasjon fra API-er, flows eller andre agenter |
| Samtalehistorikk | Tidligere meldinger som fortsatt er relevante |

Et viktig poeng i agentdesign er at kvaliteten ikke bare kommer fra modellen, men fra hvordan du setter sammen inputen.

## Tokens og kontekstvindu

| Begrep | Hva det betyr |
| --- | --- |
| Token | Små biter av tekst eller bildeinput som modellen behandler |
| Kontekstvindu | Hvor mye input og historikk modellen kan ha med samtidig |
| Input tokens | Alt du sender inn |
| Output tokens | Svaret modellen genererer |

Konsekvenser i praksis:

- Flere tokens gir ofte høyere kostnad og mer ventetid
- For mye kontekst kan gjøre svaret tregere eller mindre presist
- Bildedata bruker også tokens i multimodale modeller

## Temperatur og top-p

| Innstilling | Hva den styrer | Typisk bruk |
| --- | --- | --- |
| Temperatur | Hvor variert eller kreativ modellen er | Lav for fakta, verktøy og stabile svar |
| Top-p | Hvor bredt sett av sannsynlige tokens modellen velger fra | Finjustering av variasjon og kontroll |

Praktisk huskeregel:

- Start lavt når agenten skal være presis og forutsigbar
- Øk bare når oppgaven faktisk trenger mer variasjon eller kreativitet

## Flere innstillinger som påvirker svar

| Innstilling | Hva den gjør | Vær obs på |
| --- | --- | --- |
| Repetition penalty | Demper gjentakelser og looper | For høy verdi kan gjøre teksten unaturlig |
| Presence penalty | Oppmuntrer modellen til å introdusere nye ord eller tema | Kan gjøre svaret mer utforskende enn ønsket |
| Frequency penalty | Demper ord som allerede er brukt mange ganger | Kan gi bedre variasjon, men også mindre flyt |

## Modelltyper du typisk velger mellom

| Modelltype | Styrke | Typisk bruk |
| --- | --- | --- |
| Generalistmodell | Balanse mellom språk, verktøy og hastighet | Standard chat, oppslag, arbeidsflyt |
| Reasoning-modell | Bedre på flertrinns logikk og vanskelige problemer | Analyse, planlegging, kode, matte |
| Small language model | Lavere kostnad og raskere respons | Enkle oppgaver, høy trafikk, edge |
| Multimodal modell | Kan forstå tekst og bilder sammen | Skjemaer, skjermbilder, dokumenter, inspeksjon |

## Hvordan velge riktig modell?

| Hvis du trenger mest | Prioriter |
| --- | --- |
| Lav ventetid og lav kostnad | Mindre modell eller mini-variant |
| Høy kvalitet på vanskelige oppgaver | Reasoning-modell |
| Bilde + tekst i samme oppgave | Multimodal modell |
| Lange dokumenter eller mye historikk | Modell med stort kontekstvindu |
| Produksjon i stor skala | Stabil modell med god pris/ytelse |

En nyttig tommelregel er å starte med en god generalistmodell og bare bytte opp når kvaliteten faktisk krever det.

## Begrensninger du bør kjenne til

| Risiko | Konsekvens |
| --- | --- |
| Modellen kan hallusinere | Den svarer sikkert selv når grunnlaget er svakt |
| For mye kontekst | Viktig informasjon kan drukne |
| Feil modellvalg | Du betaler mer eller får dårligere kvalitet enn nødvendig |
| Multimodal input koster | Bilder og dokumenter kan bruke mange tokens |
| Sikkerhet og personvern | Bilder, lyd og dokumenter kan inneholde sensitiv informasjon |

## Laboppgave: Velg modell og modalitet

| Spørsmål | Notater |
| --- | --- |
| Hvilken oppgave skal agenten løse? | |
| Trenger oppgaven mest språk, resonnering eller fart? | |
| Trenger agenten tekst, bilder, dokumenter eller lyd? | |
| Hvor viktig er lav kostnad i produksjon? | |
| Hva er et godt første modellvalg? | |

## Hva har vi gått igjennom i denne modulen?

1. Hvordan en språkmodell bygger svar fra instruksjoner, kontekst og tokens
2. Hvordan modellvalg påvirker kvalitet, kostnad og responstid
3. Når multimodalitet gir verdi, og når ren tekst er nok

[Forrige: Modul 3](./03-instruksjoner-kunnskap-verktoy.md) | [Til hovedside](../README.md) | [Neste: Modul 6](./06-agentarkitektur-og-multiagent.md)

## Lenker

- [Azure OpenAI overview](https://learn.microsoft.com/azure/ai-foundry/openai/overview)
- [Prompt engineering techniques](https://learn.microsoft.com/azure/ai-foundry/openai/concepts/prompt-engineering)
- [Microsoft Foundry models overview](https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview)
- [Use vision-enabled chat models](https://learn.microsoft.com/azure/foundry/openai/how-to/gpt-with-vision)
