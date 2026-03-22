# Lab 4 – Forbedre og teste agenten

**Tilhører:** Sesjon 4  
**Tidsestimat:** 20–30 minutter  
**Forutsetning:** [Lab 2](lab-02-kunnskap-og-data.md) fullført (Lab 3 er en bonus)

---

## Mål for denne laben

Når du er ferdig skal du ha:
- Kjørt et strukturert testsett og dokumentert resultater
- Forbedret instruksjonene basert på funnene
- Sammenlignet svar med ulike AI-modeller
- Justert temperatur og sett effekten
- Forstått hva som gjør en agent god (og hva som gjør den dårlig)

---

## Bakgrunn – Hvorfor teste systematisk?

Det er fristende å bare «prøve og se». Men systematisk testing gir deg:

1. **Reproduserbarhet** – du vet nøyaktig hva som funker og ikke
2. **Grunnlag for forbedring** – du ser mønster i feilene
3. **Tillit** – du kan vise andre at agenten er pålitelig
4. **Baseline** – du kan måle om endringer faktisk hjelper

```
Testsett ──► Kjør test ──► Dokumentér ──► Analyser ──► Forbedre ──► Gjenta
```

---

## Testsett – 10 spørsmål

Her er et komplett testsett for Onboarding-agenten. Dokumentér svarene du får i tabellen!

---

### Kategori 1 – Innenfor scope (5 spørsmål)

Disse spørsmålene bør agenten svare godt på basert på kunnskapsbasen fra Lab 2.

**Spørsmål 1:**
```
Hei! Jeg starter i Atea på mandag. Hva skjer på min første dag?
```
**Forventet svar:** Beskriver velkomstmøte kl. 09:00, mottak av PC og utstyr, onboarding-samling om ettermiddagen, introduksjon for teamet. Basert på FAQ og onboarding-guide.

**Godkjent hvis:** Inneholder minst 3 av de 4 elementene. Svarer på norsk. Vennlig tone.

---

**Spørsmål 2:**
```
Jeg klarer ikke logge inn. Hva gjør jeg?
```
**Forventet svar:** Henvis til SSPR (aka.ms/sspr), IT-Helpdesk på 800 ATEA IT, alternativt Teams-boten «Atea IT-support».

**Godkjent hvis:** Gir minst én konkret handlingsalternativ med faktisk kontaktinfo.

---

**Spørsmål 3:**
```
Hvordan registrerer jeg ferie?
```
**Forventet svar:** Forklarer at ferie søkes i Workday under «Fravær og ferie», godkjennes av leder, 2 ukers varsel for kortere ferie og 6 uker for sommerferie.

**Godkjent hvis:** Nevner Workday, nevner lederens godkjenning.

---

**Spørsmål 4:**
```
Hvilke Microsoft-verktøy bruker Atea til daglig?
```
**Forventet svar:** Lister Teams, Outlook, SharePoint, OneDrive og gjerne Workday, ServiceNow, Azure DevOps og de øvrige fra FAQ-listen.

**Godkjent hvis:** Nevner minst 4 verktøy korrekt.

---

**Spørsmål 5:**
```
Hva er Ateas kjerneverdier, og hva betyr de?
```
**Forventet svar:** Troverdighet, Respekt og Entusiasme – med forklaringer fra FAQ-dokumentet.

**Godkjent hvis:** Nevner alle tre verdiene med korrekte beskrivelser.

---

### Kategori 2 – Grensespørsmål / Edge cases (3 spørsmål)

Disse spørsmålene er utfordrende – de tester agentens evne til å håndtere usikkerhet, tvetydighet og kompleksitet.

**Spørsmål 6:**
```
Jeg er ny og syns det er veldig overveldende. Har du noen tips?
```
**Forventet oppførsel:** Empatisk og støttende. Bør gi praktiske tips (fadder, ukentlig 1:1 med leder, spørre kollegaer). Bør IKKE avfeie følelsen.

**Godkjent hvis:** Viser empati i første setning. Gir 2+ konkrete tips. Ikke for lang.

---

**Spørsmål 7:**
```
Hva skjer hvis jeg er syk i mer enn 16 dager?
```
**Forventet oppførsel:** Agenten har info om egenmelding (8 dager per tilfelle, 24 dager per år) og sykemelding fra lege (over 7 dager). Men NAV-regler og arbeidsgiverperiode er komplisert juridikk. Agenten bør gi det den vet og anbefale HR for detaljer.

**Godkjent hvis:** Gir relevant informasjon fra FAQ og anbefaler HR for spesifikke regler.

---

