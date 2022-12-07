const backendURL = 'http://localhost:3000';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const getTodos = async () => {
  const res = await fetch(`${backendURL}/api/todo`, {
    method: 'GET',
    headers: headers,
  });
  const todos = await res.json();
  console.log(todos);
  return todos;
};

const postTodo = async ({ title, body }) => {
  const res = await fetch(`${backendURL}/api/todo`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ title, body }),
  });
  const todo = await res.json();
  console.log(todo);
  return todo;
};

export {
  getTodos,
  postTodo,
};
