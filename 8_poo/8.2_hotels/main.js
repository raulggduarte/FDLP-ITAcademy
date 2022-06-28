import { registerHotel } from "./modules/registerHotel.js";
import { deleteHotel } from "./modules/deleteHotel.js";
import { getInfoHotel } from "./modules/getInfoHotel.js";
import { modifyHotelInfo } from "./modules/modifyHotelInfo.js";
import { askForHotelName } from "./modules/askForHotelName.js";
import { showButtons } from "./modules/showButtons.js";

document.querySelector("#createHotelButton").addEventListener("click", () => {
  if (registerHotel() === null) return;
  showButtons();
});

document.querySelector("#deleteHotelButton").addEventListener("click", () => {
  deleteHotel(askForHotelName());
});

document.querySelector("#showHotelButton").addEventListener("click", () => {
  getInfoHotel(askForHotelName());
});

document.querySelector("#modifyHotel").addEventListener("click", () => {
  modifyHotelInfo(askForHotelName());
});
