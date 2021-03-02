/*********************************************
 * Write a function, reverseArray()
 * The function takes an array as argument 
 * and produces a new array that
 * has the same elements in the inverse order.
 * console.log(reverseArray(["A", "B", "C"]));
 * // → ["C", "B", "A"];
 *********************************************/

 // Lösning 1
 // Kristoffer Ström
 const reverseArray = (arr) => {
  let reversedArray = [];
  for(let i = arr.length-1; i >= 0; i--)
      reversedArray.push(arr[i]);

  return reversedArray;
}
console.log(reverseArray(["A", "B", "C"]));


// Lösning 2
// Mikael
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
// Ok men vi måste skapa en helt ny funktion som heter reverseArray

// Första försöket!!!
function reverseArray2(array){
 return array.reverse(); 
 // OBS! Manipulerar originalet!!!
}
const array2 = [1, 2, 3, 4, 5];
console.log(reverseArray2(array2)); // [ 5, 4, 3, 2, 1 ]
console.log(array2); // [ 5, 4, 3, 2, 1 ]

// Andra försöket
function reverseArray3(array) {
  // Kopiera arrayen först
  const newArray = [...array]; 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  return newArray.reverse();
} 

const array3 = [1, 2, 3, 4];
console.log(reverseArray3(array3)); // [ 4, 3, 2, 1 ]
console.log(array3); // [ 1, 2, 3, 4 ]


// Lösning 3: Bokens lösning
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
