import React, { useContext, useState } from "react";
import "./Header.css";
import Buttons from "../Button/Buttons";
import { townhall } from "../../data/data";

import { AppContext } from "../../context/AppContext";
import Loading from "../Loading/Loading";
import FilteredLayout from "./FilteredLayout";

const Header = () => {
  const [show, setShow] = useState(false);
  const { selectedThValue, selectedType, isLoading  } =
    useContext(AppContext);
    
  const thimage = townhall.filter(
    (layout) => layout.level == selectedThValue && layout.image
  );

  return (
    <>
      <div className="header-container">
        <div className="header-section">
          <div className="head-title">
            <h1>
              Best {""}
              <span>
                {selectedThValue.toLocaleUpperCase()} {""}
                {selectedType.includes("all")
                  ? ""
                  : selectedType.charAt(0).toUpperCase() +
                    selectedType.slice(1)}
              </span>{" "}
              {""}
              Base Links 2023 | COC Layout
            </h1>

            {isLoading ? (
              <Loading />
            ) : (
              <div className="info">
                <h4>
                  {thimage.map((item, index) => (
                    <img key={index} src={item.image} alt="townhall-image" />
                  ))}
                  {selectedThValue.toUpperCase()}
                </h4>
                <hr className="info-hr" />
                <h5>
                  Sort By:{" "}
                  {selectedType.includes("all")
                    ? "Latest"
                    : selectedType.charAt(0).toUpperCase() +
                      selectedType.slice(1)}
                </h5>
              </div>
            )}

            <div className="add-filter">
              <button onClick={() => setShow(true)}>Filters</button>
            </div>
          </div>
          <div className="pc">
            <Buttons />
          </div>
          {show && (
            <div className="mobile">
              <Buttons setShow={setShow} />
            </div>
          )}
          {isLoading ? <Loading /> : <FilteredLayout setShow={setShow} />}
        </div>
      </div>
    </>
  );
};

export default Header;
