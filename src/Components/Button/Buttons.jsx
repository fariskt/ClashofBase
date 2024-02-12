import React, { useContext, useState } from "react";
import HallButton from "./HallButton";
import TypeButton from "./TypeButton";
import Builderhallbtn from "./Builderhallbtn";
import BuilderType from "./BuilderType";
import "./Button.css";
import { AppContext } from "../../context/AppContext";
import { MdOutlineArrowBackIosNew } from "react-icons/md";



const Buttons = ({ setShow }) => {
  const { dispatch, handleTypeFilter } = useContext(AppContext);

  const [showTh, setShowTh] = useState(true);
  const [showBh, setShowBh] = useState(false);

  const handleClick = (isTownhall) => {
    setShowTh(isTownhall);
    setShowBh(!isTownhall);
  };
  

  const resetValue = () => {
    dispatch({ type: "SET_SELECTED_TH_VALUE", payload: "th15" });
    handleTypeFilter("all");
  };
  return (
    <div className="filter-btn">
      <div className="close">
        <span>
          <MdOutlineArrowBackIosNew />
        </span>
        <h3 className="close-icon" onClick={() => setShow(false)}>
          {" "}
          Filters
        </h3>
      </div>
      <div className="base-btn">
        <button
          className={`th-btn ${showTh ? "btn-active" : ""}`}
          onClick={() => handleClick(true)}
        >
          Townhalls
        </button>
        <button
          className={`th-btn ${showBh ? "btn-active" : ""}`}
          onClick={() => handleClick(false)}
        >
          Builder halls
        </button>
      </div>

      {showTh && (
        <div className="th-list">
          <HallButton />
        </div>
      )}
      {showBh && (
        <div className="th-list">
          <Builderhallbtn />
        </div>
      )}

      {showTh && (
        <div className="type-list">
          <TypeButton />
        </div>
      )}
      {showBh && (
        <div className="type-list">
          <BuilderType />
        </div>
      )}
      <div className="reset">
        <h3 className="reset-filter" onClick={resetValue}>
          Reset Filters
        </h3>
      </div>
    </div>
  );
};

export default Buttons;
