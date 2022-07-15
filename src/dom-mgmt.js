function makeTableRow(property, value) {
  const tableRow = document.createElement('tr');
  const dataLabel = document.createElement('th');
  const data = document.createElement('td');
  dataLabel.textContent = property;
  data.textContent = value;
  tableRow.appendChild(dataLabel);
  tableRow.appendChild(data);
  return tableRow;
}

export default function extractWeatherData(weatherData) {
  const table = document.createElement('table');
  const weatherProperties = (Object.keys(weatherData));
  weatherProperties.forEach((property) => {
    const tableRow = makeTableRow(property, weatherData[property]);
    table.appendChild(tableRow);
  });
  return table;
}
