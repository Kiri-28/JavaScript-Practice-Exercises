// console.log each item in "myArr" without using a for loop
let myArr = [1, 2, 'One', true];

// Write a function that prints in the console the items of the array
function printArr(array) {
    //We will declare and initialize an "arrIndex" variable with a value of 0
    let arrIndex = 0;
    //Since we can not use a for loop to do it we will write a while loop
    while (arrIndex < array.length) {
        console.log(myArr[arrIndex]);
        arrIndex++;
    }
}

printArr(myArr)