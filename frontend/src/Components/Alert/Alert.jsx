import style from "../style.module.css";
import React, { useState } from "react";
import css from "classnames";

export default function Alert({ children, type, message }) {
  const [isAlert, setIsAlert] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsAlert(false);
  };

  return (
    <div className={css(style.alert, style[type], !isAlert && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
