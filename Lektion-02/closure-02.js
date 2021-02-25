function stopWatch() {
  let startTime = Date.now();
  // Return the number of milliseconds since 1970/01/01
  console.log(startTime);

  function getDelay() {
    let elapsedTime = Date.now() - startTime;
    return elapsedTime;
  }
  return getDelay;
}

let timer = stopWatch();

console.log(timer());

for (let index = 0; index < 1000000; index++) {
  let element = Math.random();
}

console.log(timer());
