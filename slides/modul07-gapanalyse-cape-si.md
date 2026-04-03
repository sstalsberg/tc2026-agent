# Gapanalyse: foredrag vs. CAPE SI Enablement (20. mars 2026)

Denne analysen sammenligner innholdet i foredraget med budskapet i opptaket om **Agent Review Tool**.

## 1) Gap i budskap (hva publikum kan savne)

## A. Mangler tydelig "problem -> løsning -> verdi"
I opptaket starter Ram med et tydelig problem: "det er lett å bygge en agent, men vanskelig å vite om den er klar".

**Forslag:** Legg inn én slide tidlig i Modul 7 med:
- Problem: kvalitet sitter i hodet på enkeltpersoner
- Løsning: standardisert review med score + funn + tiltak
- Verdi: raskere forbedring og tryggere produksjonssetting

## B. Mangler konkret kvalitetsterskel
I opptaket brukes en praktisk tommelfingerregel (ca. 80+ som anbefalt nivå før bred deling).

**Forslag:** Legg inn en "go/no-go"-slide med eksempel:
- < 60: ikke klar
- 60-79: forbedres
- 80+: kandidat for pilot/produksjon

## C. Mangler tydelig demoflyt for review-prosess
Opptaket viser en konkret flyt (velg miljø eller last opp løsning, kjør review, les funn, last ned PDF, del med maker).

**Forslag:** Legg inn en enkel prosess-slide i 5 steg:
1. Velg agent/last opp løsning
2. Kjør analyse
3. Prioriter "high"-funn
4. Gjør forbedringer
5. Re-kjør og dokumenter resultat

## D. Mangler skillet mellom Copilot Studio-agent og M365 deklarativ agent
Opptaket skiller tydelig: Copilot Studio vurderes bredere, M365 deklarative agenter vurderes primært på instruksjonskvalitet/struktur.

**Forslag:** Legg inn en sammenligningstabell:
- Hva som evalueres per agenttype
- Hva som er "out of scope"
- Hva som er roadmap/preview

## E. Mangler konkrete "do/don't"-eksempler
Opptaket er sterkt når det viser dårlige og forbedrede formuleringer (topic-navn, beskrivelser, vage ord som "usually/sometimes").

**Forslag:** Legg inn minst én slide med før/etter-eksempler:
- Dårlig: generisk topic-navn
- Bedre: handling + kontekst + avgrensning
- Dårlig: vage instrukser
- Bedre: deterministiske regler (always/never/only)

## F. Mangler eksplisitt "begrensninger"-slide
I Q&A kommer viktige avgrensninger: ikke alt analyseres (f.eks. tredjepartsverktøy, enkelte A2A-scenarier), og noen API-er er preview/beta.

**Forslag:** Legg inn en egen "Kjent begrensning"-slide som bygger tillit:
- Hva verktøyet ikke dekker ennå
- Hva som krever høyere rettigheter
- Hva som er preview/beta

## G. Mangler tydelig ALM/CI-CD-vinkel
Q&A viser sterk interesse for pipeline-integrasjon og "quality gates".

**Forslag:** Legg inn en slide med anbefalt modenhetsreise:
- Nivå 1: manuell review
- Nivå 2: periodisk review i team
- Nivå 3: quality gate i pipeline (når støtte er klar)

## H. Mangler call-to-action for partnerprogram
Opptaket avslutter med konkret nominasjonsløp (hvilke agenter, krav, kontakt, forventet samarbeid).

**Forslag:** Legg inn en siste "Neste steg"-slide:
- Hvem bør nominere agent
- Hvilke data som må være klare
- Hva partner får tilbake (analyse + konsultasjon)

## 2) Gap i dramaturgi (leveranseform)

- **For lite eksplisitt spørsmålsstyring:** Opptaket lykkes med stoppunkter for spørsmål underveis.
  **Tiltak:** Planlegg faste Q&A-vinduer i agendaen.
- **For lite evidens i plenum:** Opptaket viser score og konkrete funn live.
  **Tiltak:** Vis minst ett "før" og ett "etter" resultat med score-endring.
- **For lite rolleforankring:** Opptaket snakker både til maker, admin og partnerleder.
  **Tiltak:** Merk anbefalinger med "for maker/admin/arkitekt".

## 3) Foreslåtte ekstra slides (minimum)

1. **Kvalitetsutfordringen i én slide** (problem/løsning/verdi)
2. **Review-flyt i 5 steg**
3. **Score-tolkning og release-gate**
4. **Copilot Studio vs M365 deklarativ agent**
5. **Begrensninger og roadmap**
6. **ALM-integrasjon (nå/neste/senere)**
7. **Call-to-action / nominasjon**

## 4) Kort oppsummering

Foredraget ditt dekker governance godt, men kan bli vesentlig sterkere som "enablement-foredrag" hvis du legger til:
- tydeligere operativ review-prosess,
- eksplisitte kvalitetsgrenser,
- konkrete før/etter-eksempler,
- avgrensninger + roadmap,
- og en veldig tydelig handlingsplan for publikum etter sesjonen.
