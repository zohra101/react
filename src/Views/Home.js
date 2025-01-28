import React from "react";
import { Navbar } from "../utils/Navbar.js";
import { handleClick } from "../controllers/handleClick.js";
import { handleSubmit } from "../controllers/handleSubmit.js";
import "../css/Home.scss";
// import { arch } from "../../assets/images/arch.jpeg";
import { Carousel } from "./Carousel.js";

export function Home() {
const adjective = "easier";
const message = `The command line is ${adjective} now.`;

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1 id="homeTitle">React is awesome.</h1>
				{/* <div style={{ wdith: "fit-content", justifySelf: "center" }}>
					<img
						width="75%"
						src={arch}
					/>
				</div> */}
				<p className="highlight">The message is: {message}</p>
				<button onClick={handleClick}>Click</button>
				<div>
					<br></br>
				</div>
				<Carousel/>
				<output id="outputTag"></output>
				<form onSubmit={handleSubmit}>
					<input type="text"></input>
					<input type="submit"></input>
				</form>
			</main>
		</>
	);
}
