import { updateRegisterCounter } from "./updateRegisterCounter.js";
import { HOTELS } from "./variables.js";

export function deleteHotel (i) {
    if (i === null) return;
    alert(`L'hotel ${HOTELS[i].Name} ha estat eliminat.`)
    HOTELS.splice(i,1);
    updateRegisterCounter();
}