const demo1 = {};
const demo2 = new Object();
demo1.toString(); // [object Object]

const demo3 = [];
const demo4 = new Array();
demo3.toString(); // ""

const demo5 = ["A", "B", "C"];
const demo6 = new Array("A", "B", "C");
demo5.toString(); // "A,B,C"

// Skapa en prototyp
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

let mahmudRabbit = Object.create(protoRabbit);
mahmudRabbit.type = "mahmud";
mahmudRabbit.speak("HELLOOOOO!");

// Skapa ett helt tomt objekt (saknar en prototype)
let nullObject = Object.create(null);
console.log(nullObject);

// Att skapa en prototyp – ES5 Syntax
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.print = function () {
  return `${this.type} says hello!`;
};

Rabbit.prototype.speak = function (line) {
  console.log(`${this.type} says '${line}'`);
};

Rabbit.prototype.version = "1.0";

const r1 = new Rabbit("Blue");
console.log(r1.print());
r1.speak("hello");
console.log(r1.version);

const r2 = new Rabbit("Orange");
console.log(r2.print());
r2.speak("bye bye!");
console.log(r2.version);

// Att skapa en prototyp – ES6/ES2015 Syntax
class Cat {
    constructor(color) {
        this.color = color;
    }
    print() {
        return `The ${this.color} cat says hello!`;
    }
    speak(line) {
        console.log(`The ${this.color} cat says '${line}'`);
    }
}
const cat1 = new Cat("white");
console.log(cat1.print());
console.log(cat1);

const cat2 = new Cat("black");
console.log(cat2.print());
console.log(cat2);
