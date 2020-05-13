import React, { useState } from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";


export default function Navbar() {
	const [menu, setMenu] = useState(false);

	return (
		<nav className="navbar is-transparent">
			<div className="navbar-brand">
				<span className="navbar-item">
					<h2 className="is-uppercase">Covid Informative</h2>
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
					<Router >
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
								to=""
							>
								Statewise Stats
							</Link>
						</Router>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
