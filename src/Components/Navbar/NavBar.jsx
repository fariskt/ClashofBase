import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";
import { FiUpload } from "react-icons/fi";


const NavBar = () => {
  const { setSelectedThValue } = useContext(AppContext);

  const { itemCount } = useContext(CartContext);

  const navigate = useNavigate();
  const navCLik = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    
      <div className="navbar">
        <Link onClick={navCLik} to="/" id="logo">
          ClashSpace
        </Link>
        <Link onClick={() => setSelectedThValue("th15")} to="/header">
          Bases
        </Link>
        <Link to="/cart">
          Cart <sup>{itemCount}</sup>
        </Link>
        <Link to="/upload" title="upload  base">
          <FiUpload/>
        </Link>
      </div>
  );
};
export default NavBar;
