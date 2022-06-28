import { validateNum } from "./validateNum.js";

export function askForFloorsQty() {
  let floorsQty;
  do {
    floorsQty = prompt("Nombre de plantes:");
  } while (validateNum(parseFloat(floorsQty)) !== true);
  return floorsQty;
}
