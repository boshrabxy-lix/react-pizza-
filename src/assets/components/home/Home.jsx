import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "../hero/hero";
import BestOffer from "../BestOffer/BestOffer";
import BeChef from "../BeChef/BeChef";

export default function Home() {
  return (
    <>
      <Hero />
      <BestOffer />
      <BeChef />
    </>
  );
}
