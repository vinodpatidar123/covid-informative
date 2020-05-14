import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import DashBoard from "./components/dashboard";
import "./index.scss";

import IndiaMapChart from "./components/india_map";
import StateMapChart from "./components/state_map";
import LineChart from "./components/lineChart";
import Hero from "./components/hero";

function App() {


  return (
    <div>
      <Router>
      <Navbar />
      </Router>
    </div>
  );
}

export default App;
