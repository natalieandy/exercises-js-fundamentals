/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
    let stringArray = string.split(" ");
    let shortestWord = stringArray.reduce((a, b) => {
      if(b.length < a.length) {
        return b;
      } else {
        return a;
      }
    });
    return shortestWord;
  // This is your job. :)
}

if (require.main === module) {
  console.log(shortestWord('Running sanity checks for shortestWord:'));
  console.log(shortestWord('10 more fundamentals to go until I have reached my goal for today'));
  console.log(shortestWord('She sells sea shells by the sea shore'));
  console.log(shortestWord('This City by Sam Fischer is a good but sad song'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;
