import { errorMessage } from "./errorMessage.js";

export function validateNum(num) {
  if (isNaN(num)) {
    errorMessage();
    return false;
  } else {
    return true;
  }
}
