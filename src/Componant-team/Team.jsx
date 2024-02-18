import React from "react";
import dr1 from "../Assets/doc (1).jpg";
import dr2 from "../Assets/doc (2).jpg";
import dr3 from "../Assets/doc (3).jpg";
import dr4 from "../Assets/doc (4).jpg";
import dr5 from "../Assets/doc (5).jpg";
import dr6 from "../Assets/doc (6).jpg";
import wide from "../Assets/wide.png";
import circle from "../Assets/bluecircle.png";

import "./Team.css";

export default function Team() {
  return (
    <>
      <div className="Teamcontainer container" id="team">
        <div className="Teambox">
          <div className="Teamphoto">
            <img src={dr1} className="w-100" alt="" />
          </div>
          <div className="Teaminfo">
            <h4>Dr. Addition Smith</h4>
            <h5>Dentist</h5>
          </div>
          <div className="Teamlinks">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="Teambox">
          <div className="Teamphoto">
            <img src={dr2} className="w-100" alt="" />
          </div>
          <div className="Teaminfo">
            <h4>Dr. Mahfuz Riad</h4>
            <h5>Chiropractor</h5>
          </div>
          <div className="Teamlinks">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="Teambox">
          <div className="Teamphoto">
            <img src={dr3} className="w-100" alt="" />
          </div>
          <div className="Teaminfo">
            <h4>Dr. David Benjamin</h4>
            <h5>Cardiologist</h5>
          </div>
          <div className="Teamlinks">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="Teambox">
          <div className="Teamphoto">
            <img src={dr4} className="w-100" alt="" />
          </div>
          <div className="Teaminfo">
            <h4>Dr. Addition Smith</h4>
            <h5>Dentist</h5>
          </div>
          <div className="Teamlinks">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="Teambox">
          <div className="Teamphoto">
            <img src={dr5} className="w-100" alt="" />
          </div>
          <div className="Teaminfo">
            <h4>Dr. Mahfuz Riad</h4>
            <h5>Chiropractor</h5>
          </div>
          <div className="Teamlinks">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="Teambox">
          <div className="Teamphoto">
            <img src={dr6} className="w-100" alt="" />
          </div>
          <div className="Teaminfo">
            <h4>Dr. David Benjamin</h4>
            <h5>Cardiologist</h5>
          </div>
          <div className="Teamlinks">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <img src={wide} className=" wide" alt="" />
        <img src={circle} className=" circle" alt="" />
      </div>
    </>
  );
}
