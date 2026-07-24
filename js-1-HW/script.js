//Задача 1
let firstName = "Андрей ";
let lastName = "Иванов";
let isStudent = Boolean(1);
// Задача 2
let age = 18;
let currentYear = 2026;
let birthYear = currentYear - age;
// console.log(birthYear);

//Задача 3
console.log(`Меня зовут ${firstName + lastName}, мне ${age} лет. Я ученик курса: ${isStudent}.`);

// Задача 4

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean (' ');
let result = a + b + c + d + e;


console.log(result);
// 123456789falsetrue

console.log(+a + b + c + d + e);
// 1369