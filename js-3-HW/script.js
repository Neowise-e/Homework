// =============ЗАДАЧА 1===================

for (i = 1; i < 21; i++) {
  if (i % 4 !== 0) {
    console.log(i);
  } else if (i % 4 == 0){
    console.log(`${i} - Я делюсь на 4 без остатка`) // Это допом сделал
  }
}

// =============ЗАДАЧА 2====================

let result = +prompt("Введите число: ");

let factorial = 1;

for (let i = 1; i <= result; i++) {
  factorial = factorial * i;
}
console.log(factorial); //Пришлось подглядывать в инете, час протупил, так и не додумался как это сделать

//=====================ЗАДАЧА 3============

let tag = "";


for (let k = 0; k < 4; k++){
for (let i = 0; i < 1; i++) {
  for (let j = 0; j <= 3; j++) {
    tag += " O X";
  }
  tag += "\n"
}
for (let i = 0; i < 1; i++){
  for (let j = 0; j <= 3; j++){
    tag += " X O"
  }
  tag += "\n"
}
}


console.log(tag);
