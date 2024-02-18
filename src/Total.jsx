import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Componants-home/Home";
import About from "./Componants-about/About";
import Email from "./Componant-Email/Email";
import Circles from "./Componant-circle/Circles";

export default function Total() {
  let [active, setActive] = useState("1");
  useEffect(() => {
    setActive("1");
  }, []);
  let CheckActive = (buttonNumber) => {
    setActive(buttonNumber);
  };
  return (
    <>
      <Home />
      <About />
      <Circles />
      <div className="contain" id="content">
        <div className="Choose">
          <button
            className={active === "1" ? "1 active" : "1"}
            onClick={() => CheckActive("1")}
          >
            <Link to="tf">One</Link>
          </button>
          <button
            className={active === "2" ? "2 active" : "2"}
            onClick={() => CheckActive("2")}
          >
            <Link to="fr">Two</Link>
          </button>
          <button
            className={active === "3" ? "3 active" : "3"}
            onClick={() => CheckActive("3")}
          >
            <Link to="contact">Three</Link>
          </button>
        </div>

        <div className="content">
          <Outlet></Outlet>
        </div>
        <Email />
      </div>
    </>
  );
}
