import React, { useContext } from "react";
import HallButton from "./HallButton";
import TypeButton from "./TypeButton";
import "./Button.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { AppContext } from "../../context/AppContext";

const Buttons = ({setShow}) => {
  const { setSelectedThValue , handleTypeFilter} =
    useContext(AppContext);

    const resetValue = ()=> {
      setSelectedThValue("th15");
      handleTypeFilter("all")
    }
  return (
    <div className="filter-btn">
      <div className="close">
      <span><MdOutlineArrowBackIosNew /></span>
      <h3 className="close-icon" onClick={()=> setShow(false)}>  Filters</h3>
      </div>
      <div className="base-btn">
        <button className="btn">TownHall</button>
        <button className="btn"> BuilderHall</button>
      </div>

      <div className="th-list">
        <HallButton />
      </div>

      <div className="type-list">
        <TypeButton />
      </div>
      <div className="reset">
        <h3 className="reset-filter" onClick={resetValue}>Reset Filters</h3>
      </div>
    </div>
  );
};

export default Buttons;
