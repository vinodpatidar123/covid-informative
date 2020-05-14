import React, { useState } from "react";
import { Link,BrowserRouter as Router , Route,Switch } from "react-router-dom";

import DashBoard from "./dashboard";
import ReactTooltip from "react-tooltip";
import IndiaMapChart from "./india_map";
import StateMapChart from "./state_map";
import LineChart from "./lineChart";
import Hero from "./hero";

export default function Navbar() {
	const [menu, setMenu] = useState(false);
	const [indiaTooltip, setIndiaTooltip] = useState("");
	const [stateTooltip, setStateTooltip] = useState("");


	return (
		<Router >
		<nav className="navbar is-transparent">
			<div className="navbar-brand">
				<span className="navbar-item">
					<Link className="navbar-item is-uppercase" to="/"><h2 className="is-uppercase">Covid Informative</h2></Link>
				</span>
				<a
					role="button"
					onClick={() => setMenu(!menu)}
					className={`navbar-burger burger ${
						menu ? "is-active" : ""
					}`}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div className={`navbar-menu ${menu ? "is-active" : ""}`}>
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="field is-grouped">
							<Link
								className="navbar-item item is-uppercase"
								to="/news"
							>
								News
							</Link>
							<Link
								className="navbar-item item is-uppercase"
								to="/zones"
							>
								Zones
							</Link>
							<Link
								className="navbar-item item is-uppercase"
								to="/state-wise"
							>
								Statewise Stats
							</Link>
							{/* </Router> */}
						</div>
					</div>
				</div>
			</div>
		</nav>
		<Switch >
    	<Route exact path="/" >
        <Hero />
        <DashBoard />
		<LineChart />
        </Route>
        <Route path="/zones">
		<IndiaMapChart />
        {/* <ReactTooltip type="light" >{indiaTooltip}</ReactTooltip> */}
        </Route>
		<Route path="/state-wise">
		<StateMapChart setTooltipContent={setStateTooltip} />
        <ReactTooltip type="light" >{stateTooltip}</ReactTooltip>
		</Route>
        <Route path="/news">
        <div>

        </div>
        </Route>
		</Switch>
		</Router>
	);
}
