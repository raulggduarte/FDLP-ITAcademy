import { revolver } from "../main.js";
import { PLAYERS } from "./variables.js";

export class Player {
  #id;
  #name;
  #nickname;
  #isAlive;

  constructor(name) {
    this.#id = PLAYERS.length + 1;
    this.#name = name;
    this.#nickname = `${this.#name} ${this.#id}`;
    this.#isAlive = true;
  }

  get Id() {
    return this.#id;
  }

  get Name() {
    return this.#name;
  }

  get Nickname() {
    return this.#nickname;
  }

  get IsAlive() {
    return this.#isAlive;
  }

  toPlay() {
    if (revolver.shoot() === true) this.#isAlive = false;
  }
}
