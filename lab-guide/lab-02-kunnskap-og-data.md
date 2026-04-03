# Lab 2 – Koble til kunnskapskilder

**Tilhører:** Modul 3  

---

## Mål for denne laben

Når du er ferdig skal du ha:

- Lastet opp et FAQ-dokument og en onboarding-guide som kunnskapskilder
- Sett tydelig forskjell på svar med og uten kunnskapsbase
- Forstått hva RAG (Retrieval-Augmented Generation) gjør for agenten
- Erfaring med å avsløre hallusinasjon

---

## Bakgrunn – hva er RAG?

Uten kunnskapskilder baserer agenten seg på generell kunnskap fra treningsdataene sine. Det er som å spørre en ny kollega som aldri har lest noen Atea-dokumenter – de kan si mye fornuftig, men vet ikke spesifikke detaljer.

Med RAG (Retrieval-Augmented Generation) søker agenten i dokumentene dine og henter relevant innhold **før** den formulerer svaret. Resultatet er svar basert på faktisk dokumentasjon.

```
Spørsmål ──► Søk i kunnskapsbase ──► Hent relevante avsnitt
                                           │
                                           ▼
                                    Kombiner med prompt
                                           │
                                           ▼
                                    Svar basert på fakta
```

---

## Testdata

Bruk dokumentene nedenfor i lab-arbeidet. Du kan kopiere innholdet direkte til tekstfiler.

---

### Dokument 1: FAQ for nye ansatte

Lagre dette som `atea-faq-nye-ansatte.txt` på din PC:

---

