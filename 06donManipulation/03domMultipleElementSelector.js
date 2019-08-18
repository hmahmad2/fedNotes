// document.getElementsbyClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// // document.getElementbyTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'green';
// lis[3].textContent = 'Hello Ladies';

// lis.reverse();
// HTMLCollection and Arrays are two distinct objects.

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index) {
//    console.log(li.className);
//    li.textContent = `${index}: Hello`;
// });

//////////////////////////////////////////////////////////////////////////
// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function(item, index) {
   item.textContent = `${index}: Hello`;
});

// Odd and Even background
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
   li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
   liEven[i].style.background = '#f4f4f4';
}