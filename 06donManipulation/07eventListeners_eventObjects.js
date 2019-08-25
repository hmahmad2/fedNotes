// EVENT LISTENERS AND THE EVENT OBJECT

document.querySelector('.clear-tasks').addEventListener('click', function(e) {
   console.log('Hello World');
   e.preventDefault(); // prevents default behavior
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {
   // console.log('clicked');

   let val;

   val = e;

   // EVENT TARGET LISTENER
   val = e.target;
   val = e.target.id;
   val = e.target.className;
   val = e.target.classList;
   e.target.innerHTML = 'Hello';

   // EVENT TYPE
   val = e.type;

   // Coordinate event relative to the window
   val = e.clientY;
   val = e.clientX;

   // Coordinates relative to the Element
   val = e.offsetY;
   val = e.offsetX;


   console.log(val);
};