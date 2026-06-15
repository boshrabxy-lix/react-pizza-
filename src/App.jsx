import React from "react";
import Home from "./assets/components/home/Home";
import { RouterProvider } from "react-router-dom";
import router from "./router"

export default function App() {
  return (
      <RouterProvider router={router}/>
  )
  
}
