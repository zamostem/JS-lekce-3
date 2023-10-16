// cvičení 1 - formátovač data
const den = prompt("Den")
const mesic = prompt("Měsíc")
const rok = prompt("Rok")

document.body.innerHTML += "<p>" + den + ". " + mesic + ". " + rok + "</p>";
document.body.innerHTML += "<p class='date'; style='color:blue'><span class='day'>" + den + "</span>. <span class='month'>" + mesic + "</span>. <span class='year'>" + rok + "</span></p>";

// cvičení 2 - Fahrenheit vs. Celsius
const f = prompt("Stupně Fahrenheit")

document.body.innerHTML += "<p>" + Math.round((5 * (f - 32)) / 9) + " °C</p>"

// cvičení 3 - letenka
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


// cvičení 4 - velikost okna
const siteWidth = window.innerWidth;
const siteHeight = window.innerHeight;

const browserWidth = window.outerWidth;
const browserHeight = window.outerHeight;

document.body.innerHTML += "<p>" + siteWidth + "x" + siteHeight + "</p>"
document.body.innerHTML += "<p>" + browserWidth + "x" + browserHeight + "</p>"