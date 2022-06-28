import { HOTELS } from "./variables.js";

export function updateRegisterCounter() {
  document.querySelector("#registersAmount").innerHTML = HOTELS.length;
  document.querySelector("#registersAmountText").style.display = "block";
}
