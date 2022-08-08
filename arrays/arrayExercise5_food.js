// Compare the two arrays and find common food if any
let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

function displayIfEqual(array1, array2) {
    let hasCoincidences = false;

    array1.forEach((food1) => {
        if (array2.findIndex((food2) => food2 === food1) >= 0) {
            console.log(food1);
            hasCoincidences = true
        }
    });

    return hasCoincidences
}

const result = displayIfEqual(food1, food2);
console.log(result);