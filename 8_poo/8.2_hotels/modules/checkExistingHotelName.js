import { errorNameMessage } from "./errorNameMessage.js";
import { HOTELS } from "./variables.js";


export function checkExistingHotelName(name) {
  if (HOTELS.find((element) => element.Name === name) !== undefined) {
    errorNameMessage();
    return false;
  } else {
    return true;
  } 
}
