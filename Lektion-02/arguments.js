function addDemo() {
  console.log(arguments);
}
addDemo(1, 2);
addDemo(1, 2, 3);
addDemo(1, 2, 3, 4);

// Övning

function add() {
  let num = 0;

  for (let i = 0; i < arguments.length; i++)
    num += arguments[i];
    
  return num;
}

console.log(add(5, 7));
console.log(add(5, 7, 10));
console.log(add(5, 7, 10, 8));
