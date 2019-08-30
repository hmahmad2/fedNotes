document.body.addEventListener('click', deleteItem);
document.body.addEventListener('click', deleteAllItems);
document.body.addEventListener('click', addItem);

function deleteItem(e) {
   if (e.target.parentElement.classList.contains('delete-item')) {
      console.log('Deleting item');
      e.target.parentElement.parentElement.remove();
   }
}

function deleteAllItems(e) {
   if (e.target.classList.contains('clear-tasks')) {
      console.log("Deleting all items");
      // for (var i = 0; i < )
      let lis = document.querySelectorAll('li');
      lis.forEach(function(li) {
         console.log(li.className);
         li.remove();
      });
   }
}

function addItem(e) {
   if (e.target.className === 'btn') {
      // let test = document.querySelector('#task-form').children[0].children[0].value;
      let test = document.querySelector('#task').value;
      console.log(test);
      // This is how we get he value of the "New Task"!
   }
}