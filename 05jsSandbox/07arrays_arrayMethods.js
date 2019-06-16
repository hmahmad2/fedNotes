const numbers = [43, 56,33,23,44,37,5];
const numbers2 = new Array(22,45,12,87,34);
const fruit = ['Apple', 'Orange', 'Banana', 'Pear'];
const age = [62,56,78,34,19,41];
const mixedArray = [22, 'String', true, undefined, null, {a:1, b:"Two"}, new Date()];

let val;

// get array length
val = numbers.length;

// check if something is array
val = Array.isArray(numbers);
val = Array.isArray('hello');

// get a single value from an Array
val = numbers[3];

// insert into array (not really)
numbers[2] = 100;

// find index of value
val = numbers.indexOf(37);

/* --------------------------------*/
// Mutating Arrays

// add on to front
numbers.unshift(120);

// take of from the front
numbers.shift();

// add on to end
numbers.push(250);

// take off from end
numbers.pop();

// splice
numbers.splice(1,3);

// reverse an array
numbers.reverse();

// concatenate arrays
val = numbers.concat(numbers2);

// sorting strings in arrays
val = fruit.sort();

// sorting numbers in arrays
val = numbers.sort();

// compare function
val = numbers.sort(function(x,y){
   return x - y;
});

console.log(numbers);
console.log(val);
// console.log(numbers2);
// console.log(mixedArray);
