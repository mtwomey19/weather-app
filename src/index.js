import extractWeatherData from './dom-mgmt';

const cityInputElement = document.getElementById('city-input');
const unitsSelectElement = document.getElementById('unit-select');
const searchBtn = document.getElementById('search-btn');
const dataTableDiv = document.getElementById('data-table');

function getRawUserInput() {
  const userInput = {};
  userInput.city = cityInputElement.value;
  userInput.units = unitsSelectElement.value;
  return userInput;
}

function cleanUserInput(userInput) {
  const cleanedUserInput = {};
  if (!userInput.city) {
    cleanedUserInput.city = 'boston';
  } else {
    cleanedUserInput.city = userInput.city;
  }
  if (userInput.units === 'fahrenheit') {
    cleanedUserInput.units = 'imperial';
  } else if (userInput.units === 'celsius') {
    cleanedUserInput.units = 'metric';
  }
  return cleanedUserInput;
}

function getCleanedUserInput() {
  const rawUserInput = getRawUserInput();
  const cleanedUserInput = cleanUserInput(rawUserInput);
  return cleanedUserInput;
}

function parseWeatherData(json) {
  const weatherData = {};
  weatherData.weatherDescription = json.weather[0].description;
  weatherData.temp = json.main.temp;
  weatherData.feelsLike = json.main.feels_like;
  weatherData.tempMin = json.main.temp_min;
  weatherData.tempMax = json.main.temp_max;
  weatherData.humidity = json.main.humidity;
  weatherData.cloudPercent = json.clouds.all;
  return weatherData;
}

function makeRequest(userInput) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.city}&appid=70ec107fb26f74a85b2a65bf25960bab&units=${userInput.units}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const weatherData = parseWeatherData(json);
      const table = extractWeatherData(weatherData);
      dataTableDiv.appendChild(table);
    })
    .catch((error) => console.log('Error:', error));
}

function getWeatherData() {
  const cleanedUserInput = getCleanedUserInput();
  makeRequest(cleanedUserInput);
}

searchBtn.addEventListener('click', getWeatherData);
