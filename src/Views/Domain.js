import React from "react";
import { NavbarActive } from "../Views/NavbarActive.js";

export function Domain() {
	const domain = window.location.hostname;
	const port = window.location.port;
	
	return (
		<>
			<header>
				<NavbarActive />
			</header>
			<main>
				<h1>Domain</h1>
				<p>domain: {domain}</p>
				<p>port: {port}</p>
			</main>
		</>
	);
}
