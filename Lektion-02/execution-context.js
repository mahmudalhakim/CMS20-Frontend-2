console.log(window);
console.log(this);
console.log(window === this);

function demo() {
  console.log(window);
  console.log(this);
  console.log(window === this);
} 
demo();