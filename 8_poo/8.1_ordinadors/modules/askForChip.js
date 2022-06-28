import { validateString } from "./validateString.js";

export function askForChip() {
    let chip;
    do {
      chip = prompt("Processador:");
    } while (validateString(chip) !== true);
    return chip;
}