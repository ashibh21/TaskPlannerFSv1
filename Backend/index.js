const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const PORT = 3000;
const { todo } = require("./db");
app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  console.log(createPayload);
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload) {
    res.status(403).json({
      msg: "Wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const data = await todo.find({});
  res.json({
    msg: data,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(403).json({
      msg: "Wrong inputs",
    });
    return;
  }
  await todo.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "marked",
  });
});

app.listen(PORT);
