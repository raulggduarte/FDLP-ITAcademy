import { errorMessage } from "./errorMessage.js";
import { ID_REGISTER } from "./variables.js";

export function validateRegisterNum(num) {
  if (isNaN(num) || num <= 0 || !ID_REGISTER.includes(num) ) {
    errorMessage();
    return false;
  } else {
    return true;
  }
}
