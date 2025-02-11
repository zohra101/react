import React from "react";
import { Link } from "react-router";

export function ActiveNavbar() {
	const rootPath = getRootPath();
	return (
		<>
			<nav>
				{/* <Link to="/home">HOME | </Link>
				<Link to="/greeting">GREETING | </Link>
				<Link to="/contact">CONTACT | </Link>
				<Link to="/about">ABOUT | </Link>
				<Link to="/videos">VIDEOS | </Link>
				<Link to="/outputPractice">OUTPUT PRACTICE | </Link>
				<Link to="/domain">DOMAIN </Link> */}

                <Link to={`${rootPath}/`}></Link>
				<Link to={`${rootPath}/home`}>HOME | </Link>
				<Link to={`${rootPath}/greeting`}>GREETING | </Link>
				<Link to={`${rootPath}/videos`}>VIDEOS | </Link>
				<Link to={`${rootPath}/outputPractice`}>OUTPUT PRACTICE | </Link>
				<Link to={`${rootPath}/domain`}>DOMAIN </Link>
			</nav>
		</>
	);
}