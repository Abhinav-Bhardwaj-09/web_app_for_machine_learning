import React from "react";

import Card from "./UI Components/Card";

import "./Body.css";

const Body = () => {
  const onClickHandler = (props) => {};

  return (
    <div>
      <h1 className="dpheading">Disease &nbsp; Predictor</h1>
      <div className="diseasesTiles">
        <div className="row r">
          <div className="c">
            <Card disease="Heart Attack" onClick={onClickHandler} />
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

export default Body;
