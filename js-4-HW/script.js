// Задача 1 ===================================================

const calculateFinalPrice = (price, discount, tax) => {
  tax = (price - discount) * tax;
  return price - discount + tax;
};
console.log(calculateFinalPrice(100, 50, 0.4));

// Задача 2 ====================================================

const checkAccess = (userName, password) => {
  if (userName === "admin" && password === "123456") {
    return "Доступ разрешён";
  } else {
    return "Доступ запрещён";
  }
};

console.log(checkAccess("admin", "123456"));

// Задача 3 ======================================================

const getTimeOfDay = num => {
  if (num <= 5) {
    return "Ночь";
  } else if (num <= 11) {
    return "Утро";
  } else if (num <= 17) {
    return "День";
  } else if (num <= 23) {
    return "Вечер";
  } else {
    return "Некорректное время";
  }
};
console.log(getTimeOfDay(1));

// Задача 4 =======================================================

const findFirstEven = (start, end) => {
  for (start >= 0; start <= end; start++) {
    if (start % 2 == 0) {
      return start;
    }
  }
  return "Четных чисел нет";
};
console.log(findFirstEven(1, 5));
