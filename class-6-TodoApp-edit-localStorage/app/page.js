"use client";
import { useEffect, useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

export default function Home() {
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const ls = localStorage.getItem("list");

    if(ls !== null) {
      setList(JSON.parse(ls))
    }

  }, [])

  const onAdd = () => {
    console.log("On Add Pressed: 1 2 ", text);
    const _list = [...list];
    _list.push(text);

    setList(_list);
    setText("");
  };

  const onDelete = (index) => {
    const _list = [...list];
    _list.splice(index, 1);
    setList(_list);
  };

  const onEdit = (index) => {
    console.log("on EDIT", index);
    setEditIndex(index);
    setText(list[index]);
  };

  const onUpdate = () => {
    // index, new value, list
    // editIndex, text, list

    list[editIndex] = text;

    setList([...list]);
    setText("");
    setEditIndex(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>

      <InputBox
        text={text}
        setText={setText}
        onAdd={onAdd}
        editIndex={editIndex}
        onUpdate={onUpdate}
      />

      <List list={list} onDelete={onDelete} onEdit={onEdit} />
    </main>
  );
}
