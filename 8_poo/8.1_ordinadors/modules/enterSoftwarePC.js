import { validateString } from "./validateString.js";

export function enterSoftwarePC (computer) {
    let software;
    do {
      software = prompt(`Quin programa s'està execurtant a ${computer.Brand}?`);
    } while (validateString(software) !== true);
    alert(computer.showExecutedSoftware(software));
}