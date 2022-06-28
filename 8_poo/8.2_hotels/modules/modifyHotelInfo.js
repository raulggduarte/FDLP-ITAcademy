import { HOTELS } from "./variables.js";
import { askForRoomsQty } from "./askForRoomsQty.js";
import { askForFloorsQty } from "./askForFloorsQty.js";
import { askForTotalSurface } from "./askForTotalSurface.js";

export function modifyHotelInfo(i) {
    if (i === null) return;
    HOTELS[i].RoomsQty = askForRoomsQty();
    HOTELS[i].FloorsQty = askForFloorsQty();
    HOTELS[i].TotalSurface = askForTotalSurface();
    alert(`Dades de l'hotel ${HOTELS[i].Name} modificades:
    ${HOTELS[i]}`);
}