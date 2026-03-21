document.getElementById("lastModified").innerHTML = document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

const temperature = 63;
const conditions = "cloudy";
const wind = 3;
let chill = temperature;

document.getElementById("temp").innerHTML = temperature;
document.getElementById("conditions").innerHTML = conditions;
document.getElementById("wind").innerHTML = wind;

function calculateWindChill(temp, wind) {
    return (temp <= 50 && wind > 3) ? (35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16).toFixed() + "°F" : "NA";
}

document.getElementById("chill").innerHTML = calculateWindChill(temperature, wind);