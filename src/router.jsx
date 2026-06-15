import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './assets/components/login/Login'; 
import Contacts from './assets/components/contacts/Contacts';
import Getpizza from './assets/components/getpizza/Getpizza';
import Setpizza from './assets/components/setpizza/Setpizza';
import MoreRecipes1 from './assets/components/moreRecipes/MoreRecipes1';
import MoreRecipes2 from './assets/components/moreRecipes/MoreRecipes2';
import MainLayout from './assets/components/mainLayout/MainLayout';
import Home from './assets/components/home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children :[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },

      {
        path: "/contacts",
        element: <Contacts />
      },

      {
        path: "/getpizza",
        element: <Getpizza />
      },

      {
        path: "/Setpizza",
        element: <Setpizza />,
      },
      {
        path: "/moreRecipes1",
        element: <MoreRecipes1 />,
      },
      {
        path: "/moreRecipes2",
        element: <MoreRecipes2 />,
      }
    ]
  }
]);

export default router;