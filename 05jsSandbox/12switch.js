// Switches -- another way to validate conditions, works the same way as an if statement. Use case: when losts of cases, and in order to avoid repeated else-if over and over.

// example 1
const color = 'yee';
switch (color) {
   case 'red':
      console.log('color is red');
      break;
   case 'blue':
      console.log('color is blue');
      break;
   default:
      console.log('color is not red or blue');
      break;
}

// example 2

const today = new Date();
switch(today.getDay()) {
   case 0:
      console.log('It is Sunday');
      break;
   case 1:
      console.log('It is Monday');
      break;
   case 2:
      console.log('It is Tuesday');
      break;
   case 3:
      console.log('It is Wednesday');
      break;
   case 4:
      console.log('It is Thursday');
      break;
   case 5:
      console.log('It is Friday');
      break;
   case 6:
      console.log('It is Saturday');
      break;
   default:
      console.log('Invalid input');
      break;
}

// better version
let day;
switch(new Date().getDay()) {
   case 0:
      day = 'Sunday';
      break;
   case 1:
      day = 'Monday';
      break;
   case 2:
      day = 'Tuesday';
      break;
   case 3:
      day = 'Wednesday';
      break;
   case 4:
      day = 'Thursday';
      break;
   case 5:
      day = 'Friday';
      break;
   case 6:
      day = 'Saturday';
      break;
}
console.log(`Today is ${day}`);