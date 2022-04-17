import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import { HA_API } from "../helper/HA";

import "./HA.css";

const HA = () => {
  const [result, setResult] = useState([{}]);
  const [values, setValues] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
    loading: false,
    resultt: "",
  });

  const {
    age,
    sex,
    cp,
    trestbps,
    chol,
    fbs,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    ca,
    thal,
    loading,
    resultt,
  } = values;

  const handleChange = (field_name) => (event) => {
    setValues({
      ...values,
      loading: false,
      [field_name]: event.target.value,
    });
    console.log(values.age);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true });
    /*HA_API({
      age,
    })
      .then((data) => {
        console.log("returned data: ", data);
      })
      .catch((err) => {
        console.log("err thru compo: ", err);
      });*/
  };

  /*useEffect(() => {
    HA_API().then((data) => {
      setResult(data);
      console.log("resilt: ", result);
      console.log("dataa: ", data);
    });
  }, []);*/
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>

      <h1 className="dheading">Heart &nbsp;Attack &nbsp; Predictor</h1>
      <br />
      {/* action="/HeartAttack" method="POST"*/}
      <form className="formStylingHA" method="POST">
        <div className="row rHA">
          <div className="col cHA">
            <label className="HAlabel" htmlFor="age">
              Age :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingHA"
                id="age"
                name="age"
                value={age}
                onChange={handleChange("age")}
              />
            </label>

            <label className="HAlabel" htmlFor="restbps">
              Resting BP (mm Hg) (trestbps):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingHA"
                id="restbps"
                name="restbps"
              />
            </label>

            <label className="HAlabel" htmlFor="cp">
              Chest Pain Type (cp):&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="cp"
                name="cp"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="0">Asymptomatic</option>
                <option value="1">Atypical Angina</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="slope">
              Slope of the Peak Exercise ST Segment (slope):&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="slope"
                name="slope"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="0">Downsloping</option>
                <option value="1">Flat</option>
                <option value="2">Upsloping</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="ca">
              Number of Major Vessel(s) (ca):&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="ca"
                name="ca"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="restecg">
              Resting Electrocardiographic (restecg):&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="restecg"
                name="restecg"
              >
                <option selected disabled>
                  Choose
                </option>
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

          <div className="col cHA">
            <label className="HAlabel" htmlFor="sex">
              Sex :&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="sex"
                name="sex"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="chol">
              Cholesterol (mg/dl) :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingHA"
                id="chol"
                name="chol"
              />
            </label>

            <label className="HAlabel" htmlFor="exang">
              Exercise induced Angina (exang):&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="exang"
                name="exang"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="fbs">
              Is Fasting Blood Sugar Level &#62; 120 mg/dl ? :&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="fbs"
                name="fbs"
              >
                <option selected disabled>
                  Choose
                </option>
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
            </label>

            <label className="HAlabel" htmlFor="thal">
              Blood Disorder (Thalassemia/thal) :&nbsp;&nbsp;&nbsp;
              <select
                required
                className="inputStylingHA optionssHA"
                id="thal"
                name="thal"
              >
                <option selected disabled>
                  Choose
                </option>
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

            <label className="HAlabel" htmlFor="thalach">
              Maximum Heart Rate (thalach):&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingHA"
                id="thalach"
                name="thalach"
              />
            </label>
          </div>
        </div>
        <div className="row rHA" style={{ marginLeft: "15vw" }}>
          <label className="HAlabel" htmlFor="oldpeak">
            ST depression induced by exercise relative to rest (OldPeak)
            :&nbsp;&nbsp;&nbsp;
            <input
              required
              type="number"
              className="inputStylingHA"
              id="oldpeak"
              name="oldpeak"
              step="any"
            />
          </label>
        </div>
        <div className="btnContainerHA">
          <button
            className="btn btn-success submitButtonHA"
            onSubmit={onClickHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HA;
