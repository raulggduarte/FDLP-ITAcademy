import { errorMessage } from "./errorMessage.js";

export function validateString (string) {
    if (!isNaN(string)) {
        errorMessage();
        return false;
    } else {
    return true;
}
}