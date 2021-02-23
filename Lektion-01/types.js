// Typer i JavaScript
// Enkla typer (primitiva)

// Number
let n1 = 123.5;
console.log(typeof(n1));

// String
let s1 = "TEXT";
let s2 = '123';
let s3 = `123 TEXT`;  // Från ES6 = ES2015
console.log(typeof(s1));
console.log(typeof(s2));
console.log(typeof(s3));

// Template Litelats (String Literals)
let s4 = `
  Variablen s1 innehåller följande sträng: ${s1}
  Variablen s2 innehåller följande sträng: ${s2}
  Variablen s3 innehåller följande sträng: ${s3}
`;
console.log(s4);
// Övning
// Konvertera s4 till en vanlig sträng (med citattecken)

let bool1 = true;
let bool2 = false;
console.log(typeof(bool1));
console.log(typeof(bool2));

let u1; // undefined
console.log(typeof(u1)); // Typen är undefined
console.log(u1);         // Innehållet är undefined

let null1 = null;
console.log(typeof(null1)); // Typen är object
console.log(null1);         // Innehållet är null

// Automatiskt Typkonvertering (implicit type coercion)
console.log(10 * "5");  // String -> Number => 50
console.log(10 / "5");  // String -> Number => 2
console.log(10 - "5");  // String -> Number => 5
console.log(10 + "5");  // Number -> String => 105
console.log(10 * null); // null -> Number   => 0
console.log("Ten" * 5); // String -> Number => NaN = Not a Number
console.log("10" * undefined); // Nan
console.log("10" + undefined); // Konkatenering => 10undefined


// Koden nedan måste exekveras i webbläsaren
// prompt finns enbart i objektet window
let tal = prompt("Ange ett tal");
console.log(typeof(tal)); // String
let n = Number(tal);      // Explicit typkonvertering
console.log(typeof(n));  // Number