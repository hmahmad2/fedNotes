// EVENT Bubbling

// BE VERY PRECISE ON HOW YOU ACTIVATE EVENTS

// document.querySelector('.card-title').addEventListener('click', function() {
//    console.log('card-title');
// });

// document.querySelector('.card-component').addEventListener('click', function() {
//    console.log('card-component');
// });

// document.querySelector('.card').addEventListener('click', function() {
//    console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//    console.log('col');
// });

// EVENT DELEGATION
const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);
// function deleteItem() {
//    console.log(('delete item'));
// }

document.body.addEventListener('click', deleteItem);
// function deleteItem(e) {
//    if (e.target.parentElement.className === 'delete-item secondary-content') {
//       console.log(('delete item'));
//    }
// }

function deleteItem(e) {
   if (e.target.parentElement.classList.contains('delete-item')) {
      console.log('delete item');
      e.target.parentElement.parentElement.remove();
   }
}
