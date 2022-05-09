import React, { useState } from "react";
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
      <form className="formStylingAL" method="POST">
        <div className="row rHA">
          <div className="col cHA">
            <label className="HAlabel" htmlFor="age">
              Age :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="age"
                name="age"
              />
            </label>

            <label className="HAlabel" htmlFor="Total_Bilirubin">
              Total Bilirubin (mg/dL):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Total_Bilirubin"
                name="Total_Bilirubin"
              />
            </label>

            <label className="HAlabel" htmlFor="Direct_Bilirubin">
              Direct Bilirubin (mg/dL):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Direct_Bilirubin"
                name="Direct_Bilirubin"
              />
            </label>

            <label className="HAlabel" htmlFor="Aspartate_Aminotransferase">
              Aspartate Aminotransferase (IU/L):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Aspartate_Aminotransferase"
                name="Aspartate_Aminotransferase"
              />
            </label>
            <label className="HAlabel" htmlFor="Albumin">
              Albumin (g/dL):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Albumin"
                name="Albumin "
              />
            </label>
          </div>

          <div className="col cHA">
            <label className="HAlabel" htmlFor="Gender">
              Gender :&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingAL optionssAL"
                id="Gender"
                name="Gender"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="Alkaline_Phosphotase">
              Alkaline Phosphotase (IU/L):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Alkaline_Phosphotase"
                name="Alkaline_Phosphotase"
              />
            </label>

            <label className="HAlabel" htmlFor="Alamine_Aminotransferase">
              Alamine Aminotransferase (IU/L):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Alamine_Aminotransferase"
                name="Alamine_Aminotransferase"
              />
            </label>

            <label className="HAlabel" htmlFor="Total_Protiens">
              Total Protiens (g/dL):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Total_Protiens"
                name="Total_Protiens"
              />
            </label>
            <label className="HAlabel" htmlFor="Albumin_and_Globulin_Ratio">
              Albumin and Globulin Ratio (A/G):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingAL"
                id="Albumin_and_Globulin_Ratio"
                name="Albumin_and_Globulin_Ratio"
              />
            </label>
          </div>
        </div>
        <div className="btnContainerAL">
          <button className="btn btn-success submitButtonAL" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AL;
