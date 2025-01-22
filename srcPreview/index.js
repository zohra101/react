import React from "react";
import { createRoot} from "react-dom/client";
import { handleClick} from "./controllers/handleClick.js";

const message = "First message.";

const root = createRoot(window.bodyTag);
root.render(
    <main>
        <h1>Hello, React!</h1>
        <h2>Start editing to see some magic happen.</h2>
        <h3>Hello, world!</h3>
        <p>{message}</p>
        <button onClick={handleClick}>Click Me</button>
        <form onSubmit={handleSubmit}>
            <input></input>
            <input type ="submit"></input>
        </form>
    </main>
);

