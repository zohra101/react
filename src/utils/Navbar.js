import React from "react";
import { Link } from "react-router";

export function Navbar() {
	return (
		<>
			<nav>
				<Link to="/home">HOME | </Link>
				<Link to="/greeting">GREETING | </Link>
				<Link to="/contact">CONTACT | </Link>
				<Link to="/about">ABOUT | </Link>
				<Link to="/videos">VIDEOS | </Link>
			</nav>
		</>
	);
}
