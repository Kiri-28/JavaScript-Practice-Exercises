/* Exercise:
 * 1. Declare and initialize an array called "Planets" with 5 string values.
 * 2. console.log each item in the array
 * 3. Also console.log the index in each iteration
 */

// Declare an initialize the "planets" array
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

/**
 * Create a function that contains a for loop that travels through each position in the array and console.logs 
 * each name and array position
 * @param {*} array `strings` a list of elements
 */
function showArrayInfo(array) {
  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    // Declare and initialize a variable that will show the position of an element inside of an array
    displayPosAndName(arrayIndex, array[arrayIndex]);
  }
}

/**
 * Displays in console a position and name
 * @param {*} pos 
 * @param {*} name 
 */
function displayPosAndName(pos, name) {
  console.log(`Position ${pos}: ${name}`);
}

showArrayInfo(planets);