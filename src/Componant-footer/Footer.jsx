import React from "react";
import logo from "../Assets/logo.png";
import face from "../Assets/facebook.png";
import twitter from "../Assets/twitter.png";
import inesta from "../Assets/inestgram.png";
import linkedin from "../Assets/linkedin.png";
import bluewave from "../Assets/pluewave.png";
import blueplus from "../Assets/blueplus.png";
import bluecircle from "../Assets/bluecircle.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerbox">
            <div className="title">
              <img src={logo} className="logo" alt="" />
              <div className="layout"></div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, distinctio
            </p>
            <div className="contactus">
              <img src={bluecircle} className="bluecircle" alt="" />
              <i className="fas fa-phone-alt"></i>
              <div className="contactusinfo">
                <h6>Contact us</h6>
                <h5>+2010101010101</h5>
              </div>
            </div>
          </div>

          <div className="footerbox">
            <div className="title">
              <p>Quick Links</p>
              <div className="layout"></div>
            </div>
            <div className="links">
              <p>About Us</p>
              <p>FAQ's</p>
              <p>Services</p>
              <p>Booking</p>
              <p>Blogs</p>
              <p>Our Team</p>
            </div>
          </div>

          <div className="footerbox">
            <div className="title">
              <p>Our Services</p>
              <div className="layout"></div>
            </div>
            <div className="links">
              <p>Dental Care</p>
              <p>Cardiac Clinic</p>
              <p>Massege Therapy</p>
              <p>Cardiology</p>
              <p>Precise Diagnosis</p>
              <p>Abmbulance Services</p>
            </div>
          </div>

          <div className="footerbox">
            <div className="title">
              <p>Subscribe</p>
              <div className="layout"></div>
            </div>
            <div className="userinfo">
              <input type="Email" placeholder="Email Address" />
              <button>Subscribe Now</button>
            </div>
            <div className="linksicons">
              <img src={face} alt="" />
              <img src={twitter} alt="" />
              <img src={inesta} alt="" />
              <a href="https://www.linkedin.com/in/mohand-hatem-73995a262/">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2024 Developed By <span>Mohand Hatem</span>
          </p>
        </div>
        <img src={bluewave} className="wavetop" alt="" />
        <img src={bluewave} className="wavebottom" alt="" />
        <img src={blueplus} className="plusing" alt="" />
      </footer>
    </>
  );
}
