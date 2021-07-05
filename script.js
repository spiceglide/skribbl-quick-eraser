// ==UserScript==
// @name         Skribbl.io Quick Eraser
// @match        *://skribbl.io/*
// @grant        none
// ==/UserScript==

const canvas = document.querySelector("#canvasGame");
const eraser = document.querySelector("[data-tool='erase']");
let activeTool;
// Enables eraser when right mouse button held
function enableEraser(event) {
    // Check if event triggered by right mouse button
    if (event.button === 2) {
        activeTool = document.querySelector(".toolActive");
        eraser.click();
        let clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent("mousedown", true, true);
        Object.defineProperty(clickEvent, "clientX", {value: event.clientX});
        Object.defineProperty(clickEvent, "clientY", {value: event.clientY});
        canvas.dispatchEvent(clickEvent);
    }
}
// Disables eraser when right mouse button released
function disableEraser(event) {
    // Check if event triggered by right mouse button
    if (event.button === 2) {
        activeTool.click();
        let clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent("mouseup", true, true);
        canvas.dispatchEvent(clickEvent);
    }
}
canvas.addEventListener("contextmenu", e => {
    e.preventDefault();
});
document.addEventListener("mousedown", enableEraser);
document.addEventListener("mouseup", disableEraser);
