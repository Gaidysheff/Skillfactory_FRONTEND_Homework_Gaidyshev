const objState = {
  state: "Russia",
  planet: "Earth",
};

const objCity = Object.create(objState);

objCity.city = "Ekaterinburg";
objCity.region = "Sverdlovsk";

const objPerson = Object.create(objCity);

objPerson.name = "Ivan";
objPerson.surname = "Ivanov";
objPerson.sex = "male";
objPerson.year_of_birth = 2000;
objPerson.month_of_birth = "Ocober";
objPerson.day_of_birth = 20;

// console.log(objState);
// console.log(objCity);
// console.log(objPerson);
// console.log("У объекта objCity прототип:", Object.getPrototypeOf(objCity));
// console.log("У объекта objPerson прототип:", Object.getPrototypeOf(objPerson));
// console.log("_____________________________");

const myFn = function (obj) {
  return `Mr./Mrs. ${obj.name} ${obj.surname} lives in ${obj.city} (${obj.state}).\nHe/She was born on the ${obj.day_of_birth} of ${obj.month_of_birth} ${obj.year_of_birth}`;
};

const myFnKeysValues = function (obj) {
  Object.keys(obj).forEach((key) => {
    console.log(key, ":", obj[key]);
  });
};

const myFnKeys = function (obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
};

const myFnKeys2 = function (obj) {
  Object.keys(obj).forEach((key) => {
    console.log(key);
  });
};

const myFnValues = function (obj) {
  Object.keys(obj).forEach((key) => {
    console.log(obj[key]);
  });
};

const myFnValues2 = function (obj) {
  Object.values(obj).forEach((value) => {
    console.log(value);
  });
};

console.log(myFn(objPerson));
console.log("");
console.log("____own keys : values from objPerson____");
myFnKeysValues(objPerson);
console.log("");
console.log("_____own keys from objPerson___________");
myFnKeys(objPerson);
console.log("");
console.log("_____own keys from objPerson Vers.2_____");
myFnKeys2(objPerson);
console.log("");
console.log("_____own values from objPerson___________");
myFnValues(objPerson);
console.log("");
console.log("_____own values from objPerson Vers.2_____");
myFnValues(objPerson);
// console.log("_____all keys from objPerson___________");

// for (let key in objPerson) {
//   console.log(key);
// }

// console.log("______own keys from objPerson___________");

// for (let key in objPerson) {
//   if (objPerson.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
// console.log("____own keys : values from objPerson____");

// Object.keys(objPerson).forEach((key) => {
//   console.log(key, ":", objPerson[key]);
// });

// console.log("_______own values from objPerson_________");

// Object.values(objPerson).forEach((value) => {
//   console.log(value);
// });

// console.log("________own keys : values from objCity______________");

// Object.keys(objCity).forEach((key) => {
//   console.log(key, ":", objCity[key]);
// });
