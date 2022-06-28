import { createHotel } from "./createHotel.js";
import { updateRegisterCounter } from "./updateRegisterCounter.js";
import { HOTELS } from "./variables.js";

export function registerHotel() {
  const newHotel = createHotel();
  if (newHotel === null) return null;
  HOTELS.push(newHotel);
  console.log(HOTELS);
  updateRegisterCounter();
}
