"use client";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";
/**
 * Mount
 * Rerender
 * Unmount
 */
export default function Home() {
  const [v, setV] = useState(0);

  useEffect(() => {
    console.log("==========> Component");
  }, []);

  return (
    <div>
      <h1>Home: {v}</h1>
      <button onClick={() => setV(v + 1)}></button>
    </div>
  );
}
