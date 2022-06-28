import { validateString } from "./validateString.js";

export function askForBrand() {
    let brand;
    do {
      brand = prompt("Marca:");
    } while (validateString(brand) !== true);
    return brand;
}