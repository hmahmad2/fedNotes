let val;

const list = document.querySelector('ul.collection');
// console.log(list);
// const listItem = document.querySelector('li.collection-item');
const listItem = document.querySelector('li.collection-item:first-child');
// console.log(listItem);

val = list;
val = listItem;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/*
   1 - Element
   2 - Attribute (depreciated)
   3 - Text node
   8 - Comment
   9 - Document itself
   10 - Doctype
*/ 

// Get Children Element Nodes
val = list;
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello World';

// Children of Children
val = list.children[3].children[0];
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// GET PARENT NODES
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// GET PREVIOUS SIBLING
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling;


console.log(val);