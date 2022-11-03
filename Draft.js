// let timeOn = "23:43";
// let timeOff = "04:14";
// let getDate = (string) =>
//   new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
// let difference = getDate(timeOff) - getDate(timeOn);
// let differenceResult, hours, minutes;
// if (difference > 0) {
//   differenceResult = difference;
//   hours = Math.floor((differenceResult % 86400000) / 3600000);
//   minutes = Math.round(((differenceResult % 86400000) % 3600000) / 60000);
// } else {
//   differenceResult = Math.abs(getDate(timeOn) - getDate(timeOff));
//   hours = Math.floor(24 - (differenceResult % 86400000) / 3600000);
//   minutes = Math.round(60 - ((differenceResult % 86400000) % 3600000) / 60000);
// }

// let result = hours + ":" + minutes;
// console.log(result);

class Parent {
  constructor(ownCity) {
    this.ownCity = ownCity || "Moscow";
    this.hasFlat = true;
  }

  getInfo() {
    console.log(`I live in ${this.ownCity}`);
    return "I live in " + this.ownCity;
  }
}

const parent = new Parent("Moscow");
parent.getInfo();

class Child extends Parent {
  constructor(isStudent, city, ownCity) {
    super(ownCity);
    this.isStudent = isStudent;
    this.city = isStudent ? city : ownCity;
  }

  getInfo() {
    if (this.isStudent) {
      return `I live and study in ${this.city}`;
    } else {
      return super.getInfo();
    }
  }
}

const student = new Child(true, "St.Petersburg");
console.log(student.getInfo());

const employee = new Child(false, "New York");
console.log(employee.getInfo());

console.log(Child instanceof Parent); // true

class Animal {}

console.log(Child instanceof Animal); // false
