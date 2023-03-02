import React from "react";
import "./Spinner.css";
function Loadingdot() {
  return (
    <div className="loader">
      <span className="loader__element"></span>
      <span className="loader__element"></span>
      <span className="loader__element"></span>
    </div>
  );
}

export default Loadingdot;
