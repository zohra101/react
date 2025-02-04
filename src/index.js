import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Views/Home.js";
import { Videos } from "./Views/Videos.js";
import { MyGreeting } from "./Views/MyGreeting.js";
import { ImageMap } from "./Views/ImageMap.js";
import { OutputPractice } from "./Views/OutputPractice.js";
import { Domain } from "./Views/Domain.js";
} 

// const root = createRoot(window.bodyTag);
const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

// const message = `You've reached this page because the page you were expecting is not available. Please contact the site administrator for assistance.`;

root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/videos"
					element={<Videos />}
				/>
				<Route
					path="/greeting"
					element={<MyGreeting />}
				/>
				<Route
					path="/imagemap"
					element={<ImageMap />}
				/>
				<Route
					path="/outputPractice"
					element={<OutputPractice />}
				/>
				<Route
					path="/domain"
					element={<Domain />}
				/>
			</Routes>
		</BrowserRouter>
		{/* <main>
			<p>{message}</p>
		</main> */}
	</>
);
