// =============ЗАДАЧА 1===================

// for (i = 1; i < 21; i++) {
//   if (i % 4 !== 0) {
//     console.log(i);
//   } else if (i % 4 == 0){
//     console.log(`${i} - Я делюсь на 4 без остатка`) // Это допом сделал
//   }
// }

// =============ЗАДАЧА 2====================

// let result = +prompt("Введите число: ");

// let factorial = 1;

// for (let i = 1; i <= result; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

//=====================ЗАДАЧА 3============

let line = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 4; j >= 1; j--) {
    line += "# "
  }
  line += "\n"
}
console.log(line);
