// document.body.addEventListener('click', deleteItem);
// document.body.addEventListener('click', deleteAllItems);
// document.body.addEventListener('submit', addItem);
// document.body.addEventListener('keydown', filterItems);

function deleteItem(e) {
   if (e.target.parentElement.classList.contains('delete-item')) {
      // console.log('Deleting item');
      e.target.parentElement.parentElement.remove();
   }
}

function deleteAllItems(e) {
   if (e.target.classList.contains('clear-tasks')) {
      // console.log("Deleting all items");
      let lis = document.querySelectorAll('li');
      lis.forEach(function(li) {
         // console.log(li.className);
         li.remove();
      });
   }
}

function addItem(e) {
   // if (e.target.className === 'btn' || e.type === 'submit') {
   if (e.target.className === 'btn') {
      // let test = document.querySelector('#task-form').children[0].children[0].value;
      // console.log('adding item');

      const newTask = document.querySelector('#task').value;
      // console.log(newTask);
      // This is how we get the value of the "New Task"!

      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(newTask));

      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';

      li.appendChild(link);
      document.querySelector('ul.collection').appendChild(li);

      // okay, this is not working, I can't add a different value otherwise they delete the old ones

      // console.log(link);
      // console.log(li);


      e.preventDefault();
      // Okay, adding this makes it work properly... what's the default?
   }



   function filterItems(e) {
      // if (e.target.id === 'filter'){
      //    console.log(e.target.id);
      // }
      var key = e.which || e.keyCode;
      if (key === 13 && e.target.id === 'filter') {
         // console.log(e.target);
         // console.log('cat');
         
         // e.preventDefault();
      }
   }

   document.body.addEventListener('keydown', filterItems);
}










// The solutions
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// fucntion to load all even listners
function loadEventListeners() {
   // add task even
   form.addEventListener('submit', addTask);
   // remove task event
   taskList.addEventListener('click', removeTask);
   // clear all task events
   clearBtn.addEventListener('click', clearTasks);
   // // filter task events
   filter.addEventListener('keyup', filterTasks);
}

// Add Task Function
function addTask(e) {
   if (taskInput.value === '') {
      alert('Add a task');
      return;
   }

   // create an li element
   const li = document.createElement('li');
   // add a class
   li.className = 'collection-item';
   // create text-node and append to li
   li.appendChild(document.createTextNode(taskInput.value));
   // console.log(li);

   // create new link element
   const link = document.createElement('a');
   link.className = 'delete-item secondary-content';
   link.innerHTML = '<i class="fa fa-remove"></i>';
   li.appendChild(link);

   // append li to ul
   taskList.appendChild(li);

   taskInput.value = '';

   e.preventDefault();
}

// Remove Task Function
function removeTask(e) {
   // console.log(e.target);
   if (e.target.parentElement.classList.contains('delete-item')) {
      // console.log(e.target.parentElement);
      // e.target.parentElement.parentElement.remove();
      if (confirm('Are you sure?')) {
         e.target.parentElement.parentElement.remove();
      }
   }

   // if (e.target.parentElement.classList.contains('delete-item')) {
   //    if (confirm('Are you sure?')) {
   //       e.target.parentElement.parentElement.remove();
   //    }
   // }
}

// Clear Tasks function
function clearTasks(e) {
   // console.log(e.target);
   // if (taskList.hasChildNodes) {
   //    alert('No tasks to clear');
   // }

   // if (e.target.classList.contains('clear-tasks')) {
   //    // get all the list items
   //    const li = document.querySelectorAll('li');
   //    // iterate through this list
   //    li.forEach(function(lis) {
   //       // delete each list item
   //       lis.remove();
   //    });
   // }

   // really easy.
   // taskList.innerHTML = '';

   // while loop instead
   while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
   }
}

// Filter Task event
function filterTasks(e) {
   // console.log(e.target.value);

   // var fil = e.target.value.toLowerCase();
   // console.log(fil);

   // get list items in .collection-item class
   // create querySelector for this (run an if/else statement inside it) (maybe put the selector inside the if statement...)
   // returns a nodelist
   // filter this? Do something to it
   // inside this, new var that grabs stuff in the list
   // do an if statement to compare if the filtered word is in hte text
   // else hide the display



   // The REAL solution
   const text = e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').forEach(function(task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) > -1) {
         task.style.display = 'block';
      } else {
         task.style.display = 'none';
      }
   });



   
   // This is how I do it... this is the array (the [0] is for the element)
   // var tList = document.querySelectorAll('.collection-item')[0].textContent.toLowerCase();
   // console.log(tList);

   // let tList = Array.from(document.querySelectorAll('.collection-item').value);
   // console.log(tList);

   // if (document.querySelectorAll('.collection-item').filter(function(lists) {
   //    // function
   //    return lists.indexOf(fil) > -1;
   // })) {
   //    // something
   //    continue;
   // } else {
   //    // hide the entire li element?
   // }

   // document.querySelectorAll('.collection-item').filter(function(lists) {
   //    if (lists.indexOf(fil) > -1) {
   //       continue;
   //    } else {
   //       lists.display = 'none';
   //    }
   // });

   // const cat = tList.children.filter(list => list.indexOf(fil) > -1);



   // for (var i = 0; i < taskList.; i++) {
   //    console.log(taskList.children[i].textContent);
   // }

   // var tList = taskList.filter(function(t) {
   //    return fil.indexOf(taskList.children) > -1
   // });
   // console.log(tList);

   // if ()
   // look at all the list items
   // taskList.forEach(function(fil, input) {
   //    if (!fil.value.contains(e.target.value)) {
   //       fil.display = 'hidden';
   //    }
   // });
   // const newList = taskList.filter(nList => nList.value.contains(e.target.value));
   // taskList.innerHTML = newList;
}