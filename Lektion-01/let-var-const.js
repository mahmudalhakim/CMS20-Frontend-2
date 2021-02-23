console.log("------- Globala variabler -------");
var test1 = 123;
console.log(test1);

let test2 = 456;
console.log(test2);

const test3 = 789;
console.log(test3);
console.log("-----------------------------");


// Här kommer ett kod-block
if(true){
    console.log("------- Block-variabler -------");

    var test1 = 789;
    console.log(test1); // 789

    let test2 = 201; 
    console.log(test2); // 201
    // OBS! En helt ny binding (variabel)
    // let har block-scope (räckvidd)
    // test2 försvinner efter kod-blocket

    const test3 = 111;
    console.log(test3);
    console.log("------------------------");

}


console.log(test1); // 789 
// var har inget block-scope (kan orsaka buggar)

console.log(test2); // 456
// test2 högst upp (globalt) skrivs ut

console.log(test3);
// test2 högst upp (globalt) skrivs ut


// Fördelar med const

// 1.
// const test3 = 0;  // SyntaxError: Identifier 'test3' has already been declared
// test3 = 0;        // TypeError: Assignment to constant variable.

const test4 = {};    // OBS! Ett objekt
// const test4 = {}; // SyntaxError: Identifier 'test4' has already been declared
// test4 = {};       // TypeError: Assignment to constant variable.

// 2. 
// Du kan alltid manipulera objekt deklarerade med const
test4.firstName = "Mahmud";
test4.lastName = "Al Hakim";
console.log(test4);

const test5 = [];   // OBS! En array
// test5 = 0;       // TypeError: Assignment to constant variable.
// const test5 = 0; // SyntaxError: Identifier 'test5' has already been declared
// Du kan manipulera arrayen
test5[0] = "Mahmud";
test5[0] = "Al Hakim";
test5[1] = 47;
test5[2] = {};
test5[3] = [];

console.log(test5);