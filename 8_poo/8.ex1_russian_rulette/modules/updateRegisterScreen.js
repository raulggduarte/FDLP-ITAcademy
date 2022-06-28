import { PLAYERS } from "./variables.js";

export function updateRegisterScreen() {
    document.querySelector("#registeredCount").innerHTML = PLAYERS.length;
    document.querySelector("#registeredText").style.display = "block";
    document.querySelector("#finishRegisterButton").style.display = "inline-block";
}