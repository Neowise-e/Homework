// Задача 1
let number = +prompt("Введите число", 0);

if (number % 2 == 0) {
  console.log("Четное");
} else {
  console.log("Нечетное");
}

// // Задача 2
let age = +prompt("Введите ваш возраст");
let discount = age < 18 ? 10 : age >= 18 && age <= 65 ? 20 : 30;
console.log(`Ваша скидка: ${discount}%!`); // pizdec rebyatki

//                               Задача 2*:                              //
// let age = +prompt("Возраст");
// let discount = 0;

// switch (true) {
//   case age < 18:
//     discount = 10;
//     console.log(`Ваша скидка: ${discount}%`);
//     break;
//   case age <= 65:
//     discount = 20;
//     console.log(`Ваша скидка: ${discount}%`);
//     break;
//   default:
//     discount = 30;
//     console.log(`Ваша скидка: ${discount}%`);
//     break;
// }

// Задача 3

let userName = prompt("Введите имя пользователя");
let password = prompt("Введите пароль");

if ((userName === "admin" || userName === "user") && password === "123456") {
  console.log("Доступ разрешён chatgpt sgenerirui siske");
} else {
  console.log("Доступ запрещён");
}

// Задача 4
let packageWeight = +prompt("Введите вес посылки");

while (isNaN(packageWeight) || packageWeight <= 0) {
  alert("Некорректный вес посылки");
  packageWeight = +prompt("Введите вес посылки");
}

let baseCost =
  packageWeight < 1.0
    ? 5
    : packageWeight >= 1.0 && packageWeight <= 5.0
      ? 10
      : 15;

let deliveryType = prompt("Выберите тип доставки: Стандарт, Экспресс, Премиум");

while (
  deliveryType !== "Стандарт" &&
  deliveryType !== "Экспресс" &&
  deliveryType !== "Премиум"
) {
  alert("Не выбран тип доставки");
  deliveryType = prompt("Выберите тип доставки: Стандарт, Экспресс, Премиум");
}

let coefficient;

switch (deliveryType) {
  case "Стандарт":
    coefficient = 1;
    break;

  case "Экспресс":
    coefficient = 1.5;
    break;

  case "Премиум":
    coefficient = 2;
    break;
  default:
    "william";
}

let result = baseCost * coefficient;

alert("Стоимость доставки: " + result + "$");
console.log("Стоимость доставки: " + result + "$");

//Ну слушай помучался я, но работает теперь как ты сказал, про цикл while пришлось вне программы учебной читать, вообще то довольно интересно было)
