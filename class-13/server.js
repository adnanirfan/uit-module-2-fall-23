const express = require("express");

const app = express();

const todos = [
  {
    id: "24231423",
    text: "My new todo 1",
    isCompleted: true,
  },
  {
    id: "24231423",
    text: "My new todo 1",
    isCompleted: true,
  },
  {
    id: "24231423", // generate random ID
    text: "My new todo 1",
    isCompleted: false,
  },
];

app.use(express.json());

// CRUD
/* 
    Create 
    Read
    Update
    Delete
*/
app.get("/todo", (req, res) => {
  res.json(todos);
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  const newTodo = req.body.data;
  todos.push(newTodo);

  res.json("Todo Added Successfully");
});

app.put("/todo/:index", (req, res) => {
  const { index } = req.params;
  const { data } = req.body;

  todos[index] = data;

  res.json("Todo Updated Successfully");
});

app.delete("/todo/:index", (req, res) => {
  const { index } = req.params;

  todos.splice(index, 1);

  res.json("Todo Deleted Successfully");
});

app.listen(8000, () => {
  console.log("Server listening at PORT: 8000");
});
