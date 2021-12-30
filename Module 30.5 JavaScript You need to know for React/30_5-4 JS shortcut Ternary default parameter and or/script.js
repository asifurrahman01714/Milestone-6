// Conditional
let money = 100;
// let food;
if (money > 100) {
    food = 'vegetables';
} else {
    food = 'Burger';
}
console.log(food);
// Ternary
let money1 = 100;
let food1 = money1 > 100 ? 'vegetables' : 'Burger';
console.log(food1);

// Ternary with function
const active = true;
let resultFunction;
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
active? resultFunction= add(1, 2) : resultFunction = subtract(1, 2);
console.log(resultFunction);

let x;
active && (x = 1);
console.log(x);

let y = active || 1;
console.log(y);

// Default parameter in function
function add2(a, b = 1) {
    return a + b;
}
console.log(add2(1));
console.log(add2(1,3));