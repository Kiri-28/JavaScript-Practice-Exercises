/* Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function.
1. Print "Variable is not a number" if isNaN() returns true.
2. Else print "Variable is a number" */

// Declare a "input" variable in which we define the items we want to evaluate
let input = 2;

// Create a function that checks if "input" is a numer or not
function isValidNumber(input) {
    //No lets do an if: if the isNaN() function returns true, then console.log "is not a number"
    if (isNaN(input)) {
        console.log(input + " is not a number");
    } else {
        console.log(input + " is a number");
    }
}

input = "lol";
isValidNumber("lol");