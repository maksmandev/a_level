const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
};

const getTodos = () => {
  delay(2000)
    .then(() => fetch("https://jsonplaceholder.typicode.com/todos"))
    .then(res => res.json())
    .then(data => console.log(data));
};
getTodos();

const fetchTodos = async () => {
  try {
    await delay(2000);
    //FIXME: error this http
    const res = await fetch("ttps://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    return new Error(e);
  } finally {
    console.log("restart");
  }
};

fetchTodos();
