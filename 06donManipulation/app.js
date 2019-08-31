document.body.addEventListener('click', deleteItem);
document.body.addEventListener('click', deleteAllItems);
document.body.addEventListener('submit', addItem);

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
   if (e.target.className === 'btn' || e.type === 'submit') {
      // let test = document.querySelector('#task-form').children[0].children[0].value;
      let newTask = document.querySelector('#task').value;
      // console.log(newTask);
      // This is how we get the value of the "New Task"!

      var li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(newTask));

      var link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';

      li.appendChild(link);
      document.querySelector('ul.collection').appendChild(li);

      // okay, this is not working, I can't add a different value otherwise they delete the old ones

      console.log(link);
      console.log(li);
   }
}