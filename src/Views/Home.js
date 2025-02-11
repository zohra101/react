// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React, { useEffect}  from "react";
import { Navbar } from "../Views/Navbar.js";
import { handleClick } from "../controllers/handleClick.js";
import { handleSubmit } from "../controllers/handleSubmit.js";
import "../css/Home.scss";
import midEastImage from "../../assets/images/archcopy.png";
// import { Carousel } from "../Views/Carousel.js";

export function Home() {
	debugger;
	useEffect(componentDidMount, []);

	const adjective = "easier";
	const message = `The command line is ${adjective} now.`;

	const domain = window.location.hostname;
	console.log(`Domain: ${domain}`);
	console.log(`Arch path: ${midEastImage}`);
	debugger;
	return (
		<>
			<header id="homeHeader">
				<Navbar />
			</header>
			<main id="homeMain">
				<h1 id="homeTitle">React is awesome.</h1>
				<div
					style={{
						width: "fit-content",
						justifySelf: "center",
						resize: "none",
					}}>
					<img
						id="archTag"
						src={midEastImage}
						// data-bs-title="A picture of an arch"
						// data-bs-toggle="tooltip"
						width="75% !important"
					/>
				</div>
				<p className="highlight">The message is: {message}</p>
				<button onClick={handleClick}>Click</button>
				<div>
					<br></br>
				</div>
				{/* <Carousel /> */}
				<output id="outputTag"></output>
				<form onSubmit={handleSubmit}>
					<input type="text"></input>
					<input type="submit"></input>
				</form>
			</main>
		</>
	);
}

function componentDidMount() {
	document.getElementById("archTag");
	console.log(archTag);
// 	document.getElementById("titleTag");
// 	titleTag.innerHTML = "Home";
// 	const imgTag = document.getElementById("archJpeg");
// new bootstrap.Tooltip(imgTag);
}
