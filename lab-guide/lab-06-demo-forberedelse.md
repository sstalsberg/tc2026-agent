# Lab 6 – Klargjør demo og presentasjon

**Tilhører:** Avslutningsøkt  
**Tidsestimat:** 15–20 minutter  
**Forutsetning:** En fungerende agent fra Lab 1–5 (minimum Lab 1–2)

---

## Mål for denne laben

Når du er ferdig skal du ha:
- En polert, demo-klar agent
- En 2–3 minutters pitch strukturert etter malen
- Øvd gjennom presentasjonen minst én gang
- Tenkt gjennom de vanskelige spørsmålene du kan få

---

## Steg 1 – Ferdigstill agenten

Før du viser agenten for andre, gå gjennom denne sjekklisten:

### Teknisk sjekk
- [ ] Alle kunnskapskilder er lastet opp og har status «Klar»
- [ ] Instruksjonene er oppdatert med siste justeringer fra Lab 4
- [ ] Verktøyene (om du har lagt til noen) er testet og fungerer
- [ ] Agenten svarer konsekvent på norsk

### Kvalitetssjekk
Kjør de 5 viktigste spørsmålene fra Lab 4 testsettet en siste gang:
- [ ] Spørsmål 1 (første dag): Godkjent ✓
- [ ] Spørsmål 2 (loginnproblemer): Godkjent ✓
- [ ] Spørsmål 5 (kjerneverdier): Godkjent ✓
- [ ] Spørsmål 9 (lønn – skal avslå): Godkjent ✓
- [ ] Spørsmål 10 (utenfor scope): Godkjent ✓

### Demoscript
Lag en liste på 3–5 spørsmål du vil stille under demo. Velg spørsmål som:
- Er enkle og forståelige for alle i rommet
- Viser det mest imponerende agenten gjør
- Har konsistente, gode svar

**Anbefalt demo-rekkefølge:**
1. Starte med en enkel, relaterbar åpning: `Hei! Jeg er ny i Atea. Hva bør jeg gjøre dag 1?`
2. Vise kunnskapsbasen: `Hva er IT-supportnummeret?`
3. Vise grenser/ansvarlighet: `Hva er lønnen for en konsulent?`
4. Vise handling (hvis Lab 3 er gjort): `Kan du sende en velkomst-epost til meg?`
5. Vise multi-agent (hvis Lab 5 er gjort): `PC-en min virker ikke – kan du hjelpe?`

---

## Steg 2 – Pitchen: Mal og struktur

En god demopitch er 2–3 minutter og følger denne strukturen:

```
PITCH-STRUKTUR (2–3 minutter)

[30 sekunder] PROBLEM / BEHOV
[45 sekunder] LØSNING (hva agenten gjør)
[60 sekunder] LIVE DEMO
[20 sekunder] PLATTFORM OG ARKITEKTUR
[15 sekunder] ROI OG FORRETNINGSVERDI
[10 sekunder] NESTE STEG
```

---

### Pitchmalen – fyll inn og tilpass

---

**[PROBLEM / BEHOV – 30 sekunder]**

> «En ny ansatt i Atea møter informasjonsoverflod fra dag én. Hva er IT-supportnummeret? Hvem er fadderen min? Hvordan søker jeg ferie? Svaret er spredt over intranett, Teams-kanaler, e-poster og muntlige beskjeder fra kollegaer.»
>
> «Resultatet: nye ansatte bruker unødvendig tid på å finne svar, og supportavdelingene oversvømmes av enkle spørsmål.»

*[Tilpass med tall hvis du har dem: «I Atea mottar HR X henvendelser per uke bare om feriedager»]*

---

**[LØSNING – 45 sekunder]**

> «Vi har bygget en Onboarding-agent – et enkelt kontaktpunkt der nye ansatte kan stille alle spørsmål på norsk, få øyeblikkelige svar, og utføre enkle handlinger.»
>
> «Agenten kjenner Ateas onboarding-prosess, systemer og rutiner. Den vet hvem du skal kontakte. Den kan trigge handlinger som å sende velkomst-e-poster. Og den sier klart ifra når den ikke vet – i stedet for å gjette.»
>
> «La meg vise deg.»

---

**[LIVE DEMO – 60 sekunder]**

*Åpne agenten i nettleseren. Still spørsmålene fra ditt demoscript. Kommenter underveis:*

> «Her spør jeg om dag 1. Agenten henter informasjonen fra vår onboarding-guide...»

> «Her tester jeg grensene – jeg spør om lønn. Se at agenten sier klart ifra og henviser til HR i stedet for å gjette. Dette er viktig.»

> «Her ber jeg om en handling – å sende en velkomst-epost. Agenten trigges og kaller Power Automate i bakgrunnen...»

---

**[PLATTFORM OG ARKITEKTUR – 20 sekunder]**

> «Agenten er bygget i Microsoft Copilot Studio, som er Microsofts low-code plattform for agent-utvikling. Den kjører på Azure, integrerer med Power Automate for handlinger, og bruker RAG mot dokumenter lagret i SharePoint.»
>
> «Vi bruker GPT-4o som underliggende modell. Hele løsningen er innenfor Ateas Microsoft-tenant – ingen data forlater selskapet.»

*[Vis gjerne et enkelt arkitekturdiagram på whiteboard eller i PowerPoint hvis du har tid]*

---

**[ROI OG FORRETNINGSVERDI – 15 sekunder]**

Velg de punktene som er mest relevante for din presentasjon:

