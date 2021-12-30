const vegetables = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
];
const productNames = vegetables.map(vegetable => vegetable.name);
console.log(productNames);
const productTypes = vegetables.map(vegetable => vegetable.type);
console.log(productTypes);
