import { Hotel } from "./Hotel.js";
import { askForUnregisteredName } from "./askForUnregisteredName.js";
import { askForRoomsQty } from "./askForRoomsQty.js";
import { askForFloorsQty } from "./askForFloorsQty.js";
import { askForTotalSurface } from "./askForTotalSurface.js";

export function createHotel() {
  const newName = askForUnregisteredName();
  if (newName === null) return null;
  const hotel = new Hotel(
    newName,
    askForRoomsQty(),
    askForFloorsQty(),
    askForTotalSurface(),
  );
  return hotel;
}
