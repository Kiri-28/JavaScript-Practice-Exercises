/* Function `findLargest()` finds the largest of three numbers by using “>” and “&&” operator in JavaScript.
    1. Print num1 is the largest if num1>num2 and num1>num3.
    2. Print num2 is the largest if num2<num3.
    3. Else print num3. */

function findLargestNumber(num1, num2, num3) {
    //Parameter validation
    if( isNaN(num1 ) || isNaN(num2) || isNaN(num3)) {
        console.log("One or more of the parameters are not numbers.");
    }

    //Number evaluation
    if(num1 === num2 && num2 === num3) {
        console.log("All three numbers are equal.");
    } else if(num1 > num2 && num1 > num3) {
        console.log(num1 + " is the largest number.");
    } else if(num2 > num1 && num2 > num3) {
        console.log(num2 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
}

findLargestNumber(-0, null, undefined);