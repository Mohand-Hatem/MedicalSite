import React, { useEffect, useState } from "react";
import "./circle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Circles() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="circle-container" id="skils">
        <h2 className="skils">Skils</h2>
        <Slider {...settings}>
          <div className="cr cr1">
            <div className="inner">70%</div>
          </div>
          <div className="cr cr2">
            <div className="inner">80%</div>
          </div>
          <div className="cr cr3">
            <div className="inner">90%</div>
          </div>
          <div className="cr cr4">
            <div className="inner">50%</div>
          </div>
          <div className="cr cr5">
            <div className="inner">30%</div>
          </div>
        </Slider>
      </div>
    </>
  );
}
