import React from "react";
import { Navbar } from "../utils/Navbar.js";
import { YouTube } from "./YouTube.js";
import { Vimeo } from "./Vimeo.js";
// import { Twitch } from "./Twitch.js";
import { LocalVideo } from "./LocalVideo.js";
import "../css/Videos.scss"

export function Videos() {
	return (
		<>
			<header>
			<Navbar/>
			</header>
			<main>
			<h2 id="videos">VIDEOS</h2>
			<LocalVideo
				label="Dolphins"
				src="../assets/videos/5607991-uhd_3840_2160_30fps.mp4"
			/>
			<div>
				<br></br>
			</div>
			<YouTube
				label="How to Win at Splendor"
				src="https://www.youtube.com/embed/lYIdqDcoPiA?si=uc8pvhJ63CaScAZE"
			/>
			<div>
				<br></br>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
			<Vimeo
				label="Rajasthani Dance"
				src="https://player.vimeo.com/video/267034685?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
			/>
			<div>
				<br></br>
			</div>
			{/* <Twitch 
            label="Starfield Clip"
            src="https://clips.twitch.tv/embed?clip=GenerousCaringSamosaTriHard-aiscKCsQD39TWH7L&parent=localhost&parent=localhost:5050"/> */}
		</main>
		</>
	);
}