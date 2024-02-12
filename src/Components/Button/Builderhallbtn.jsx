import React, { useContext,  useState } from "react";
import "../Header/Header.css";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from "../../context/AppContext";

const HallButton = () => {
  
  const { selectedThValue, handleThValueFilter} = useContext(AppContext);

  const [show, setShow] = useState(true);

  const handleSelect = () => {
    setShow(!show);
  };

  const builderhall = [
   "bh10","bh9","bh8","bh7","bh6","bh5"
  ];

  return (
    <div className="select-th">
      <h3 onClick={handleSelect}>
        Select Builderhall level
        <IoIosArrowUp className={show ? "arrow-active" : "arrow"} />
        <hr className={show ? "th-head" : ""} />
      </h3>

      <ul>
        {show &&
          builderhall.map((item, index) => (
            <li
              key={index}
              className={item === selectedThValue ? "active" : ""}
              onClick={()=> handleThValueFilter(item)}
            >
              {item.toUpperCase()}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HallButton;
