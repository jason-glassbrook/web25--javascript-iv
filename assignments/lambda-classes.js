/***************************************
  TOOLS
***************************************/

function heading (content) {
  console.log (`\n### ${content} ###\n`);
}

/**************************************/

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