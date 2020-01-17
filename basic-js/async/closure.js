function create(n) {
  return function() {
    console.log(1000 * n);
  };
}

//когда мы передали 24 в функцию для анонимной 24 осталось внутри (замкнулось)
const res = create(24);
// console.log("TCL: res", res);
// console.log("TCL: res", res());

function inc(n) {
  return function(num) {
    return n + num;
  };
}

const add = inc(5);

// console.log(add(4)); //9

// const urlGenerator = domain => url => `https://${url}.${domain}`;

// const comUrl = urlGenerator("com");
// const uaUrl = urlGenerator("ua");

// console.log(comUrl("google"));
// console.log(uaUrl("dou"));

function log(flag) {
  console.dir(this);
  console.log("TCL: log -> flag", flag);
}

const user = new Object({
  name: "Maksym",
  age: 22
});

const user1 = new Object({
  name: "Oleg",
  age: 22
});

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  };
}

bind(user, log)("test");
bind(user1, log)("test1");
