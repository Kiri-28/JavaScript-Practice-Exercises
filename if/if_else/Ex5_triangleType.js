/* Function `findTriangleType()` finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.

   1. Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
   2. Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
   3. Else “Scalene triangle.” since values of all sides are unequal. */

function findTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log('The triangle is equilateral.');
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log('The triangle is isosceles.');
  } else {
    console.log('The triangle is scalene.');
  }
}

findTriangleType(10, 20, 30);
