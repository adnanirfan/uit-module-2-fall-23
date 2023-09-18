"use client";
import { useState } from "react";
import List from "./List";

export default function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([
    "Hello World!",
    "Second Value",
    "Second Value",
  ]);
  const onAdd = () => {
    console.log("On Add Pressed: ", text);
    list.push(text);

    // setList(list);
    setList([...list]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <div>
        <input
          placeholder="Add todo"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button onClick={onAdd}>Add</button>
      </div>
      
      <List list={list}/>

    </main>
  );
}
