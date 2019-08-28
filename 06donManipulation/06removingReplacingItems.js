/* REMOVING AND REPLACING ITEMS / CLASSES AND ATTRIBUTES */

let val;

// REPLACE ITEMS
// create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
console.log(newHeading);

// Get old heading we want to replace
const oldHeading = document.getElementById('task-title');
// Get the parent and store it in a variable
const cardAction = document.querySelector(".card-action");

// replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item using remove() method
// lis[0].remove();

// // remove child element
// list.removeChild(lis[3]);
// list.removeChild(lis[1]);


// console.log(list);


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);

const link = firstLi.children[0];

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('test');
// val = link.classList.remove('test');
val = link;

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://www.google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link.removeAttribute('title');
// val = link;


console.log(val);