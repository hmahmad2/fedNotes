const person = {
   firstName: 'Steve',
   lastName: 'Smith',
   age: 30,
   email: 'steve@aol.com',
   hobbies: ['family time', 'coding', 'chess'],
   address: {
      city: 'Chicago',
      state: 'IL'
   },
   BirthYear: function() {
      return 1986;
   }
};

let val;

val = person;

// get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.city;
val = person.address['state'];
val = person.BirthYear();

// in objects, we can access other properties
   // 'This' keyword
   const person2 = {
      age: 32,
      getBirthYear: function() {
         return 2019 - this.age;
      }
   }
   val2 = person2.getBirthYear();

//output
console.log(val);
console.log(val2);

// Arrays made of objects
const people = [
   {name: 'Bob', age:81 },
   {name: 'Tim', age:46 },
   {name: 'Wes', age:65 },
   {name: 'Ray', age:92 },
   {name: 'Jeb', age:23 },
   {name: 'Jim', age:44 },
]
for (let i = 0; i < people.length; i++) {
   console.log(people[i].name);
}