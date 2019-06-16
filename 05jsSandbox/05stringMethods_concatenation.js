const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there, my name is Bill";
const tags = "web-design,web-development,programming,coding";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;
val = "Hello, my name is " + firstName + " and I am " + age + " years old";

// Appending - adding onto a variable without replacing the thing
val = "Nabeel ";
val += "Broski";

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat() - concatenation method
val = firstName.concat(' ', lastName);

// Changing cases
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// How to treat strings like a read-only array
val = firstName[2];

// indexOf() - find the index of a value of character
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt() - opposite of indexOf()
val = firstName.charAt(4);
val = firstName.charAt(firstName.length - 1);

// substring() - pulling a substring out of a string
val = firstName.substring(0,4);

// slice() - used with Arrays
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split() - splits a string into an array based on a separator
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Bill", "Jack");

// includes() - returns boolean value when checking for something in the string
val = str.includes("Hello");
val = str.includes("Foo");


//Output
console.log(val);