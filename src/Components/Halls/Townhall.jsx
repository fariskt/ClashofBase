import React, { useContext } from "react";
import "../Hero/Hero.css";
import { townhall } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../Loading/Loading";

const Townhall = () => {
  const {
    selectedThValue,
    handleThValueFilter,
    isLoading,
    handleTypeFilter,
    setShowTh,
    setShowBh,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const navigateToHeader = (item) => {
    let path = `header`;
    navigate(path);
    setShowTh(true);
    setShowBh(false);
    handleThValueFilter(item);
    handleTypeFilter("all");

    if (isLoading) {
      return <Loading />;
    }
  };

  return (
    <div className="img-container">
      {townhall.map((item, index) => (
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

export default Townhall;
