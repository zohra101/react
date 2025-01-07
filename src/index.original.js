import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(window.bodyTag);

root.render(<h1>Hello, Alex!</h1>);

// root.render(/*#
//     _ PURE__
//     */
//     React.createElement("h1", null, "Hello, Alex!")
// );