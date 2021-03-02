/************************************************
 * Write a functionn min that takes two arguments 
 * and returns their minimum.
 * 
 */

// En lösning med en if-sats
function min1(a, b) {
  if (a < b) return a;
  return b;
}
console.log(min1(5, 10));

// En lösning med en ternary operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function min2(a, b) {
  return a < b ? a : b;
}
console.log(min2(5, 10));


// Använd standard biblioteket!
function min3(a, b) {
  return Math.min(a, b);
}
console.log(min3(5, 10));


// En generell lösning som använder objektet arguments
// Credit: Kevin Selbekk
function min(){
  const numbers = [];
  for (let i = 0; i < arguments.length; i++) {
      numbers.push(arguments[i]);
  }
  let a = numbers.sort((function(a, b){return a - b}));
  return a[0];
}
console.log(min(5,6,-220,2,-111));



