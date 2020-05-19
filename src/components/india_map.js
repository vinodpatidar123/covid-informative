import React, { Component }  from "react";
import {
	ComposableMap,
	Geographies,
	Geography
} from "react-simple-maps";
const INDIA_TOPOJSON = require("./india_topojson/India-States.json");
const states = require("./india_topojson/state");
var s = {};
var st = [];

class MapChart extends Component{

	state = {
		clickState : "Andhra Pradesh",
		stateData : [],
		state : {}
	}

	componentDidMount() {
        fetch('https://api.covid19india.org/data.json')
        .then(res => res.json())
        .then((data) => {
		  this.setState({stateData : data.statewise })
		//   console.log(this.state.stateData);
        })
		.catch(console.log);
		
	  }

	  componentDidUpdate(){
		  s = this.state.stateData.find(e => e.state === this.state.clickState);
		  console.log(s);
	  }

render(){
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
						  <select onChange={e=> this.setState({clickState :e.currentTarget.value})}>
							{ 
								states.map(state=>(
									<option value={state["st_nm"]}>{state["st_nm"]}</option>
								))
							}
						  </select>
						</span>
					  </p>
					</div>
	<div style={{paddingRight:"30px"}}>
	<div className="columns">
	  <div className="column is-half is-paddingless" style={{backgroundColor : "#5c6b73", color : "white",borderRadius : "5px",margin:"10px"}}>
	  <div className="column is-marginless">
			<h5>Confirmed Cases   -   {s["confirmed"]}</h5>
		</div>
	  </div>
	  <div className="column is-half is-paddingless" style={{backgroundColor : "#4ecdc4", color : "white",borderRadius : "5px",margin:"10px"}}>
	  <div className="column is-marginless">
			<h5>Active Cases   -   {s["active"]}</h5>
		</div>
	  </div>
	</div>
	<div className="columns">
	  <div className="column is-half is-paddingless" style={{backgroundColor : "#ef233c", color : "white",borderRadius : "5px",margin:"10px"}}>
	  <div className="column is-marginless">
			<h5>Death Cases   -   {s["deaths"]}</h5>
		</div>
	  </div>
	  <div className="column is-half is-paddingless" style={{backgroundColor : "#52b788", color : "white",borderRadius : "5px",margin:"10px"}}>
	  <div className="column is-marginless">
			<h5>Recovered Cases   -   {s["recovered"]}</h5>
		</div>
	  </div>
	</div>
	</div>
	</div>
	</div>
	</>
	)
	};
};

export default MapChart;
