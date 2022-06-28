import { validateHotelName } from "./validateHotelName.js";
import { HOTELS } from "./variables.js";

export function askForHotelName() {
  let hotelName;
  do {
    hotelName = prompt(`Indica el nom de l'Hotel:`);
  } while (validateHotelName(hotelName) === false);
  return hotelName === null
    ? null
    : HOTELS.findIndex((element) => element.Name === hotelName);
}
