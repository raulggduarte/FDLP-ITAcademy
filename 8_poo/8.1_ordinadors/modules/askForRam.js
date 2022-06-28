import { validateNum } from "./validateNum.js";

export function askForRam() {
    let ram;
    do {
      ram = prompt("Memòria RAM (en GB):");
    } while (validateNum(ram) !== true);
    return ram;
}