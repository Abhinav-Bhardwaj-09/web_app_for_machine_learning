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

      <form className="formStyling" method="POST">
        <div className="row rCK">
          <div className="col cCK">
            <label className="CKlabel" htmlFor="Age">
              Age :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Age"
                name="Age"
              />
            </label>

            <label className="CKlabel" htmlFor="Specific_Gravity">
              Specific Gravity :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Specific_Gravity"
                name="Specific_Gravity"
              >
                <option selected>Choose</option>
                <option value="1.005">1.005</option>
                <option value="1.010">1.010</option>
                <option value="1.015">1.015</option>
                <option value="1.020">1.020</option>
                <option value="1.025">1.025</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Sugar">
              Sugar :&nbsp;&nbsp;&nbsp;
              <select className="inputStylingCK" id="Sugar" name="Sugar">
                <option selected>Choose</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Pus_Cell">
              Pus Cell :&nbsp;&nbsp;&nbsp;
              <select className="inputStylingCK" id="Pus_Cell" name="Pus_Cell">
                <option selected>Choose</option>
                <option value="normal">Normal</option>
                <option value="abnormal">Abnormal</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Bacteria">
              Bacteria :&nbsp;&nbsp;&nbsp;
              <select className="inputStylingCK" id="Bacteria" name="Bacteria">
                <option selected>Choose</option>
                <option value="present">Present</option>
                <option value="notpresent">Not Present</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Blood_Glucose_Random">
              Blood Glucose Random (in mgs/dl) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Blood_Glucose_Random"
                name="Blood_Glucose_Random"
              />
            </label>

            <label className="CKlabel" htmlFor="Serum_Creatinine">
              Serum Creatinine (in mgs/dl) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Serum_Creatinine"
                name="Serum_Creatinine"
              />
            </label>

            <label className="CKlabel" htmlFor="Potassium">
              Potassium (in mEq/L) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Potassium"
                name="Potassium"
              />
            </label>

            <label className="CKlabel" htmlFor="Packed_Cell_Volume">
              Packed Cell Volume :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Packed_Cell_Volume"
                name="Packed_Cell_Volume"
              />
            </label>

            <label className="CKlabel" htmlFor="Red_Blood_Cell_Count">
              Red Blood Cell Count (in millions/cmm) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Red_Blood_Cell_Count"
                name="Red_Blood_Cell_Count"
              />
            </label>

            <label className="CKlabel" htmlFor="Coronary_Artery_Disease">
              Coronary Artery Disease :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Coronary_Artery_Disease"
                name="Coronary_Artery_Disease"
              >
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Pedal_Edema">
              Pedal Edema :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Pedal_Edema"
                name="Pedal_Edema"
              >
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>

          <div className="col cCK">
            <label className="CKlabel" htmlFor="Blood_Pressure">
              Blood Pressure (in mm/Hg) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Blood_Pressure"
                name="Blood_Pressure"
              />
            </label>

            <label className="CKlabel" htmlFor="Albumin">
              Albumin :&nbsp;&nbsp;&nbsp;
              <select className="inputStylingCK" id="Albumin" name="Albumin">
                <option selected>Choose</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Red_Blood_Cells">
              Red Blood Cells :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Red_Blood_Cells"
                name="Red_Blood_Cells"
              >
                <option selected>Choose</option>
                <option value="normal">Normal</option>
                <option value="abnormal">Abnormal</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Pus_Cell_Clumps">
              Pus Cell Clumps :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Pus_Cell_Clumps"
                name="Pus_Cell_Clumps"
              >
                <option selected>Choose</option>
                <option value="present">Present</option>
                <option value="notpresent">Not Present</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Hypertension">
              Hypertension :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Hypertension"
                name="Hypertension"
              >
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Blood_Urea">
              Blood Urea (in mgs/dl) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Blood_Urea"
                name="Blood_Urea"
              />
            </label>

            <label className="CKlabel" htmlFor="Hemoglobin">
              Hemoglobin (in gms) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Hemoglobin"
                name="Hemoglobin"
              />
            </label>

            <label className="CKlabel" htmlFor="Sodium">
              Sodium (in mEq/L) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="Sodium"
                name="Sodium"
              />
            </label>

            <label className="CKlabel" htmlFor="Diabetes_Mellitus">
              Diabetes Mellitus :&nbsp;&nbsp;&nbsp;
              <select
                className="inputStylingCK"
                id="Diabetes_Mellitus"
                name="Diabetes_Mellitus"
              >
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="White_Blood_Cell_Count">
              White Blood Cell Count (in cells/cumm) :&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="inputStylingCK"
                id="White_Blood_Cell_Count"
                name="White_Blood_Cell_Count"
              />
            </label>

            <label className="CKlabel" htmlFor="Appetite">
              Appetite :&nbsp;&nbsp;&nbsp;
              <select className="inputStylingCK" id="Appetite" name="Appetite">
                <option selected>Choose</option>
                <option value="good">Good</option>
                <option value="poor">Poor</option>
              </select>
            </label>

            <label className="CKlabel" htmlFor="Anemia">
              Anemia :&nbsp;&nbsp;&nbsp;
              <select className="inputStylingCK" id="Anemia" name="Anemia">
                <option selected>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
        </div>
        <div className="btnContainerCK">
          <button className="btn btn-success submitButtonCK" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CK;
