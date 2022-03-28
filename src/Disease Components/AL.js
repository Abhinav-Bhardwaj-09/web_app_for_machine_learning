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
              Total Bilirubin (mg/dL):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Direct Bilirubin (mg/dL):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Aspartate Aminotransferase (IU/L):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
            <label className="HAlabel">
              Albumin (g/dL):&nbsp;&nbsp;&nbsp;
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
              Alkaline Phosphotase (IU/L):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Alamine Aminotransferase (IU/L):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="HAlabel">
              Total Protiens (g/dL):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
            <label className="HAlabel">
              Albumin and Globulin Ratio (A/G):&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AL;
