// getElementbyId()
console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

// Changing styles
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '30px';

const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '30px';
// taskTitle.style.display = 'none';

//////////////////////////////////////////////////////////////

// document.querySelector()

// Get Element by ID
console.log(document.querySelector('#task-title'));
// Get Element by Class
console.log(document.querySelector('.card-title'));
// Get ELement by Tag(selector, itself)
console.log(document.querySelector('h5'));


document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';

document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(2)').textContent = 'Hello World';

// Odds and Evens
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

