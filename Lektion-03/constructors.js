// En konstruktor: är en mall (class)
function User(firstname, lastname) {
  this.hello = function () {
    return `Hello ${firstname} ${lastname}!`;
  };
}

// Skapa ett objekt (instans) med hjälp av konstruktorn
const user1 = new User("Mahmud", "Al Hakim");
console.log(user1.hello());

// Privata egenskaper
console.log(user1.firstname); // undefined
console.log(user1.lastname); // undefined

// Globala egenskaper
user1.firstname = "John";
user1.lastname = "Doe";
user1.hello();

// En konstruktor
function Person(firstname, lastname) {
  // Publika egenskaper
  this.firstname = firstname;
  this.lastname = lastname;

  // En public metod
  this.hello = function () {
    return `Hello ${firstname} ${lastname}!`;
  };
}

// En instans av Person == Ett objekt
const p1 = new Person("Mahmud", "Al Hakim");
console.log(p1.hello()); // Hello Mahmud Al Hakim!

p1.firstname = "John";
p1.lastname = "Doe";
console.log(p1.hello());
// OBS! Hello Mahmud Al Hakim!

// En konstruktor
function Student(firstname, lastname) {
  // Publika egenskaper
  this.firstname = firstname;
  this.lastname = lastname;

  // En public metod
  this.hello = function () {
    return `Hello ${this.firstname} ${this.lastname}!`;
  };
}

const s1 = new Student("Mahmud", "Al Hakim");
console.log(s1.hello()); // Hello Mahmud Al Hakim!

s1.firstname = "John";
s1.lastname = "Doe";
console.log(s1.hello()); // Hello John Doe!

// Övning
function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}

const c1 = new Circle(1);
console.log(c1.area());

c1.radius = 10;
console.log(c1.area());

// Arbeta med privata metoder

function Customer(name, DOB) {
  // Publika egenskaper
  this.name = name;
  this.DOB = DOB;
  self = this;

  // En privat metod
  function getAge() {
    console.log(self);
    let birthDate = new Date(self.DOB);
    return new Date().getFullYear() - birthDate.getFullYear();
  }
  // En publik metod
  this.print = function () {
    return `${this.name} is ${getAge()} years old!`;
  };
}
const customer = new Customer("Mahmud", "1973");
console.log(customer.print());

// Eller använd en arrow-funktion
function Customer2(name, DOB) {
    // Publika egenskaper
    this.name = name;
    this.DOB = DOB;
  
    // En privat metod
    const getAge = () => {
      let birthDate = new Date(this.DOB);
      return new Date().getFullYear() - birthDate.getFullYear();
    }
    // En publik metod
    this.print = function () {
      return `${this.name} is ${getAge()} years old!`;
    };
  }
  const customer2 = new Customer2("Mahmud", "1973");
  console.log(customer2.print());
  
