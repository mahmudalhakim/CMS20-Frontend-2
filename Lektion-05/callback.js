// Callback och Asynkrona funktioner

const array = ["A", "B", "C"];
console.log("--- Utan setTimeout ---");
array.forEach((element) => console.log(element));

console.log("--- Med setTimeout ---");
console.log("--- Utskrfit efter 5 sekunder ---");
setTimeout(() => array.forEach((element) => console.log(element)), 5000);
// setTimeout är en asynkron funktion

// Eller med måsvingar
/*
setTimeout(() => {
    array.forEach(element => console.log(element))
}, 5000);
*/

// 2. Skapa en namngiven callback till setTimeout
console.log("--- En namngiven callback till setTimeout ---");
setTimeout(viewArray, 10000);
function viewArray() {
  console.log("--- Utskrfit efter 10 sekunder ---");
  array.forEach((element) => console.log(element));
}

console.log("--- SLUT ---");
