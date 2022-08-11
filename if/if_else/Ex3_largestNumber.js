/* Function `findLargest()` finds the largest between two numbers by using “>” and “=” operator in JavaScript.
    1. Print num1 is the largest if num1>num2.
    2. Print num2 is the largest if num1<num2.
    3. Else print num1 and num2 are equal when num1==num2. */

//Write the function that evaluates the numbers
function findLargestOfTwo(num1, num2) {
    // Validate the parameters through an if and isNaN function
    if(isNaN(num1) || isNaN(num2)) {
        console.log("One of the parameters is not a number.");
    }

    // Number evaluation through ifs and elses
    if(num1 > num2) {
        console.log(num1 + " is the largest number.");
    } else if(num1 < num2) {
        console.log(num2 + " is the largest number.");
    } else {
        console.log(num1 + " and " + num2 + " are equal numbers.");
    }
}

findLargestOfTwo(undefined, null);