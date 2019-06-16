/* variables and declarations

1. var - been around since the beginning of JS
2. let const - new features, introduced in ES6

*/

var name = "Steve";
console.log(name);
name = "Brad Pitt";
console.log(name);

// initialize a variable
var greeting;
console.log(greeting);
greeting = "Hello there";
console.log(greeting);

/* 
Rules/Convetions of JS
- variables can include letters, numbers, _, $
- variables can't start with a number
- multi-word variables - naming conventions
   -camelCase
   -under_score
   -PascalCase
 */

 // let - works very similar to var, identical in the global scope

 let dudeName = "Dude";
 console.log(dudeName);
 dudeName = "DudeBrah";
 console.log(dudeName);

 // const - stands for constant = meaning it can't be changed/reassigned

 const nickname = "Hammu";
 console.log(nickname);
//  nickname = "Sarah";
//  console.log(nickname);

// working with object literal variables
const person = {
   name: "Bob",
   age: 23
}
person.name = "Sarah";
person.age = 30;
console.log(person);

// working with object array variables
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);