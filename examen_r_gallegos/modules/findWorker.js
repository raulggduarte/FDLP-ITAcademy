import { treballadors } from "./dades.js";

export function findWorker() {
  return treballadors.find(
    (element) => element.nom === "Pep" && element.cognom === "Vila"
  );
}

/*const personIndex = treballadors.findIndex(element => element.nom === 'Pep' && element.cognom === 'Vila');
    return treballadors[personIndex];*/
