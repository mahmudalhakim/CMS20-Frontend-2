function stopWatch() {
  let startTime = Date.now();
  return () => Date.now() - startTime;
}

let timer = stopWatch();
console.log(timer());

for (let index = 0; index < 1000000; index++) {
  let element = Math.random();
}

console.log(timer());
