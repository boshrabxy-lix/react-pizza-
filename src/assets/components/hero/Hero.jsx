import React from "react";
import style from "./Hero.module.css";
import "../../../index.css";

export default function Hero() {
 
  return (
    <section className={`${style.heroContainer} d-flex flex-column justify-content-between text-white overflow-hidden`}>
      <div className="container-fluid px-4 px-md-5 mb-5 flex-grow-1 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-12 col-lg-7 d-flex flex-column align-items-start justify-content-center text-start">
            <span
              className={`${style.badge} rounded-pill px-3 py-3 mb-4 text-uppercase fw-bold`}>Open Until Dawn</span>

            <h1
              className={`${style.title} fw-bold mb-3`}>
              Satisfy Your <br />
              <span className={`${style.highlight}`}> Late-Night</span> <br />
              Cravings
            </h1>

            <p
              className={`${style.description} text-secondary-50 mb-4 fs-5`}
            >
              Handcrafted pizzas, stone-baked to perfection, <br/> delivered hot and
              crispy while the world sleeps.
            </p>

            <div className="d-flex gap-3">
              <button
                className={`${style.btnPrimary} btn rounded-pill px-4 py-3 fw-semibold text-white `}>
                Order Now
              </button>
              <button
                className={`${style.btnSecondary} btn rounded-pill px-4 py-3 fw-semibold text-white border border-white border-opacity-25 transition-all`}>
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