> «Konkret verdi: En ny ansatt som bruker 30 minutter mindre per dag på å finne informasjon den første uken, gir 2,5 timer spart per person. Med 200 nye ansatte per år er det 500 timer – eller ca. [X kr] i konsulentverdi.»

> «For IT-Helpdesk: De vanligste onboarding-spørsmålene (passord, tilganger, systemoversikt) utgjør X% av henvendelsene. En agent som håndterer disse, frigjør kapasitet til mer komplekse saker.»

> «Tidsinvestering for å bygge dette: 2–3 dager for en funksjonell MVP. Ingen kode nødvendig.»

---

**[NESTE STEG – 10 sekunder]**

> «Det naturlige neste steget er å pilotteste med neste kull av nyansatte, samle tilbakemeldinger, og iterere. Vi kan ha en produksjonsklar versjon innen 4–6 uker.»

---

## Steg 3 – Øv på pitchen

1. **Still inn en timer på 3 minutter**
2. Gå gjennom pitchen alene (høyt!) – se om den passer i tid
3. Gjennomfør et «tech rehearsal» der du faktisk åpner agenten og stiller demo-spørsmålene
4. Justér der det er nødvendig

**Tips for live demo:**
- Ha et backup-scenario: ta skjermbilder av et godt svar og bruk dem hvis noe feiler live
- Hold nettleserfanene klare på forhånd
- Slå av varslinger (Windows: Fokushjelp, Mac: Ikke forstyrr)
- Vurder å ha agenten åpen i inPrivate/Inkognito for å unngå at pålogging forstyrrer
- Test WiFi-forbindelsen på forhånd

---

## Steg 4 – Forbered deg på vanskelige spørsmål

Her er spørsmål du sannsynligvis vil få, med foreslåtte svar:

**«Hva koster dette å drifte?»**
> «Copilot Studio har en meldingsbasert prismodell. For en intern onboarding-agent med relativt få brukere (hundre nye ansatte per år) er kostnadene beskjedne – typisk noen hundre dollar per måned. Vi har ikke gjort endelig kostnadsberegning, men dette er noe vi tar med i en videre utredning.»

**«Hva skjer hvis agenten gir feil svar?»**
> «Det er et viktig spørsmål. Vi har designet agenten til å si klart ifra når den ikke vet, fremfor å gjette. Vi har også testet den med et sett av kontrollspørsmål. For kritisk informasjon som lønn og juridiske forhold, vil agenten alltid henvise til en menneskelig ekspert.»

**«Kan ansatte stole på svarene?»**
> «Agenten baserer seg på dokumenter vi kontrollerer – FAQ og onboarding-guide. Vi må ha en prosess for å holde disse oppdatert. Det er et godt poeng, og det bør inngå i en governance-plan for agenten.»

**«Hva med GDPR og personvern?»**
> «Agenten kjører i Ateas Microsoft 365-tenant. Samtaler lagres ikke lenger enn nødvendig, og vi samler ikke inn personopplysninger. En full GDPR-vurdering bør gjøres ved produksjonssetting – men arkitektonisk er vi innenfor Microsofts compliance-rammeverk.»

**«Vil dette erstatte HR-avdelingen?»**
> «Nei – agenten håndterer de enkle, repetitive spørsmålene slik at HR kan fokusere på det de er aller best til: menneskelig kontakt, utvikling og komplekse situasjoner. Agenten er et supplement, ikke en erstatning.»

---

## Ekstra ressurser

Trenger du presentasjonsmateriell til pitchen?

- **Arkitekturdiagram:** Tegn dette på whiteboard (tar 2 minutter):
  ```
  [Ny ansatt] ──► [Onboarding-agent] ──► [Kunnskapsbase]
                          │             ──► [Power Automate]
                          ├──► [IT-support-agent]
                          └──► [HR-agent]
  ```

- **ROI-kalkulator (enkel):**
  - Minutter spart per dag per ny ansatt: __ min
  - Antall nye ansatte per år: __
  - Kostnad per time (internpris): __ kr
  - Estimert årlig besparelse = (min spart / 60) × antall ansatte × timepris × 5 dager × 4 uker (første måned)

---

## ✅ Checkpoint

- [ ] Agenten er demo-klar og teknisk sjekket
- [ ] Demoscript (3–5 spørsmål) er valgt og testet
- [ ] Pitchmalen er fylt inn og tilpasset
- [ ] Du har øvd på pitchen minst én gang
- [ ] Du har et svar klar på minst 3 vanskelige spørsmål

---

## Avsluttende ord

Gratulerer – du har nå bygget en fullverdig agent i Copilot Studio!

Fra en tom konfigurasjon i Lab 1 til en kunnskapsrik, handlingskraftig, og (kanskje) multi-agent-drevet løsning som løser et reelt problem for en reell målgruppe.

Det viktigste du tar med deg:
1. **Agenter er ikke rakettvitenskap** – du behøver ikke kode for å bygge noe nyttig
2. **Iterasjon er nøkkelen** – første versjon trenger ikke være perfekt
3. **Testing avdekker sannheten** – magefølelse er ikke nok
4. **Plattformen er klar** – Copilot Studio, Power Automate og M365 gir deg alt du trenger i dag

Lykke til med presentasjonen – og med å ta agentbyggingen videre!

---

*Spørsmål etter workshopen? Nå deg til:*  
*[steinar.stalsberg@atea.no](mailto:steinar.stalsberg@atea.no)*
