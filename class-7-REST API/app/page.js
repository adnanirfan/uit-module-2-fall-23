"use client";
import { useEffect, useState } from "react";
import List from "./List";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [list, setList] = useState([]);

  const getPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    setLoader(true);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      {loader ? <h2>Loading......</h2> : null}
      <List list={list} />
    </main>
  );
}
