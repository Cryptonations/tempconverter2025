function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function celsiusToKelvin(c) {
  return c + 273.15;
}

function kelvinToCelsius(k) {
  return k - 273.15;
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius
};
