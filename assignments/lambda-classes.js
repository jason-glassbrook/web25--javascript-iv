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

/*--- Instructor ---*/

class Instructor extends Person {
  constructor (attrs) {
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
    )
  }
}

/*--- Student ---*/


/**************************************/