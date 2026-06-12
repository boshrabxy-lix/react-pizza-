import React from "react";
// import { Navbar } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "../hero/hero";
import BestOffer from "../BestOffer/BestOffer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestOffer />

      <Footer />
    </>
  );
}
