import React, { useState } from "react";
import "./Hero.css";
import Townhall from "./Halls/Townhall";
import Builderhall from "./Halls/Builderhall";

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
        <h2 className="hero-title">Choose Your Townhall Level</h2>
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
