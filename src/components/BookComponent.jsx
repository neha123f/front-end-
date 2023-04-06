import React, { useState } from "react";
import '../styles/book.css'
import layout from '../assets/layout.jpg';

let Book=()=>{
  const [minDate, setMinDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [typeOfRequest, setTypeOfRequest] = useState('');
  function handleMinDate() {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10);
    setMinDate(formattedDate);
  }

  function handleTypeChange(e) {
    const type = e.target.value;
    setTypeOfRequest(type);

    if (type === 'daily') {
      setToDate(fromDate);
    } else {
      const selectedDate = new Date(fromDate);
      selectedDate.setDate(selectedDate.getDate() + 7);
      const newDate = selectedDate.toISOString().substr(0, 10);
      setToDate(newDate);
    }
  }

  function handleFromDateChange(e) {
    const date = e.target.value;
    setFromDate(date);
    if (typeOfRequest === 'daily') {
      setToDate(date);
    } else {
      const selectedDate = new Date(date);
      selectedDate.setDate(selectedDate.getDate() + 7);
      const newDate = selectedDate.toISOString().substr(0, 10);
      setToDate(newDate);
    }
  }

    return(
        <div className="book-body">
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
                  <a className="nav-link" aria-current="page" href="/home">Home</a>
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
            <main class="book-main-container">
        <div class="book-image-container lineRight">
          <img src={layout} alt="layout" width="600" height="400"/>
        </div>
        <div class="book-content lineUp">
          <h3>Seat Booking</h3>
          <div class="book-details">
            <form action="floormap.html">
              <div class="form-floating mb-3">
                <select class="form-select" name="type" id="type" required onChange={handleTypeChange}>
                  <option selected></option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
                <label for="type">Select type of requests</label>
              </div>
              <div class="form-floating mb-3">
                <input type="date" class="form-control" name="from" id="from" required onChange={handleFromDateChange} min={minDate} onFocus={handleMinDate}/>
                <label for="from">From Date</label>
              </div>
              <div class="form-floating mb-3">
                <input type="date" class="form-control" name="to" id="to" value={toDate} required readOnly/>
                <label for="to">To Date</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" name="shift" id="shift" required>
                  <option selected></option>
                  <option value="9am to 6pm">09:00AM - 06:00PM</option>
                  <option value="6am to 2pm">06:00AM - 02:00PM</option>
                  <option value="2pm to 10pm">02:00PM - 10:00PM</option>
                  <option value="10am to 6pm">10:00AM - 06:00PM</option>
                </select>
                <label for="shift">Shift time</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" name="food" id="food" required>
                  <option selected></option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label for="food">Opting for lunch?</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" name="floor" id="floor" required >
                  <option selected></option>
                  <option value="Ground Floor">Ground Floor</option>
                  <option value="Mezanine Floor">Mezz Floor</option>
                  <option value="First Floor">First Floor</option>
                  <option value="Second Floor">Second Floor</option>
                  <option value="Third Floor">Third Floor</option>
                  <option value="Training Room">Training Room</option>
                </select>
                <label for="floor">Select Floor</label>
              </div>
              <button class="btn btn-secondary">Next</button>
          </form>
          </div>
        </div>
      </main>
      <footer class="footer-container">
        <p>&copy; 2023 Valtech, India</p>
        <ul id="social-links">
          <li>
            <a href="https://www.instagram.com/explore/locations/611271258/valtech-india/"><span class="social-icon"><ion-icon name="logo-instagram"></ion-icon></span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/valtech_india"><span class="social-icon"><ion-icon name="logo-twitter"></ion-icon>
            </span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/valtech.india/"><span class="social-icon"><ion-icon name="logo-facebook"></ion-icon>
            </span>
            </a>
          </li>
        </ul>
      </footer>
        </div>
    )
}

export default Book;