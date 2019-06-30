/*
IF STATEMENTS -- used to evaluate some kind of condition and then do something based on that condition or something else if that condition isn't met

Syntax:
if(givenCondition) {
   doSomething
} else {
   doSomethingElse
}

*/

/*************** COMPARISON OPERATORS **************/
const id = 105;

// equal to
if (id == 100) {
   console.log('correct');
} else {
   console.log('incorrect');
}

// not equal to
if (id != 101) {
   console.log('correct');
} else {
   console.log('incorrect');
}

// equal to
if (id === 100) {
   console.log('correct');
} else {
   console.log('incorrect');
}

// not equal to
if (id !== 100) {
   console.log('correct');
} else {
   console.log('incorrect');
}

// greater or less than/ if else
if (id > 100) {
   console.log('your ide is greater than 100');
} else if (id < 100) {
   console.log('id is less than 100');
} else {
   console.log('correct');
}

const color = 'yeezy';
if (color === 'red') {
   console.log('color is red');
} else if (color === 'blue') {
   console.log('color is blue');
} else {
   console.log('color is not read or blue')
}



/*********** LOGICAL OPERATORS ************/
const name = 'Steve';
const age = 34;

// AND &&
if (age >= 0 && age <= 12) {
   console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
   console.log(`${name} is a teenager`);
} else {
   console.log(`${name} is an adult`);
}


// OR ||
if (age<16 || age>65) {
   console.log(`${name} is not qualified to run the race`);
} else {
   console.log(`${name} is registered for the race`);
}

// Ternary Operator - short way of doing conditionals
console.log(id==100 ? 'Correct' : 'Incorrect');