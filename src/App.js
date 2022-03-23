import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import HA from "./HA";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/HeartAttack" element={<HA />} />
        <Route exact path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
