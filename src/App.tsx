import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Login from "./Pages/Login.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element :<Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
