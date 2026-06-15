import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "../hero/hero";
import BestOffer from "../BestOffer/BestOffer";
import BeChef from "../BeChef/BeChef";
import Discover from "../Discover/Discover";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestOffer />

      <Discover />
      <BeChef />
      <Footer />
    </>
  );
}
