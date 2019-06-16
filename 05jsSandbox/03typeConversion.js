/*
Type Conversion - taking a variable and changing the data type
*/

let val;
   val = 555;
// Number to String
val = String(555);
val = String(4+4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]);
// toString() method
val = (5).toString();
val = (false).toString();

// String to Number
val = Number('5');
// Boolean to Number
val = Number(true);
val = Number(false);
// null to number
val = Number(null);
val = Number("Hello");
// pasre method
val = parseInt('100.30');
val = parseFloat('100.30');



// Output
   console.log(val);
   console.log(typeof val);
   console.log(val.length);


// Type Coersion - JavaScript does it for us
   const val1 = String(5);
   const val2 = 6;
   // const sum = Number(val1 + val2);
   const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
