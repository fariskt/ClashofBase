import React from "react";
import "./Loading.css";
function Loading() {
  return (
    <>
      <div className="loader-container">
        <div className="spinner"></div>
      </div>

      <h3 className="loading-details">Please wait...</h3>
    </>
  );
}

export default Loading;
