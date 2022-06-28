import { COMPUTERS } from "./variables.js";
import { ID_REGISTER } from "./variables.js";

export function deletePc (i) {
    const index = COMPUTERS.indexOf(COMPUTERS[i]);
    COMPUTERS.splice(index,1);
    ID_REGISTER.splice(index,1);
    console.log(COMPUTERS);
    document.querySelector("#registersAmount").innerHTML = COMPUTERS.length;
}