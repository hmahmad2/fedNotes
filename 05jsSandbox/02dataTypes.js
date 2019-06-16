// DATA TYPES IN JAVASCRIPT

/*
Primitive Types vs Reference Types
   -Primitive Types
      -They are stored directly in the location the variable accesses
      - stored on the stack
         - when you access primitive data, access it by its actual value
   - Reference Types
      - Accessed by references
      - Objects are stored on the heap, not the variable
      - A pointer to a location in memory

Primitive Types
   - Strings -- text, sequences of characters
   - Numbers -- integers, decimals, floats are considered  numbers in JS
   - Boolean -- True or False
   - Null -- intentional empty value
   - Undefined -- variable that has not been assigned a value
   - Symbols(ES6)

Reference Types - considered Objects
   - Arrays
   - Object Literals
   - Functions
   - Dates
   - Anything else we can store...
   - Object Wrappers for strings and numbers
*/
const name = "Hamaad";
const age = 30;
const hasKids = false;
const doesChores = true;
const car = null;
let nothingToSay;
const sym = Symbol();

// Output
console.log(typeof sym);
console.log(typeof nothingToSay);



// Reference Types
const hobbies = ["coding", 30, true];
console.log(typeof hobbies);

const address = {
   street: "123 This Way",
   city: "Poopville",
   zip: 60139
};
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);