# Lab-guide: Atea Onboarding-agent

Velkommen til den guided lab-stien for AI Agent Hackathon. Her bygger du **Atea Onboarding-agenten** steg for steg gjennom alle sesjonene i workshopen.

---

## Hva er dette?

Denne lab-guiden er for deg som:
- Ønsker en klar, steg-for-steg oppskrift å følge
- Ser på som instruktør og skal demonstrere agenten live
- Vil ha et gjennomarbeidet referanseeksempel å bygge videre på

Du trenger **ikke** å ha din egen agentide for å delta aktivt. Følg denne guiden og du vil ha en fungerende, reell agent ved slutten av workshopen.

---

## Hva du skal bygge

### Atea Onboarding-agenten

En intelligent assistent som hjelper nye ansatte i Atea med å finne informasjon og utføre enkle handlinger – alt på ett sted.

**Agenten kan:**
- Svare på spørsmål om onboarding-prosessen
- Gi informasjon om interne verktøy og systemer
- Hjelpe med å finne riktig kontaktperson
- Sende velkomst-e-post via Power Automate
- Hente sanntidsinformasjon via integrasjoner
- Eskalere tekniske spørsmål til et IT-support-team (multi-agent)

**Agenten brukes som gjennomgående eksempel fordi:**
- Den er relevant for alle i et IT-konsulentfirma
- Den starter enkelt og vokser naturlig i kompleksitet
- Den berører alle tema i workshopen på en naturlig måte
- Den krever ingen spesielle API-nøkler eller betalingstjenester

```
┌─────────────────────────────────────────────────────────┐
│              Atea Onboarding-agent                      │
│                                                         │
│  Bruker ──► Agent ──► Kunnskapsbase (FAQ + guide)       │
│                  │──► Power Automate (e-post / oppgave) │
│                  │──► IT-support-agent (eskalering)     │
│                  └──► HR-agent (admin-spørsmål)         │
└─────────────────────────────────────────────────────────┘
```

> **Skjermbilde-placeholder:** *[Screenshot av den ferdige agenten i Copilot Studio Test-panelet]*

---

## Forutsetninger

Se [PREREQUISITES.md](../PREREQUISITES.md) for fullstendig liste over hva du trenger før du starter.

**Kort oppsummert:**
- Microsoft 365-konto med Copilot Studio-lisens (eller trial)
- Tilgang til et Power Platform-miljø (helst ikke produksjon)
- Nettleser (Edge eller Chrome anbefales)
- Ved behov: følg [Lab 0](lab-00-atea-miljo-for-copilot-studio.md) for å opprette eget development environment i Atea

---

## Lab-struktur

Labene følger sesjonene i workshopen:

| Lab | Tittel | Sesjon | Tidsestimat |
|-----|--------|--------|-------------|
| [Lab 0](lab-00-atea-miljo-for-copilot-studio.md) | Sett opp ditt Atea-miljø for Copilot Studio | Før oppstart | 10–15 min |
| [Lab 1](lab-01-oppsett-og-ide.md) | Opprett din første agent | Sesjon 1–2 | 20–30 min |
| [Lab 2](lab-02-kunnskap-og-data.md) | Koble til kunnskapskilder | Sesjon 3 | 20–30 min |
| [Lab 3](lab-03-verktoy-og-integrasjoner.md) | Legg til verktøy og integrasjoner | Sesjon 3 | 25–35 min |
| [Lab 4](lab-04-prompt-og-testing.md) | Forbedre og teste agenten | Sesjon 4 | 20–30 min |
| [Lab 5](lab-05-avansert.md) | Multi-agent og avansert | Sesjon 5 | 30–40 min |
| [Lab 6](lab-06-demo-forberedelse.md) | Klargjør demo og presentasjon | Avslutning | 15–20 min |

**Totalt tidsestimat:** Ca. 2,5–3 timer, pluss 10–15 min oppsett ved behov

---

## Hurtigstart (for den utålmodige)

Har du erfaring med Copilot Studio og vil komme kjapt i gang?

0. Hvis du mangler eget miljø: følg [Lab 0](lab-00-atea-miljo-for-copilot-studio.md)
1. Gå til [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
2. Klikk **Opprett** → **Ny agent**
3. Navn: `Onboarding-agent`, språk: Norsk
4. Kopier inn systemprompten fra [Lab 1, steg 6](lab-01-oppsett-og-ide.md#steg-6-legg-til-instruksjoner)
5. Last opp FAQ-dokumentet fra [Lab 2](lab-02-kunnskap-og-data.md#testdata)
6. Test i Test-panelet

Trenger du mer detaljer? Følg de fullstendige labene i rekkefølge.

---

## Tips for instruktører

- **Demo-rekkefølge:** Bygg agenten live gjennom Lab 1–3 på Dag 1, Lab 4–6 på Dag 2
- **Forberedelse:** Gå gjennom alle labene på forhånd og ha agenten klar i et eget miljø som backup
- **Tid:** Deltakerne bruker gjerne 1,5× den estimerte tiden – sett av romslig tid
- **Vanlige feil:** Se feilsøkingsguiden i hver lab

---

*Sist oppdatert: April 2026*
