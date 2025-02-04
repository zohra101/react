import React from "react";
import { Navbar } from "../Views/Navbar.js";

export function Domain() {
	const domain = window.location.hostname;
	const port = window.location.port;
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1>Domain</h1>
				<p>domain: {domain}</p>
				<p>port: {port}</p>
			</main>
		</>
	);
}
