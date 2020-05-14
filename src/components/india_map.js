import React, { useState, memo } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from "react-simple-maps";
const INDIA_TOPOJSON = require("./india_topojson/India-States.json");
const states = require("./india_topojson/state");
const geoUrl =
	"https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";

const rounded = (num) => {
	if (num > 1000000000) {
		return Math.round(num / 100000000) / 10 + "Bn";
	} else if (num > 1000000) {
		return Math.round(num / 100000) / 10 + "M";
	} else {
		return Math.round(num / 100) / 10 + "K";
	}
};

const MapChart = ({ setTooltipContent }) => {
	const [clickState, setClickState] = useState("Andhra Pradesh");
	return (
		<>
			<hr></hr>
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
						{/* <ZoomableGroup> */}
						<Geographies geography={INDIA_TOPOJSON}>
							{({ geographies }) =>
								geographies.map((geo) => (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onMouseEnter={() => {
											const { ST_NM } = geo.properties;
											setTooltipContent(
												<ul>
													<li>{ST_NM}</li>
												</ul>
											);
										}}
										onMouseLeave={() => {
											setTooltipContent("");
										}}
										onMouseDown={() => setClickState(geo.properties.ST_NM)}
										style={{
											default: {
												fill: "#D6D6DA",
												outline: "none",
												stroke: "grey",
												strokeWidth: ".7",
											},
											hover: {
												fill: "#F53",
												outline: "none",
											},
											pressed: {
												fill: "#E42",
												outline: "none",
											},
										}}
									/>
								))
							}
						</Geographies>
						{/* <Marker coordinates={[77, 22]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          Canada
        </text>
      </Marker> */}
						{/* </ZoomableGroup> */}
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
  <div className="card-content">
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br></br>
    </div>
  </div>
  <footer className="card-footer">
    <a href="#" className="card-footer-item">Save</a>
    <a href="#" className="card-footer-item">Edit</a>
    <a href="#" className="card-footer-item">Delete</a>
  </footer>
</div></div>
			</div>
		</>
	);
};

export default memo(MapChart);
