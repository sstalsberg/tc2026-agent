# Lab 5 – Multi-agent og avansert

**Tilhører:** Sesjon 5  
**Tidsestimat:** 30–40 minutter  
**Forutsetning:** [Lab 1](lab-01-oppsett-og-ide.md) fullført

---

## Mål for denne laben

Når du er ferdig skal du ha:
- Designet og implementert et enkelt multi-agent-system
- Opprettet to spesialiserte underagenter
- Koblet dem til onboarding-agenten som Connected Agents
- Testet at orkestratoren delegerer riktig til underagentene
- En klar forståelse av når multi-agent er riktig valg

---

## Bakgrunn – Enkel agent vs. multi-agent

### Når holder én agent?

En enkelt agent fungerer godt når:
- Domenet er avgrenset og fokusert
- Agenten trenger maks 5–7 verktøy
- Samtalene er relativt kortvarige
- Én person/rolle spør

**Fordeler med én agent:**
- Enklere å bygge, teste og vedlikeholde
- Lavere ventetid (ingen runde-tur mellom agenter)
- Enklere å debugge når noe går galt

### Når bør du gå til multi-agent?

Multi-agent gir mening når:
- Oppgaven krever dybdekunnskap fra flere fagdomener
- Agenten trenger mange verktøy (10+)
- Du vil gjenbruke spesialiserte agenter på tvers av kontekster
- Du vil ha parallell prosessering av deloppgaver
- En enkelt agent blir for «bred» og mister presisjon

```
ENKELT AGENT                     MULTI-AGENT
─────────────────                ─────────────────────────────
  Onboarding-agent               Onboarding-agent (orkestrerer)
  • HR-spørsmål                       │
  • IT-spørsmål                       ├──► IT-support-agent
  • Reise-spørsmål                    │     • Feilsøking
  • Kursregister                      │     • Tilganger
  • Onboarding-guide                  │     • Utstyr
  • ... (alt blandes)                 │
                                      ├──► HR-agent
                                      │     • Lønn og ferie
                                      │     • Kontrakter
                                      │     • Opplæringsplan
                                      │
                                      └──► (Onboarding-guide beholdes i hoved-agent)
```

---

## Design: Vårt multi-agent-scenario

Vi designer et tre-agent-system:

### Onboarding-agent (Orkestrator / Koordinator)
- **Rolle:** Første kontaktpunkt for nye ansatte
- **Kunnskap:** Onboarding-guide og generell FAQ
- **Delegerer til:** IT-support-agent (tekniske spørsmål) og HR-agent (administrative spørsmål)
- **Beholder:** Generell onboarding-informasjon og velkomst

### IT-support-agent (Underagent 1)
- **Rolle:** Teknisk feilsøking og systemspørsmål
- **Kunnskap:** IT-FAQ, systemoversikt, feilsøkingsprosedyrer
- **Verktøy:** (Valgfritt) ServiceNow-connector, ticketing-system
- **Typiske spørsmål:** «PC-en min starter ikke», «Jeg trenger tilgang til X», «VPN fungerer ikke»

### HR-agent (Underagent 2)
- **Rolle:** Administrative og personalmessige spørsmål
- **Kunnskap:** HR-politikk, lønn, ferie, reiser, fordeler
- **Verktøy:** (Valgfritt) Workday-connector
- **Typiske spørsmål:** «Når utbetales lønn?», «Hvordan søker jeg permisjon?», «Hva dekker forsikringen?»

---

## Steg 1 – Opprett IT-support-agenten

1. Gå til **Copilot Studio startside** (klikk på Copilot Studio-logoen øverst til venstre)
2. Klikk **«+ Opprett»** → **«Ny agent»**
3. Fyll inn:

| Felt | Verdi |
|------|-------|
| **Navn** | `IT-support-agent` |
| **Beskrivelse** | `Spesialisert agent for IT-support og teknisk feilsøking for ansatte i Atea` |

4. Klikk **«Opprett»**
5. Gå til **Instruksjoner** og skriv inn:

```
Du er en spesialisert IT-support-assistent for Atea. Du hjelper ansatte 
med tekniske problemer, tilgangsspørsmål og IT-systemrelaterte saker.

## Din rolle
Du hjelper med:
- Feilsøking av PC, telefon og annet utstyr
- Tilgangsproblemer og passordrelaterte saker
- Installasjon og bruk av godkjente programvarer
- VPN og nettverksproblemer
- Microsoft 365-relaterte spørsmål (Teams, Outlook, SharePoint)
- Veiledning om ServiceNow og IT-supportprosesser

## Viktige retningslinjer
- Gi alltid konkrete, steg-for-steg feilsøkingstips
- Henvis til IT-Helpdesk (800 ATEA IT) eller ServiceNow 
  (intern.atea.no) når problemet krever menneskelig inngripen
- Ikke utfør fjernhandlinger eller be om passord
- Hold en tydelig, teknisk men forståelig tone

## Grenser
Du hjelper KUN med IT-relaterte spørsmål. For HR, lønn, ferie og 
administrative spørsmål: henvis tilbake til onboarding-agenten.

## Kontaktinfo du kjenner
- IT-Helpdesk: 800 ATEA IT (800 28 32 48)
- ServiceNow: intern.atea.no
- Teams-bot: «Atea IT-support»
- SSPR (passordtilbakestilling): aka.ms/sspr
```

