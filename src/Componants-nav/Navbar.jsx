import React, { useRef } from "react";
import logo from "../Assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";
import face from "../Assets/facebook.png";
import twitter from "../Assets/twitter.png";
import inesta from "../Assets/inestgram.png";
import linkedin from "../Assets/linkedin.png";
import About from "../Componants-about/About";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid con">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fit my-auto me-2"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <Links
                    to="about"
                    smooth={true}
                    duration={200}
                    className="dropdown-item"
                  >
                    About us
                  </Links>
                  <li>
                    <Links
                      to="content"
                      smooth={true}
                      duration={200}
                      offset={-100}
                      className="dropdown-item"
                    >
                      Content
                    </Links>
                  </li>
                  <li>
                    <Links
                      to="skils"
                      smooth={true}
                      duration={200}
                      offset={-200}
                      className="dropdown-item"
                    >
                      Skils
                    </Links>
                  </li>
                </ul>
              </li>
              <li className="nav-item fulllinks">
                <a href="">
                  <img src={face} alt="" />
                </a>
                <a href="">
                  <img src={twitter} alt="" />
                </a>
                <a href="">
                  <img src={inesta} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohand-hatem-73995a262/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <button className="contact">
                  <span>Contact Us</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
