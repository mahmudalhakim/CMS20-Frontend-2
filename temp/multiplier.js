function multiplier(factor) {
    return number => number * factor;
}

/* 
function multiplier(factor) {

   let myFactor = factor;

   func = function (number) {
       return number * myFactor;
   } 
    func;
}
*/

let twice = multiplier(2);
console.log(twice(5)); // → 10

let thrice = multiplier(3);
console.log(thrice(5)); // → 15