const x = 5;
const y = 9;

let val;

// Comparison Operators
// Operator          Name
// ===============================================
// >                 Greater than
// >=                Greater than or equal to
// <                 Less than
// <=                Less than or equal to
// ==                Equal to
// !=                Not equal to
// ===               Equal to in value and type
// !==               Not equal to in value and type

// assuming x = 5;
val = x > 5;
val = x >= 5;
val = x < -50;
val = x <= 100;
val = x == 5;
val = x != 'b';
val = x === '5';
val = x !== '5';

// Logical Operators
// Operator          Name
// ===============================================
// &&                AND
// ||                OR
// !                 NOT

val = (x<10) && (x!==5);
val = (y>9) || (x===5);



// output
console.log(val);

// Note that '=' is an assignment operator, "simple assignment operator"