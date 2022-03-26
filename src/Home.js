import React from "react";
import { NavLink } from "react-router-dom";

import Card from "./UI Components/Card";

import "./Home.css";

const Home = () => {
  const onClickHandler = (props) => {};

  return (
    <div>
      <h1 className="dpheading">Disease &nbsp; Predictor</h1>
      <div className="diseasesTiles">
        <div className="row rHome">
          <div className="cHome">
            <NavLink to="/HeartAttack" exact style={{ textDecoration: "none" }}>
              <Card disease="Heart Attack" onClick={onClickHandler} />
            </NavLink>
          </div>
          <div className="cHome">
            <NavLink
              to="/ChronicKidney"
              exact
              style={{ textDecoration: "none" }}
            >
              <Card disease="Chronic Kidney" onClick={onClickHandler} />
            </NavLink>
          </div>
        </div>
        <div className="row rHome">
          <div className="cHome">
            <NavLink to="/BrainTumor" exact style={{ textDecoration: "none" }}>
              <Card disease="Brain Tumor" onClick={onClickHandler} />
            </NavLink>
          </div>
          <div className="cHome">
            <NavLink to="/AcuteLiver" exact style={{ textDecoration: "none" }}>
              <Card disease="Acute Liver" onClick={onClickHandler} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
