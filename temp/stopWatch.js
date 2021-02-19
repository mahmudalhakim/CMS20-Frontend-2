function stopWatch() {
    let startTime = Date.now();

    /*
    function getDelay() {
        let elapsedTime = Date.now() - startTime;
        return elapsedTime;
    }
    return getDelay;
    */

    // return getDelay = () => Date.now() - startTime;

    return getDelay = () => Date.now() - startTime;


}

let timer = stopWatch();

// do something that takes some time
for (let i = 0; i < 1000000; i++)
    Math.random() * 1000000;

// invoke the returned function
let delay = timer();
console.log(delay);
console.log(timer());