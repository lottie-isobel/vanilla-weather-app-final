let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDate = document.querySelector(".day-time");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let conditionsElement = document.querySelector("#conditions");
  conditionsElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response);
}

let apiKey = "58a6775f97527351bf6c6966e209be39";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bracknell&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
