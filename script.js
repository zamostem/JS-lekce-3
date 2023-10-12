// prompt() vytvoří vyskakovací okno, zapisujeme do proměnné, jinak se nám hodnota na stránce nezobrazí
const jmeno = prompt("Zadej jmeno", "Jan Novak")
const vek = prompt("Zadej vek")

document.body.innerHTML += "<p>" + jmeno + "</p>"
document.body.innerHTML += "<p>" + vek + "</p>"

const vyplata = Number(prompt("Zadej vyplatu")) // 70000,-
const odmena = Number(prompt("Zadej odmenu")) // 10000,-

document.body.innerHTML += "<p>Výplata: " + vyplata + " Kč</p>"
document.body.innerHTML += "<p>Výplata s odměnou: " + (vyplata + odmena) + " Kč</p>"
document.body.innerHTML += "<p>Test: " + Number("10 000") + "</p>" // NaN = Not a Number, čísla nelze psát s mezerou, mezera je braná jako znak

// objekty
//const adresa = "Opletalova 42, 110 00 Praha"

//const ulice = "Opletalova"
//const cislo_popisne = 42
//const PSC = 11000
//const mesto = "Praha"

const adresa = {
    ulice: "Opletalova",
    cislo_popisne: 42,
    PSC: 11000,
    mesto: "Praha",
}

document.body.innerHTML += "<p>" + adresa.ulice + "</p>"
document.body.innerHTML += "<p>" + adresa.cislo_popisne + "</p>"
document.body.innerHTML += "<p>" + adresa.PSC + "</p>"
document.body.innerHTML += "<p>" + adresa.mesto + "</p>"

adresa.ulice = "Belohorska"

document.body.innerHTML += "<p>" + adresa.ulice + "</p>"


const pizzeria = {
    nazev: "U Žofie",
    hodnoceni: 4.3,
    adresa: {
        ulice: "Belohorska",
        cislo_popisne: 23,
        PSC: "160 00",
        mesto: "Praha",
    },
    nej_pizza: "Hawaii",
}

document.body.innerHTML += "<p>" + pizzeria.nazev + "</p>"
document.body.innerHTML += "<p>" + pizzeria.hodnoceni + "</p>"
document.body.innerHTML += "<p>" + pizzeria.adresa.ulice + "</p>"