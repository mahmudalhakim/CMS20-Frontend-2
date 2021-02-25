var myFirstName = "Mahmud"; // OBS! En global variabel
let myLastName = "Al Hakim"; // OBS! En global variabel

function demo() {
  myFirstName = "John";
  myLastName = "Doe";
}
demo();

console.log(myFirstName); // John
console.log(myLastName); // Doe
