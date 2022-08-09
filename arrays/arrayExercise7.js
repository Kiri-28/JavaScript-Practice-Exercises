// For each item in this array console.log the letters in each item
let furniture = ['Table', 'Chairs', 'Couch'];

// Create a function that prints the letters of every item
function printLetters(array) {
    // Write a for loop that iterates through the array
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        const word = array[arrayIndex];
        // Log the word you want to spell later
        // console.log(word);

        // Write a for loop that iterates through each word
        for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
            // Print each letter
            console.log(word[letterIndex]);
        }
    }
}

printLetters(furniture);