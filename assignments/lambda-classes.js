/***************************************
  TOOLS
***************************************/

function heading (content) {
  console.log (`\n### ${content} ###\n`);
}

/***************************************
  CHALLENGE
***************************************/

/*--- Person ---*/

class Person {
  constructor (attrs) {
    this.name     = attrs.name;
    this.age      = attrs.age;
    this.location = attrs.location;
  }
  speak () {
    console.log (
      `Hello, my name is ${this.name}. I am from ${this.location}.`
    );
  }
}

/*--- Student ---*/

class Student extends Person {
  constructor (attrs) {
    super (attrs);
    this.background  = attrs.background;
    this.className   = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }
  listSubjects () {
    console.log ("My favorite subjects are...")
    this.favSubjects.forEach (
      (subject) => {
        console.log (subject);
      }
    );
  }
  PRAssignment (subject) {
    console.log (
      `${this.name} has submitted a PR for ${subject}.`
    );
  }
  sprintChallenge (subject) {
    console.log (
      `${this.name} has begun a sprint challenge on ${subject}.`
    );
  }
}

/*--- Instructor ---*/

class Instructor extends Person {
  constructor (attrs) {
    super (attrs);
    this.specialty   = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo (subject) {
    console.log (
      `Today we are learning about ${subject}.`
    );
  }
  grade (student , subject) {
    console.log (
      `${student.name} receives a perfect score on ${subject}!`
    );
  }
}

/*--- Project Manager ---*/

class ProjectManager extends Instructor {
  constructor (attrs) {
    super (attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standUp (channel) {
    console.log (
      `${this.name} announces to ${channel}: @channel Time for standup!`
    );
  }
  debugCode (student , subject) {
    console.log (
      `${this.name} debugs ${student.name}"s code on ${subject}.`
    );
  }
}

/***************************************
  TESTING
***************************************/

/*******************
  define objects
*******************/

const myPersons         = [];
const myStudents        = [];
const myInstructors     = [];
const myProjectManagers = [];

/*--- persons ---*/

myPersons[0] = new Person({
  name     : "Vivien",
  age      : 35,
  location : "South Donstad"
});
myPersons[1] = new Person({
  name     : "Stanley",
  age      : 68,
  location : "Kenyonmouth"
});
myPersons[2] = new Person({
  name     : "Stanley",
  age      : 71,
  location : "Wisokyfort"
});

/*--- students ---*/

myStudents[0] = new Student({
  name     : "Carter",
  age      : 23,
  location : "North Hallieland",
  background : "food truck server",
  className : "WEB73",
  favSubjects : [
    "HTML",
    "CSS",
    "Java"
  ],
});
myStudents[1] = new Student({
  name     : "Winnifred",
  age      : 39,
  location : "Kuphalfurt",
  background : "nurse",
  className : "UX47",
  favSubjects : [
    "JavaScript",
    "LESS",
    "React"
  ],
});
myStudents[2] = new Student({
  name     : "Torrey",
  age      : 36,
  location : "Port Audrey",
  background : "truck driver",
  className : "DS52",
  favSubjects : [
    "React",
    "CSS",
    "Python"
  ],
});

/*--- instructors ---*/

myInstructors[0] = new Instructor({
  name     : "Kaylin",
  age      : 88,
  location : "Port Patrick",
  specialty   : "User Experience",
  favLanguage : "LESS",
  catchPhrase : "junk in, junk out!"

});
myInstructors[1] = new Instructor({
  name     : "Alfonso",
  age      : 20,
  location : "Hettingerburgh",
  specialty   : "Backend Web Dev",
  favLanguage : "Python",
  catchPhrase : "antidisestablishmentarianism!"
});
myInstructors[2] = new Instructor({
  name     : "Brannon",
  age      : 23,
  location : "West Kurtburgh",
  specialty   : "Frontend Web Dev",
  favLanguage : "TypeScript",
  catchPhrase : "gad zooks!"
});

/*--- project managers ---*/

myProjectManagers[0] = new ProjectManager({
  name     : "Manuel",
  age      : 71,
  location : "Murphymouth",
  specialty   : "Data Science",
  favLanguage : "R",
  catchPhrase : "jinky!",
  gradClassName : "DS2",
  favInstructor : myInstructors[0]
});
myProjectManagers[1] = new ProjectManager({
  name     : "Madisyn",
  age      : 51,
  location : "New Lionelland",
  specialty   : "Full Stack Web Dev",
  favLanguage : "Python",
  catchPhrase : "yahoo!",
  gradClassName : "WEB13",
  favInstructor : myInstructors[1]
});
myProjectManagers[2] = new ProjectManager({
  name     : "Lorenza",
  age      : 33,
  location : "Douglasshire",
  specialty   : "Frontend Web Dev",
  favLanguage : "JavaScript",
  catchPhrase : "kowabunga!",
  gradClassName : "WEB15",
  favInstructor : myInstructors[2]
});

/*******************
  logging
*******************/

heading ("PERSONS");
console.log (myPersons);

heading ("STUDENTS");
console.log (myStudents);

heading ("INSTRUCTORS");
console.log (myInstructors);

heading ("PROJECT MANAGERS");
console.log (myProjectManagers);
