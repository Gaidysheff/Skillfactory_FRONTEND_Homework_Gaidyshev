
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
