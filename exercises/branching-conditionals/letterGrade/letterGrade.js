/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B-, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * // Looks like that first B+ should be a B-
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  if(percentGrade >= 97 && percentGrade <= 100) {
    return 'A+';
  } else if(percentGrade <= 93 && percentGrade >= 96) {
    return 'A';
  } else if(percentGrade <= 92 && percentGrade >= 90) {
    return 'A-';
  } else if(percentGrade <= 87 && percentGrade >= 89) {
    return 'B+';
  } else if(percentGrade <= 83 && percentGrade >= 86) {
    return 'B';
  } else if(percentGrade <= 82 && percentGrade >= 80) {
    return 'B-';
  } else if(percentGrade <= 77 && percentGrade >= 79) {
    return 'C+';
  } else if(percentGrade <= 73 && percentGrade >= 76) {
    return 'C';
  } else if(percentGrade <= 72 && percentGrade >= 70) {
    return 'C-';
  } else if(percentGrade <= 67 && percentGrade >= 69) {
    return 'D+';
  } else if(percentGrade <= 63 && percentGrade >= 66) {
    return 'D';
  } else if(percentGrade <= 62 && percentGrade >= 60) {
    return 'D-';
  } else if(percentGrade <= 59) {
    return 'F';
}
}
  // This is your job. :)

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  console.log(letterGrade(72));
  console.log(letterGrade(36));
  console.log(letterGrade(99));


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

// Worked on this but it's taking too much time for me to finish rn. Made some progress but yeah I need to move on.
module.exports = letterGrade;
