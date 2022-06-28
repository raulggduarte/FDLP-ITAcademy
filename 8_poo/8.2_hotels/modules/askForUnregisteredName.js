import { checkExistingHotelName } from "./checkExistingHotelName.js";
import { validateString } from "./validateString.js";

export function askForUnregisteredName() {
  let name;
  do {
    name = prompt("Nom de l'hotel:");
    if (name === null) return null;
  } while (
    validateString(name) !== true ||
    checkExistingHotelName(name) !== true
  );
  return name;
}
