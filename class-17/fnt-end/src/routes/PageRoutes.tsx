import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from "../components/login/UserLogin";
import UserInput from "../components/TodoApp/UserInput";
import App from "../App";
import Layout from "./Layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <UserLogin />,
      },
      {
        path: "userinput",
        element: <UserInput />,
      },
    ],
  },
]);