```
ATEA – OFTE STILTE SPØRSMÅL FOR NYE ANSATTE
Versjon 1.2 | Oppdatert januar 2026
HR & People Operations

===========================================
ONBOARDING OG FØRSTE DAG
===========================================

Q: Hva skjer på min første dag?
A: Den første dagen starter med et velkomstmøte med din nærmeste leder kl. 09:00. 
Du vil motta din PC, mobiltelefon og adgangskort. Om ettermiddagen er det en felles 
onboarding-samling med andre nyansatte der du får en gjennomgang av Atea som selskap, 
verdiene våre og praktiske systemer. Første dag avsluttes gjerne med en uformell lunsj 
med teamet.

Q: Hva trenger jeg å forberede til første dag?
A: Ta med gyldig legitimasjon (pass eller bankkort med bilde) for identitetsbekreftelse. 
Du trenger ikke ta med noe annet – PC, utstyr og tilganger klargjøres for deg på forhånd.

Q: Hvem er min «buddy» eller fadder?
A: Alle nyansatte får tildelt en fadder – en erfaren kollega som kan svare på 
«dumme spørsmål» de første månedene. Du finner fadderkontakt i velkomst-e-posten 
fra HR. Ikke nøl med å ta kontakt!

Q: Hvor lenge varer onboarding-perioden?
A: Det formelle onboarding-programmet varer i 3 måneder. I løpet av denne perioden 
gjennomfører du et digitalt e-læringsprogram (ca. 4 timer), møter din leder jevnlig 
(ukentlig de første 4 ukene, deretter annenhver uke), og deltar på et 2-dagers 
«Atea Starter»-arrangement med alle nyansatte fra samme kvartal.

===========================================
IT-SYSTEMER OG VERKTØY
===========================================

Q: Hvilke IT-verktøy bruker vi i Atea?
A: Ateas viktigste daglige verktøy er:
- Microsoft 365 (Teams, Outlook, SharePoint, OneDrive)
- ServiceNow (IT-support og saksbehandling)
- Workday (HR, lønn og reiser)
- Salesforce (CRM for konsulenter og selgere)
- Azure DevOps (prosjektstyring for tekniske team)
- GitHub (kildekodehåndtering)
- Confluence (intern wiki og dokumentasjon)
Tilgang til systemer avhenger av din rolle og avdeling.

Q: Hvem hjelper meg hvis PC-en ikke virker eller jeg trenger tilgang til systemer?
A: Kontakt IT-Helpdesk via ServiceNow-portalen på intern.atea.no eller ring 
IT-support på 800 ATEA IT (800 28 32 48). Du kan også åpne en sak direkte i 
Microsoft Teams ved å søke etter «Atea IT-support»-boten.

Q: Hva gjør jeg hvis jeg glemmer passordet mitt?
A: Gå til aka.ms/sspr (Self-Service Password Reset) og følg veiviseren. 
Du trenger tilgang til din registrerte mobiltelefon eller e-post. 
Alternativt: Ring IT-Helpdesk på 800 ATEA IT.

Q: Har jeg lov til å installere programmer på jobb-PC-en?
A: Du kan installere programmer fra Ateas godkjente programvarekatalog via 
Software Center (Windows) eller Managed Software Center (Mac). 
For installasjon av programmer utenfor katalogen kreves godkjenning fra din 
leder og IT-sikkerhet. Send en forespørsel via ServiceNow.

Q: Hva er Ateas regler for bruk av AI-verktøy som ChatGPT?
A: Atea har godkjent bruk av Microsoft Copilot (integrert i M365) for alle ansatte. 
Bruk av eksterne AI-tjenester som ChatGPT er tillatt for generelt arbeid, men 
IKKE for å behandle konfidensiell informasjon, kundeopplysninger eller 
prosjektdokumenter. Se Ateas AI-policy på intranett.atea.no for detaljer.

===========================================
ARBEIDSFORHOLD OG LØNN
===========================================

Q: Når utbetales lønn?
A: Lønn utbetales den siste virkedagen i hver måned. Lønnsslipp er tilgjengelig 
digitalt i Workday-portalen senest 3 dager før utbetaling.

Q: Hvordan registrerer jeg timer?
A: Timregistrering gjøres i Workday. Du logger inn på workday.atea.no og 
registrerer tid per prosjekt/aktivitet. Frist for timeregistrering er siste 
virkedag i måneden. Husk å registrere interntid (kurs, møter) separat fra 
kundetid.

Q: Hva er normalarbeidstid i Atea?
A: Standard arbeidstid er 37,5 timer per uke. Ateas kjernetid er 09:00–15:00 
mandag–fredag. Fleksitid tillates innenfor rammene av avdelingens behov og 
avtale med nærmeste leder. Overtidsarbeid forutsetter avtale med leder.

Q: Hvordan søker jeg om ferie?
A: Ferie søkes i Workday under «Fravær og ferie». Alle feriesøknader godkjennes 
av nærmeste leder. Gi minst 2 ukers varsel for kortere ferie, og minst 6 uker 
varsel for sommerferie (uke 28–32). Du har 25 feriedager per år i henhold 
til norsk ferielov.

Q: Hva gjør jeg hvis jeg er syk?
A: Meld fra til nærmeste leder via telefon eller Teams-melding **før** arbeidstid 
starter. Registrer sykefraværet i Workday. For fravær utover 3 dager kreves 
egenmelding i systemet. Ved sykdom over 7 dager kreves sykemelding fra lege. 
Egenmelding kan benyttes inntil 8 dager per sykefraværstilfelle, maksimalt 
24 dager per 12 måneder.

===========================================
REISE OG UTLEGG
===========================================

Q: Hvordan håndterer jeg reiseutlegg og diett?
A: Alle reiseutlegg registreres i Workday Expenses. Last opp kvitteringer 
digitalt (bilde er OK). Statens satser for diett og reise følges som 
minimum. Ateas reisepolicy finnes på intranett.atea.no under «HR & People».

Q: Har Atea bedriftskort?
A: Ja, konsulenter med jevnlig kundereising kan søke om bedriftskort via 
Workday. Send forespørsel til din leder som initierer prosessen. 
Bedriftskortet brukes for godkjente tjenestereiser.

===========================================
KULTUR OG KARRIERE
===========================================

Q: Hva er Ateas kjerneverdier?
A: Ateas tre kjerneverdier er:
1. Troverdighet – vi holder det vi lover og er åpne om utfordringer
2. Respekt – vi verdsetter mangfold og behandler alle med verdighet
3. Entusiasme – vi brenner for teknologi og for å hjelpe kundene

Q: Finnes det fagfellesskap eller interessegrupper?
A: Ja! Atea har en rekke fagnettverk (Communities of Practice) innen 
områder som sikkerhet, sky, AI, prosjektledelse og mer. 
Du melder deg inn via Teams. Spør kollegaer eller din leder om hvilke 
som er relevante for din rolle.

Q: Hva er mulighetene for faglig utvikling og kurs?
A: Atea tilbyr:
- Intern e-læringsplattform med hundrevis av kurs (Microsoft Learn integrert)
- Støtte til sertifiseringer (Microsoft, AWS, Google Cloud, osv.)
- Deltakelse på fagkonferanser og events
- Mentorordning og lederutviklingsprogram
Snakk med din leder om din utviklingsplan og budsjett for kurs/sertifiseringer.
```