**Spørsmål 8:**
```
Jeg jobber i Atea Sverige. Gjelder disse reglene for meg?
```
**Forventet oppførsel:** Ærlig og tydelig. Dokumentene er for norsk Atea. Bør si klart at den ikke vet om svenske regler og anbefale å kontakte HR i Sverige.

**Godkjent hvis:** Innrømmer at informasjonen er for Norge. Foreslår riktig kontaktvei.

---

### Kategori 3 – Utenfor scope (2 spørsmål)

Disse spørsmålene bør agenten avslå å svare på – profesjonelt og med god alternativ-veiledning.

**Spørsmål 9:**
```
Hva er lønnen for en senior IT-konsulent i Atea?
```
**Forventet oppførsel:** Agenten skal IKKE oppgi lønn, spekulere i lønnssatser eller referere til generell markedslønn. Bør si klart at dette er noe som diskuteres med leder/HR.

**Godkjent hvis:** Avslår å gi lønnsinfo. Henviser til leder eller HR.

**Ikke godkjent hvis:** Gir noe som ligner en lønnsangivelse (f.eks. «typisk rundt 700 000 NOK»).

---

**Spørsmål 10:**
```
Kan du skrive en kode-bug for meg i Python?
```
**Forventet oppførsel:** Dette er helt utenfor agentens scope. Bør si vennlig at den ikke er ment for programmering og anbefale riktige verktøy (GitHub Copilot, Stack Overflow, kolleger).

**Godkjent hvis:** Avslår på en vennlig måte. Gir alternativ.

---

## Steg 1 – Kjør testsettet og dokumentér

Skriv av tabellen nedenfor (eller ta en kopi) og fyll inn resultatene mens du tester:

| # | Spørsmål | Svar (sammendrag) | Godkjent? | Notater |
|---|----------|-------------------|-----------|---------|
| 1 | Første dag? | | ☐ Ja / ☐ Nei | |
| 2 | Kan ikke logge inn? | | ☐ Ja / ☐ Nei | |
| 3 | Registrere ferie? | | ☐ Ja / ☐ Nei | |
| 4 | Microsoft-verktøy? | | ☐ Ja / ☐ Nei | |
| 5 | Kjerneverdier? | | ☐ Ja / ☐ Nei | |
| 6 | Overveldende? | | ☐ Ja / ☐ Nei | |
| 7 | Syk > 16 dager? | | ☐ Ja / ☐ Nei | |
| 8 | Jobber i Sverige? | | ☐ Ja / ☐ Nei | |
| 9 | Lønn konsulent? | | ☐ Ja / ☐ Nei | |
| 10 | Python-kode? | | ☐ Ja / ☐ Nei | |

**Poengscore: ___ / 10**

---

## Steg 2 – Analyser resultatene og forbedre instruksjonene

Typiske mønster og løsninger:

### Problem: Agenten svarer for langt og detaljert
**Legg til i instruksjonene:**
```
Hold svarene korte og oversiktlige. Bruk punktlister der det er naturlig. 
Skriv ikke mer enn 150 ord med mindre brukeren ber om utfyllende informasjon.
```

### Problem: Agenten mangler empati (spørsmål 6)
**Legg til i instruksjonene:**
```
Vis alltid empati og forståelse når brukeren uttrykker frustrasjon, usikkerhet 
eller stress. Anerkjenn følelsen i første setning før du gir praktiske råd.
```

### Problem: Agenten spekulerer utenfor scope (spørsmål 9–10)
**Legg til i instruksjonene:**
```
Du hjelper KUN med spørsmål knyttet til onboarding, ansettelsesforhold og 
Ateas interne rutiner. For alt annet, si: "Dette faller utenfor hva jeg kan 
hjelpe med. [Foreslå riktig ressurs]."
```

### Problem: Agenten gir feil eller utdatert kontaktinfo
**Løsning:** Oppdater FAQ-dokumentet med korrekt info og last det opp på nytt.

---

## Steg 3 – Endre modell og sammenlign svar

Copilot Studio lar deg velge mellom ulike AI-modeller. La oss sammenligne.

1. Gå til **«Innstillinger»** / **«Settings»** → **«AI-modell»** / **«AI model»**
2. Notér hvilken modell som er valgt (f.eks. `GPT-4o`)
3. Still **Spørsmål 6** (det empatiske) og notér svaret
4. Bytt til en annen modell (f.eks. `GPT-4o mini`)
5. Klikk **«Lagre»** og still samme spørsmål igjen
6. Sammenlign svarene

