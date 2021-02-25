// Övning om this
const course = {
  title: "JavaScript",
  students: ["Adam", "Bertil", "Cesar"],
  info: function () {
    this.students.forEach(function (s) {
      console.log(s + " läser " + this.title);
    });
  },
};
course.info();
// Skriver ut
// Adam läser undefined
// Bertil läser undefined
// Cesar läser undefined

// Lösning
// Konvertera funktionen inne i forEach till en arraw-funktion!
const course2 = {
  title: "JavaScript",
  students: ["Adam", "Bertil", "Cesar"],
  info: function () {
    this.students.forEach((s) => console.log(s + " läser " + this.title));
  },
};
course2.info();
// Adam läser JavaScript
// Bertil läser JavaScript
// Cesar läser JavaScript
