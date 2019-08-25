const form = document.querySelector('form');
// be more precise when getting a form in a page with multiple forms
// const taskInput = document.getElementById('task');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

form.addEventListener('submit', runEvent);

taskInput.value = "";

// Keyboard Events
taskInput.addEventListener('keydown', runEvent);
taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('keypress', runEvent);

// Other input events
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('input', runEvent);
taskInput.addEventListener('change', runEvent); // probably depricated




function runEvent(e) {
   console.log(`Event Type: ${e.type}`);
   console.log(e.target.value);
   heading.innerText = e.target.value;

   console.log(taskInput.value);
   e.preventDefault();
}