const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/todo", function (res, req) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload) {
    res.status(403).json({
      msg: "Wrong inputs",
    });
    return;
  }
});

app.get("/todos", function (res, req) {
  res.json({
    msg: "Working",
  });
});

app.put("/completed", function (res, req) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(403).json({
      msg: "Wrong inputs",
    });
    return;
  }
});

app.listen(PORT);
