/* cvičení 1 - realitka
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
Změnte stav inzerátu z 'free' na 'taken'.
*/
const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

document.body.innerHTML += "<p>Dispozice: " + apartment.disposition + "</p>"
document.body.innerHTML += "<p>Čistý pronájem: " + apartment.price.rent + " Kč</p>"
document.body.innerHTML += "<p>Plocha: " + apartment.area.floorage + apartment.area.units + "</p>"
  
const city = apartment.city
const district = apartment.district

document.body.innerHTML += "<p>Město: " + city + "</p>"
document.body.innerHTML += "<p>Městská část: " + district + "</p>"

apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status + "</p>"

/* cvičení 2 - knihovna
V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.
*/
const kniha = {
    nazev: "Harry Potter",
    autor: "J. K. Rowling",
    pocet_stran: 362,
    kapitoly: {
        kapitola_1: "Kapitola 1",
        kapitola_2: "Kapitola 2",
        kapitola_3: "Kapitola 3",
    },
    hodnoceni: 5,
    vydavatelstvi: "Albatros",
}

/* cvičení 3 - očkování
Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
*/
const jmeno = prompt("Zadej jmeno")
const vek = Number(prompt("Zadej vek"))

document.body.innerHTML += "<p>" + jmeno + ", věk: " + vek + "</p>"

const person = {
    name: prompt("Zadej jmeno"),
    age: prompt("Zadej vek"),
    language: window.navigator.language
}

document.body.innerHTML += "<p>" + person.name + ", věk: " + person.age + ", jazyk: " + person.language + "</p>"