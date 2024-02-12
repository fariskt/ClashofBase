import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";
import { FiUpload } from "react-icons/fi";

const NavBar = () => {
  const { dispatch, handleTypeFilter } = useContext(AppContext);

  const { itemCount } = useContext(CartContext);

  return (
    <div className="navbar">
      <Link to="/" id="logo">
        ClashSpace
      </Link>
      <Link
        onClick={() => {
          dispatch({ type: "SET_SELECTED_TH_VALUE", payload: "th15" });
          handleTypeFilter("all");
        }}
        to="/header"
      >
        Bases
      </Link>
      <Link to="/cart">
        Cart <sup>{itemCount}</sup>
      </Link>
      <Link to="/upload" title="upload layout">
        <FiUpload />
      </Link>
    </div>
  );
};
export default NavBar;
