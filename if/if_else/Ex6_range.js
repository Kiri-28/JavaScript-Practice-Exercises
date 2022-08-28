/* Function `checkInRange()` finds if the given number is within the provided start and end range
  using >=, <= and && operators in JavaScript.

   1. Print “Between the range” if num is between start and end values
   2. Else Print “Outside the range” since num is outside start and end values. */

function checkInRange(num, rangeMin, rangeMax) {
  if (num >= rangeMin && num <= rangeMax) {
    console.log('The number is inside the range');
  } else {
    console.log('The number is outside the range.');
  }
}

checkInRange(-2, -10, 0);
