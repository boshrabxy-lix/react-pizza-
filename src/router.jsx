import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './assets/components/login/Login'; 
import Contacts from './assets/components/contacts/Contacts';
import MainLayout from './assets/components/mainLayout/MainLayout';
import Home from './assets/components/home/Home';
import CarrotMenu from './assets/components/moreRecipes/CarrotMenu';
import PotatoMenu from './assets/components/moreRecipes/PotatoMenu';
import Subscription from './assets/components/subscription/Subscription';
import Setpizza from './assets/components/setpizza/Setpizza';


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
        path: "/Setpizza",
        element: <Setpizza />,
      },
      {
        path: "/carrotMenu",
        element: <CarrotMenu />,
      },
      {
        path: "/potatoMenu",
        element: <PotatoMenu />,
      },
 {
        path: "/subscription",
        element: <Subscription />,
      },

    ]
  }
]);

export default router;