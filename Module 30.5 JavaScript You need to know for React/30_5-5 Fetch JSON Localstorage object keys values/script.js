// Normal object to JSON
const person = {name: 'John', age: 30, job: 'developer'};
const personJSON = JSON.stringify(person);
console.log(personJSON);
// JSON to Normal object
const personJSON1 = '{"name":"John","age":30,"job":"developer"}';
const person1 = JSON.parse(personJSON1);
console.log(person1);