/*
Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
Květoslav Voňavý, věk: 67
*/
const jmeno = prompt("Zadej jmeno")
const vek = Number(prompt("Zadej vek"))

document.body.innerHTML += "<p>" + jmeno + ", věk: " + vek + "</p>"

/*
Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.
*/
const hodinova_mzda = Number(prompt("Zadej hodinovou mzdu")) // 500,-

document.body.innerHTML += "<p>Vaše hrubá mzda: " + (hodinova_mzda * 8 * 21) + " Kč</p>"

const hodinova_sazba = Number(prompt("Zadej hodinovou sazbu")) // 500,-
const pocet_hodin = Number(prompt("Zadej pocet hodin za den")) // 500,-
const pocet_dni = Number(prompt("Zadej pocet dni v mesici")) // 500,-

document.body.innerHTML += "<p>Vaše hrubá mzda: " + (hodinova_sazba * pocet_hodin * pocet_dni) + " Kč</p>";
