import React, { useContext, useState } from "react";
import HallButton from "./HallButton";
import TypeButton from "./TypeButton";
import Builderhallbtn from "./Builderhallbtn";
import BuilderType from "./BuilderType";
import "./Button.css";
import { AppContext } from "../../context/AppContext";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Buttons = ({ setShow }) => {
  const {
    dispatch,
    handleTypeFilter,
    handleThValueFilter,
    showTh,
    showBh,
    setShowBh,
    setShowTh,
  } = useContext(AppContext);

  const resetValue = () => {
    if (showTh) {
      dispatch({ type: "SET_SELECTED_TH_VALUE", payload: "th15" });
      handleTypeFilter("all");
    } else {
      dispatch({ type: "SET_SELECTED_TH_VALUE", payload: "bh10" });
      handleTypeFilter("all");
    }
  };

  const handleClick = (isTownhall) => {
    setShowBh(!isTownhall);
    setShowTh(isTownhall);
    if (isTownhall) {
      handleThValueFilter("th15");
      handleTypeFilter("all");
    } else if (!isTownhall) {
      handleThValueFilter("bh10");
      handleTypeFilter("all");
    }
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
          Townhall
        </button>
        <button
          className={`th-btn ${showBh ? "btn-active" : ""}`}
          onClick={() => handleClick(false)}
        >
          Builderhall
        </button>
      </div>

      {showTh && (
        <>
          <div className="th-list">
            <HallButton />
          </div>
          <div className="type-list">
            <TypeButton />
          </div>
        </>
      )}
      {showBh && (
        <>
          <div className="th-list">
            <Builderhallbtn />
          </div>
          <div className="type-list">
            <BuilderType />
          </div>
        </>
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
