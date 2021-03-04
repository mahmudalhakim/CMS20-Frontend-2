

class Stack {
  constructor() {
    this.items = [];
  }

  push(obj) {
    this.items.push(obj);
  }

  pop() {
    if (this.items.length === 0) throw new Error("Stack is empty.");
    return this.items.pop();
  }

  get count() {
    return this.items.length;
  }
}

stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack);
console.log( stack.items ); // OBS! Ej privat!!!
console.log(stack.count);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop()); // Error: Stack is empty.
