//import {getDescription} from "./helpers.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
});

function getDescription(text) {
    console.log(text); 
    return text.substring(0,10);
}
