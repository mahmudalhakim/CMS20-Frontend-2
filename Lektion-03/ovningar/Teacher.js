/*******************************************
 * 1. Skapa en klass som beskriver en lärare.
 * Varje lärare har namn och e-post.
 * 2. Skapa en klass som beskriver en kurs.
 * Varje kurs har namn och lärare,
 * (ett objekt av föregående klass).
 * 3. Skapa en klass som beskriver en student.
 * Varje student har namn och en lista med kurser,
 * (en array av objekt av föregående klass).
 * 4. Skapa en metod (info) i klassen student
 * som skriver ut info om alla kurser och lärare!
 * 5. Skapa några instanser av alla klasser och testa metoden info.
 */

 // Lösning från Niklas

 /*

class Teacher {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
const teacher1 = new Teacher("Bob", "bob@mail.com");
const teacher2 = new Teacher("Torgrim", "torgrim@mail.com");
const teacher3 = new Teacher("Rob", "rob@mail.com");

class Course {
  constructor(name, teacher) {
    this.name = name;
    this.teacher = teacher;
  }
}
const course1 = new Course("C# Basics", teacher1);
const course2 = new Course("HTML Basics", teacher2);
const course3 = new Course("C# Advanced", teacher1);

class Student {
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
  }

  // En metod som skriver ut info om studenten och vilka kursen studenten läser just nu! 
  info() {
    console.log(`Name: ${this.name}`);
    console.log("Courses:");
    this.courses.forEach((course) =>
      console.log(
        `${course.name}, Teacher: ${course.teacher.name}, ${course.teacher.email}`
      )
    );
  }
}

const student1 = new Student("Niklas", [course1, course2, course3]);

student1.info();

*/


// Lösning från Mahmud

class Teacher {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
const t1 = new Teacher("Mahmud", "mahmud@hotmail.com");
const t2 = new Teacher("Stefan", "Stefan@hotmail.com");

class Course {
  constructor(name, teacher) {
    this.name = name;
    this.teacher = teacher;
  }
}
const c1 = new Course("Frontend 1", t1);
const c2 = new Course("ASP.NET", t2);
const c3 = new Course("Frontend 2", t1);

class Student {
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
  }

  info() {
    let output = this.name + " läser följande kurser: \n";
    this.courses.forEach((c) => {
      output += c.name + ", lärare: " + c.teacher.name + "\n";
    });
    return output;
  }
}

const s1 = new Student("Adam", [c1, c2]);
const s2 = new Student("Bertil", [c1, c3]);

console.log(s1.info());
console.log(s2.info());
