import React, { useContext } from "react";
import "../Hero/Hero.css";
import { builderhall } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../Loading/Loading";

const Builderhall = () => {
  const {
    selectedThValue,
    handleThValueFilter,
    isLoading,
    handleTypeFilter,
    setShowBh,
    setShowTh,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const navigateToHeader = (item) => {
    let path = `header`;
    navigate(path);
    setShowTh(false);
    setShowBh(true);
    handleThValueFilter(item);
    handleTypeFilter("all");

    if (isLoading) {
      return <Loading />;
    }
  };
  return (
    <div className="img-container">
      {builderhall.map((item, index) => (
        <div className="figure-container" key={index}>
          <figure>
            <img
              src={item.image}
              alt={item.level}
              className={item.level === selectedThValue ? "active" : ""}
              onClick={() => navigateToHeader(item.level)}
            />
            <figcaption>{item.level.toUpperCase()}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Builderhall;
