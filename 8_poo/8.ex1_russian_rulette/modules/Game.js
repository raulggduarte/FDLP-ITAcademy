import { revolver } from "../main.js";
import { PLAYERS } from "./variables.js";

export class Game {
  #players;
  #revolver;

  constructor() {
    this.#players = PLAYERS;
    this.#revolver = revolver;
  }

  endGame() {
    return this.#players.find((element) => element.IsAlive === false) !==
      undefined
      ? true
      : false;
  }

  round() {
    console.log(this.#players);
    console.log(this.#players[0]);
    console.log(this.#players[0].Nickname);
    for (let i = 0; i < this.#players.length; i++) {
      alert(`El jugador ${this.#players[i].Nickname} es dispara.`);
      this.#players[i].toPlay();
      this.#players[i].IsAlive === true
        ? alert(
            `El jugador ${
              this.#players[i].Nickname
            } no ha mort en aquesta ronda.`
          )
        : alert(
            `El jugador ${this.#players[i].Nickname} HA MORT en aquesta ronda.`
          );
      this.#revolver.moveCylinder();
      if (this.endGame()) return true;
    }
    return false;
  }
}
