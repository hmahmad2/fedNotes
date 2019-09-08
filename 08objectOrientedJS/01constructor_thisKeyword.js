// const hamaad = {
//    name: 'Hamaad',
//    age: 31
// }

// console.log(hamaad.age);

// function Person(name) {
//    this.name = 'Hamaad';
// }
// const ham = new Person();
// const dam = new Person();
// console.log(ham);
// console.log(dam);

// function Person(name) {
//    this.name = name;
// }
const ham = new Person('Ham', 15);
const dam = new Person('Dam', 69);
// const ram = new Person('Ram');
// console.log(ham);
// console.log(dam);

///////////////////////////////////////////////////////

// function Person(name, age) {
//    this.name = name;
//    this.age = age;
//    console.log(this);
// }

// console.log(this);
// this.alert(1);

// function Person(name) {
//    this.name = name;
//    console.log(this);
// }

///////////////////////////////////////////////////////////////

function Person(name, dob) {
   this.name = name;
   this.dob = new Date(dob);
   this.calculateAge = function() {
      const dif = Date.now() - this.dob.getTime();
      const ageDate = new Date(dif);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
}

const hamaad = new Person('Hamaad', '9-13-1988');
console.log(hamaad.calculateAge());






// remember OAuth, NodeHTML, Promises/Closures, APIs, CRUD operations

// CRUD
   // Create
      // create a new user
   // Read
      // read the log-in credentials
      // get status updates on friends
      // look at posts, images, etc
   // Update
      // post data and put(edit) data
      // create new posts, upload vids and images
      // update(edit) existing posts and content
   // Delete
      // delete a post
      // delete your account


// Udemy (don't pay more than $10 for courses, use coupons)
   // The Modern JavaScript Bootcamp (2019)
      // by Andrew Mead
   // The Complete JavaScript Course 2019: Build Real Projects!
      // by Jonas Schmedtmann