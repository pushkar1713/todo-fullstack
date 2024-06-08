const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>
            {todo.completed == true ? "completed" : "mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
