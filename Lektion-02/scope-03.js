var myFirstName = "Mahmud"; // Global
let myLastName = "Al Hakim"; // Global

function demo() {
  // Hoisting
  // var myFirstName = undefined;
  console.log(myFirstName);     // undefined
  // console.log(myLastName);   // ReferenceError: Cannot access 'myLastName' before initialization

  var myFirstName = "John";
  let myLastName = "Doe";

  console.log(myFirstName); // John
  console.log(myLastName);  // Doe
}
demo();
