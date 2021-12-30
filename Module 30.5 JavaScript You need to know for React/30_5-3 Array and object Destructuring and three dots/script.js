// Array destructure
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
const restWithoutBracket = rest.join(', ');
console.log(restWithoutBracket);

// Object destructure
const person = {name: 'John', age: 30, job: 'developer'};
const {name, age, job} = person;
console.log(name, age, job);

// Create object shortcut
const name1="Asif";
const age1=30;
const job1="developer";
const person1={name: name1,age: age1,job: job1};
//or
const person2={name1,age1,job1};
console.log(person1);
console.log(person2);
