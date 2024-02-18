import React from "react";
import "./contact.css";
import mobile from "../Assets/mobile.png";
import woman from "../Assets/woman.png";

export default function Contact() {
  return (
    <>
      <div className="form-box" id="formbox">
        <div className="form-info">
          <h2 className="touch">Get in Touch</h2>
          <div className="fname">
            <label htmlFor="Firstname">Firstname</label>
            <input type="text" id="Firstname" placeholder="first name" />
          </div>
          <div className="lname">
            <label htmlFor="Lastname">Lastname</label>
            <input type="text" id="Lastname" placeholder="last name" />
          </div>
          <div className="ema">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" placeholder="email" />
          </div>
          <div className="age">
            <label htmlFor="Age">Age</label>
            <input type="number" id="Age" placeholder="age" />
          </div>
          <button className="Enterform">Submit</button>
        </div>
        <div className="form-land">
          <img src={mobile} alt="" />
          <img src={woman} alt="" className="woman" />
        </div>
      </div>
    </>
  );
}
