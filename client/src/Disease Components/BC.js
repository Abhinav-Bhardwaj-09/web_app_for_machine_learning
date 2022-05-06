import React from "react";
import { NavLink } from "react-router-dom";

import "./BC.css";

const BT = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>

      <h1 className="dheading">Brain &nbsp;Tumor &nbsp; Predictor</h1>
      <br />
      <form className="formStyling">
        <div className="row rBT">
          <div className="col cBT">
            <label className="BTlabel">
              Age :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="BTlabel">
              Resting BP (mm Hg) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="BTlabel">
              Chest Pain Type :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">Asymptomatic</option>
                <option value="1">Atypical Angina</option>
                <option value="2">Non-atypical Angina</option>
                <option value="3">Typical Angina</option>
              </select>
            </label>

            <label className="BTlabel">
              Slope of the Peak Exercise ST Segment :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">Downsloping</option>
                <option value="1">Flat</option>
                <option value="2">Upsloping</option>
              </select>
            </label>

            <label className="BTlabel">
              Number of Major Vessel(s) :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>

            <label className="BTlabel">
              Resting Electrocardiographic :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">
                  Probable or Definite Left Ventricular Hypertrophy by
                  Estes&#39; Criteria
                </option>
                <option value="1">Normal</option>
                <option value="2">
                  ST-T Wave Abnormality (T wave inversions and/or ST elevation
                  or depression of &#62; 0.05 mV)
                </option>
              </select>
            </label>
          </div>

          <div className="col cBT">
            <label className="HAlabel">
              Sex :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </label>

            <label className="BTlabel">
              Cholesterol (mg/dl) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="BTlabel">
              Exercise induced Angina :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </label>

            <label className="BTlabel">
              Is Fasting Blood Sugar Level &#62; 120 mg/dl ? :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
            </label>

            <label className="BTlabel">
              Blood Disorder (Thalassemia) :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">Dropped from the dataset previously</option>
                <option value="1">
                  Fixed Defect (No Blood Flow in some part of the Heart))
                </option>
                <option value="2">Normal Blood Flow</option>
                <option value="3">
                  Reversible Defect (Blood Flow is observed but NOT Normal)
                </option>
              </select>
            </label>

            <label className="BTlabel">
              Maximum Heart Rate :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>
          </div>
        </div>

        <div className="row rBT">
          <label className="BTlabel">
            ST depression induced by exercise relative to rest (OldPeak)
            :&nbsp;&nbsp;&nbsp;
            <input type="number" className="inputStyling" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default BT;