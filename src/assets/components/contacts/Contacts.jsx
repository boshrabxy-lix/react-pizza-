import React from "react";
import styles from "./Contacts.module.css";
import "../../../index.css";

export default function Contacts() {
  return (
    <div className={styles.pageWrapper}>
      <div className="container d-flex flex-column justify-content-center align-items-center text-center pt-4">
        <div className="mt-4">
          <h1
            className="display-3 fw-normal mb-3"
            sx={{ letterSpacing: "1px"}}
          >
            Contact Us
          </h1>

          <p
            className="text-white-50 col-md-7 mx-auto mb-5"
            sx={{ fontSize: "0.95rem", lineHeight: "1.6" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>


        <form className={`w-100 ${styles.formContainer} px-3`}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`${styles.customInput} form-control bg-transparent `}
              id="name"
              placeholder=""
            />
            <label for="name" className="text-light">User Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className={`${styles.customInput} form-control bg-transparent `}
              id="email"
              placeholder=""
            />
            <label for="email" className="text-light">User Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className={`${styles.customInput} form-control bg-transparent`}
              id="message"
              placeholder=""
            />
            <label for="message" className="text-light">User message</label>
          </div>
        </form>
      </div>
    </div>
  );
}