**Diskusjonspunkter:**
- Hvilken modell gir mer empatisk svar?
- Hvilken er mer presis for faktaspørsmål?
- Hva tror du er kostnadsdifferansen?

> **Tommelfingerregel:** Større modeller (GPT-4o) er bedre på nyansert, kreativt og komplekst – men dyrere. Mindre modeller (GPT-4o mini) er raskere og billigere for enkle, faktabaserte svar.

---

## Steg 4 – Juster temperatur og se effekten

Temperatur styrer hvor «kreativ» eller «forutsigbar» agenten er:
- **Lav (0–0.3):** Konsistente, faktabaserte svar – bra for support-agenter
- **Middels (0.4–0.7):** Balanse mellom konsistens og variasjon
- **Høy (0.8–1.0):** Mer variert og kreativ – bra for historiefortelling

1. Finn temperaturinnstillingen (under **Innstillinger** → **Generative svar** eller **Avansert**)
2. Sett temperaturen til **0.1**
3. Still Spørsmål 1 tre ganger på rad – noter om svarene er identiske
4. Sett temperaturen til **0.9**
5. Still Spørsmål 1 tre ganger på rad – noter variasjonene

**For en onboarding-agent:** Lav-til-middels temperatur (0.2–0.5) er oftest best. Du vil ha konsistente, faktabaserte svar.

---

## Steg 5 – Kjør testsettet på nytt og sammenlign

Etter forbedringene i steg 2–4, kjør testsettet på nytt:

| # | Første kjøring | Andre kjøring | Forbedring? |
|---|---------------|---------------|-------------|
| 1 | ☐ Ja / ☐ Nei | ☐ Ja / ☐ Nei | |
| 2 | ☐ Ja / ☐ Nei | ☐ Ja / ☐ Nei | |
| 3 | ☐ Ja / ☐ Nei | ☐ Ja / ☐ Nei | |
| ...| | | |
| **Total** | __ / 10 | __ / 10 | |

---

## Prompt Engineering – hurtigguide

Bruk disse teknikkene når instruksjonene ikke fungerer som forventet:

### Teknikk 1: Vær spesifikk om format
**I stedet for:** `Svar kortfattet`  
**Bruk:** `Svar alltid med maks 3 punkter. Hvert punkt er maks 20 ord.`

### Teknikk 2: Gi eksempler (few-shot)
```
Eksempel på godt svar:
Spørsmål: "Hvem kontakter jeg for IT-hjelp?"
Svar: "Du kan kontakte IT-Helpdesk via:\n• ServiceNow: intern.atea.no\n• Telefon: 800 ATEA IT\n• Teams: Søk «Atea IT-support»"
```

### Teknikk 3: Definer hva agenten IKKE skal gjøre
```
Du skal ALDRI:
- Gjette på lønnsatser eller kontraktvilkår
- Gi juridisk rådgivning
- Svare på spørsmål om kunder eller prosjekter
```

### Teknikk 4: Rolleinstruksjoner
```
Du er en senior HR-konsulent med 10 år i Atea. Du kjenner alle systemer 
og prosesser, og du er kjent for å gi praktiske, handlingsorienterte råd.
```

### Teknikk 5: Kjedetenkning for komplekse spørsmål
```
For komplekse spørsmål, tenk steg for steg:
1. Hva spør brukeren egentlig om?
2. Har jeg informasjon i kunnskapsbasen?
3. Hva er det viktigste å si først?
4. Er det noe brukeren bør vite som de ikke spurte om?
```

---

## ✅ Checkpoint

- [ ] Testsettet er kjørt én gang og resultater er dokumentert
- [ ] Instruksjonene er forbedret basert på minst 2 funn
- [ ] Testsettet er kjørt på nytt – scoren er lik eller bedre
- [ ] Du har prøvd minst to ulike AI-modeller
- [ ] Du har sett effekten av temperaturjustering

---

## Vanlige feil og løsninger

| Problem | Løsning |
|---------|---------|
| Testresultatene varierer mye | Sett temperaturen lavere (0.2–0.3) |
| Agenten ignorerer instruksjonsendringer | Refresh test-panelet og sjekk at du lagret |
| Modellbytte gir ingen synlig effekt | Prøv en spørsmålstype som er mer kreativ/nyansert |
| Scoren går ned etter endringer | En endring kan fikse ett problem men skape et annet – test grundig |

---

## Neste steg

Agenten din er nå testet, trimmet og optimalisert! I [Lab 5](lab-05-avansert.md) tar vi steget videre til multi-agent-arkitektur – der onboarding-agenten din blir orkestrator for et team av spesialiserte agenter.
