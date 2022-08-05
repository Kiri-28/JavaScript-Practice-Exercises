/*Exercise:
1. Declare and initialize an array called "Planets" with 5 string values.
2. console.log each item in the array
3. Also console.log the index in each iteration
*/

//Declare an initializa the "planets" array
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];


/*
Create a function that contains a for loop that travels through each position in the array and console.logs each name and array position
*/
function showArrayInfo(array) {
  for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    /*Declare and initialize a variable that will show the position of an element inside of an array */
    let arrayPosition = arrayIndex;
    // Declare and initialize a variable that will show the element inside of an array
    console.log(arrayPosition, array);
  }
}

showArrayInfo(planets);





