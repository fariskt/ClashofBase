import React, { useState } from "react";
import "./Hero.css";
import Townhall from "../Halls/Townhall";
import Builderhall from "../Halls/Builderhall";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showTh, setShowTh] = useState(true);
  const [showBh, setShowBh] = useState(false);

  const handleClick = (isTownhall) => {
    setShowTh(isTownhall);
    setShowBh(!isTownhall);
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <img
          src="https://pbs.twimg.com/media/FRq8QWsXsAM-WfD.jpg:large"
          alt=""
        />
        <div className="header">
          <h1>ClashSpace</h1>
          <p>
            Copy Bases: Instantly copy the latest Clash of Clan Base Links with
            just a few taps. Upload your own Layout for free within few seconds{" "}
            <Link
              to={"/upload"}
              style={{
                color: "blueviolet",
                textDecoration: "underline",
              }}
            >
              click here
            </Link>
          </p>
        </div>
        <div className="villages">
          <button
            className={`btn ${showTh ? "active" : ""}`}
            onClick={() => handleClick(true)}
          >
            Townhalls
          </button>
          <button
            className={`btn ${showBh ? "active" : ""}`}
            onClick={() => handleClick(false)}
          >
            Builder halls
          </button>
        </div>
        <div className="lists">
          {showTh && <Townhall />}
          {showBh && <Builderhall />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
