import React from "react";
import { NavLink } from "react-router-dom";

import "./CK.css";

const CK = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>
      CK Component
    </div>
  );
};

export default CK;
