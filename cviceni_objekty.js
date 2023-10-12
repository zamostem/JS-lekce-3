// cvičení 1 - realitka
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

// cvičení 2 - knihovna
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

// cvičení 3 - očkování
const jmeno = prompt("Zadej jmeno")
const vek = Number(prompt("Zadej vek"))

document.body.innerHTML += "<p>" + jmeno + ", věk: " + vek + "</p>"

const person = {
    name: prompt("Zadej jmeno"),
    age: prompt("Zadej vek"),
    language: window.navigator.language
}

document.body.innerHTML += "<p>" + person.name + ", věk: " + person.age + ", jazyk: " + person.language + "</p>"