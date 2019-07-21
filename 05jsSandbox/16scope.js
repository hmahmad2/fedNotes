// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test() {
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('Function scope: ',a,b,c);
}
test();

// BLOCK-LEVEL SCOPE -- for if-statement, loops, and anything warpped inside curly-braces
// IF STATEMENT
if(true) {
   var a = 7;
   let b = 8;
   const c = 9;
   console.log('Block-level if Scope: ',a,b,c);
}
// if a var is declared inside a block-level scope, it alters the same-named var in the global scope. let and const do not have this issue

// FOR LOOPS
// for (let a = 0; a < 10; a++) {
//    console.log(`Block-level For Loop Scope with let: ${a}`);
// }
for (var a = 0; a < 10; a++) {
   console.log(`Block-level For Loop Scope with var: ${a}`);
}
// let and const have a block-level scope, whereas var has a function-level scope


// GLOBAL SCOPE OUTPUT
console.log('Global output: ',a,b,c);