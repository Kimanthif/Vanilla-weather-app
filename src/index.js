function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityELement = document.querySelector("#city");

  cityELement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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
