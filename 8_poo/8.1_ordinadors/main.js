import { COMPUTERS } from "./modules/variables.js";
import { enterSoftwarePC } from "./modules/enterSoftwarePC.js";
import { getInfoPC } from "./modules/getInfoPc.js";
import { modifyPcInfo } from "./modules/modifyPcInfo.js";
import { registerComputers } from "./modules/registerComputers.js";
import { askForRegisterNum } from "./modules/askForRegisterNum.js";
import { showButtons } from "./modules/showButtons.js";
import { deletePc } from "./modules/deletePc.js";

document
  .querySelector("#regiterComputersButton")
  .addEventListener("click", () => {
    registerComputers();
    showButtons();
  });

document
  .querySelector("#enterSoftwareButton")
  .addEventListener("click", () => {
    enterSoftwarePC(COMPUTERS[askForRegisterNum()]);
  });

document
  .querySelector("#getInfoPC")
  .addEventListener("click", () => {
    getInfoPC(COMPUTERS[askForRegisterNum()]);
  });

document
  .querySelector("#modifyPC")
  .addEventListener("click", () => {
    modifyPcInfo(COMPUTERS[askForRegisterNum()])
  });

  document
  .querySelector("#deletePC")
  .addEventListener("click", () => {
    deletePc(askForRegisterNum())
  });
