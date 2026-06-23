import React from "react";
import styles from "./subscription.module.css";
import "../../../index.css";

export default function Subscription() {
const pricingPlans = [
  {
    title: "Starter Plan",
    price: "$29",
    audience: "This package is suitable for teams 1-15 people.",
    features: [
      "10 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "1 Year Support",
    ],
    isActive: false,
  },
  {
    title: "Basic Plan",
    price: "$79",
    audience: "This package is suitable for teams 1-50 people.",
    features: [
      "15 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "5 Year Support",
      "Free Custom Domain",
      "Basic Statistics",
    ],
    isActive: true,
  },
  {
    title: "Premium Plan",
    price: "$129",
    audience: "This package is suitable for teams 1-100 people.",
    features: [
      "20 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "Unlimited Support",
      "Free Custom Domain",
      "Full Statistics",
    ],
    isActive: false,
  },
];
  return (
    <div className={`${styles.pageContainer} py-5 d-flex flex-column justify-content-between`}>
      <div className="container text-center my-5">
        <h1 className="display-5 mb-3">
          Make the wise decision
          <br />
          for your business
        </h1>
        <p className={`${styles.subtitle} `}>
          Choose from our affordable 3 packages
        </p>
      </div>

      <div className="container mb-5 flex-grow-1 d-flex align-items-center">
        <div className="row g-4 w-100 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className={`${styles.pricingCardContainer} ${plan.isActive && styles.activeCardWrapper}`}
              >
                <div
                  className={`${styles.backlightGlow} ${styles[plan.glowColor]}`}
                ></div>
                <div className={styles.pricingCard}>
                  <div className="py-3 px-3">
                    <div className={styles.planName}>{plan.title}</div>

                    <div
                      className={`${styles.price} d-flex align-items-baseline`}
                    >
                      {plan.price}
                      <span className={`${styles.period} ms-1`}>/month</span>
                    </div>

                    <p className={styles.audience}>{plan.audience}</p>
                    <hr className="border-secondary opacity-25 my-4" />

                    <div className={styles.inclusionTitle}>
                      What's included:
                    </div>
                    <ul className={styles.featureList}>
                      {plan.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className={`${styles.featureItem} d-flex align-items-center`}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <button
                        className={
                          plan.isActive
                            ? styles.cardButtonActive
                            : styles.cardButton
                        }
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
