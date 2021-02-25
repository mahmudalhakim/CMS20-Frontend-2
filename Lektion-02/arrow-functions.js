// Arraw-funktioner

const test1 = () => console.log("TEST 1");
test1();

const test2 = (firstname) => console.log("TEST 2: " + firstname);
test2("Mahmud");

const test3 = (firstname, lastname) => console.log(`TEST 3: ${firstname} ${lastname}`);
test3("Mahmud", "Al Hakim");

const test4 = (firstname, lastname, age) => {
    console.log(`TEST 4: ${firstname} ${lastname}`);
    console.log("Ålder: " + age);
}
test4("Mahmud", "Al Hakim", 48);