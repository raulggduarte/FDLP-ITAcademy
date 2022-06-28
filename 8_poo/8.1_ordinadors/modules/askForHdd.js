import { validateNum } from "./validateNum.js";

export function askForHdd() {
  let hdd;
  do {
    hdd = prompt("Capacitat del Disc Dur (en GB):");
  } while (validateNum(hdd) !== true);
  return hdd;
}
