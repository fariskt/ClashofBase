import React, { useContext, useReducer, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from "../../context/AppContext";

const TypeButton = () => {
  const { handleTypeFilter, selectedType } = useContext(AppContext);

  const [show, setShow] = useState(true);

  const handleSelect = () => {
    setShow(!show);
  };

  const typeItems = ["all", "war", "trophy", "farming", "hybrid", "fun", "anti 3star" , "progress"];

  return (
    <div className="select-type">
      <h3 onClick={handleSelect}>
        Filters
        <IoIosArrowUp className={show ? "arrow-active" : "arrow"} />
        <hr className={show ? "th-head" : ""} />
      </h3>
      <ul>
        {show &&
          typeItems.map((item, index) => (
            <li
              key={index}
              className={item === selectedType ? "active" : ""}
              onClick={() => handleTypeFilter(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TypeButton;
