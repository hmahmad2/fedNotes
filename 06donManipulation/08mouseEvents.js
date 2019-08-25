const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// MOUSE EVENTS

// click
clearBtn.addEventListener('click', runEvent);

// double-click
clearBtn.addEventListener('dblclick', runEvent);

// mousedown
clearBtn.addEventListener('mousedown', runEvent);

// mouseup
clearBtn.addEventListener('mouseup', runEvent);

// mouseenter
card.addEventListener('mouseenter', runEvent);

// mouseout
card.addEventListener('mouseout', runEvent);

// mousemove
card.addEventListener('mousemove', runEvent);


// Event Listener
function runEvent(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   e.preventDefault();
}