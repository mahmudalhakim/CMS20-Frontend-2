function demo() {
  var myFirstName = "Mahmud"; // OBS! En lokal variabel
  let myLastName = "Al Hakim"; // OBS! En lokal variabel
  testVar = "Variabel utan var eller let"; // Detta blir egenskap till window (globalt)
}
demo();

// console.log(myFirstName); // ReferenceError: myFirstName is not defined
// console.log(myLastName);  // ReferenceError: myLastName is not defined
console.log(testVar); // OBS! Vi kommer åt denna variabel utanför funktionen
