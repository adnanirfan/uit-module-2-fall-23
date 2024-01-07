import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <Header />
      <Outlet />
    </div>
  );
}