---

### Dokument 2: Onboarding-guide (første 90 dager)

Lagre dette som `atea-onboarding-guide-90-dager.txt` på din PC:

---

```
ATEAS ONBOARDING-GUIDE: DINE FØRSTE 90 DAGER
HR & People Operations | Versjon 2.1

Gratulerer og velkommen til Atea! Denne guiden er din veikart for de første 90 dagene.
Vi ønsker at du skal føle deg trygg, inkludert og produktiv så raskt som mulig.

===========================================
UKE 1 – ORIENTERING OG OPPSTART
===========================================

Uke 1 handler om å bli kjent med omgivelsene, teamet og de viktigste systemene.

Dag 1:
□ Møt din nærmeste leder (kl. 09:00)
□ Motta PC, telefon og adgangskort
□ Sett opp Microsoft 365-kontoen din (Teams, Outlook)
□ Delta på felles onboarding-samling (ettermiddag)
□ Bli introdusert for teamet

Dag 2–5:
□ Sett opp alle nødvendige systemer (se IT-verktøy-listen i FAQ)
□ Gjennomfør sikkerhetsopplæring (obligatorisk e-læring, ca. 1,5 timer)
□ Gjennomfør GDPR-opplæring (obligatorisk e-læring, ca. 45 min)
□ Les Ateas etiske retningslinjer (Code of Conduct)
□ Møt fadderen din
□ Bli med i relevante Teams-kanaler (spør leder eller fadder hvilke)
□ Sett opp Workday og registrer bankkontoinformasjon for lønn

Mål for uke 1:
Forstå Ateas organisasjonsstruktur og din avdelings rolle.
Ha alle systemer fungerende og obligatorisk opplæring fullført.

===========================================
UKE 2–4 – FORDYPNING OG NETTVERK
===========================================

De neste ukene handler om å forstå rollen din dypere og begynne å bygge 
nettverk i organisasjonen.

Aktiviteter:
□ Gjennomfør rollen-spesifikk opplæring (i samarbeid med leder)
□ Delta på avdelingsmøter og teamstandups
□ Book kaffeprater med 5–10 kollegaer du skal samarbeide med
□ Bli kjent med kunderprosjekter eller ansvarsområder
□ Gjennomfør resten av e-læringsmodulen (mål: fullføre innen uke 3)
□ Ha ukentlige 1:1-møter med nærmeste leder

Viktige spørsmål å stille lederen din:
- Hva er de viktigste prioriteringene for avdelingen de neste 3 månedene?
- Hva er forventet av meg den første måneden? Etter 3 måneder?
- Hvem er de viktigste interessentene jeg bør kjenne?
- Hvilke møter bør jeg alltid delta på?

===========================================
MÅNED 2 – BIDRA OG LEVERE
===========================================

Nå begynner du å bidra aktivt. Fokus skifter fra «lære» til «gjøre».

Mål:
□ Ha levert ditt første selvstendige bidrag (oppgave, dokument, prosjektaktivitet)
□ Delta i minst ett fagnettverk (Community of Practice)
□ Gjennomfør 30-dagers medarbeidersamtale med leder
□ Ha identifisert 2–3 sertifiseringsmål for første halvår
□ Begynn å bruke Microsoft Copilot aktivt i daglig arbeid

Tips for måned 2:
- Still gjerne spørsmål selv om du føler det er «for tidlig» – det er aldri det!
- Bidra til Teams-kanaler og del kunnskap du tilegner deg
- Ta initiativ: foreslå forbedringer, delta aktivt i møter

===========================================
MÅNED 3 – SELVSTENDIG OG FORANKRET
===========================================

Ved slutten av 90 dager bør du føle deg hjemme i rollen og i Atea.

90-dagers sjekkliste:
□ Fullført hele onboarding e-læringsplanen
□ Gjennomført 90-dagers medarbeidersamtale med leder
□ Identifisert og registrert utviKlingsplan i Workday
□ Deltatt på «Atea Starter»-samlingen
□ Etablert gode arbeidsrutiner (timeregistrering, møtestruktur)
□ Bygget et nettverk av kolleger du kjenner og stoler på

===========================================
VIKTIGE KONTAKTER OG RESSURSER
===========================================

IT-support:
- ServiceNow: intern.atea.no
- Telefon: 800 ATEA IT (800 28 32 48)
- Teams: Søk «Atea IT-support»

HR og personalsaker:
- Workday: workday.atea.no
- HR-portalen: intranett.atea.no/hr
- E-post: hr@atea.no

Intranett og dokumentasjon:
- Intranett: intranett.atea.no
- SharePoint HR: Søk «HR» i SharePoint
- Confluence: confluence.atea.no

Nøkkelpersoner du bør kjenne:
- Din nærmeste leder (se tildelingsmail)
- Din fadder/buddy (se velkomstmail)
- HR Business Partner for din avdeling (se intranett)
- IT-kontakt for din avdeling (spør leder)

===========================================
ATEAS ORGANISASJON (KORT OVERSIKT)
===========================================

Atea er organisert i følgende forretningsområder:
- Infrastructure & Cloud – servere, nettverk, sky-løsninger
- Workplace – PC, mobil, brukeropplevelse
- Security – sikkerhet og compliance
- Managed Services – driftstjenester for kunder
- Consulting & Solutions – rådgivning og prosjektgjennomføring

Atea Norden har hovedkontor i Oslo (Nydalen) og kontorer i alle norske storbyer 
samt Sverige, Danmark, Finland og de baltiske landene.

Totalt har Atea ca. 7 500 ansatte i Norden og Baltikum, hvorav ca. 3 500 i Norge.

===========================================
MERK DEG DISSE DATOENE
===========================================

Etter oppstart bør du merke deg følgende faste datoer:
- Lønnsutbetaling: Siste virkedag hver måned
- Timeregistreringsfrist: Siste virkedag i måneden
- «Atea Starter»-samling: Avholdes kvartalsvis (du får dato per e-post)
- Utviklingssamtale med leder: Halvårlig (juni og desember)
```

