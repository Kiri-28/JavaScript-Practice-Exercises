/**
 * Write a "isEvenOrOdd" function that checks if the number is even or odd by using "%".
 * Print "Number is even" if its divisible by 2 or "Number is odd" if it isn't.
 */
function isEvenOrOdd(number) {
    // Check it argument it's a number
    if (typeof +number !== 'number') throw new Error("Argument data it's not of correct type. Should be a number");

    // Check if number is even or odd and pupulate reuslt message to log and return
    const result = (number % 2 === 0) ? 'Number is even' : 'Number is odd';
    console.log(result);
    return result;
}

const number = 4;
isEvenOrOdd(number);