
const vegetables = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
];

const findBanana = vegetables.find(vegetable => {
    return vegetable.name === 'banana';
});
console.log(findBanana);

// Filter function
const filterFruit = vegetables.filter(vegetable => vegetable.type === 'fruit');
console.log(filterFruit);
const filterOutFruit = vegetables.filter(vegetable => vegetable.type !== 'fruit');
console.log(filterOutFruit);


// map function
const productNames = vegetables.map(vegetable => vegetable.name);
console.log(productNames);
const productTypes = vegetables.map(vegetable => vegetable.type);
console.log(productTypes);



// forEach function
vegetables.forEach(vegetable => {
    console.log(vegetable.name);
});