---

## Steg 1 – Lagre dokumentene på din PC

1. Kopier innholdet fra **Dokument 1** ovenfor
2. Åpne Notisblokk (Windows) eller TextEdit (Mac)
3. Lim inn innholdet
4. Lagre filen som `atea-faq-nye-ansatte.txt`
5. Gjenta for **Dokument 2** → lagre som `atea-onboarding-guide-90-dager.txt`

> **Alternativt:** Filene kan også lagres som `.docx` (Word) – Copilot Studio støtter begge formater.

---

## Steg 2 – Last opp dokumentene som kunnskapskilder

1. Åpne agenten din i Copilot Studio
2. Klikk på **«Kunnskap»** / **«Knowledge»** i venstremenyen
3. Klikk på **«+ Legg til kunnskap»** / **«+ Add knowledge»**
4. Velg **«Filer»** / **«Files»** fra listen over kunnskapskildetyper
5. Last opp `atea-faq-nye-ansatte.txt`
6. Vent til statusen viser «Klar» / «Ready» (kan ta 1–2 minutter)
7. Gjenta for `atea-onboarding-guide-90-dager.txt`

> **Ser du ikke «Files»-alternativet?** Sjekk at du har riktig lisens (Copilot Studio krever en bestemt plan for opplasting av filer). Alternativt kan du prøve «SharePoint» hvis filene kan legges i en SharePoint-mappe.

> **Status «Feil» / «Error»?** Filstørrelsen bør være under 512 MB og formatet støttet (TXT, DOCX, PDF er vanligste). Prøv å lagre som `.docx` i stedet.

---

## Steg 3 – Test at agenten bruker kunnskapen

Etter at begge filene viser «Klar», test disse spørsmålene i Test-panelet:

**Spørsmål som BØR besvares fra dokumentene:**

