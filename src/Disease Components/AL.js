import React from "react";
import { NavLink } from "react-router-dom";

import "./AL.css";

const AL = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>
      AL Component
    </div>
  );
};

export default AL;
