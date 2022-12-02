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
