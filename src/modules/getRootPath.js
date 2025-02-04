import React from "react";
import { Domain } from "../Views/Domain.js";

export function getRootPath() {
    const domain = window.location.hostname;
    let rootPath="";

    if (domain === "zohra101.github.io")
        rootPath = "/capstone-level-3";

}