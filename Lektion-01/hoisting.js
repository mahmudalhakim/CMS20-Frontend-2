// Hoisting

console.log("--- Utskrifter före variabeldeklarationer --- ");
console.log(x1); // undefined
console.log(x2); // undefined
console.log(x3); // undefined
console.log(x4); // undefined

// console.log(x5);
// console.log(x6);
// ReferenceError: Cannot access 'x5' before initialization



// Funktionsdeklarationer ”flyttas” högst upp i skriptet!
func1();
func2();

// Obs! Funktions-uttryck hissas ej upp
// func3(); // TypeError: func3 is not a function
// func4(); // ReferenceError: Cannot access 'func4' before initialization
// func5(); // ReferenceError: Cannot access 'func5' before initialization
console.log(func3); // undefined



// Variabeldeklarationer med var ”flyttas” högst upp i skriptet!
var x1;
var x2 = "TEST";
var x3 = {};
var x4 = [];

// OBS! Variabeldeklarationer med let eller const
// flyttas INTE  upp!
let x5 = 0;
const x6 = 0;

console.log("--- Utskrifter efter variabeldeklarationer --- ");

console.log(x1); // undefined
console.log(x2); // TEST
console.log(x3); // {}
console.log(x4); // []
console.log(x5); // 0
console.log(x6); // 0

// Funktions-deklarationer
function func1(){
    console.log("Detta är func1");
}
function func2(){
    console.log("Detta är func2");
}

// Funktions-uttryck
var func3   = function(){
    console.log("Detta är func3");
};
let func4   = function(){
    console.log("Detta är func3");
};
const func5 = function(){
    console.log("Detta är func3");
};

// Övning
var myName = "Mahmud";
var myAge  = 48;

function hello(){

    // OBS! variabeldeklarationer med var hissas upp i funktionen!
    // myName = undefined
    // test = undefined

    console.log("Hello " + myName); // Hello undefined
    console.log("You are " + myAge + " years old!");
    
    var myName = "Kalle";
    
    console.log(test1); // undefined
    var test1 = "test";
    console.log(test1); // test

}

hello();


function hello2(myName){
    console.log("Hej " + myName); // Hej Mahmud
    var myName ="Kalle";
}
hello2(myName);