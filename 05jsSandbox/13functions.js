/*
Functions
   -- one of the most important control structures in any programming language
   -- blocks of code that can be defined, then called at a later time; in some cases, defined and called at the same time
   -- functions can take in parameters, which can later be passed as arguements when the functions are called
*/

// FUNCTIONS DECLARATIONS
function greet() {
   console.log('Hello');
}
greet();

// "The return keyword"
function greet2() {
   return "Hello";
}

console.log(greet2());

// Parameter and Arguements
   // parameter -- a variable in a method definition
   // arguments -- data you pass into the method'd parameter
function greet3(firstName, lastName) {
   return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet3('Hamaad', 'Ahmad'));
console.log(greet3());

function greet4(firstName, lastName) {
   if (typeof firstName === 'undefined') {
      firstName ='John';
   }
   if (typeof lastName === 'undefined') {
      lastName = 'Doe';
   }
   return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet4());

function greet5(firstName = 'John', lastName = 'Doe'){
   return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet5("ron","poe"));

/* FUNCTION EXPRESSIONS
-- basically, it's putting a function as a varable assignment
-- it can be named or anonymous, and usually they're anonymous
*/
const square = function(x) {
   return x*x;
}
console.log(square(8));

/* IIFE's -- Immediately Invokable Function Expressions
-- basically, it's a funtion you declare and run at the same time
*/
(function() {
   console.log('IIFE ran........');
})();

