import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Buttons from "../Button/Buttons";
import { builderhall, townhall } from "../../data/data";
import { AppContext } from "../../context/AppContext";
import Loading from "../Loading/Loading";
import FilteredLayout from "./FilteredLayout";

const Header = () => {
  const {
    selectedType,
    selectedThValue,
    isLoading,
    dispatch,
    handleTypeFilter,
  } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const thimage = townhall.filter(
    (layout) => layout.level === selectedThValue && layout.image
  );
  const bhimage = builderhall.filter(
    (layout) => layout.level === selectedThValue && layout.image
  );

  useEffect(() => {
    if (selectedThValue) {
      handleTypeFilter("all");
      dispatch({ type: "SET_IS_LOADING", payload: true });
      window.scrollTo(0, 0);
      setTimeout(() => {
        dispatch({ type: "SET_IS_LOADING", payload: false });
      }, 1000);
    }
  }, [selectedThValue]);

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
              Base Links 2024 | COC Layout
            </h1>

            {isLoading ? (
              <Loading />
            ) : (
              <div className="info">
                <h4>
                  {thimage.map((item, index) => (
                    <img key={index} src={item.image} alt="townhall-image" />
                  ))}
                  {bhimage.map((item, index) => (
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
          {/* for pc screen */}
          <div className="pc">
            <Buttons />
          </div>
          {/* for mobile screen */}
          {show && (
            <div className="mobile">
              <Buttons />
            </div>
          )}
          {isLoading ? <Loading /> : <FilteredLayout setShow={setShow} />}
        </div>
      </div>
    </>
  );
};

export default Header;
