# Forutsetninger for deltakelse

Dette dokumentet beskriver hva du trenger å ha på plass **før du møter opp** på Teknocamp 2026. Les gjennom hele siden og gjennomfør sjekklisten minst én dag før arrangementet starter.

---

## Innhold

- [Før du kommer](#før-du-kommer)
- [Lisenser og tilganger](#lisenser-og-tilganger)
- [Plattformvalg og oppsett](#plattformvalg-og-oppsett)
  - [Copilot Studio](#alternativ-a-copilot-studio-anbefalt)
  - [Agent Builder i M365](#alternativ-b-agent-builder-i-microsoft-365-copilot)
  - [Microsoft Azure AI Foundry](#alternativ-c-azure-ai-foundry)
  - [VS Code / kodeagent](#alternativ-d-vs-code--kodeagent)
- [Sjekkliste for deltakere](#sjekkliste-for-deltakere)
- [Feilsøking](#feilsøking)
- [Kontakt og hjelp](#kontakt-og-hjelp)

---

## Før du kommer

Sett av 30–60 minutter i forkant for å verifisere tilganger og installere nødvendig programvare. Det er langt vanskeligere å feilsøke tilgangsproblemer under selve workshopen.

**Ta med:**
- Egen laptop med oppdatert nettleser (Edge eller Chrome anbefales)
- Lader
- En idé om hva slags agent du ønsker å bygge (se tips nedenfor)

---

## Lisenser og tilganger

### Microsoft 365 Copilot-lisens

De fleste plattformer krever en aktiv **Microsoft 365 Copilot**-lisens. Dette innebærer:

- En M365-grunnlisens (E3 eller E5), pluss
- **Microsoft 365 Copilot add-on** (tidligere kalt «Copilot for Microsoft 365»)

> Kontakt din IT-administrator eller lisensansvarlig dersom du er usikker på om du har riktig lisens.

**Prøveperiode:** Hvis du ikke har Copilot-lisens, kan du registrere deg i [Microsoft 365 Developer Program](https://developer.microsoft.com/en-us/microsoft-365/dev-program) for en gratis E5-sandkasseabonnement (25 seter, 90 dager).

### Copilot Studio-tilgang

Copilot Studio har sin egen lisensmodell:

- **Copilot Studio-lisens** er inkludert for brukere med M365 Copilot add-on (begrenset kapasitet)
- Full tilgang krever et eget **Copilot Studio-abonnement** eller kapasitetstillegg
- Gratis prøveperiode: [Prøv Copilot Studio gratis i 30 dager](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio)

---

## Plattformvalg og oppsett

Du velger selv hvilken plattform du bygger agenten din på. Her er en gjennomgang av hvert alternativ.

---

### Alternativ A: Copilot Studio (anbefalt)

**Passer for:** Low-code/no-code utvikling, integrasjon mot M365, Power Platform og eksisterende systemer.

#### Krav
- Microsoft 365-konto (jobb- eller skolekonto)
- M365 Copilot-lisens eller Copilot Studio-abonnement
- Et **Power Platform-miljø** (environment) der du har rettigheter til å opprette agenter

#### Slik verifiserer du tilgang

1. Åpne [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) i nettleseren
2. Logg inn med jobb- eller skolekontoen din
3. Velg et Power Platform-miljø øverst til høyre
4. Klikk **«Opprett»** og sjekk at du kan starte opprettelsen av en ny agent

> Hvis du ser feilmeldingen «Du har ikke tilgang til dette miljøet», må IT-administratoren din tildele deg rollen **Environment Maker** eller høyere i Power Platform Admin Center.

#### Nyttige lenker
- [Copilot Studio – kom i gang](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started)
- [Power Platform Admin Center](https://admin.powerplatform.microsoft.com)

---

### Alternativ B: Agent Builder i Microsoft 365 Copilot

**Passer for:** Rask opprettelse av deklarative agenter direkte i M365 Copilot-grensesnittet.

#### Krav
- M365 Copilot-lisens (E3/E5 + Copilot add-on)
- Ingen ekstra installasjon nødvendig

#### Slik verifiserer du tilgang

1. Åpne [copilot.microsoft.com](https://copilot.microsoft.com) og logg inn
2. Klikk på **«Copilots»** eller **«Agents»**-ikonet i venstremenyen
3. Velg **«Opprett agent»** og sjekk at Agent Builder-grensesnittet åpnes
4. Alternativt: Åpne Microsoft Teams → Copilot → finn Agent Builder-fanen

> Hvis alternativet ikke er synlig, er det sannsynligvis en lisens- eller policysetting. Kontakt din Microsoft-administrator.

#### Nyttige lenker
- [Declarative agents overview (Microsoft Learn)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent)
- [Agent Builder – hurtigveiledning](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/build-declarative-agents)

---

### Alternativ C: Azure AI Foundry

**Passer for:** Kodebasert agentutvikling, tilgang til avanserte modeller, fine-tuning og enterprise-skalering.

#### Krav
- Et aktivt **Azure-abonnement** (Pay-as-you-go, EA eller Visual Studio-abonnement)
- Rettigheter til å opprette ressurser i Azure Portal (bidragsyter-rolle eller høyere)

#### Slik setter du opp Azure AI Foundry

1. Åpne [portal.azure.com](https://portal.azure.com) og logg inn
2. Klikk **«Opprett en ressurs»** og søk etter **«Azure AI Foundry»**
3. Opprett en ny hub (velg ressursgruppe, region og navn)
4. Åpne [ai.azure.com](https://ai.azure.com) og logg inn – huben din skal nå vises
5. Opprett et **prosjekt** under huben din
6. Distribuer en modell (f.eks. GPT-4o) fra modellkatalogen

> Azure AI Foundry kan medføre kostnader basert på tokenbruk. Sett opp et budsjettvarsel i Azure Cost Management for å unngå overraskelser.

#### Nyttige lenker
- [Azure AI Foundry – dokumentasjon](https://learn.microsoft.com/en-us/azure/ai-studio/)
- [Azure gratis konto (200 USD kredit)](https://azure.microsoft.com/en-us/free/)
- [Azure Cost Management](https://portal.azure.com/#blade/Microsoft_Azure_CostManagement/Menu/overview)

---

### Alternativ D: VS Code / kodeagent

**Passer for:** Utviklere som foretrekker full kontroll via kode, GitHub Copilot-integrasjon, og tilpassede SDK-er.

#### Krav

**Felles:**
- [Visual Studio Code](https://code.visualstudio.com/) (siste versjon)
- [GitHub Copilot-utvidelse](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) (krever GitHub Copilot-lisens)
- Git installert og konfigurert

**For Node.js-basert agent:**
- [Node.js LTS](https://nodejs.org/) (v20 eller nyere)
- Kjør `node --version` i terminal for å verifisere
- `npm install -g @microsoft/teams-ai` eller relevant SDK

**For Python-basert agent:**
- [Python 3.11+](https://www.python.org/downloads/)
- Kjør `python --version` i terminal for å verifisere
- `pip install semantic-kernel` eller `pip install azure-ai-projects`

#### Slik verifiserer du oppsett

```bash
# Node.js
node --version    # Skal vise v20.x.x eller høyere
npm --version

# Python
python --version  # Skal vise 3.11.x eller høyere
pip --version
```

#### Nyttige lenker
- [Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/)
- [Semantic Kernel – kom i gang](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
- [AutoGen – Python multi-agent rammeverk](https://microsoft.github.io/autogen/)
- [GitHub Copilot i VS Code](https://code.visualstudio.com/docs/copilot/overview)

---

## Sjekkliste for deltakere

Gå gjennom listen nedenfor og hak av alt som gjelder deg.

### Generelt
- [ ] Laptop med oppdatert nettleser (Edge eller Chrome) er klar
- [ ] Lader er pakket
- [ ] Jeg har logget inn på Microsoft 365-kontoen min minst én gang nylig

### Lisenser
- [ ] Jeg har bekreftet at jeg har M365-lisens (E3 eller E5)
- [ ] Jeg har bekreftet at jeg har Microsoft 365 Copilot add-on **eller** Copilot Studio-tilgang
- [ ] Alternativt: Jeg har opprettet en gratis prøveperiode (M365 Developer Program eller Copilot Studio Trial)

### Plattform (velg én)
- [ ] **Copilot Studio:** Jeg kan logge inn på [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) og se minst ett Power Platform-miljø
- [ ] **Agent Builder (M365):** Jeg kan logge inn på [copilot.microsoft.com](https://copilot.microsoft.com) og se Agent Builder
- [ ] **Azure AI Foundry:** Jeg har et Azure-abonnement og har opprettet en AI Foundry-hub på [ai.azure.com](https://ai.azure.com)
- [ ] **VS Code / kodeagent:** VS Code er installert, Node.js (v20+) og/eller Python (3.11+) er installert og verifisert

### Forberedelse
- [ ] Jeg har tenkt på **hvilken agent jeg vil bygge** (se tips nedenfor)
- [ ] Jeg har lest gjennom [README.md](README.md) og tidsplanen for workshopen

---

## Tips: Ha en idé klar

Du vil få mer ut av workshopen dersom du møter opp med en konkret idé. Noen forslag til inspirasjon:

- **Intern kunnskapsbase-agent:** Svarer på spørsmål om interne rutiner, onboarding-materiale eller FAQ
- **Kundestøtte-agent:** Hjelper kunder med vanlige henvendelser basert på produktdokumentasjon
- **Møteassistent:** Oppsummerer møtereferater og foreslår oppfølgingspunkter
- **Tilbudsassistent:** Hjelper konsulenter med å finne relevante referanseprosjekter eller kompetanseprofiler
- **HR-assistent:** Svarer på spørsmål om personalreglementet, ferie og rutiner

Agenten behøver ikke å være stor eller kompleks. Start med noe nyttig og avgrenset.

---

## Feilsøking

### «Jeg ser ikke Copilot Studio i M365-portalen»
- Sjekk at du har riktig lisens (M365 Copilot add-on er påkrevd)
- Prøv direkte URL: [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
- Kontakt din IT-administrator og be om at Copilot Studio aktiveres for din bruker

### «Jeg mangler Power Platform-miljø»
- Be IT-administrator opprette et utviklermiljø for deg i [Power Platform Admin Center](https://admin.powerplatform.microsoft.com)
- Alternativt: Opprett et gratis **developer environment** selv (tilgjengelig for lisensierte brukere under innstillinger i Power Platform)

### «Jeg har ikke Azure-abonnement»
- Opprett en gratis Azure-konto på [azure.microsoft.com/free](https://azure.microsoft.com/en-us/free/) (200 USD kredit i 30 dager)
- Eller bruk Visual Studio-abonnementet ditt dersom du har et

### «Node.js / Python er ikke installert»
- Last ned Node.js fra [nodejs.org](https://nodejs.org/) og velg LTS-versjonen
- Last ned Python fra [python.org](https://www.python.org/downloads/)
- Start VS Code på nytt etter installasjon og kjør `node --version` / `python --version` igjen

### «GitHub Copilot-utvidelsen virker ikke i VS Code»
- Sjekk at du er logget inn med en GitHub-konto som har aktiv Copilot-lisens
- Deaktiver og reaktiver utvidelsen i VS Code
- Se [GitHub Copilot Troubleshooting](https://docs.github.com/en/copilot/troubleshooting-github-copilot)

### Generelle tilgangsproblemer
- Prøv å logge ut og inn igjen i nettleseren
- Prøv en privat/inkognito-nettleserfane
- Sjekk at du bruker riktig e-postkonto (jobb vs. privat)

---

## Kontakt og hjelp

Har du problemer med oppsett i forkant av arrangementet? Ta kontakt i god tid – helst **minst én virkedag før** workshopen starter.

**Arrangør:**
Steinar Stalsberg
[steinar.stalsberg@atea.no](mailto:steinar.stalsberg@atea.no)

Vi ønsker alle velkommen – uansett erfaringsnivå!
