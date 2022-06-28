import { askForChip } from "./askForChip.js";
import { askForRam } from "./askForRam.js";
import { askForHdd } from "./askForHdd.js";

export function modifyPcInfo(computer) {
    computer.Chip = askForChip();
    computer.Ram = askForRam();
    computer.Hdd = askForHdd();
    alert(`Dades de l'ordinador ${computer.Brand} modificades:
    ${computer}`);
}