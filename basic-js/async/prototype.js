const person = {
  name: "Maksym",
  age: 22,
  sayHello() {
    console.log("Hello own");
  }
};

console.log("TCL: person", person);

const user = new Object({
  name: "Maksym",
  age: 22
});

// create using person as prototype
const human = Object.create(person);

//has name from person, but we can add own 'name'
human.name = "Oleg";
console.log("TCL: human", human);

// add method for global 'Object'
Object.prototype.sayHello = () => {
  console.log("Hello");
};

// can use sayHello from 24 raw
console.log("TCL: user", user.sayHello);
