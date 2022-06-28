import { validateNum } from "./validateNum.js";

export function askForRoomsQty() {
    let roomsQty;
    do {
      roomsQty = prompt("Nombre d'habitacions:");
    } while (validateNum(parseFloat(roomsQty)) !== true);
    return roomsQty;
}