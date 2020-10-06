/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * Referenced: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  // This is your job. :)
}

if (require.main === module) {
  console.log(capitalize('running sanity checks for capitalize:'));
  console.log(capitalize('natalie'));
  console.log(capitalize('Penny'));
  console.log(capitalize('hello'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
