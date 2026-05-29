import React, { Children } from 'react';
import { CreatBrowserRouter } from 'react-router-dom';
import login from './assets/components/login/Login';
import Contacts from './assets/components/contacts/Contacts';
import Getpizza from './assets/components/getpizza/Getpizza';
import Setpizza from './assets/components/setpizza/Setpizza';
import MoreRecipes1 from './assets/components/moreRecipes/MoreRecipes1';
import MoreRecipes2 from './assets/components/moreRecipes/MoreRecipes2';
import MainLayout from './assets/components/mainLayout/MainLayout';


const router = CreatBrowserRouter(
  {
    path: "/",
    element: <MainLayout />,

    Children :[
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
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
      },

    ]
  });

export default router;