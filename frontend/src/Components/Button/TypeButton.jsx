import React, { useContext, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from "../../context/AppContext";

const TypeButton = () => {
  const { handleTypeFilter, selectedType, isActive } = useContext(AppContext);

  const [show, setShow] = useState(true);

  const handleSelect = () => {
    setShow(!show);
  };

  const type = ["all", "war", "trophy", "farming", "hybrid", "fun"];
  let typeItems = [...type];

  let all = typeItems.shift();

  return (
    <div className="select-type">
      <h3 onClick={handleSelect}>
        Filters
        <IoIosArrowUp className={show ? "arrow-active" : "arrow"} />
        <hr className={show ? "th-head" : ""} />
      </h3>
      <ul>
        {show && (
          <li
            className={isActive ? "active" : ""}
            onClick={() => handleTypeFilter("all")}
          >
            {all.charAt(0).toUpperCase() + all.slice(1)}
          </li>
        )}
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
