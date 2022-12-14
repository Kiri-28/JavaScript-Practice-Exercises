/* Function `checkLeapYear()` find if the given year is a leap year or not by using %, !=, && and || operators in JavaScript.

    1. If year is divisble by 4 and not divisble by 100 then print “leap year”.
    2. Or if year is divisible by 400 then print “leap year”.
    3. Else print “not a leap year”.  */

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

checkLeapYear(1996);
