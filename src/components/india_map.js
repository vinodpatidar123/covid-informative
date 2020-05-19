import React, { useState, memo,useEffect } from "react";
import {
	ComposableMap,
	Geographies,
	Geography
} from "react-simple-maps";
const INDIA_TOPOJSON = require("./india_topojson/India-States.json");
const states = require("./india_topojson/state");
var s;
function MapChart() {
	const [clickState, setClickState] = useState("Andhra Pradesh");
	const [stateData,setStateData] = useState([]);
	useEffect(() => {
		fetch(
		  `https://api.rootnet.in/covid19-in/stats/latest`,
		  {
			method: "GET",
			headers: new Headers({
			  Accept: "application/json"
			})
		  }
		)
		  .then(res => res.json())
		  .then(response => {
			setStateData(response.data.regional);
			console.log(response.data);
		  })
		  .catch(error => console.log(error));
	  },[]);
	// s = stateData.find(e => e.loc === clickState);
	// // console.log(s)

	// const l = Object.entries(stateData);
	// console.log(l[0][1])

	// Object.keys(stateData).map(k => stateData[k]).forEach(element => {
	// 		Object.values(element).forEach(e=>(
	// 			console.log(e)
	// 		))
	// });
	return (
		<>
			<h3 className="is-uppercase has-text-centered has-text-weight-bold">
				India Statistics
			</h3>
			<div className="columns">
				<div className="column">
					<ComposableMap
						data-tip=""
						projection="geoMercator"
						projectionConfig={{
							scale: 1000,
							center: [89.9629, 22.5937],
						}}
					>
						<Geographies geography={INDIA_TOPOJSON}>
							{({ geographies }) =>
								geographies.map((geo) => (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										style={{
											default: {
												fill: "#D6D6DA",
												outline: "none",
												stroke: "grey",
												strokeWidth: ".7",
											},
											hover: {
												fill: "#D6D6DA",
												outline: "none",
												stroke: "grey",
												strokeWidth: ".7",
											},
											pressed: {
												fill: "#D6D6DA",
												outline: "none",
												stroke: "grey",
												strokeWidth: ".7",
											},
										}}
									/>
								))
							}
						</Geographies>
					</ComposableMap>
				</div>
				<div className="column">
					<div className="field has-addons">
					  <p className="control">
						<span className="select">
						  <select onChange={e=>setClickState(e.currentTarget.value)}>
							{ 
								states.map(state=>(
									<option value={state["st_nm"]}>{state["st_nm"]}</option>
								))
							}
						  </select>
						</span>
					  </p>
					</div>
	<div className="card">
  	<header className="card-header">
    <p className="card-header-title">
      {clickState}
    </p>
    <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  	</header>
  	<footer className="card-footer">
    <a href="#" className="card-footer-item">Save</a>
    <a href="#" className="card-footer-item">Edit</a>
    <a href="#" className="card-footer-item">Delete</a>
  	</footer>
	</div>
	</div>
	</div>
	</>
	);
};

export default memo(MapChart);
