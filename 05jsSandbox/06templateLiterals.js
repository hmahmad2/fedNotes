const name = "John";
const age = 32;
const job = "Web Developer";
const city = "Chicago";

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
         '<li>Name: ' + name + '</li>' + 
         '<li>Age: ' + age + '</li>' +
         '<li>Job: ' + job + '</li>'+ 
         '<li>City: ' + city + '</li>' +
      '</ul>';

// Template Strings
   // using backticks `` and ${}
   // much cleaner and easier to write

function hello() {
   return "Hello poop man";
}

html =  `
   <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${4+4}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'Over 30':'Under 30'}</li>
   </ul>
`

document.body.innerHTML = html;