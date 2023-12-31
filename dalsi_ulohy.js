/* cvičení 1 - formátovač data
Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok a vypíše do stránky datum v hezkém formátu.

Založte nový JavaScriptový program a v něm si pomocí funkce prompt zeptejte uživatele na den, měsíc a rok.
Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu.
28. 4. 2021
Vypisujte datum do webové stránky jako následující HTML kód.
<p class="date">
  <span class="day">28</span>. <span class="month">4</span>.
  <span class="year">2021</span>
</p>
Bonus
Zkuste tyto prvky lehce nastylovat pomocí CSS, aby vypadaly hezky.
*/
const den = prompt("Den")
const mesic = prompt("Měsíc")
const rok = prompt("Rok")

document.body.innerHTML += "<p>" + den + ". " + mesic + ". " + rok + "</p>";
document.body.innerHTML += "<p class='date'; style='color:blue'><span class='day'>" + den + "</span>. <span class='month'>" + mesic + "</span>. <span class='year'>" + rok + "</span></p>";

/* cvičení 2 - Fahrenheit vs. Celsius
Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.
*/
const f = prompt("Stupně Fahrenheit")

document.body.innerHTML += "<p>" + Math.round((5 * (f - 32)) / 9) + " °C</p>"

/* cvičení 3 - letenka
Proveďte následující:

Vypište do stránky název startovní a cílové země.
Uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.
Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.
Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.
Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal.
*/
const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

document.body.innerHTML += "<p>Startovní země: " + flight.countryFrom.name + "</p>"
document.body.innerHTML += "<p>Cílová země: " + flight.countryTo.name + "</p>"

const baglimit = flight.baglimit

document.body.innerHTML += "<p>Maximální rozměr příručního zavazadla: " + flight.baglimit.hand_width + "x" + flight.baglimit.hand_height + " x" + flight.baglimit.hand_length + " cm</p>"
document.body.innerHTML += "<p>Maximální rozměr odbaveného zavazadla: " + flight.baglimit.hold_width + "x" + flight.baglimit.hold_height + " x" + flight.baglimit.hold_length + " cm</p>"

document.body.innerHTML += "<p>" + Math.ceil(flight.bags_price[2] * flight.conversion.EUR) + " Kč</p>"


/* cvičení 4 - velikost okna
Pohrajte si s vlastnostmi window.innerWidth a window.innerHeight a zjistěte, jak velké je okno stránky. Vypište tyto hodnoty do stránky a zkuste stránky několikrát změnšít a zvětšit, Pozor, že je vždy potřeba udělat refresh stránky, aby se hodnoty změnily.
Vypište do stránky také vlastnosti window.outerWidth a window.outerHeight. Opět si pohrajte s velíkostí okna prohlížeče a pozorujte, jak se tyto hodnoty mění.
*/
const siteWidth = window.innerWidth;
const siteHeight = window.innerHeight;

const browserWidth = window.outerWidth;
const browserHeight = window.outerHeight;

document.body.innerHTML += "<p>" + siteWidth + "x" + siteHeight + "</p>"
document.body.innerHTML += "<p>" + browserWidth + "x" + browserHeight + "</p>"