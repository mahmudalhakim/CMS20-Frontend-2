/***************************************
 * 1. Write a function countBs that takes
 * a string as its only argument and returns
 * a number that indicates how many uppercase “B”
 * characters there are in the string.
 *  console.log(countBs("BBC")); → 2
 */

// Lösning 1
// Credit: Kristoffer Ström
function countBs(s) {
  let count = 0;
  let array = s.split("");
  array.forEach((char) => (char == "B" ? count++ : count));
  return count;
}
// console.log(countBs(""));

// Lösning 2
// Björn Lindeberg
let countBs2 = (str) => {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "B") num += 1;
  }

  return num;
};
// console.log(countBs2("BbvxcvbvcB"));


// Lösning 3 (Överkus: RegEx)
// Mikael Topalidis
function countBs(str) {
    var length1 = str.length;
    var length2 = str.replace(/B/g,"").length;
    return length1 - length2;
}
//console.log(countBs("B bvnm B"));

/***************************************
 * 2. Write a function called countChar 
 * that behaves like countBs, 
 * except it takes a second argument 
 * that indicates the character that is to be counted 
 * (rather than counting only uppercase “B” characters).
 * console.log(countChar("kakkerlak", "k")); // → 4
 */

// Lösning 1
// Kevin
const countChars = (str, charToCount) =>{
  if(str.includes(charToCount))
      return str.split(charToCount).length -1;

  console.log(`No ${charToCount}'s in your string`)
};
let letterCount = countChars("kasdfghjk", "a");
console.log(letterCount);


// Bokens lösning
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

// console.log(countBs("BBC"));
// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4
