import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "../Componants-about/About";
import homepho from "../Assets/home1.png";
import triangle from "../Assets/triangle.png";
import square from "../Assets/square.png";
import Dot from "../Assets/Dot.png";
import plus from "../Assets/plus.png";
import wave from "../Assets/wave.png";
import "./home.css";

export default function Home() {
  let [writer, setWriter] = useState(1);
  let rewrite = () => {
    setTimeout(() => {
      setWriter("Hospital");
    }, 0);
    setTimeout(() => {
      setWriter("Clinic");
    }, 4000);
    setTimeout(() => {
      setWriter("Pharmacy");
    }, 8000);
  };
  useEffect(() => {
    rewrite();
    setInterval(rewrite, 12000);
  }, []);

  return (
    <>
      <div className="row HomeContainer">
        <div className="info col-md-5">
          <h5>We Provide All Health Care Solution</h5>
          <h1>
            Protect Your Health And Take Care To Of Your Health,
            <span className="innerTex">{writer}</span>
          </h1>

          <button>Read More</button>
        </div>
        <div className="pho col-md-5">
          <img src={homepho} className="w-100" alt="" />
        </div>
        <img src={triangle} className="triangle" alt="" />
        <img src={square} className="square" alt="" />
        <img src={Dot} className="Dot" alt="" />
        <img src={plus} className="plus" alt="" />
        <img src={wave} className="wave" alt="" />
      </div>
    </>
  );
}
