/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// https://api.openweathermap.org/data/2.5/weather?q=boston&appid=70ec107fb26f74a85b2a65bf25960bab&units=imperial\n\nconst cityInputElement = document.getElementById('city-input');\nconst unitsSelectElement = document.getElementById('unit-select');\nconst searchBtn = document.getElementById('search-btn');\n\nfunction getRawUserInput() {\n  const userInput = {};\n  userInput.city = cityInputElement.value;\n  userInput.units = unitsSelectElement.value;\n  return userInput;\n}\n\nfunction cleanUserInput(userInput) {\n  const cleanedUserInput = {};\n  if (!userInput.city) {\n    cleanedUserInput.city = 'boston';\n  } else {\n    cleanedUserInput.city = userInput.city;\n  }\n  if (userInput.units === 'fahrenheit') {\n    cleanedUserInput.units = 'imperial';\n  } else if (userInput.units === 'celsius') {\n    cleanedUserInput.units = 'metric';\n  }\n  return cleanedUserInput;\n}\n\nfunction getCleanedUserInput() {\n  const rawUserInput = getRawUserInput();\n  const cleanedUserInput = cleanUserInput(rawUserInput);\n  return cleanedUserInput;\n}\n\nfunction parseWeatherData(json) {\n  const weatherData = {};\n  weatherData.weatherDescription = json.weather[0].description;\n  weatherData.temp = json.main.temp;\n  weatherData.feelsLike = json.main.feels_like;\n  weatherData.tempMin = json.main.temp_min;\n  weatherData.tempMax = json.main.temp_max;\n  weatherData.humidity = json.main.humidity;\n  weatherData.cloudPercent = json.clouds.all;\n  return weatherData;\n}\n\nfunction makeRequest(userInput) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.city}&appid=70ec107fb26f74a85b2a65bf25960bab&units=${userInput.units}`;\n  fetch(url)\n    .then((response) => response.json())\n    .then((json) => console.log(parseWeatherData(json)))\n    .catch((error) => console.log('Error:', error));\n}\n\nfunction getWeatherData() {\n  const cleanedUserInput = getCleanedUserInput();\n  makeRequest(cleanedUserInput);\n}\n\nsearchBtn.addEventListener('click', getWeatherData);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;