// Compare the 3 arrays and find common elements
let values1 = ['Apple', 1, false];
let values2 = ['Mars', 2, true];
let values3 = ['Mars', 9, 'Apple'];

// Create a function that prints the repeated items
function showCommonItems(array1, array2, array3) {
    // Iterate over the first array, and for each item check if its repeated in the other two
    for (let array1Index = 0; array1Index < array1.length; array1Index++) {
        const elem1 = array1[array1Index];

        for (let arrayIndex = 0; arrayIndex < array2.length; arrayIndex++) {
            const elem2 = array2[arrayIndex];
            const elem3 = array3[arrayIndex];

            // Check if element of 1st array is inside 2nd or 3rd arrays
            if (elem1 === elem2) {
                console.log(`"${elem1}" coincide between 1st and 2nd arrays`);
            } else if (elem1 === elem3) {
                console.log(`"${elem1}" coincide between 1st and 3rd arrays`);
            }

        }
        // Check if the elements of 2nd and 3rd coincide
        if (array2[array1Index] === array3[array1Index]) {
            console.log(`"${array2[array1Index]}" coincide between 2nd and 3rd arrays`);
        }

    }
}

showCommonItems(values1, values2, values3);
