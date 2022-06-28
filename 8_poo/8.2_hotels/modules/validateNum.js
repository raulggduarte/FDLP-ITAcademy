import { errorMessage } from "./errorMessage.js";

export function validateNum(num) {
  if (isNaN(num) || !Number.isInteger(num)) {
    errorMessage();
    return false;
  } else {
    return true;
  }
}