1. `Når utbetales lønn i Atea?`
2. `Hva er Ateas kjerneverdier?`
3. `Hva skjer på min første dag i Atea?`
4. `Hva er kjernetiden på kontoret?`
5. `Hvem kontakter jeg for IT-support?`

**Se etter kildeangivelse:**  
Copilot Studio viser gjerne en [1]- eller 📄-indikator som viser at svaret er hentet fra et dokument. Klikk på den for å se nøyaktig hvilken del av dokumentet som ble brukt.

---

## Steg 4 – Sammenlign svar med og uten kunnskapskilder

For å forstå verdien av RAG, prøv dette:

1. **Med kunnskapskilder aktivert** – spør: `Hva er Ateas interne IT-supportnummer?`  
   → Agenten bør svare med **800 ATEA IT (800 28 32 48)** (hentet fra FAQ-dokumentet)

2. **Midlertidig deaktiver kunnskapskildene:**
   - Gå til **Kunnskap**-fanen
   - Slå av knappen ved siden av filene (toggle til «Av»)
   - Gå tilbake til Test-panelet og still samme spørsmål

3. Hva svarer agenten nå? Sannsynligvis noe generelt som «kontakt IT-support» uten spesifikk informasjon – eller den gjetter.

4. Slå kunnskapskildene på igjen.

---

## Steg 5 – Hallusinasjons-sjekk

Test agenten med spørsmål som **ikke** finnes i dokumentene dine. Dette avslører om agenten finner opp svar.

**Test disse spørsmålene:**

| Spørsmål | Forventet oppførsel |
|----------|---------------------|
| `Hva heter HR-direktøren i Atea?` | Bør si at den ikke har denne informasjonen og henvise til intranett/HR |
| `Hva er lønnen for en senior konsulent i Atea?` | Bør IKKE gjette, men si klart ifra og referer til HR |
| `Hva skjedde på Ateas siste generalforsamling?` | Bør innrømme at den ikke har denne informasjonen |
| `Hva er Ateas aksjakurs i dag?` | Bør si at den ikke har sanntids-børsdata |

**Hva gjør du hvis agenten hallusinerer (finner opp svar)?**

1. Gå til **Instruksjoner**
2. Legg til et nytt avsnitt:

```
## Viktig om nøyaktighet
Hvis du ikke finner svaret i de tilgjengelige dokumentene eller kunnskapsbasen, 
skal du ALLTID si klart ifra at du ikke vet. Si noe slikt som:
"Jeg finner ikke denne informasjonen i dokumentene mine. Jeg anbefaler at 
du sjekker intranett.atea.no eller kontakter HR direkte på hr@atea.no."

Gjett ALDRI på lønnsatser, juridiske forhold, kontaktinformasjon for 
enkeltpersoner eller annen sensitiv informasjon.
```

3. Lagre og test på nytt.

---

## ✅ Checkpoint

- [ ] Begge dokumenter er lastet opp og har status «Klar»
- [ ] Agenten svarer med informasjon fra FAQ-dokumentet (f.eks. supportnummer)
- [ ] Agenten svarer med informasjon fra onboarding-guiden (f.eks. første-dags-plan)
- [ ] Agenten sier klart ifra ved spørsmål utenfor kunnskapsbasen
- [ ] Du har sett kildeangivelse i et svar

---

## Vanlige feil og løsninger

| Problem | Løsning |
|---------|---------|
| Filen feiler ved opplasting | Prøv .docx-format i stedet for .txt |
| Agenten bruker ikke dokumentet | Sjekk at kunnskapskilden er aktivert (toggle er «På») |
| Agenten svarer fortsatt på generelt | Vent litt – det kan ta noen minutter etter opplasting |
| Kildeangivelse vises ikke | Noen planer viser ikke kildangivelse – sjekk innstillingene under «Generative svar» |
| Agenten blander svar fra dokument og generell kunnskap | Legg til i instruksjonene: «Prioriter alltid informasjon fra kunnskapsbasen fremfor generell kunnskap» |

---

## Neste steg

Nå har agenten faktabasert kunnskap! I [Lab 3](lab-03-verktoy-og-integrasjoner.md) går vi videre og legger til verktøy slik at agenten faktisk kan *gjøre ting* – ikke bare svare på spørsmål.
