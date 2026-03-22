# Forutsetninger

Denne siden gir deg en enkel sjekkliste for hva som bør være på plass før sporprogrammet starter.

Vi har begrenset med tid under campen, så jo mer du har klart på forhånd, desto mer får du ut av øktene og labene.

- [Dette bør du ha klart](#dette-bør-du-ha-klart)
- [Velg hvordan du vil bygge](#velg-hvordan-du-vil-bygge)
- [Plattformvalg](#plattformvalg)
- [Sjekkliste før oppstart](#sjekkliste-før-oppstart)
- [Tips: Ha en idé klar](#tips-ha-en-idé-klar)
- [Hvis noe ikke virker](#hvis-noe-ikke-virker)

## Dette er nyttig å ha klart

- Ha med laptop og lader
- Microsoft 365 Copilot lisens (se lenger ned på siden dersom du mangler)
- En idé om hva slags agent du vil bygge eller utforske
- Tilgang til de tjenestene eller data du vil bygge og bruke agenten din mot
- [Visual Studio Code](https://code.visualstudio.com/) installert og startet minst én gang
- Egen GitHub-konto dersom du vil jobbe  kodebasert

## Velg hvordan du vil bygge

Du velger selv hvilken plattform du vil jobbe med under campen. Det er også helt fint å teste flere plattformer underveis.

Vi kommer til å jobbe med temaer som:

- Hvordan komme i gang med en agent
- Plattformer og agentrammeverket
- Instruksjoner, kunnskap, API og MCP
- Arkitektur, governance og videre utvikling

Det viktigste før oppstart er derfor ikke å ha alt perfekt klart, men å ha valgt et utgangspunkt og sjekket at du kommer inn i verktøyene du tror du vil bruke.

## Plattformvalg

### Alternativ A: Copilot Studio

**Passer for:** Deg som vil bygge agenter med lav terskel og tett integrasjon mot Microsoft 365, Teams, SharePoint og Power Platform.

**Ha dette klart:**

- Microsoft 365 Copilot-lisens
- Tilgang til et Power Platform-miljø

**Sjekk dette på forhånd:**

1. Åpne [Copilot Studio](https://copilotstudio.microsoft.com)
2. Logg inn
3. Bekreft at du kommer inn i løsningen og kan se eller opprette en agent

**Nyttige lenker:**

- [Copilot Studio: Kom i gang](https://learn.microsoft.com/nb-no/microsoft-copilot-studio/fundamentals-get-started)
- [Opprett miljø i Power Platform](https://learn.microsoft.com/nb-no/power-platform/admin/create-environment)
- [Power Platform Admin Center](https://admin.powerplatform.microsoft.com)

### Alternativ B: Agent Builder i Microsoft 365 Copilot

**Passer for:** Deg som vil komme raskt i gang med deklarative agenter direkte i Microsoft 365 Copilot.

**Ha dette klart:**

- Microsoft 365 Copilot-lisens
- Nettleser og tilgang til Microsoft 365

**Sjekk dette på forhånd:**

1. Åpne [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/chat/)
2. Logg inn
3. Bekreft at du finner muligheten til å opprette eller bygge en agent

**Nyttige lenker:**

- [Deklarative agenter i Microsoft 365 Copilot](https://learn.microsoft.com/nb-no/microsoft-365-copilot/extensibility/overview-declarative-agent)

### Alternativ C: Microsoft Foundry

**Passer for:** Deg som vil jobbe mer kodebasert med modeller, integrasjoner og mer fleksibel agentarkitektur.

**Ha dette klart:**

- Eget Azure-abonnement med nødvendige rettigheter
- Eller bruk av konto og miljø som vi setter opp for deltakere som trenger det

> Hvis du bruker eget Azure-abonnement, vær oppmerksom på at bruk av tjenester kan medføre kostnader som ikke dekkes av sporprogrammet.

**Sjekk dette på forhånd:**

1. Åpne [Microsoft Foundry](https://ai.azure.com)
2. Logg inn
3. Bekreft at du kan åpne eller opprette et prosjekt

**Nyttige lenker:**

- [Microsoft Foundry dokumentasjon](https://learn.microsoft.com/nb-no/azure/ai-foundry/)
- [Azure gratis konto](https://azure.microsoft.com/free/)
- [Azure Cost Management](https://portal.azure.com/#blade/Microsoft_Azure_CostManagement/Menu/overview)

### Alternativ D: Microsoft 365 Agents SDK med VS Code

**Passer for:** Deg som vil bygge mer fritt i kode, bruke SDK-er og jobbe tett med utviklerverktøy.

**Ha dette klart:**

- [Visual Studio Code](https://code.visualstudio.com/download)
- GitHub-konto
- Node.js og/eller Python installert dersom du vil jobbe lokalt med kode

**Sjekk dette på forhånd:**

1. Start VS Code minst én gang
2. Logg inn med GitHub-kontoen din dersom du vil bruke GitHub-funksjoner
3. Verifiser at `node --version` og/eller `python --version` fungerer lokalt

**Nyttige lenker:**

- [Microsoft 365 Agents SDK](https://learn.microsoft.com/nb-no/microsoft-365/agents-sdk/)
- [Agents SDK oversikt](https://learn.microsoft.com/nb-no/microsoft-365/agents-sdk/agents-sdk-overview)
- [GitHub Copilot i VS Code](https://code.visualstudio.com/docs/copilot/overview)

## Sjekkliste før oppstart

Gå gjerne gjennom denne listen dagen før eller samme morgen.

### For alle deltakere

- [ ] Jeg har med laptop og lader
- [ ] Jeg kan logge inn med Atea-kontoen min
- [ ] Jeg har åpnet verktøyene jeg planlegger å bruke
- [ ] Jeg har installert og startet VS Code
- [ ] Jeg har en idé om hva jeg vil bygge, eller hva jeg vil utforske

### Hvis jeg vil bruke Copilot Studio

- [ ] Jeg har Microsoft 365 Copilot-lisens, eller har bestilt via [Atea OneHub](https://atea.link/getcopilot)
- [ ] Jeg får åpnet [Copilot Studio](https://copilotstudio.microsoft.com)
- [ ] Jeg har tilgang til et Power Platform-miljø

### Hvis jeg vil bruke Agent Builder

- [ ] Jeg har Microsoft 365 Copilot-lisens
- [ ] Jeg får åpnet [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/chat/)

### Hvis jeg vil bruke Microsoft Foundry

- [ ] Jeg har Azure-tilgang,
- [ ] ... eller planlegger å bruke oppsettet vi stiller med

### Hvis jeg vil bruke VS Code og Agents SDK

- [ ] Jeg har åpnet VS Code minst én gang
- [ ] Jeg kan logge inn med GitHub-kontoen min i VS Code
- [ ] Jeg har Node.js og/eller Python tilgjengelig lokalt

## Tips: Ha en idé klar

Du får mer ut av labene dersom du møter opp med en enkel idé til hva du vil bygge.

Det trenger ikke være stort eller komplisert. Det viktigste er at det er noe du har lyst til å utforske og teste i praksis.

Noen eksempler:

- En agent som svarer på spørsmål om interne rutiner og onboarding
- En agent som hjelper med møtenotater og oppfølging
- En agent som finner relevant dokumentasjon eller kunnskap
- En agent som støtter salgs- eller tilbudsarbeid
- En agent som hjelper med HR-spørsmål eller vanlige interne forespørsler