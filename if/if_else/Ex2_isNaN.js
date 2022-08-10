/**
 * Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function.
 * 1. Print "Variable is not a number" if isNaN() returns true.
 * 2. Else print "Variable is a number
 */
function isNumber(value) {
    const result = isNaN(value) ? 'Variable is not a number' : 'Variable is a number';
    console.log(result);
    return result;
}

const testValue = null;
isNumber(testValue);