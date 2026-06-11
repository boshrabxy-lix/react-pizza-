import React from "react";
import style from "./Navbar.module.css";
import "../../../index.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <div className="logo d-flex g-1">
            <a
              className={`${style.navLogo} d-flex justify-content-center text-decoration-none fw-bold fs-4 me-5 align-items-center`}
              href="#"
            >
              Nocturnal Cravings
            </a>
          </div>

          <div className="collapse navbar-collapse d-none d-md-block">
            <ul
              className={`${style.collapseUl} ${style.navbarNav} navbar-nav mb-2 mb-lg-0 gap-4`}
            >
              <li className="nav-item ">
                <a
                  className={`${style.activeLink} nav-link active pb-1 p-0`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li className={`${style.navLink} nav-item`}>
                <a
                  className={`${style.navLink}nav-link text-secondary p-0 text-decoration-none`}
                  href="#"
                >
                  Menu
                </a>
              </li>

              <li className="nav-item" href="#">
                <a
                  className={`${style.navLink}nav-link text-secondary p-0 text-decoration-none`}
                  href="#"
                >
                  Offers
                </a>
              </li>

              <li className="nav-item " href="#">
                <a
                  className={`${style.navLink}nav-link text-secondary p-0 text-decoration-none`}
                  href="#"
                >
                  Branches
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-4">
            <div className="position-relative d-none d-sm-block">
              <input
                type="text"
                placeholder="What are you craving tonight?"
                className={`${style.searchInput} text-white border-0 rounded-pill py-2 ps-5 pe-4`}
              />
              <svg
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className={`${style.searchSvg} position-absolute start-0 top-50 translate-middle-y ms-3`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button className="btn p-0 text-secondary position-relative hover-orange">
              <svg
                className={`${style.svgStyle}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                className={`${style.spanStyle} position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle`}
              ></span>
            </button>

            <button className="btn p-0 text-secondary hover-orange">
              <svg
                className={`${style.svgStyle}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
