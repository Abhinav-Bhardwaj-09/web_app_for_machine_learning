import React from "react";
import { NavLink } from "react-router-dom";

import "./CK.css";

const CK = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>
      <h1 className="dheading">
        Chronic &nbsp;Kidney &nbsp;Disease &nbsp; Predictor
      </h1>
      <br />

      <form className="formStyling">
        <div className="row rCK">
          <div className="col cCK">
            <label className="CKlabel">
              Age :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Specific Gravity :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="1.005">1.005</option>
                <option value="1.010">1.010</option>
                <option value="1.015">1.015</option>
                <option value="1.020">1.020</option>
                <option value="1.025">1.025</option>
              </select>
            </label>

            <label className="CKlabel">
              Sugar :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            <label className="CKlabel">
              Pus Cell :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="normal">Normal</option>
                <option value="abnormal">Abnormal</option>
              </select>
            </label>

            <label className="CKlabel">
              Bacteria :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="present">Present</option>
                <option value="notpresent">Not Present</option>
              </select>
            </label>

            <label className="CKlabel">
              Blood Glucose Random (in mgs/dl) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Serum Creatinine (in mgs/dl) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Potassium (in mEq/L) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Packed Cell Volume :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Red Blood Cell Count (in millions/cmm) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Coronary Artery Disease :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="CKlabel">
              Pedal Edema :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>

          <div className="col cCK">
            <label className="CKlabel">
              Blood Pressure (in mm/Hg) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Albumin :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            <label className="CKlabel">
              Red Blood Cells :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="normal">Normal</option>
                <option value="abnormal">Abnormal</option>
              </select>
            </label>

            <label className="CKlabel">
              Pus Cell Clumps :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="present">Present</option>
                <option value="notpresent">Not Present</option>
              </select>
            </label>

            <label className="CKlabel">
              Hypertension :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="CKlabel">
              Blood Urea (in mgs/dl) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Hemoglobin (in gms) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Sodium (in mEq/L) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Diabetes Mellitus :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="CKlabel">
              White Blood Cell Count (in cells/cumm) :&nbsp;&nbsp;&nbsp;
              <input type="number" className="inputStyling" />
            </label>

            <label className="CKlabel">
              Appetite :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="good">Good</option>
                <option value="poor">Poor</option>
              </select>
            </label>

            <label className="CKlabel">
              Anemia :&nbsp;&nbsp;&nbsp;
              <select className="inputStyling">
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CK;
