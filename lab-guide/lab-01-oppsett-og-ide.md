# Lab 1 – Opprett din første agent

**Tilhører:** Sesjon 1–2
**Forutsetning:** Tilgang til [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

---

## Mål for denne laben

Når du er ferdig skal du ha:
- En fungerende agent i Copilot Studio
- Grunnleggende instruksjoner (systemprompt) på plass
- Testet agenten og fått et svar

---

## Steg 1 – Gå til Copilot Studio

1. Åpne nettleseren og gå til **[copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)**
2. Logg inn med din Microsoft 365-konto (jobb-e-post)
3. Du skal nå se startskjermen til Copilot Studio

> **Ser du en feil eller «Access denied»?** Sjekk at du er logget inn med riktig konto. Noen organisasjoner bruker separate test-kontoer. Spør instruktøren om kontodetaljer.

---

## Steg 2 – Velg riktig miljø

Øverst til høyre i Copilot Studio ser du miljønavnet (f.eks. «Atea (default)» eller et tilpasset miljønavn).

1. Klikk på **miljønavnet** øverst til høyre
2. En liste over tilgjengelige miljøer åpner seg
3. Velg miljøet du ønsker å bruke for workshopen (om du er usikker, velg det som heter Personal Productivity (default)» eller spør instruktøren)

---

## Steg 3 – Opprett en ny agent

1. Klikk på **«+ Opprett»** (eller **«Create»** hvis grensesnittet er på engelsk) i venstremenyen
2. Velg **«Ny agent»** (eller **«New agent»**)
3. Du vil nå se en AI-assistert opprettelsesveiviser

> **Alternativ metode:** På startsiden kan du klikke på **«Opprett en agent»**-knappen i midten av skjermen.

---

## Steg 4 – Gi agenten navn og beskrivelse

Du vil se et skjema (eller en AI-chat) der du kan beskrive hva agenten skal gjøre.

### Alternativ A – Bruk veiviseren (anbefalt for nybegynnere)

Skriv inn i chatten:

```
Jeg vil lage en onboarding-assistent for nye ansatte i et IT-firma. 
Agenten skal hjelpe med å besvare spørsmål om onboarding-prosessen, 
interne verktøy, og hvem man kontakter ved ulike behov.
```

La AI-en foreslå navn og innstillinger, og juster deretter.

### Alternativ B – Fyll inn manuelt

Klikk på **«Hopp over til konfigurasjon»** eller **«Skip to configure»**, og fyll inn:

| Felt | Verdi |
|------|-------|
| **Navn** | `Onboarding-agent` |
| **Beskrivelse** | `En assistent som hjelper nye ansatte i Atea med å finne informasjon om onboarding, interne rutiner og verktøy.` |
| **Ikoner / bilde** | La stå som standard |

Klikk **«Opprett»** / **«Create»** når du er ferdig.

---

## Steg 5 – Bli kjent med grensesnittet

Etter opprettelse ser du agentens konfigurasjonsside. Her er de viktigste delene:

```
┌─────────────────────────────────────────────────────────────┐
│  [Oversikt]  [Instruksjoner]  [Kunnskap]  [Handlinger]      │
│                                            [Publisering]    │
├────────────────────────────────┬────────────────────────────┤
│                                │                            │
│  Agentens innstillinger        │  Test-panel                │
│  (venstre side)                │  (høyre side)              │
│                                │                            │
│  • Instruksjoner               │  Skriv meldinger her       │
│  • Kunnskap                    │  for å teste agenten       │
│  • Handlinger                  │                            │
│  • Kanaler                     │                            │
│                                │                            │
└────────────────────────────────┴────────────────────────────┘
```

**Test-panelet** (høyre side) lar deg chatte med agenten direkte. Vi bruker dette mye i lab-arbeidet.

---

## Steg 6 – Legg til instruksjoner

Instruksjonene (systemprompten) er det viktigste du konfigurerer. De forteller agenten hvem den er, hva den kan hjelpe med, og hvordan den skal oppføre seg.

1. Klikk på **«Instruksjoner»** / **«Instructions»** i venstremenyen (eller øverst i konfigurasjonen)
2. Slett den eventuelle standardteksten
3. Kopier inn instruksjonene nedenfor:

---

### Instruksjoner – kopier dette inn

```
Du er Onboarding-agenten til Atea – en vennlig og profesjonell assistent som hjelper nye 
ansatte med å finne informasjon og komme godt i gang i jobben.

## Din rolle
Du hjelper nye ansatte i Atea med:
- Spørsmål om onboarding-prosessen og hva som skjer de første ukene
- Informasjon om interne verktøy og systemer (Microsoft 365, Teams, ServiceNow, osv.)
- Hvem man skal kontakte ved ulike behov (IT-support, HR, nærmeste leder)
- Praktisk informasjon om arbeidstid, ferie, lønn og andre administrative rutiner
- Informasjon om Ateas verdier, kultur og organisasjon

## Slik er du
- Vennlig og imøtekommende – du vet at det er overveldende å starte i ny jobb
- Profesjonell og presis – du gir korrekt informasjon og innrømmer når du ikke vet
- Kortfattet når det holder, utfyllende når det trengs
- Du bruker alltid norsk (bokmål) med mindre brukeren skriver på et annet språk

## Viktige retningslinjer
- Hvis du ikke finner svaret i tilgjengelig dokumentasjon, si klart ifra og foreslå hvem 
  brukeren kan kontakte i stedet
- Aldri gjett på spesifikk kontaktinformasjon, lønnssatser eller juridiske forhold – 
  henvis alltid til HR eller nærmeste leder for slike spørsmål
- Dersom spørsmålet er teknisk og krever feilsøking, henvis til IT-support
- Avslutt gjerne svar med et oppfølgingsspørsmål: «Er det noe annet jeg kan hjelpe med?»

## Om Atea
Atea er Nordens ledende leverandør av IT-infrastruktur og relaterte tjenester, med 
kontorer over hele Norden og Baltikum. Atea hjelper kunder med å sette teknologi ut i livet.

## Grenser for hva du hjelper med
Du hjelper IKKE med:
- Kundeprosjekter eller klientrelatert informasjon
- Informasjon som ikke er relatert til ansettelsesforholdet eller arbeidsplassen
- Personopplysninger om andre ansatte utover tittel og ansvarsområde
```

4. Klikk **«Lagre»** / **«Save»**

> **Tips:** Du kan alltid endre instruksjonene senere. Vi vil justere dem igjen i Lab 4.

---

## Steg 7 – Test agenten med enkle spørsmål

Nå er det tid for å teste hva agenten kan! Bruk **Test-panelet** på høyre side.

Prøv disse spørsmålene (skriv dem inn én om gangen):

1. `Hei! Jeg er ny i Atea. Hva bør jeg gjøre den første uken?`
2. `Hvem kontakter jeg hvis PC-en min ikke virker?`
3. `Hva er Ateas kjerneverdier?`
4. `Hvor mange feriedager har jeg?`
5. `Hva er Teams og hvordan bruker jeg det?`

**Hva ser du?**
- Spørsmål 1–3 og 5: Agenten bør svare basert på generell kunnskap og instruksjonene dine
- Spørsmål 4 (feriedager): Agenten bør innrømme at den ikke har spesifikk informasjon og anbefale å kontakte HR – dette er korrekt oppførsel!

---

## Steg 8 – Juster om nødvendig

Hvis agenten svarer på feil språk, svarer dårlig eller ignorerer retningslinjene:

1. Gå tilbake til **Instruksjoner**
2. Gjør justeringer – f.eks. legg til: `VIKTIG: Svar alltid på norsk bokmål.`
3. Klikk **«Lagre»**
4. I Test-panelet, klikk **«Oppdater»** / **«Refresh»** øverst
5. Test på nytt

---

## ✅ Checkpoint

Før du går videre til Lab 2, sjekk at:

- [ ] Agenten er opprettet med navn `Onboarding-agent`
- [ ] Instruksjonene er lagt inn og lagret
- [ ] Agenten svarer på norsk
- [ ] Agenten sier klart ifra når den ikke har spesifikk informasjon (f.eks. feriedager)
- [ ] Agenten oppfører seg i tråd med retningslinjene (ikke gjetter på lønn, osv.)

---

## Vanlige feil og løsninger

| Problem | Løsning |
|---------|---------|
| Agenten svarer på engelsk | Legg til `Svar alltid på norsk bokmål` øverst i instruksjonene |
| «Create» er grået ut | Sjekk at du har valgt riktig miljø og at du har riktige lisenser |
| Agenten ignorerer retningslinjene | Flytt de viktigste retningslinjene øverst i instruksjonene, og marker dem med STORE BOKSTAVER |
| Test-panelet viser feil | Prøv å refreshe siden, eller lagre instruksjonene på nytt |
| Agenten finner opp informasjon | Bra observasjon! Vi løser dette i Lab 2 ved å legge til en faktabasert kunnskapsbase |

---

## Neste steg

Flott jobba! Du har din første agent oppe og kjøre. I [Lab 2](lab-02-kunnskap-og-data.md) skal vi gi agenten ekte kunnskap ved å koble til et FAQ-dokument og en onboarding-guide.

> **Lagre gjerne lenken til agenten din:** Du finner den i nettleserens adresselinje når du er inne på agenten. Den begynner med `https://copilotstudio.microsoft.com/...`
