const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db/index");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const updatedPayload = req.body;
  const parsedPayload = createTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "you send the wrong input",
    });
    return;
  }

  await todo.create({
    title: updatedPayload.title,
    description: updatedPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({}); // find always returns a promise
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "you send the wrong input",
    });
    return;
  }
  await todo.findOneAndUpdate(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo marked as completed",
  });
});

app.listen(3000);
