const api = {
    key: "0d3d43ff64c667b6eb270ea5a34612b5",
    url: "https://api.openweathermap.org/data/2.5/weather"
}
const weather = document.getElementById("current");
const outside = document.getElementById("outside");
const wind = document.getElementById("wind");
const weatherIcon = document.querySelector("#weather-icon");

async function getWeather(city){
    try{
        const response = await fetch(`${api.url}?q=${city}&appid=${api.key}&lang=en`)
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
    }   
    catch(error){
        console.log(err);
    }
}
function displayResults(data){
    weather.innerHTML = `${toCelsius(data.main.temp)}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description
    outside.innerHTML = `${desc}`;
    wind.innerHTML = data.wind.speed;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    
}

getWeather("Turin")

function toCelsius(kelvin){
    return Math.round(kelvin - 273.15);
}