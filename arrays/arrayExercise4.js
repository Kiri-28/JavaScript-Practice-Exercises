// Loop over the two arrays and if there are any common courses console.log them
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// Write a function that prints the common courses
function showCommonCourses(array1, array2) {
    //create a loop that goes through the arrays
    for(let arrayIndex = 0; arrayIndex < array1.length; arrayIndex++) {
        //Check if the items coincide
        if(array1[arrayIndex] === array2[arrayIndex]) {
            console.log(array1[arrayIndex]);
        }
    }
}

showCommonCourses(student1Courses, student2Courses);