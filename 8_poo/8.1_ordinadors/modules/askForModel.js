import { validateString } from "./validateString.js";

export function askForModel() {
    let model;
    do {
      model = prompt("Model:");
    } while (validateString(model) !== true);
    return model;
}