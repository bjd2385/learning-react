/*
Variables
=========

• Try to use `let` and `const` over `var`, since ES6.
• `let` is used to create mutable variables, while `const` results in an immutable variable; aka you can't re-assign a const var.
  • results in a TypeError.

Arrow Functions
===============

• Functions normally look like

function myFunction() {
  ...
}

whereas arrow functions are assigned with const -

const myFunction = () => {

}

(note the `=>`).

• Either of the above could hold some arguments. The latter solves problems you'd see with `this`. `this` inside an arrow function doesn't change what it points to during runtime.
• Example:

function printMyName(name) {
  console.log(name);
}

or, you can write this as

const printMyName = (name) => {
  console.log(name);
}

even shorter (since there's only one arg) -

const printMyName = name => {
  console.log(name);
}

^ good to know too, syntax would confuse me if I saw it IRL.

• Even shorter though, you can omit return keywords -

const multiply = number => number * 2;
console.log(multiply(2));

^ returns the result of multiplying numbers (you have to omit the return keyword). Remarkably similar to Python's lambda syntax, without saying `lambda` haha.

Exports and Imports
===================

• It's possible ofc to split our JS over multiple files using import and export statements.
• Named exports require curly braces on import.
• You can export (and thus import) both variables and arrow functions, so it seems arrow functions are first class objects in the same way that functions (and thus methods) are first class objects.

Classes
=======

• Classes are blueprints for JS objects.
• Methods are functions attached to classes in JS as well.
• Instantiated with `new` keyword, must have a constructor method.

class Person {
  name = 'Max';
  call = () => {...}
}

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name); // interesting that you can access fields on the class, gives me an idea of how to interact with class members.

• Classes support inheritance, so JS seems to allow for OO-style programming.
• Example defining constructor explicitly ~

class Person {
  constructor() {
    this.name = 'Brandon';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = Person(); // calls constructor
person.printMyName(); // call method on this particular class instance.

• Using inheritance ~

class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // call Human.constructor.
    this.name = 'Brandon';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = Person(); // calls Person.constructor, as well as Human.constructor.
person.printGender();
person.printMyName();

Classes, Properties and Methods
===============================

• Properties are like variables attached to objects, and methods are like functions attached to objects.
• In ES7, we can use syntax like

myProperty = 'myValue';
myMethod = () => {...}

skipping the constructor and simplifying method syntax.

Spread and Rest Operator
========================

• Whoa, used on arrays, like

const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5}; // same thing with this new object.

to 'spread' properties or elements into new arrays or objects.

• Rest is used in method or function args for variadic args like

function myFunc(...args) {
  return args.sort();
}

• Ah okay so these are quite similar to `*` and `**` in Python.

 */

// Filter any number of arguments (though not 0, I'm guessing) down to only elements that are 1.
const filter = (...args) => args.filter(el => el === 1);
console.log(filter(1, 2, 1, 3));

/*
Destructuring
=============

• Different than spreads.
• Destructuring allows you to pull out single elements and assign them to variables.
• Array destructuring looks like ~
 */

[a, b] = ['Hello, ', 'Max'];

/*
 • Object destructuring looks like ~
 */

{name} = {
  name: 'Max',
  age: 28
}

console.log(name);
  console.log(age); // undefined.

/*
Reference and Primitive Types
=============================

• Numbers like `1` is a primitive type. Strings, booleans, are also primitive types.
• Arrays and objects like {} are reference types, however.
• To get around referencing, you can use the spread object to copy all the values out of the source array or object to the new object, like
 */

const firstObject = {
  'name': 'Brandon',
  'age': 25
}

const secondObject = {
  ...firstObject
}

firstObject.name = 'Sam'; // only updates this key's value in the first object.
console.log(secondObject.name);

/*
Refreshing Array Functions
==========================

• Arrays have a bunch of builtin methods ~
 */

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

/*
• `.map` returns a new array ofc.

Wrap Up for the module
======================

• We'll continually see these concepts over and over in this course ofc :)
 */