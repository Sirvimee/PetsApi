# PetsApi
Rakendus koosneb kahest osast: Backend ja Frontend.
Rakenduse tegemisele kulus kokku 11 tundi. Kõige rohkem võttis arusaamine Liquibase tööpõhimõte, kuna ma polnud sellega ennem kokku puutunud.
Liquibase kohta õppisin siit: https://youtu.be/lf6Mxb9rVng ja siit: https://docs.liquibase.com/concepts/changelogs/sql-format.html <br>

## Backend (kaust: petsApi)
Rakendus on tehtud Java 17 versioonis, Spring Boot 3.0.6 raamistikuga ja on kasutatud Maveni ning Lomboki pluginat.<br>
Andmebaasina on kasutatud H2 andmebaasi ja andmete sisestamiseks on kasutaud Liquibase migreerimise tööriista.

### Käivitamine

1. Ava Idea Intellij ja impordi sisse Maveni projekt
2. Käivita PetsApiApplication

## Frontend (kaust: petsApi-frontend)
Rakendus on tehtud Angular 15.1.6 versioonis ja kasutatud on TypeScript keelt.
Disainis on kasutatud Angular Material komponente ja Bootsrtap 5.3.0.

### Käivitamine

1. Ava kaust petsApi-frontend Visual Studio Codes (või sulle meeldivas IDE-s)
2. Ava terminal ja installi kõik sõltuvused, kasutades käsklust "npm install"
3. Käivita server "ng s -o"
4. Backendiga koos töötamiseks peab server jooksma pordil nr 4200. <br>
Kui sa näed tabelit koos lemmikloomadega, siis see tähendab, et rakendus on edukalt jooksma saadud.
