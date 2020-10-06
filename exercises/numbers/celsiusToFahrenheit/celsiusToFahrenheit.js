/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */

 // Why will it return a boolean? Isn't it returning a number ?^^^

function celsiusToFahrenheit(temp) {
  return temp * 9/5 + 32
  // This is your job. :).
}

if (require.main === module) {

  console.log('Running sanity checks for celsiusToFahrenheit:');

  console.log(celsiusToFahrenheit(5));
  console.log(celsiusToFahrenheit(9));
  console.log(celsiusToFahrenheit(35));
  console.log(celsiusToFahrenheit(8));

  // Your sanity checks go here.
}

module.exports = celsiusToFahrenheit;