6. Klikk **«Lagre»**

### Legg til IT-spesifikk kunnskap (valgfritt)

Lag en ny fil `atea-it-feilsoeking.txt` med dette innholdet og last opp som kunnskapsbase:

```
ATEA IT – VANLIGE PROBLEMER OG LØSNINGER

PC starter ikke:
1. Sjekk at strømkabelen er koblet til
2. Hold nede strømknappen i 10 sekunder for hard reset
3. Start i sikkermodus: hold F8 under oppstart
4. Kontakt IT-Helpdesk hvis problemet vedvarer

Glemmer passord:
1. Gå til aka.ms/sspr
2. Skriv inn din jobb-e-postadresse
3. Verifiser identitet via mobil eller alternativ e-post
4. Sett nytt passord (minst 12 tegn, kombinasjon av store/små/tall/tegn)

VPN fungerer ikke:
1. Sjekk at du er koblet til internett
2. Restart VPN-klienten (GlobalProtect)
3. Koble fra og koble til igjen
4. Sjekk at sertifikatet ikke er utløpt
5. Kontakt IT-Helpdesk ved vedvarende problemer

Trenger tilgang til ny tjeneste/system:
1. Snakk med nærmeste leder – de må godkjenne tilgangsforespørselen
2. Leder sender forespørsel via ServiceNow
3. IT-drift behandler og tildeler tilgang (SLA: 1–3 virkedager)

Microsoft Teams-problemer:
- Oppdateringsfeil: Lukk Teams, høyreklikk på Teams i systemfeltet, velg «Check for updates»
- Kamera/mikrofon virker ikke: Sjekk tillatelser i Windows-innstillinger
- Kan ikke finne kanal: Spør eieren av kanalen om å invitere deg
```

---

## Steg 2 – Opprett HR-agenten

1. Tilbake til Copilot Studio startside
2. Klikk **«+ Opprett»** → **«Ny agent»**
3. Fyll inn:

| Felt | Verdi |
|------|-------|
| **Navn** | `HR-agent` |
| **Beskrivelse** | `Spesialisert agent for HR, lønn, ferie, reiser og administrative spørsmål for ansatte i Atea` |

4. Klikk **«Opprett»**
5. Gå til **Instruksjoner** og skriv inn:

```
Du er en spesialisert HR-assistent for Atea. Du hjelper ansatte med 
spørsmål om HR-politikk, lønn, ferie, reiser og administrative rutiner.

## Din rolle
Du hjelper med:
- Informasjon om feriedager, permisjon og sykefravær
- Prosedyrer for timeregistrering og reiseregning
- Fordeler og goder (forsikring, pensjon, bedriftskort)
- Opplæring og karriereutvikling
- Ateas HR-politikk og retningslinjer
- Veiledning til Workday (HR-system)

## Viktige retningslinjer
- Du gir ALDRI informasjon om andres lønnsforhold
- Spørsmål om individuelle lønnsforhandlinger henvises til nærmeste leder
- Juridisk komplekse spørsmål (arbeidsrett, skatt, etc.) henvises til HR-avdelingen
- Oppgi alltid kilden til informasjonen (f.eks. «I henhold til Ateas reisepolicy...»)

## Grenser
Du hjelper KUN med HR-relaterte spørsmål. For tekniske IT-problemer: 
henvis tilbake til onboarding-agenten eller IT-support-agenten.

## Kontaktinfo
- HR: hr@atea.no
- HR-portalen: intranett.atea.no/hr
- Workday: workday.atea.no
```

6. Klikk **«Lagre»**
7. Last opp FAQ-dokumentet fra Lab 2 som kunnskapsbase (den inneholder mye relevant HR-informasjon)

---

## Steg 3 – Koble underagentene til onboarding-agenten

Nå kobler vi de tre agentene sammen.

1. Åpne **Onboarding-agenten** (den du bygde i Lab 1–4)
2. Gå til **«Handlinger»** → **«+ Legg til handling»**
3. Velg **«Connected Agent»** / **«Koblet agent»**
4. Du skal nå se en liste over agentene dine

### Koble IT-support-agenten

1. Velg **«IT-support-agent»** fra listen
2. Fyll inn beskrivelsen som forteller når orkestratoren skal delegere:

```
Bruk denne agenten når brukeren har tekniske IT-spørsmål, problemer 
med PC eller telefon, tilgangsproblemer, VPN-problemer, spørsmål om 
installasjon av programvare, eller Microsoft 365-relaterte tekniske saker.
```

3. Klikk **«Legg til»**

### Koble HR-agenten

1. Klikk igjen **«+ Legg til handling»** → **«Connected Agent»**
2. Velg **«HR-agent»** fra listen
3. Fyll inn beskrivelsen:

