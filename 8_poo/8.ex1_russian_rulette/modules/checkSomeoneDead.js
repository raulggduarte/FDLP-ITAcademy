import { PLAYERS } from "./variables.js";

export function checkSomeoneDead(isSomeoneDead) {
    const deadPlayer = (PLAYERS.find((element) => element.IsAlive === false)) 
    let message = ``;
    isSomeoneDead ? message = `El jugador ${deadPlayer.Name} ha mort, mala sort...`
    : message = `Heu sobreviscut a la ronda! Enhorabona!`;
    document.querySelector("#endGameMessage").innerHTML = message;
}