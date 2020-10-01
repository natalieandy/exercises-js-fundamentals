/**
 * Returns true if the given number is 0 and false otherwise
 *
 * @param {number} num - The input number
 * @returns {boolean} True if num is 0 and false otherwise
 */
function isZero(num) {
  return num === 0;
}
//So from my understanding, the computer only prints what is displayed with console.log, but it references functions for directions?

if (require.main === module) {
//What is the "require" function? And what is the .main property doing?
  console.log('Running sanity checks for isZero:');

  console.log(isZero(0) === true);
  console.log(isZero(1) === false);
  console.log(isZero(-1) === false);
  console.log(isZero(-100.201) === false);
//I understand that the computer is indicating that each of the above statements are true, but why aren't both sides identical? Doesn't === mean that both sides have to be the same in both type and value? When here it looks like isZero(x) is a number and the other side of the equation is a Boolean? What am I missing?
//Kevin shared this article and that's where I'm getting my info: https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
}

module.exports = isZero;
//Not sure what's happening with line 20?
