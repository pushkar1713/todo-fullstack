import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="border-black border-2 m-3 p-3"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <input
        type="text"
        className="border-black border-2 m-3 p-3"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <button
        className="bg-green-300 m-3 p-3x w-[100px] ml-[45%]"
        onClick={async () => {
          const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),

            headers: {
              "Content-Type": "application/json",
            },
          });

          await response.json();

          alert("Todo Addded");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
