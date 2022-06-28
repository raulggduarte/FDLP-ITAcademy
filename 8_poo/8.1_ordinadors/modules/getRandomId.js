import { ID_REGISTER } from "./variables.js";

export function getRandomId() {
  const min = 1;
  const max = 100;
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (ID_REGISTER.includes(randomNumber));
  ID_REGISTER.push(randomNumber);
  return randomNumber;
}
