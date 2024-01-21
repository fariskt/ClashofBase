import React, { useContext } from "react";
import "./Footer.css";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const { handleThValueFilter, handleTypeFilter } = useContext(AppContext);

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
  const navigate = useNavigate();
  const handleTownhHall = (item) => {
    let path = `header`;
    navigate(path);
    handleThValueFilter(item);
    handleTypeFilter("all");
  };
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="elements">
          {th.map((item, index) => (
            <p key={index} onClick={() => handleTownhHall(item)}>
              {item.toUpperCase()}
            </p>
          ))}
        </div>
        <div className="footer-container">
          <div className="footer-section">
            <h2>ClashOfBase</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicingquam
              accusantium officia iure amet minus quia? Lorem ipsum dolor, sit
              amet consectetur adipisicingquam accusantium officia iure amet
              minus quia? Lorem ipsum dolor, sit amet consectetur
              adipisicingquam accusantium officia iure amet minus quia?
            </p>
          </div>
          <div className="footer-bottom">
            <h3>Info</h3>
            <Link to="/header">
              <h4>Layout</h4>
            </Link>
            <Link to="/upload">
              <h4>Upload Layout</h4>
            </Link>
            <h4>Contact us</h4>
          </div>
        </div>
        <div className="bottom-section">
          <div className="copyright">
            <p>Copyright ©️ 2024 All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
