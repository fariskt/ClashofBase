import React, { useContext, useState } from "react";
import "./LayoutDetails.css";
import { AppContext } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";

function LayoutDetails() {
  const [counter, setCounter] = useState(0);
  const { filteredLayouts, clickedIndex } = useContext(AppContext);
  const { addToCart } = useContext(CartContext);

  const image =
    clickedIndex !== null ? filteredLayouts[clickedIndex].img : null;

  const thLevel =
    clickedIndex !== null ? filteredLayouts[clickedIndex].category : null;
  const type =
    clickedIndex !== null ? filteredLayouts[clickedIndex].type : null;

  const copyLink =
    clickedIndex !== null ? filteredLayouts[clickedIndex].link : null;

  return (
    <div className="layout-container">
      {clickedIndex !== null ? (
        <h1 className="layout-title">
          Townhall {thLevel.slice(2)}{" "}
          {type.charAt(0).toUpperCase() + type.slice(1)} Base
        </h1>
      ) : (
        ""
      )}
      <div className="image-container">
        <img src={image} alt={`Base Image`} />
        <div className="details">
          <h3 className="reviews">
            Rate this base {""}
            <span
              className="star"
              onClick={() =>
                setCounter((counter) => (counter == "0" ? "1" : "0"))
              }
            >
              &#10084;
            </span>
            <span id="reviews-number">{counter}</span>
          </h3>
          <button
            className="favourite"
            onClick={() => addToCart(filteredLayouts[clickedIndex])}
          >
            Add to Cart
          </button>
        </div>
        <div className="copy-link">
          <a href={copyLink} target="_blank">
            <button>Copy Base</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LayoutDetails;
