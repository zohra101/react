import React from "react";
import { Navbar } from "../utils/Navbar.js";
import { handleClick } from "../controllers/handleClick.js";
import { handleSubmit } from "../controllers/handleSubmit.js";
import "../css/Home.scss";

const adjective = "easier";
const message = `The command line is ${adjective} now.`;

export function Home() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1 id="homeTitle">React is awesome.</h1>
				<div style={{wdith:"fit-content", justifySelf:"center"}}>
					<img width="75%"
					src="../assets/images/AdobeStock_739653522.jpeg" />
				</div>
				<p className="highlight">The message is: {message}</p>
				<button onClick={handleClick}>Click</button>
				<div>
					<br></br>
				</div>
				<output id="outputTag"></output>
				<form onSubmit={handleSubmit}>
					<input type="text"></input>
					<input type="submit"></input>
				</form>
			</main>
		</>
	);
}
