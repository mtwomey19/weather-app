/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-mgmt.js":
/*!*************************!*\
  !*** ./src/dom-mgmt.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ extractWeatherData)\n/* harmony export */ });\nfunction makeTableRow(property, value) {\n  const tableRow = document.createElement('tr');\n  const dataLabel = document.createElement('th');\n  const data = document.createElement('td');\n  dataLabel.textContent = property;\n  data.textContent = value;\n  tableRow.appendChild(dataLabel);\n  tableRow.appendChild(data);\n  return tableRow;\n}\n\nfunction extractWeatherData(weatherData) {\n  const table = document.createElement('table');\n  const weatherProperties = (Object.keys(weatherData));\n  weatherProperties.forEach((property) => {\n    const tableRow = makeTableRow(property, weatherData[property]);\n    table.appendChild(tableRow);\n  });\n  return table;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dom-mgmt.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_mgmt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-mgmt */ \"./src/dom-mgmt.js\");\n\n\nconst cityInputElement = document.getElementById('city-input');\nconst unitsSelectElement = document.getElementById('unit-select');\nconst searchBtn = document.getElementById('search-btn');\nconst dataTableDiv = document.getElementById('data-table');\n\nfunction getRawUserInput() {\n  const userInput = {};\n  userInput.city = cityInputElement.value;\n  userInput.units = unitsSelectElement.value;\n  return userInput;\n}\n\nfunction cleanUserInput(userInput) {\n  const cleanedUserInput = {};\n  if (!userInput.city) {\n    cleanedUserInput.city = 'boston';\n  } else {\n    cleanedUserInput.city = userInput.city;\n  }\n  if (userInput.units === 'fahrenheit') {\n    cleanedUserInput.units = 'imperial';\n  } else if (userInput.units === 'celsius') {\n    cleanedUserInput.units = 'metric';\n  }\n  return cleanedUserInput;\n}\n\nfunction getCleanedUserInput() {\n  const rawUserInput = getRawUserInput();\n  const cleanedUserInput = cleanUserInput(rawUserInput);\n  return cleanedUserInput;\n}\n\nfunction parseWeatherData(json) {\n  const weatherData = {};\n  weatherData.weatherDescription = json.weather[0].description;\n  weatherData.temp = json.main.temp;\n  weatherData.feelsLike = json.main.feels_like;\n  weatherData.tempMin = json.main.temp_min;\n  weatherData.tempMax = json.main.temp_max;\n  weatherData.humidity = json.main.humidity;\n  weatherData.cloudPercent = json.clouds.all;\n  return weatherData;\n}\n\nfunction makeRequest(userInput) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.city}&appid=70ec107fb26f74a85b2a65bf25960bab&units=${userInput.units}`;\n  fetch(url)\n    .then((response) => response.json())\n    .then((json) => {\n      const weatherData = parseWeatherData(json);\n      const table = (0,_dom_mgmt__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData);\n      console.log(table);\n      dataTableDiv.appendChild(table);\n    });\n  // .catch((error) => console.log('Error:', error));\n}\n\nfunction getWeatherData() {\n  const cleanedUserInput = getCleanedUserInput();\n  makeRequest(cleanedUserInput);\n}\n\nsearchBtn.addEventListener('click', getWeatherData);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;