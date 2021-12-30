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