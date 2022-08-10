/* Write a "isEvenOrOdd" function that checks if the number is even or odd by using "%".
Print "Number is even" if its divisible by 2 or "Number is odd" if it isn't. */

// Delcare a "Number" variable, that tells the function which number is it going to evaluate
let number = 1;

//Write the function that classifies the numbers
function isEvenOrOdd(number) {
    // Use an if to pritn "Number is even" if the number divoded by two equals 0
    if(number % 2 === 0) {
        console.log(number + " is an even number.");
    // Use an else for the remaining case: that the numbers division by two results in a number that is not 0
    } else {
        console.log(number + " is an odd number.");
    }
}

//Here we can redefine the variable to choose a number we would like to evaklluate by incoking our "isEvenorOdd" function
number = 102;
isEvenOrOdd(number);