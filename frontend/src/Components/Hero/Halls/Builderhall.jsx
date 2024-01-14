import React from "react";
import "../Hero.css";
import { builderhall } from "../../../data/data";

const Builderhall = () => {
  return (
    <div className="img-container">
      {builderhall.map((item, index) => (
        <figure key={index}>
          <img src={item.image} alt="" />
          <figcaption>{item.level.toUpperCase()}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Builderhall;
