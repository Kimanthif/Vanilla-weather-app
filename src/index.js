function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityELement = document.querySelector("#city");
  let descriptionELement = document.querySelector("#description");
  let humidityELement = document.querySelector("#humidity");
  let windSpeedELement = document.querySelector("#wind-speed");
  let timeELement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityELement.innerHTML = response.data.city;

  timeELement.innerHTML = formatDate(date);
  descriptionELement.innerHTML = response.data.condition.description;
  humidityELement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedELement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "79edf27bf64da7dfce0odf4fat32a847";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Nairobi");
