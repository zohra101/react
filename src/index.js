import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Views/Home.js";
import { Videos } from "./Views/Videos.js";
import { MyGreeting } from "./Views/MyGreeting.js";
import { Navbar } from "./utils/Navbar.js";
import { ImageMap } from "./Views/ImageMap.js";

const root = createRoot(window.bodyTag);

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
			</Routes>
		</BrowserRouter>
		{/* <main>
			<p>{message}</p>
		</main> */}
	</>
);
