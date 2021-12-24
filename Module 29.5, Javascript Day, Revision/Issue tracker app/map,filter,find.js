const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
const output = [];

const mapNumbers = numbers.map(number => number * 2);
console.log('Multiplying every single number'+mapNumbers);

const filterNumbers = numbers.filter(number => number > 5);
console.log('filtering numbers which are greater than 5 : '+filterNumbers);

const findNumbers = numbers.find(number => number > 5);
console.log('finding the first number which is greater than 5 : '+ findNumbers);