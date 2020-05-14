import React, { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
const states_topojson = require("./india_topojson/states_topojson");
const states = require("./india_topojson/state");
const wrapperStyles = {
  width: "100vw",
  // maxWidth: 700,
  // margin: "0 auto",
}

const MapChart = ({ setTooltipContent }) => {
  const [clickState, setClickState] = useState("AndhraPradesh");
  const INDIA_TOPOJSON = states_topojson[clickState];
  let color;
  const fillColor = (state,district) => {
    color = states.find(e => e.st_nm == state).zones[district];
    console.log(color);
    if(color === "Red Zone") color = "#ff1919";
    else if(color === "Orange Zone") color = "#ffae19";
    else color = "#198c19"
    return color
  }
  var config = {
    scale : 2500,
    center : [INDIA_TOPOJSON.transform.translate[0]+6,INDIA_TOPOJSON.transform.translate[1]+4]
  }

  return (
    <>
        <div className="columns" style={wrapperStyles}>
          <div className="column is-one-third">
          <div className="field">
					  <p className="control">
						<span className="select">
						  <select onChange={e=>setClickState(e.currentTarget.value)} >
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
      <ComposableMap width={980}
          height={470}
          style={{
            width: "100%",
            animationDelay: "2.5s"
          }} data-tip="" projection="geoMercator" projectionConfig={config}>
          <Geographies geography={INDIA_TOPOJSON}>
            {({geographies}) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor(geo.properties.st_nm,geo.properties.district)}
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
                      fill: color,
                      outline: "none",
                      stroke : "black",
                      strokeWidth : ".7"
                    },
                    hover: {
                      fill: fillColor(geo.properties.st_nm,geo.properties.district),
                      outline: "none"
                    },
                    pressed: {
                      fill: fillColor(geo.properties.st_nm,geo.properties.district),
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
      <h5><strong>Note:-</strong>Please zoom if map looks small.</h5>
          </div>
        </div>
    </>
  );
};

export default memo(MapChart);
