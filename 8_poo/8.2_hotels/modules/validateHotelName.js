import { HOTELS } from "./variables.js";

export function validateHotelName(hotelName) {
  if (hotelName === null) return true;
  if (HOTELS.find((element) => element.Name === hotelName) === undefined) {
    alert(`No és un nom d'hotel registrat!`);
    return false;
  } else {
    return true;
  }
}
