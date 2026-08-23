// Задание 1 ===========================================
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);
console.log(users);

// Задание 2 ========================================

function getUserAverageAge(array) {
  let avgAge = 0;
  for (let i = 0; i < users.length; i++) {
    avgAge += users[i].age;
  }
  return avgAge / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3 ==========================================

function getAllAdmins(array) {
  let admins = [];
  array.forEach(obj => {
    if (obj.isAdmin === true) {
      admins.push(obj);
    }
  });
  return admins;
}
console.log(getAllAdmins(users));

//очень простое задание, которое заняло кучу времени ахах

// Задание 4 ===============================================

function first(array, n) {
  let firstElements = [];
  for (let i = 0; i < n; i++) {
    firstElements.push(array[i]);
  }
  return firstElements;
}
console.log(first(users, 3));

// function firstNewMethod(array, n){
//     return array.slice(0, n)
// }
// console.log(firstNewMethod(users, 3)) - узнал про более короткий вариант такого метода
