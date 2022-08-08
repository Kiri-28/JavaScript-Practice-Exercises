// Compare the two arrays and find common food if any
let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

// Create a function that console.logs the repeated items
function showCommonFood(array1, array2) {
    // Iterate over the first array and for each element iterate over the second array searching for a coincidence
    for(let array1Index = 0; array1Index < array1.length; array1Index++) {
        for(let array2Index = 0; array2Index < array2.length; array2Index++) {
            // Write an if that checks if there are coincident items, and if there are, print that item
            if(array1[array1Index] === array2[array2Index]) {
                console.log(array1[array1Index]);
            }   
        }
    } 
}

showCommonFood(food1, food2);