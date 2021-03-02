/**
 * 1. Write a range function that takes two arguments, 
 * start and end, and returns an array containing 
 * all the numbers from start up to (and including) end.
 * console.log(range(1, 10))
 * // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

 // Lösning 1
 // Björn Lindeberg
 let range = (start, end) => {
  let array = [];
  for(let i = start; i <= end; i++)
      array[i-start] = i;
  return array;
}
const testArr = range(1,10);
console.log(testArr);


// Lösning 2: Bokens lösning
function range2(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) 
    array.push(i);
  return array;
}
console.log(range2(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
* 2. Write a sum function that takes an array of numbers 
* and returns the sum of these numbers.
* console.log(sum(range(1, 10))); // → 55
*/

// Lösning 1
// Kristoffer
const sum = (arr) => {
  let count = 0;
  arr.forEach(num => count += num);
  return count;
}
console.log(sum([1,4,5]));
console.log(sum(testArr));
console.log(sum(range(1,10)));



// Lösning 2 : Bokens lösning
function sum2(array) {
  let total = 0;
  for (let value of array) total += value;
  return total;
}

console.log(sum2(range2(1, 10))); // → 55
