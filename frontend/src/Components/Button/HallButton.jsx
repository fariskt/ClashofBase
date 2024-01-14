import React, { useContext, useEffect, useState } from "react";
import "../Header/Header.css";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from "../../context/AppContext";

const HallButton = () => {
  const {
    selectedThValue,
    handleThValueFilter,
    base
  } = useContext(AppContext)
  
  const [show, setShow] = useState(true);

  const handleSelect = () => {
    setShow(!show);
  };

  const th = [
    "th16",
    "th15",
    "th14",
    "th13",
    "th12",
    "th11",
    "th10",
    "th9",
    "th8",
    "th7",
    "th6",
  ];
  let townHallValues = [...th]
  
 

 

  return (
    <div className="select-th">
      <h3 onClick={handleSelect}>
        Select Townhall level
        <IoIosArrowUp className={show ? "arrow-active" : "arrow"} />
        <hr className={show ? "th-head" : ""} />
      </h3>

      <ul>
        {show &&
          townHallValues.map((item , index) => (
            <li key={index}
              className={item === selectedThValue ? "active" : ""}
              onClick={() => handleThValueFilter(item)}
            >
              {item.toUpperCase()}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HallButton;


