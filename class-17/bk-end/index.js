// packages
import express, { request } from "express";
import morgan from "morgan";
import cors from "cors";
import { database_Connect } from "./config/db.js";
import { Todo } from "./models/todo.model.js";
import { User } from "./models/user.model.js";
import mongoose from "mongoose";

// set variable
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  Credential: true,
};

// database connection
(() => database_Connect())();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// get all User data
app.get("/allUser", async (request, response) => {
  try {
    const newUser = await User.find({});
    response.json({
      message: "all user",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
});

// created new User
app.post("/newUser", async (request, response) => {
  try {
    const { email } = request.body;
    const isUserExisted = await User.findOne({ email });
    if (isUserExisted) {
      return response.json({
        message: "user already existed",
        data: isUserExisted,
      });
    }
    const newUser = await User.create({
      email: email,
    });
    response.json({
      message: "user created",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
});

// get all todos api
app.get("/allTodos", async (request, response) => {
  console.log("QUERY::::", request.query);
  const { userID } = request.query;

  const todos = await Todo.find({ user_id: userID });
  console.log(todos)
  // send only valid user todos
  // const validTodos = await User.aggregate([
  //   [
  //     {
  //       $lookup: {
  //         from: "todos",
  //         localField: "_id",
  //         foreignField: "user_id",
  //         as: "todos",
  //       },
  //     },
  //   ],
  // ]);

  // const allTodo = validTodos[0].todos;
  // console.log(validTodos[0].todos);
  console.log('_____',todos);

  response.json({
    message: "all todos",
    data: todos,
  });
});

// creating new todo
app.post("/newTodo", async (request, response) => {
  const { task, status, user_id } = request.body;
  console.log(user_id, typeof user_id);
  const userCheck = await User.findOne({ _id: user_id });
  console.log(user_id, userCheck);
  const newTodo = await Todo.create({
    task: task,
    status: status,
    user_id: userCheck._id,
  });
  response.json({
    message: "todo added successfully",
    data: newTodo,
  });
});

// updating todo api
app.put("/updateTodo/:_id", async (request, response) => {
  const { _id } = request.params;
  const todoData = request.body;
  const updateTodo = await Todo.findByIdAndUpdate(_id, todoData, {
    new: true,
  });
  response.json({
    message: "todo update successfully",
    data: updateTodo,
  });
});

// deleting todo api
app.delete("/deleteTodo/:_id", async (request, response) => {
  const { _id } = request.params;
  const deleteTodo = await Todo.findByIdAndDelete(_id);
  response.json({
    message: "todo delete successfully",
  });
});

// clear api
app.delete("/clear", async (request, response) => {
  const deleteAllTodos = await Todo.deleteMany();
  response.json({
    message: "all clear",
    data: [],
  });
});

// server listen
app.listen(process.env.PORT);
