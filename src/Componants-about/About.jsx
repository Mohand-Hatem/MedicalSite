import React from "react";
import "./about.css";
import doc1 from "../Assets/Doc1.jpg";
import doc2 from "../Assets/Doc2.jpg";
import doc3 from "../Assets/Doc3.jpg";
import square from "../Assets/square.png";
import wave from "../Assets/wave.png";
import wide from "../Assets/wide.png";

export default function About() {
  return (
    <>
      <div className="AboutUs" id="about">
        <div className="Docs">
          <div className="doc1">
            <img src={doc2} className="" alt="" />
          </div>
          <div className="doc2">
            <img src={doc1} className="" alt="" />
          </div>
          <div className="doc3 ">
            <img src={doc3} className="" alt="" />
          </div>
          <div className="exp">
            <div className="expinfo">
              <h2>20</h2>
              <p>Year Experience</p>
            </div>
          </div>
          <img src={square} className="aboutsquare" alt="" />
          <img src={wave} className="aboutwave" alt="" />
        </div>
        <div className="DocsInfo">
          <h5>About us</h5>
          <h2>The Great Place Of Medical Hospital Center</h2>
          <p>
            We provide the special tips and advice's of heath care treatment and
            high level of best technology involve in the our hospital.
          </p>
          <div className="Docons">
            <div className="boxcon">
              <div className="con">
                <i className="fas fa-ambulance"></i>
              </div>

              <h5>Emergency Help</h5>
            </div>
            <div className="boxcon">
              <div className="con">
                <i className="fas fa-procedures"></i>
              </div>

              <h5>Qualified Doctors</h5>
            </div>
            <div className="boxcon">
              <div className="con">
                <i className="fas fa-hand-holding-medical"></i>
              </div>

              <h5>Best Professionals</h5>
            </div>
            <div className="boxcon">
              <div className="con">
                <i className="fas fa-syringe"></i>
              </div>
              <h5>Medical Treatment</h5>
            </div>
          </div>
          <button className="butonRead">Read More</button>
          <img src={square} className="aboutsquare" alt="" />
          <img src={wide} className="wide" alt="" />
        </div>
      </div>
    </>
  );
}
