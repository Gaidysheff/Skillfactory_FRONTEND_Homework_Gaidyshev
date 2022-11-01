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

const myFn = function (obj) {
  return `Mr./Mrs. ${obj.name} ${obj.surname} lives in ${obj.city} (${obj.state}).\nHe/She was born on the ${obj.day_of_birth} of ${obj.month_of_birth} ${obj.year_of_birth}`;
};

console.log(myFn(objPerson));
