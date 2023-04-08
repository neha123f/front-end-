import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/floormap.css'

let FloorMap=()=>{
    return (
        <div className="floormap-body">
            <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <h3><a className="navbar-brand lineUp" href="/home">Valtech_</a></h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-secondary" href="/book">Book Seat</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
            </header>

            
      <main className="floor-container">
        <div className="button-container">
          <button id="btn1" className="btn btn-secondary">Floor : </button>
          <button id="btn2" className="btn btn-secondary">Seat : </button>
        </div>
        <div className="map-design">
            <form >   
            <div id="form-container">

              </div>     
            <div className="submit-button">
            <button id="book-btn" className="btn btn-secondary">Book Seat</button>
            </div>
            </form>
      </div>
      </main>

            <footer className="footer-container">
        <p>&copy; 2023 Valtech, India</p>
        <ul id="social-links">
          <li>
            <a href="https://www.instagram.com/explore/locations/611271258/valtech-india/"><span className="social-icon"><ion-icon name="logo-instagram"></ion-icon></span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/valtech_india"><span className="social-icon"><ion-icon name="logo-twitter"></ion-icon>
            </span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/valtech.india/"><span className="social-icon"><ion-icon name="logo-facebook"></ion-icon>
            </span>
            </a>
          </li>
        </ul>
            </footer>
        </div>
    )
}

export default FloorMap;