import { NUMBER_OF_BULLETS, REVOLVER_HOLES } from "./variables.js";

export class Revolver {
    #currentPosition
    #bulletPosition

    constructor (){
        this.#currentPosition = Math.floor(Math.random() * (REVOLVER_HOLES - NUMBER_OF_BULLETS + 1)) + NUMBER_OF_BULLETS;
        this.#bulletPosition = Math.floor(Math.random() * (REVOLVER_HOLES - NUMBER_OF_BULLETS + 1)) + NUMBER_OF_BULLETS;
    }

    shoot() {
        return this.#currentPosition === this.#bulletPosition;
    }

    moveCylinder() {
        this.#currentPosition < 6 ? this.#currentPosition++ : this.#currentPosition = 1;
    }

    inform(revolver) {
        return `El tambor del revòlver està a la posició ${this.#currentPosition}
        i la bala es troba a la posició ${this.#bulletPosition}.`;
    }
}