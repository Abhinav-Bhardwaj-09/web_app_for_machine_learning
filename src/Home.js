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
        <div className="row r">
          <div className="c">
            <NavLink to="/HeartAttack" exact style={{ textDecoration: "none" }}>
              <Card disease="Heart Attack" onClick={onClickHandler} />
            </NavLink>
          </div>
          <div className="c">
            <Card disease="Chronic Kidney" onClick={onClickHandler} />
          </div>
        </div>
        <div className="row r">
          <div className="c">
            <Card disease="Brain Tumor" onClick={onClickHandler} />
          </div>
          <div className="c">
            <Card disease="Acute Liver" onClick={onClickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
