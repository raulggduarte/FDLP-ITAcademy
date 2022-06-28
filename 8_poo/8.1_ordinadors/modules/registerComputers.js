import { createComputers } from "./createComputers.js";
import { COMPUTERS } from "./variables.js";

export function registerComputers() {
  COMPUTERS.push(createComputers());
  console.log(COMPUTERS);
  document.querySelector("#registersAmount").innerHTML = COMPUTERS.length;
  document.querySelector("#registersAmountText").style.display = "block";
}
