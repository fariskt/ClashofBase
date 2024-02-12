import React from "react";
import "../Hero/Hero.css";
import { builderhall } from "../../data/data";

const Builderhall = () => {
  return (
    <div className="img-container">
      {builderhall.map((item, index) => (
        <div className="figure-container" key={index}>
          <figure>
            <img
              src={item.image}
              alt={item.level}
            />
            <figcaption>{item.level.toUpperCase()}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Builderhall;