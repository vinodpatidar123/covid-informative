import React, { memo } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from "react-simple-maps";
const INDIA_TOPOJSON = require("./india_topojson/India-States.json");
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
												`${ST_NM} Death :- 3454`
											);
										}}
										onMouseLeave={() => {
											setTooltipContent("");
										}}
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
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
								<img
									src="http://bulma.io/images/placeholders/1280x960.png"
									alt="Image"
								/>
							</figure>
						</div>
						<div className="card-content">
							<div className="media">
								<div className="media-left">
									<figure className="image is-48x48">
										<img
											src="http://bulma.io/images/placeholders/96x96.png"
											alt="Image"
										/>
									</figure>
								</div>
								<div className="media-content">
									<p className="title is-4">John Smith</p>
									<p className="subtitle is-6">@johnsmith</p>
								</div>
							</div>

							<div className="content">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Phasellus nec iaculis mauris.{" "}
								<a>@bulmaio</a>.<a>#css</a> <a>#responsive</a>
								<br />
								<small>11:09 PM - 1 Jan 2016</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(MapChart);
