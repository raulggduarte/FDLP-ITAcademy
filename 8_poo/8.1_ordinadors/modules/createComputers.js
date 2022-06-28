import { Computer } from "./Computer.js";
import { askForBrand } from "./askForBrand.js";
import { askForModel } from "./askForModel.js";
import { askForChip } from "./askForChip.js";
import { askForRam } from "./askForRam.js";
import { askForHdd } from "./askForHdd.js";

export function createComputers() {
  const computer = new Computer(
    askForBrand(),
    askForModel(),
    askForChip(),
    askForRam(),
    askForHdd()
  );
  console.log(computer)
  return computer;
}
