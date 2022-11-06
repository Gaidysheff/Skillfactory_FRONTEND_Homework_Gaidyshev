const objState = {
  state: "Russia",
  planet: "Earth",
  name: "Ivan",
  surname: "Ivanov",
  sex: "male",
  year_of_birth: 2000,
  month_of_birth: "Ocober",
  day_of_birth: 20,
};

const str = "name";

const myFnOne = function (str, obj) {
  let count = 0;
  for (const key in obj) {
    key === str ? count++ : count += 0;
  }
  count == 0
    ? console.log(false, `- У объекта нет свойства с именем "${str}"`)
    : console.log(true, `- У объекта есть свойство с именем "${str}"`);
};

const myFnTwo = function (str, obj) {
  Object.keys(obj).forEach((key) => {
    key == str ? console.log(key, ":", obj[key]) : console.log(false);
  });
};

myFnOne(str, objState);
console.log("--------------------------");
myFnTwo(str, objState);
