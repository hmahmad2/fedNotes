/*
General Loops and Iterations

LOOPS
-- an instruction that repeats until a specific condition is reached or met
-- used to run the same block of code using different values each time
-- multiple ways to run iterations in JS, as most popular types of general loops in most languages are
   1> for loops
      - takes in 3 parameters, seperated by semi-colons
         1. declaration of a variable, can use var/let, can't use const
         2. condtions
         3. increment (i++)
   2> while loops
      - we set the variable outside the loop
      - while(condition){}
      - inside the while loop we do what we wanna do
   3> do-while loops
      -- they'll always run at least once no matter what
-- Array-specific iterations with forEach() and map()
   - forEach() method takes in a callback (anonymous) function, it can accept three parameters
      1. iterator
      2. index
      3. the actual entire array
   - map() - basically used to return something different, different array
-- for in - used to loop/iterate through objects se we can get key-value pairs
*/

// FOR LOOPS
// for (let i=0; i < 10; i++) {
//    console.log(i);
// }
// CONCAT
// for (let i=0; i < 10; i++) {
//    console.log('Number ' + i);
// }
// SKIP ITERATION AND BREAK OUT OF LOOP
for (let i=0; i < 10; i++) {
   if (i == 2) {
      console.log('2 is my favorite color');
      continue;
   }
   // BREAK OUT OF LOOP
   if (i == 5) {
      console.log('Stop the loop');
      break;
   }
   console.log('Number ' + i);
}


// WHILE LOOPS
let i = 0;
while (i < 10) {
   console.log('while loop ' + i);
   i++;
}

// DO-WHILE LOOPS
let e = 0;
do {
   console.log('do while loop ' + e)
   e++;
} while(e < 10)

// LOOPING THROUGH ARRAYS
const cars = ['Ford', 'Nissan', 'Hyundai', 'Honda'];
for (let i=0; i<cars.length; i++) {
   console.log(cars[i]);
}

// forEach() method
cars.forEach(function(car, index, theEntireArray) {
   console.log('forEach ' + car);
   console.log(`with index ${index} : ${car}`);
   console.log(theEntireArray);
})

// map()
const users = [
   {id:1 , name: 'Jim'},
   {id:2 , name: 'Tim'},
   {id:3 , name: 'Roy'},
   {id:4 , name: 'Dan'},
   {id:5 , name: 'Jeb'}
]
const ids = users.map(function(user) {
   return user.id;
}) 
console.log(ids);

// FOR IN LOOP
const user = {
   firstName: 'Bambi',
   lastName: 'Deer',
   age: 7,
   niceAnimal: false
}

for (let x in user) {
   // console.log(x);
   // console.log(`${user[x]}`);
   console.log(`${x} : ${user[x]}`);
}