// нет this
const arrowHello = () => {
  console.log(this);
};

function hello() {
  console.log(this);
}

const person = {
  name: "Maksym",
  age: 22,
  sayHello: hello,
  logInfo: function(city) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`City is ${city}`);
    console.groupEnd();
  }
};

const pet = {
  name: "Richard",
  age: 12
};
// вызвать конетекст и вернуть новый метод
const petInfoLog = person.logInfo.bind(pet, "Kharkiv");
// то же самое только сразу вызвать
person.logInfo.call(pet, "Kharkiv");
//то же что и apply но параметры передаются в массиве
person.logInfo.apply(pet, ["Kharkiv"]);

petInfoLog();

const numbers = [1, 2, 3, 4, 5];

Array.prototype.multBy = function(n) {
  console.log("multBy", this);
  return this.map(number => n * number);
};

console.log("TCL: numbers.multBy(3);", numbers.multBy(3));
