import React from 'react'
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className="container-fluid px-md-5">
        <div className="row align-items-center gy-4">

          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className={`${style.brandTitle} fs-4 mb-2`}>
              Nocturnal Cravings
            </h3>
            <p className={`${style.brandDescription} mb-0 mx-auto mx-md-0`}>
              Your best companion for long nights. High quality, fast delivery, unforgettable taste.
            </p>
          </div>

          <div className="col-12 col-md-5">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4 mb-0">
              <li>
                <a href="#" className={style.footerLink}>Contact Us</a>
              </li>
              <li>
                <a href="#" className={style.footerLink}>Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className={style.footerLink}>Privacy Policy</a>
              </li>
              <li>
                <a href="#" className={style.footerLink}>FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <button className={`${style.socialIconBtn} d-flex align-items-center justify-content-center`}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>

              <button className={`${style.socialIconBtn} d-flex align-items-center justify-content-center`}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <span className={style.copyrightText}>
              &copy; 2026 Nocturnal Cravings. All rights reserved.
            </span>
          </div>
        </div>
        
      </div>
    </footer>
 );
}