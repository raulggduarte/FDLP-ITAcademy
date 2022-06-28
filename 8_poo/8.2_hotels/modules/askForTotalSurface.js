import { validateNum } from "./validateNum.js";

export function askForTotalSurface() {
  let totalSurface;
  do {
    totalSurface = prompt("Superfície total (en m2):");
  } while (validateNum(parseFloat(totalSurface)) !== true);
  return totalSurface;
}
