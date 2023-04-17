## biblioteka

Sukurkite React.js puslapį, kuris suteiks vartotojams galimybę registruotis ir prisijungti naudojantis Firebase autentifikacija. Puslapis turėtų būti skirtas knygų valdymui ir turi leisti vartotojams kurti, peržiūrėti ir trinti knygas. Štai keletas svarbių žingsnių, kuriuos turėtumėte atlikti:

1. Sukurkite naują projektą naudojant vite.
2. Sukonfigūruokite Firebase projektą ir įtraukite reikiamas Firebase bibliotekas į savo projektą.
3. Sukurkite Firebase autentifikacijos komponentus, kurie leistų vartotojams registruotis ir prisijungti. Šiems komponentams galite naudoti firebase/auth biblioteką.
4. Sukurkite duomenų struktūrą savo Firestore duomenų bazėje, kurioje bus laikomos knygų informacijos duomenys. Jūs galite naudoti firebase/firestore biblioteką tam, kad galėtumėte komunikuoti su savo Firestore duomenų baze.
5. Sukurkite React.js komponentus, kurie leistų vartotojams peržiūrėti esamas knygas, kurti naujas knygas ir trinti egzistuojančias knygas.
6. Sukurkite puslapio maršrutizatorių, kad vartotojai galėtų naviguoti tarp skirtingų puslapių, tokie kaip vartotojo prisijungimo puslapis ir knygų valdymo puslapis.

## Knygos objektas:

knygos objektas tures šiuos laukus:

title: knygos pavadinimas

author: knygos autorius

description: trumpas knygos aprašymas

publishedYear: knygos išleidimo metai

coverImageURL: nuotraukos URL adresas, kuri rodo knygos viršelį

price: knygos kaina

quantity: knygos kiekis, kuris yra sandėlyje

```{
  title: 'Knygos pavadinimas',
  author: 'Autorius',
  description: 'Trumpas knygos aprašymas',
  publishedYear: 2022,
  coverImageURL: 'Nuotraukos URL adresas',
  price: 24.99,
  quantity: 10
}
```
