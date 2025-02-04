export function getRootPath() {
    const domain = window.location.hostname;
    let rootPath="";

    console.log(domain);

    if (domain === "zohra101.github.io")
        rootPath = "/capstone-level-3";

    console.log(rootPath);

}