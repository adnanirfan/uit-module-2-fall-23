const express = require("express");

const app = express();
console.log("SERVER is Starting ...");
const todos = [
  {
    id: new Date().getTime(),
    text: "My new todo 1",
    isCompleted: false,
  },
  {
    id: new Date().getTime(),
    text: "My new todo 2",
    isCompleted: true,
  },
  {
    id: new Date().getTime(),
    text: "My new todo 3",
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
  console.log("GET Todos...");
  res.json(todos);
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  const newTodo = req.body;
  newTodo.id = new Date().getTime();
  todos.push(newTodo);

  res.json("Todo Added Successfully");
});

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  // const { data } = req.body;

  const index = todos.findIndex((todo) => {
    console.log(todo.id, id);
    return todo.id == id;
  });

  // todos[index] = { ...req.body, id };
  todos[index].text = req.body.text;
  todos[index].isCompleted = req.body.isCompleted;
  
  console.log(index, req.body);

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
