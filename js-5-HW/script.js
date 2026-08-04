// Задача 1 ======================================
const person = {
  name: "Alex",
  age: 22,
  profession: "med",
};

// =======================================================================

for (personKey in person) {
  console.log(`${personKey}:`, person[personKey]);
}

// Задача 2 ============================================================

const jepa = {};

const isEmpty = object => {
  for (let key in object) {
    if (key !== undefined) {
      return false;
    }
  }
  return true;
};
console.log(isEmpty(jepa));

// Задача 3 ==============================================================

const task = {
  title: "object",
  description: "objectdescription",
  isCompleted: false,
};

for (let key in task) {
  console.log(`${key}:`, task[key]);
}

const cloneAndModify = (object, modifications) => {
  const modified = { ...object, ...modifications };
  for (let key in modified) {
    console.log(`${key}:`, modified[key]);
  }
};
cloneAndModify(task, {
  isCompleted: true,
  taskAddition: "Просто кошмарище, надо ещё почитать учебник...",
  taskHelp:
    "ещё узнал, что можно не в переменную делать изменения, а вот так через спред",
});

// ==== допом хочу сделать======

cloneAndModify(person, { like: "a boss", jesus: "christ" });

// Задача 4 ================================================================

const testObject = {
  method1: () => {
    console.log("i'm a function");
  },
  method2: () => {
    console.log("i'm a function too");
  },
  notAMethod: "bro i'm definitely not a method",
};

const callAllMethods = object => {
  let doesHaveMethod = false;
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
      doesHaveMethod = true;
    }
  }
  if ((doesHaveMethod == false)) {
    console.log("нет методов, братишка");
  }
};
callAllMethods(testObject);
