// cvičení 1
const jmeno = prompt("Zadej jmeno")
const vek = Number(prompt("Zadej vek"))

document.body.innerHTML += "<p>" + jmeno + ", věk: " + vek + "</p>"

// cvičení 2
const hodinova_mzda = Number(prompt("Zadej hodinovou mzdu")) // 500,-

document.body.innerHTML += "<p>Vaše hrubá mzda: " + hodinova_mzda * 8 * 21 + " Kč</p>"

const hodinova_sazba = Number(prompt("Zadej hodinovou sazbu")) // 500,-
const pocet_hodin = Number(prompt("Zadej pocet hodin za den")) // 500,-
const pocet_dni = Number(prompt("Zadej pocet dni v mesici")) // 500,-

document.body.innerHTML += "<p>Vaše hrubá mzda: " + hodinova_sazba * pocet_hodin * pocet_dni + " Kč</p>"