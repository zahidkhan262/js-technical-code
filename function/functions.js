// ? There are four ways of writing a function in JavaScript:
// Anonymous Function
// IIFE Function (immediately invoke function expression)
// Function Expression.
// Arrow Function.

// todo how to declare function
//?1 Function declaration
// function add(a, b) {
// 	console.log(a + b);
// }

// // Calling a function
// add(2, 3);

// todo IIFE function
// (function(){
//     console.log("invoke")
// })()

// todo expression function
// Function Expression
// const add = function(a, b) {
// 	console.log(a+b);
// }

// // Calling function
// add(2, 3);

// todo arrow function
// Single line of code
// let add = (a, b) => a + b;

// console.log(add(3, 2));


// ?what is pure function
// A Pure Function is a function (a block of code)
//  that always returns the same result if the same arguments are passed

// this is pure fucntion 
//   =============== pure function ======================  //

function CalculateGST(productPrice) {
    return productPrice * 5;
}
console.log(CalculateGST(20))


//   ===============not pure======================  //
// not pure function eg
// It is not a pure function as the output is dependent on an external variable “tax”. 
var tax = 20;
function calculateGST(tax, productPrice) {
    return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(tax, 2))

// ============custom pow method ===================

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log( pow(5, 3));
output====> //125

