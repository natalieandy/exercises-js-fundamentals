/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

 // Referenced: https://codeburst.io/how-to-find-the-longest-word-in-a-string-using-javascript-2fb817f78eed

function longestWord(string) {
  let stringArray = string.split(" ");
  let longestWord = stringArray.reduce((a, b) => {
    if(b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  return longestWord;
  // This is your job. :)
}

if (require.main === module) {
  console.log(longestWord('Hello world how are you!'));
  console.log(longestWord('Coding is c00l'));
  console.log(longestWord('I hope this works'));
  console.log(longestWord('Listening to music while coding is v relaxing'));



  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