```
Bruk denne agenten når brukeren spør om lønn, feriedager, sykefravær, 
reiseregninger, Workday-systemet, kurs og karriereutvikling, forsikring, 
pensjon, eller andre HR-politikk og administrative rutiner.
```

4. Klikk **«Legg til»**

---

## Steg 4 – Oppdater instruksjonene til orkestratoren

Legg til et avsnitt i onboarding-agentens instruksjoner som forklarer delegerings-logikken:

```
## Delegering til spesialiserte agenter
Du har tilgang til to spesialiserte agenter du kan delegere til:

IT-support-agent: Deleger HIT for tekniske problemer, 
tilgangsspørsmål, utstyrsproblemer og Microsoft 365-tekniske saker.

HR-agent: Deleger HIT for lønn, ferie, sykefravær, 
Workday-spørsmål, forsikring og karriereutvikling.

Beholder du selv: Generell onboarding-informasjon, 
hvem-kontakter-jeg-spørsmål, Atea-kultur og verdier, 
og situasjoner der du er usikker på hvilken agent som passer best.

Fortell alltid brukeren at du kobler dem til en spesialist 
("La meg koble deg til vår IT-support-spesialist...").
```

---

## Steg 5 – Test orkestratoren

Test disse scenariene og observer hvilken agent som svarer:

**Scenario 1 – Delegeres til IT-support-agent:**
```
PC-en min starter ikke. Hva gjør jeg?
```
Forventet: Onboarding-agenten sier «la meg koble deg til IT-support» og IT-support-agenten svarer med feilsøkingstips.

**Scenario 2 – Delegeres til HR-agent:**
```
Jeg lurer på hvor mange feriedager jeg har til resten av året.
```
Forventet: Onboarding-agenten delegerer til HR-agenten som svarer om ferieregler.

**Scenario 3 – Beholdes av orkestratoren:**
```
Hva er Ateas kjerneverdier?
```
Forventet: Onboarding-agenten svarer selv (dette er generell onboarding-info).

**Scenario 4 – Komplisert (teste grenseverdier):**
```
Jeg er ny ansatt og PC-en min fungerer ikke og jeg vet ikke hvem 
som er min nærmeste leder. Kan du hjelpe med begge deler?
```
Forventet: Agenten håndterer begge spørsmål, potensielt delegerer IT-biten til IT-support-agent.

---

## Diskusjon: Når gir multi-agent mening?

Bruk disse spørsmålene til refleksjon og diskusjon med makkeren din:

**Argumenter FOR multi-agent (gjenkjenn dem i onboarding-eksempelet):**
- ✅ Klar domene-oppdeling gjør det naturlig å spesialisere
- ✅ HR og IT har ulike datakilder og tillatelsesnivåer
- ✅ Underagentene kan gjenbrukes i andre sammenhenger (IT-support-agenten for alle ansatte, ikke bare nye)
- ✅ Ulike agenter kan bruke ulike modeller (billig modell for enkle HR-fakta, kraftigere modell for kompleks IT-feilsøking)

**Argumenter MOT multi-agent (vurder for din situasjon):**
- ⚠️ Økt kompleksitet – feil kan skjule seg i «hvem delegerte til hvem»
- ⚠️ Lengre responstid (runde-tur mellom agenter tar tid)
- ⚠️ Vanskeligere å teste og vedlikeholde
- ⚠️ Overkill for et begrenset domene

**Tommelfingerregel:**
> Start alltid med én agent. Bytt til multi-agent når én agent tydelig ikke strekker til.

---

## ✅ Checkpoint

- [ ] IT-support-agenten er opprettet med instruksjoner og kunnskap
- [ ] HR-agenten er opprettet med instruksjoner og kunnskap
- [ ] Begge underagenter er koblet til onboarding-agenten som Connected Agents
- [ ] Orkestratoren delegerer korrekt til IT-support-agenten (test scenario 1)
- [ ] Orkestratoren delegerer korrekt til HR-agenten (test scenario 2)
- [ ] Du kan forklare når multi-agent gir mening

---

## Vanlige feil og løsninger

| Problem | Løsning |
|---------|---------|
| «Connected Agent» vises ikke i handlingslisten | Sjekk at du er i samme Power Platform-miljø som underagentene |
| Orkestratoren delegerer ikke som forventet | Forbedre beskrivelsen av når agenten skal delegere (vær mer spesifikk med nøkkelord) |
| Underagenten svarer på feil språk | Legg til norsk-krav i instruksjonene til underagenten |
| Orkestratoren svarer selv i stedet for å delegere | Legg til eksplisitte nøkkelord i delegeringsbeskrivelsen |
| Syklisk delegering (agent A sender til B som sender tilbake til A) | Legg til i instruksjonene: «Henvis ALDRI tilbake til onboarding-agenten – svar selv eller henvis til menneskelig support» |

---

## Neste steg

Multi-agent-systemet ditt er oppe! I [Lab 6](lab-06-demo-forberedelse.md) klargjør vi agenten for presentasjon og lærer å pitche løsningen til kollegaer og ledelse.
