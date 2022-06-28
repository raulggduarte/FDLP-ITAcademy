import { validateRegisterNum } from "./validateRegisterNum.js";
import { COMPUTERS } from "./variables.js";

export function askForRegisterNum() {
    let registerNum;
        do {
            registerNum = Number(prompt(`Indica una referència vàlida de l'ordinador:`));
        }
            while(validateRegisterNum (registerNum) !== true);
    return (COMPUTERS.findIndex(element => element.Id === registerNum));
} 