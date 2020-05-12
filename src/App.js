import React, { useState } from 'react';
import Navbar from './components/navbar';
import DashBoard from './components/dashboard';
import ReactTooltip from "react-tooltip";
import "./index.scss";

import IndiaMapChart from "./components/india_map";
import StateMapChart from "./components/state_map";
import LineChart from "./components/lineChart";
import Hero from "./components/hero";

function App() {
  const [content, setContent] = useState("");

  return (
    <div>
      <Navbar />
      <Hero />
<DashBoard />
<div>
<IndiaMapChart setTooltipContent={setContent} />
<StateMapChart setTooltipContent={setContent} />
<ReactTooltip>{content}</ReactTooltip> 
</div>
<LineChart />
    </div>
  );
}

export default App;
