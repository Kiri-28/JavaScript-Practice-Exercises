/* Function `findDaysInMonth()` finds the number of days in a given month of a year.

   1. If month is outside the range of 1 and 12 print “Invalid month”.
   2. If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
   3. Else if month is equal to 4, 6, 9 or 11 print “30 days”.
   4. Else print “31 days”. */

function isLeapYear(year) {
  return (((year % 4 === 0) && (year % 100 === 0)) || (year % 400 === 0));
}

function findDaysInMonth(month, year) {
  if (month < 1 || month > 12) {
    console.log('Invalid month');
  } else if (month === 2) {
    if (isLeapYear(year)) {
      console.log('The month has 29 days');
    } else {
      console.log('The month has 28 days');
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log('The month has 30 days');
  } else {
    console.log('The month has 31 days');
  }
}

findDaysInMonth(2, 1996);
