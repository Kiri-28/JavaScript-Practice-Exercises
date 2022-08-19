/* Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

   1. Print result of num1+num2 if operation is “add”
   2. Print result of num1-num2 if operation is “subtract”
   3. Print result of num1*num2 if operation is “multiply”
   4. Print result of num1/num2 if operation is “divide”
   5. Print result of num1%num2 if operation is “modulus”
   6. Else print “Invalid operation” */

function evalNumbers(num1, num2, operation) {
  if (operation === 'add') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (operation === 'subtract') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else if (operation === 'multiply') {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  } else if (operation === 'divide') {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  } else if (operation === 'modulus') {
    console.log(`${num1} % ${num2} = ${num1 % num2}`);
  } else {
    console.log('Invalid operation');
  }
}

evalNumbers(4, 2, 'modulus');
