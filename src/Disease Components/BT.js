import React from "react";
import { NavLink } from "react-router-dom";

import "./BT.css";

const BT = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>

      <h1 className="dheading">Brain &nbsp;Tumor &nbsp; Predictor</h1>
      <br />
    </div>
  );
};

export default BT;
