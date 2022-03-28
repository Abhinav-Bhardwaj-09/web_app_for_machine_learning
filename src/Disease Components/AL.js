import React from "react";
import { NavLink } from "react-router-dom";

import "./AL.css";

const AL = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>
      <h1 className="dheading">
        Acute &nbsp;Liver &nbsp;Disease &nbsp; Predictor
      </h1>
      <form className="formStyling">
        <div className="row rHA">
          <div className="col cHA">
            <label className="HAlabel">
              Age :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Total Bilirubin :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Direct Bilirubin :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Aspartate Aminotransferase :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
            <label className="HAlabel">
              Albumin :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
          </div>

          <div className="col cHA">
            <label className="HAlabel">
              Sex :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </label>

            <label className="HAlabel">
              Alkaline Phosphotase :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Alamine Aminotransferase :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Total Protiens :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
            <label className="HAlabel">
              Albumin_and_Globulin_Ratio :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AL;
