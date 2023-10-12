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

