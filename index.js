import React from "react";
import { createRoot} from "react-dom/client";

const message = "First message.";

const root = createRoot(window.bodyTag);
root.render(
    <main>
        <h1>Hello, React!</h1>
        <h2>Start editing to see some magic happen.</h2>
        <h3>Hello, world!</h3>
        <p>{message}</p>
        <button onClick={handleClick}>Click Me</button>
    </main>
);

function handleClick() {
    console.log("You clicked the button.");
}