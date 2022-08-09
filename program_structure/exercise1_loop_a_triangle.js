/* Write a loop that makes seven calls to console.log and outputs a triangle made with "#"
We will use a for loop, there will be an alternate answer in which we use a while loop */

// Write a function that prints the triangle when invoked
function printTriangle() {
    for(let triangle = "#"; triangle.length <= 7; triangle += "#") {
        console.log(triangle);
    }
}

printTriangle();


