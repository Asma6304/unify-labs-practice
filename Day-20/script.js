const btn = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const loading = document.getElementById("loading");

const API_KEY = "YOUR_API_KEY";


btn.addEventListener("click", async () => {

const city = input.value;

if(!city) return;

loading.style.display = "block";
weatherCard.innerHTML = "";

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
);

if(!response.ok){

throw new Error("City not found");

}

const data = await response.json();

loading.style.display = "none";

weatherCard.innerHTML = `

<h2>${data.name}</h2>

<p>🌡 Temperature: ${data.main.temp} °C</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>☁ Condition: ${data.weather[0].main}</p>

`;

}catch(error){

loading.style.display = "none";

weatherCard.innerHTML = `<p>Error: ${error.message}</p>`;

}

});