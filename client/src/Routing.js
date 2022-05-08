import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import HA from "./Disease Components/HA";
import BC from "./Disease Components/BC";
import CK from "./Disease Components/CK";
import AL from "./Disease Components/AL";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/HeartAttack" element={<HA />} />
        <Route exact path="/BreastCancer" element={<BC />} />
        <Route exact path="/ChronicKidney" element={<CK />} />
        <Route exact path="/AcuteLiver" element={<AL />} />
        <Route exact path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routing;
