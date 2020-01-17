const person = Object.create(
  {
    getAge() {
      return new Date().getFullYear() - this.birthYear;
    }
  },
  {
    name: {
      value: "Maksym",
      enumerable: true,
      writable: true,
      configurable: true
    },
    birthYear: {
      value: 1997
    },
    age: {
      enumerable: true,
      get() {
        return new Date().getFullYear() - this.birthYear;
      }
    }
  }
);

console.log(person.__proto__);

for (let key in person) {
  person.hasOwnProperty(key) && console.log(key);
}
