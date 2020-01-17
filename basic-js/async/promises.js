// console.log("request data...");
// setTimeout(() => {
//   console.log("preparing data...");
//   const data = {
//     name: "Maksym"
//   };
//   setTimeout(() => {
//     console.log("data resived", data);
//   }, 2000);
// }, 2000);

const p = new Promise((resolve, reject) => {
  fetch("https://randomuser.me/api?results=100")
    .then(res => resolve(res.json()))
    .catch(e => reject(e));
});

const p2 = new Promise((resolve, reject) => {
  fetch("https://randomuser.me/api?results=100")
    .then(res => resolve(res.json()))
    .catch(e => reject(e));
});

const p3 = new Promise((resolve, reject) => {
  fetch("https://randomuser.me/api")
    .then(res => resolve(res.json()))
    .catch(e => reject(e));
});

p.then(men => console.log(men)).catch(err => console.log("TCL: err", err));

p2.then(data => data.results.filter(user => user.gender === "male"))
  .then(men => console.log(men))
  .catch(err => console.log("TCL: err", err));

p3.then(data => data.results.filter(user => user.gender === "male"))
  .then(men => console.log(men))
  .catch(err => console.log("TCL: err", err));

Promise.all([p, p2, p3])
  .then(() => console.log("all"))
  .catch(e => console.log("e", e));
