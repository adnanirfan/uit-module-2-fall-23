"use client";
import { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

export default function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([
    "Hello World!",
    "Second Value",
    "Second Value",
  ]);

  const onAdd = () => {
    console.log("On Add Pressed: 1 2 ", text);
    const _list = [...list];
    _list.push(text);

    setList(_list);
  };

  const onDelete = (index) => {
    console.log("DELETE", index);

    const _list = [...list];

    _list.splice(index, 1);

    setList(_list);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>

      <InputBox text={text} setText={setText} onAdd={onAdd} />

      <List list={list} onDelete={onDelete} />
    </main>
  );
}
