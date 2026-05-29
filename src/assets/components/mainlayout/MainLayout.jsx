import React from 'react';
import navbar from '../navbar/Navbar';
import footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}
