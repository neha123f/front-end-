import React from "react";
import '../styles/bookdetails.css'

let BookDetails=()=>{
    return(
        <div className="bookdetails-body">
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

            <main className="seat-details-container">
            <div className="seat-details-content">
            <div className="seat">
            <h4><span className="icon-shape"><ion-icon name="id-card-sharp"></ion-icon></span> Name : Harshitha R</h4>
            <h4><span className="icon-shape"><ion-icon name="pricetags-sharp"></ion-icon></span> ID : 5435</h4> 
            </div>
            <div className="type">
                Daily
            </div>
            </div>
            <div className="seat-details-content">
            <div className="seat">
            <h4 className="book-details"><span className="icon-shape"><ion-icon name="calendar-sharp"></ion-icon></span>
                From Date : 29-03-2023</h4>
            <h4 className="book-details"><span className="icon-shape"><ion-icon name="calendar-sharp"></ion-icon></span> To Date : 29-03-2023</h4> 
            <h4 className="book-details"><span className="icon-shape"><ion-icon name="time-sharp"></ion-icon></span> Shift Time :  09:00AM - 06:00PM</h4> 
            <h4 className="book-details"><span className="icon-shape"><ion-icon name="keypad-sharp"></ion-icon></span> Booked Seat Number : 70</h4> 
            <h4 className="book-details"><span className="icon-shape"><ion-icon name="keypad-sharp"></ion-icon></span> Booking ID : SB-00853 </h4> 
            </div>
            </div>
            <div className="seat-details-content">
            <div className="seat">
            <h4><span className="icon-shape"><ion-icon name="business-sharp"></ion-icon></span>
                Floor : Ground Floor</h4>
            <h4><span className="icon-shape"><ion-icon name="location-sharp"></ion-icon></span> Branch Name : Bengaluru</h4> 
            </div>
        </div>
        <div className="submit-button">
          <button id="book-btn" className="btn btn-secondary">Cancel Booking</button>
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

export default BookDetails;