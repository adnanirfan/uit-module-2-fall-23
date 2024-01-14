"use client";
import { useEffect, useState } from "react";
import List from "./List";
import InputBox from "./InputBox";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState([]);

  const getTodoList = () => {
    const url = "http://localhost:8000/todo";
    // setLoader(true);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((error) => {})
      .finally(() => {
        // setLoader(false);
      });
  };

  const addTodoItem = (payload) => {
    const url = "http://localhost:8000/todo";
    // setLoader(true);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setList(data);
        getTodoList();
      })
      .catch((error) => {})
      .finally(() => {
        // setLoader(false);
      });
  };

  const updateTodoItem = (payload) => {
    const url = "http://localhost:8000/todo/" + payload.id;
    // setLoader(true);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setList(data);
        getTodoList();
      })
      .catch((error) => {})
      .finally(() => {
        // setLoader(false);
      });
  };

  const deleteTodoItem = (payload) => {
    const url = "http://localhost:8000/todo/" + payload.id;
    // setLoader(true);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setList(data);
        getTodoList();
      })
      .catch((error) => {})
      .finally(() => {
        // setLoader(false);
      });
  };

  useEffect(() => {
    getTodoList();
  }, []);

  // useEffect(() => {
  //   const ls = localStorage.getItem("list");

  //   if (ls !== null) {
  //     setList(JSON.parse(ls));
  //   }
  // }, []);

  const onAdd = () => {
    console.log("On Add Pressed: 1 2 ", text);
    const obj = {
      text,
      isCompleted: false,
    };
    addTodoItem(obj);
    setText("");

    // const _list = [...list];
    // _list.push(text);

    // setList(_list);
    // setText("");
    // localStorage.setItem("list", JSON.stringify(_list));
  };

  const onDelete = (index) => {
    const _list = [...list];
    _list.splice(index, 1);
    setList(_list);
    localStorage.setItem("list", JSON.stringify(_list));
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
    localStorage.setItem("list", JSON.stringify(list));
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
