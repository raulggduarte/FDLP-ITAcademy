import { Player } from "./Player.js"

export function registerNewPlayer () {
    const name = prompt(`Nom del/la jugador/a:`)
    if (name === null) return null;
    return new Player(name);
}