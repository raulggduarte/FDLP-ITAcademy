import { errorMessage } from "./errorMessage.js";

export function validateString(string) {
  if (!isNaN(string) || string.length < 2) {
    errorMessage();
    return false;
  } else {
    return true;
  }
}
