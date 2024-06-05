const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db/index");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json);

app.post("/todo", async function (req, res) {
  const updatedPayload = req.body;
  const parsedPayload = createTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you send the wrong input",
    });
    return;
  }

  await todo.create({
    title: updatedPayload.title,
    descripton: updatedPayload.descripton,
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
  const parsedPayload = createTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you send the wrong input",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
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
