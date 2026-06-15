import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./BeChef.module.css";
import "../../../index.css";

export default function BeChef() {
  const features = [
    "Over 40 types of fresh toppings",
    "Gluten-free and vegan options",
    "Stuffed crust with cheese or garlic",
  ];

  return (
    <section className= {style.container}>
      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className={`${style.title} fw-blod `}>
              Be Your Own <span className={style.highlight}>Chef</span>
            </h1>

            <p className={`${style.pHighlight} my-3 fs-5`}>
              Our smart customization system lets you build your dream pizza
              step by step. Choose your crust, cheese, and favorite toppings.
            </p>

            <ul className="list-unstyled my-4">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="mb-3 d-flex align-items-center gap-3"
                >
                  <span
                    className={`${style.iconCheck} align-items-center justify-content-center fw-blod`}
                  >
                    ✓
                  </span>
                  <span className="fs-6">{item}</span>
                </li>
              ))}
            </ul>

            <button className={`btn ${style.ctaButton} mb-1 mt-2 fw-bold border-none`}>
              Start Designing Now
            </button>
          </div>
          
          <div className="col-md-6 text-center">
            <div className={`${style.imageWrapper} rounded-pill`}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDu-ryxJIv7pU_bZNSU_bbW5KLX_gEEBQpHxZIZ4MDHfT9SSUzzENno7k6EFSk8_qQbA79LLkz9BbeH1MCZIll1pVorx1Tyi7KdAxirojXQ7zZ9nPvbxltBjb5GKbfh2KC6Kyl-ly6d-7ltBoitPZzOIhRbfmR84iPep5s25C7oWxKPh5ed5hFFfWJEovXXzBJGK4S5Y1nUY3qQMIkT2Lb-EAZM9Bmtb-anP8YofjDpwYRfcae3-6U2xvfInYqg2TDgDLfwt_RE2A"
                alt="Customized Pizza Top View"
                className={`${style.pizzaImage} rounded-pill  object-fit-cover`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
