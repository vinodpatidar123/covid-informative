import React, { useState, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
const states_topojson = require("./india_topojson/states_topojson");
// const INDIA_TOPOJSON = require("./india_topojson/state/Assam.json");
const states = require("./india_topojson/state");
console.log(states);
// const states_topojson = require("./india_topojson/states_topojson");
const geoUrl =
  "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";
var element;
const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

  


const MapChart = ({ setTooltipContent }) => {
  const [clickState, setClickState] = useState("MadhyaPradesh");
  const INDIA_TOPOJSON = states_topojson[clickState];
  const config = {
    scale : 2450,
    center : [INDIA_TOPOJSON.transform.translate[0],INDIA_TOPOJSON.transform.translate[1]]
  }

  return (
    <>
        <hr></hr>
        <div className="columns">
          <div className="column is-one-third">
          <div className="field has-addons">
					  <p className="control">
						<span className="select">
						  <select onChange={e=>setClickState(e.currentTarget.value)}>
							{ 
								states.map(state=>(
									<option value={state["st"]}>{state["st_nm"]}</option>
								))
							}
						  </select>
						</span>
					  </p>
        </div>
        </div>
          <div className="column">
        <h3 className="is-uppercase has-text-centered has-text-weight-bold">State Statistics</h3>
        <h4 className="is-uppercase has-text-centered">{clickState}</h4>
      <ComposableMap data-tip="" projection="geoMercator" projectionConfig={config}>
        {/* <ZoomableGroup> */}
          <Geographies geography={INDIA_TOPOJSON}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  
                  onMouseEnter={() => {
                    const { st_nm, district } = geo.properties;
                    setTooltipContent(
                      <ul>
													<li>{st_nm} - {district}</li>
												</ul>
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                      stroke : "grey",
                      strokeWidth : ".7"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
          </div>
        </div>
    </>
  );
};

export default memo(MapChart);
