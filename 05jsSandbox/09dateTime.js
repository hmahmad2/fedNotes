let val;

const today = new Date();
val = today;
// val = today.toString();

let birthday = new Date('9-9-1991 11:25:00');
birthday = new Date('September 9 1991');
birthday = new Date('9/9/1991');
val = birthday;

// getMonth is index-based, so June reads as 5
val = today.getMonth();
val = today.getDate();
// getDay is index-based as well. Sunday = 0
val = today.getDay();
// getFullYear is how you get the current year
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1218);
birthday.setHours(3);
birthday.setMinutes(49);


// output
console.log(birthday);
// console.log(val);