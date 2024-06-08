const Todo = ({ todos }) => {
  return (
    <div className="flex flex-col items-center m-3 p-3">
      {todos.map((todo) => (
        <div className="border-black border-2 m-3 p-3 w-[500px]">
          <h1 className="p-1 m-1"> title : {todo.title}</h1>
          <h2 className="p-1 m-1">description : {todo.description}</h2>
          <button
            className="bg-green-300 m-1 p-1"
            onClick={async () => {
              await fetch("http://localhost:3000/completed", {
                method: "PUT",
                body: JSON.stringify({
                  _id: todo._id,
                }),

                headers: {
                  "Content-Type": "application/json",
                },
              });

              alert("Marked As Completed");
            }}
            disabled={todo.completed == true}
          >
            {todo.completed == true ? "completed" : "mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
