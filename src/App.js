import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ToDoList from "./Todo/ToDoList.jsx";
import Authentication from "./Todo/Authentication.jsx";
import RootLayout from "./page/Root.jsx";
import HomePage from "./page/Home.jsx";
import { action as authAction } from "./page/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <Authentication />,
        action: authAction,
      },
      {
        path: "todo",
        element: <ToDoList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
