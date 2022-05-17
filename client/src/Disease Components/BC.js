import React from "react";
import { NavLink } from "react-router-dom";

import "./BC.css";

const BT = () => {
  return (
    <div>
      <NavLink to="/Home" exact style={{ textDecoration: "none" }}>
        <div className="arrow-left"></div>
      </NavLink>

      <h1 className="dheading">Breast &nbsp;Cancer &nbsp; Predictor</h1>
      <br />
      <form className="formStylingBC" method="POST">
        <div className="row rBC">
          <div className="col cBC">
            <label className="BClabel">
              Radius Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="radius_mean"
                name="radius_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Texture Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="texture_mean"
                name="texture_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Perimeter Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="perimeter_mean"
                name="perimeter_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Area Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="area_mean"
                name="area_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Smoothness Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="smoothness_mean"
                name="smoothness_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Compactness Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="compactness_mean"
                name="compactness_mean"
                step="any"
              />
            </label>
            <label className="BClabel">
              Concavity Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="concavity_mean"
                name="concavity_mean"
                step="any"
              />
            </label>
            <label className="BClabel">
              Concave Points Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="concave_points_mean"
                name="concave_points_mean"
                step="any"
              />
            </label>
            <label className="BClabel">
              Symmetry Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="symmetry_mean"
                name="symmetry_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Fractal Dimension Mean :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="fractal_dimension_mean"
                name="fractal_dimension_mean"
                step="any"
              />
            </label>

            <label className="BClabel">
              Radius se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="radius_se"
                name="radius_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Texture se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="texture_se"
                name="texture_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Perimeter se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="perimeter_se"
                name="perimeter_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Area se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="area_se"
                name="area_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Smoothness se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="smoothness_se"
                name="smoothness_se"
                step="any"
              />
            </label>
          </div>

          <div className="col cBC">
            <label className="BClabel">
              Compactness se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="compactness_se"
                name="compactness_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Concavity se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="concavity_se"
                name="concavity_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Concave Points se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="concave_points_se"
                name="concave_points_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Symmetry se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="symmetry_se"
                name="symmetry_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Fractal Dimension se :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="fractal_dimension_se"
                name="fractal_dimension_se"
                step="any"
              />
            </label>

            <label className="BClabel">
              Radius Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="radius_worst"
                name="radius_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Texture Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="texture_worst"
                name="texture_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Perimeter Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="perimeter_worst"
                name="perimeter_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Area Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="area_worst"
                name="area_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Smoothness Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="smoothness_worst"
                name="smoothness_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Compactness Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="compactness_worst"
                name="compactness_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Concavity Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="concavity_worst"
                name="concavity_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Concave Points Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="concave_points_worst"
                name="concave_points_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Symmetry Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="symmetry_worst"
                name="symmetry_worst"
                step="any"
              />
            </label>

            <label className="BClabel">
              Fractal Dimension Worst :&nbsp;&nbsp;&nbsp;
              <input
                required
                type="number"
                className="inputStylingBC"
                id="fractal_dimension_worst"
                name="fractal_dimension_worst"
                step="any"
              />
            </label>
          </div>
        </div>

        <div className="btnContainerHA">
          <button className="btn btn-success submitButtonHA">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BT;
