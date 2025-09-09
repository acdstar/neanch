import React, { useState } from "react";
import { Link } from "react-scroll";
import "./App.css";

import heroImg from "./assets/hero.jpg";
import webDevImg from "./assets/webdev.jpg";
import softwareImg from "./assets/software.jpg";
import mobileImg from "./assets/mobile.jpg";
import consultingImg from "./assets/consulting.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <h1>NeAnCh Softtech</h1>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <Link to="home" smooth={true} duration={600} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={600} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="services" smooth={true} duration={600} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="contact" smooth={true} duration={600} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img src={heroImg} alt="NeAnCh Softtech" className="hero-img" />
        <h2>Welcome to NeAnCh Softtech</h2>
        <p>Innovative software solutions for your business.</p>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          NeAnCh Softtech is committed to delivering high-quality software, web,
          and mobile solutions that help businesses grow efficiently.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <img src={softwareImg} alt="Custom Software" />
            <h3>Custom Software Development</h3>
            <p>Tailor-made solutions, including Queue Management Systems.</p>
          </div>
          <div className="service-item">
            <img src={webDevImg} alt="Web Development" />
            <h3>Web Development</h3>
            <p>Professional websites and dashboards for your business.</p>
          </div>
          <div className="service-item">
            <img src={mobileImg} alt="Mobile Apps" />
            <h3>Mobile App Development</h3>
            <p>Android & iOS apps for customer engagement & internal tools.</p>
          </div>
          <div className="service-item">
            <img src={consultingImg} alt="Consulting" />
            <h3>IT Consulting</h3>
            <p>Advisory on software, IT processes & digital transformation.</p>
          </div>
          <div className="service-item">
            <img src={softwareImg} alt="Queue Management" />
            <h3>Queue Management Systems</h3>
            <p>Solutions for banks, hospitals, and service businesses.</p>
          </div>
          <div className="service-item">
            <img src={softwareImg} alt="Ticketing" />
            <h3>Ticketing & Billing Software</h3>
            <p>Complete ticketing & billing systems with reports.</p>
          </div>
          <div className="service-item">
            <img src={softwareImg} alt="POS" />
            <h3>POS & Billing Solutions</h3>
            <p>Smart POS software for shops, restaurants, & retail.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@neanch.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 NeAnCh Softtech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
