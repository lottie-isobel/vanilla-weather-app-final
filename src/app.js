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
  let temperatureElement = document.querySelector(".temp");
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  celciusTemperature = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = celciusTemperature;
  conditionsElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute("src", response.data.condition.icon_url);
}

function search(city) {
  let apiKey = "4f6e636etc17733b801df4o7b14ba35b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFarenheightTemperature(event) {
  event.preventDefault();
  celciusLink.classList.remove("active");
  farenheightLink.classList.add("active");
  let temperatureElement = document.querySelector(".temp");
  let farenheightTemperature = Math.round((celciusTemperature * 9) / 5 + 32);
  temperatureElement.innerHTML = farenheightTemperature;
}

function displayCelciusTemperature(event) {
  event.preventDefault();
  farenheightLink.classList.remove("active");
  celciusLink.classList.add("active");
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = celciusTemperature;
}

let celciusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let farenheightLink = document.querySelector("#farenheight-link");
farenheightLink.addEventListener("click", displayFarenheightTemperature);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelciusTemperature);

search("London");
