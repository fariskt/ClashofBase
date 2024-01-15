import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";

const FilteredLayout = ({ setShow }) => {
  const { filteredLayouts, setClickedIndex } = useContext(AppContext);
  const { addToCart } = useContext(CartContext);
  const [selectedElements, setSelectedElements] = useState([]);
  const [active, setIsActive] = useState(null);
  const navigate = useNavigate();

  const handleBaseClick = (index) => {
    let path = `layout`;
    navigate(path);
    setClickedIndex(index);
  };

  let data = [
    "#war",
    "#trophy",
    "#farming",
    "#hybrid",
    "#funny",
    "#anti3star",
    "#progress",
  ];

  useEffect(() => {
    let shuffledData = data.sort(() => Math.random() - 0.5);
    setSelectedElements(shuffledData.slice(0, 4));
  }, []);
  return (
    <div className="base-container" onClick={() => setShow(false)}>
      {filteredLayouts.map((layout, index) => (
        <div className="base-img" key={index}>
          <img
            onClick={() => handleBaseClick(index)}
            src={layout.img}
            alt={`Image ${layout.id}`}
          /> 
          <p className="name">{layout.author}</p>
          <h5
            className={`${layout ? "add-cart" : "clicked"}`}
            onClick={() => addToCart(layout)}
            title="Add to cart"
          >
            <span
              onClick={() => setIsActive(layout)}
              className={`add-cart ${active == layout && "clicked"}`}
            >
              <IoCartOutline />
            </span>
          </h5>
          <p>
            {selectedElements.map((element, i) => (
              <span key={i} style={{ backgroundColor: element }}>
                {element}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilteredLayout;
