// Loop a triangle using a while loop

// Declare a variable that will build up the triangle
let hashtag = "#";

function printTriangle() {
    while(hashtag.length < 7) {
        console.log(hashtag);
        hashtag = hashtag + "#"
    }
}

printTriangle();