import React from "react";
import contacts from "./assets/components/contacts/Contacts";
import { RouterProvider ,Link} from "react-router-dom";
import router from "../CreatBrowserRouter";
import Home from "./assets/components/home/Home";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from './assets/components/footer/Footer';


export default function App() {

  return <>
   <Navbar/>

   <Footer/>
  </>
  

}
