import { PLAYERS } from "./modules/variables.js";
import { showRegisterScreen } from "./modules/showRegisterScreen.js";
import { registerNewPlayer } from "./modules/registerNewPlayer.js";
import { checkPlayersNumber } from "./modules/checkPlayersNumber.js";
import { showStartGameScreen } from "./modules/showStartGameScreen.js";
import { Game } from "./modules/Game.js";
import { Revolver } from "./modules/Revolver.js";
import { checkSomeoneDead } from "./modules/checkSomeoneDead.js";
import { showFinishScreen } from "./modules/showFinishScreen.js";
import { restartGame } from "./modules/restartGame.js";

export const revolver = new Revolver();
export const game = new Game();

console.log(revolver);

document.querySelector("#startButton").addEventListener("click", () => {
  showRegisterScreen();
});

document
  .querySelector("#registerPlayersButton")
  .addEventListener("click", () => {
    const newPlayer = registerNewPlayer();
    if (newPlayer === null) return;
    PLAYERS.push(newPlayer);
    checkPlayersNumber();
    console.log(PLAYERS);
  });

document
  .querySelector("#finishRegisterButton")
  .addEventListener("click", () => {
    showStartGameScreen();
  });

document.querySelector("#startShootingButton").addEventListener("click", () => {
  game.round() ? checkSomeoneDead(true) : checkSomeoneDead(false);
  showFinishScreen();
});

document.querySelector("#escapteButton").addEventListener("click", () => {
  showFinishScreen();
  document.querySelector(
    "#endGameMessage"
  ).innerHTML = `Us esperem a la propera!`;
});

document.querySelector("#restartButton").addEventListener("click", () => {
  restartGame();
});
