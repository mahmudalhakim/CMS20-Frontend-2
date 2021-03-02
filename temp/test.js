function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

Rabbit.prototype.version = "1.0";

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("nice!");

console.log(Rabbit.prototype);
console.log(weirdRabbit.__proto__); 
console.log(Rabbit.prototype === weirdRabbit.__proto__); // true