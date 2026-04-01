# Forberedelser - Sett opp ditt Atea-miljø for Copilot Studio

**Passer for:** Deltakere som skal bruke Copilot Studio i Atea-tenant  
**Mål:** Du får et eget miljø med Dataverse i Atea og har valgt det i Copilot Studio

## Steg 1 - Sjekk om du allerede har et eget miljø

1. Gå til [Power Apps](https://make.powerapps.com).
2. Se øverst til høyre etter miljøvalg.
3. Åpne listen over tilgjengelige miljøer.
4. Se etter et personlig eller eget miljø, for eksempel et miljø som inneholder navnet ditt.

Hvis du allerede har et egnet miljø i Atea:

- velg det
- gå videre til Steg 3

Hvis du bare ser `Default` eller ønsker å sette opp nytt miljø:

- gå videre til neste steg og opprett et eget miljø

---

## Steg 2 - Opprett ditt eget miljø i PPAC

1. Gå til [Power Platform admin center](https://admin.powerplatform.microsoft.com).
2. Velg **Manage** og deretter **Environments**.

![Åpne PPAC og gå til Manage](../Build-Your-Own-Agent-Copilot-Studio-in-a-Day-main/Images/Lab-4/Exercise1-Task1-1.png)
![Gå til miljøoversikten i PPAC](../Build-Your-Own-Agent-Copilot-Studio-in-a-Day-main/Images/Lab-4/Exercise1-Task1-2.png)

3. Klikk **New** for å opprette et nytt miljø.
4. Fyll inn miljødetaljene:

- **Name**: bruk et tydelig navn, for eksempel `fornavn-copilotstudio-dev`
- **Region**: velg `Europe`
- **Type**: miljøtypen `Developer`
- **Purpose**: valgfritt, for eksempel `Workshop for Copilot Studio`

6. Klikk **Next** og fullfør Dataverse-oppsettet:

- **Language**: bruk ønsket standardspråk
- **Currency**: velg relevant valuta
- **Enable Dynamics 365 apps**: la denne være av hvis workshopen ikke uttrykkelig krever det
- **Deploy sample apps and data**: la denne være av med mindre instruktøren ber dere slå den på

7. Klikk **Save** og vent til miljøet er ferdig provisjonert. Dette kan ta noen minutter.

---

## Steg 3 - Verifiser at miljøet er klart i Power Apps

Når miljøet er opprettet eller valgt:

1. Gå til [Power Apps](https://make.powerapps.com).
2. Åpne miljøvelgeren øverst til høyre.
3. Velg miljøet du nettopp opprettet eller verifiserte.
4. Kontroller at du ikke står i `Default`.

![Miljøvelger i Power Apps](../Build-Your-Own-Agent-Copilot-Studio-in-a-Day-main/Images/Lab-0/Exercise1-Task2-1.png)
![Velg ditt eget miljø i Power Apps](../Build-Your-Own-Agent-Copilot-Studio-in-a-Day-main/Images/Lab-0/Exercise1-Task2-2.png)

Hvis miljøet ikke dukker opp i Copilot Studio senere, er vanligste årsaker:

- miljøet er ikke ferdig provisjonert ennå
- du er logget inn med feil konto
- miljøet mangler Dataverse eller ligger i en region som ikke støttes

---

## Steg 4 - Åpne Copilot Studio i riktig miljø

1. Gå til [Copilot Studio](https://copilotstudio.microsoft.com).
2. Logg inn med samme Atea-konto.
3. Se øverst til høyre etter miljøvelgeren.
4. Velg miljøet du nettopp opprettet eller verifiserte.

Hvis du ser flere miljøer:

- velg ditt eget miljø
- unngå `Default` med mindre instruktøren eksplisitt har bedt deg bruke det

## Tips - Opprett en egen løsning senere

For denne workshopen er det nok at du har et eget miljø.

Hvis du senere vil jobbe mer strukturert med eksport, flytting mellom miljøer eller ALM, kan du opprette en egen solution i miljøet og bruke den som foretrukket løsning.

## Nyttige lenker

- [Power Apps](https://make.powerapps.com)
- [Power Platform admin center](https://admin.powerplatform.microsoft.com)
- [Copilot Studio](https://copilotstudio.microsoft.com)
- [Work with Power Platform environments in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/environments-first-run-experience)
- [Create and manage environments in the Power Platform admin center](https://learn.microsoft.com/power-platform/admin/create-environment)
- [Power Platform environments overview](https://learn.microsoft.com/power-platform/admin/environments-overview)
- [Create and manage solutions in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview)
