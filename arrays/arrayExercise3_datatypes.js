/* 1. Declare and initialize an array called "wowDataTypes".
   2. The array must have 5 different data types (NOT objects).
   3. Iterate over the array and console.log each item on the array + its index and data type in the array.
*/

let wowDataTypes = [2, "chocolate", true, undefined, null];

//Create a function that prints all the information in the console
function showArrayinfo(array) {
    //create a for loop that goes through each position in the array and prints the info
    for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        //First print the position of each item, then each item and finally the data types
        console.log(arrayIndex, array[arrayIndex], typeof array[arrayIndex]);
    }
}

showArrayinfo(wowDataTypes);