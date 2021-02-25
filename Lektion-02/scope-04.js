// Block Scope

// let
function letDemo() {
  let myName = "Mahmud";
  console.log(myName + " inne i demo");
  {
    // console.log(myName + " inne i ett block");
    // ReferenceError: Cannot access 'myName' before initialization
    let myName = "Al Hakim"; // Samma variabelnamn
    console.log(myName + " inne i ett block");
  }
  console.log(myName + " efter blocket");
}

letDemo();

// var
function varDemo() {
  var myName = "Mahmud";
  console.log(myName + " inne i demo");
  {
    var myName = "Al Hakim"; // Samma variabelnamn
    console.log(myName + " inne i ett block");
  }
  console.log(myName + " efter blocket");
}

varDemo();
