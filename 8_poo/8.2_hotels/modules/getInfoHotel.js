import { HOTELS } from "./variables.js";

export function getInfoHotel (i){
    if (i === null) return;
    alert(HOTELS[i]);
}