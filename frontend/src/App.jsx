import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const data = await fetch("http://localhost:3000/todos");
    const json = await data.json();
    setTodos(json.todos);
  }

  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  );
}

export default App;
