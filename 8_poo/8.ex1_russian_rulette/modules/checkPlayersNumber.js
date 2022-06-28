import { showStartGameScreen } from "./showStartGameScreen.js";
import { updateRegisterScreen } from "./updateRegisterScreen.js";
import { PLAYERS } from "./variables.js";

export function checkPlayersNumber() {
  if (PLAYERS.length === 5) {
    alert(`Ja has registat el màxim de 5 jugadors/es.`);
    showStartGameScreen();
  } else {
    updateRegisterScreen();
  }
}
