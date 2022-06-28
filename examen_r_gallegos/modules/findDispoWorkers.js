import { treballadors } from "./dades.js";

export function findDispoWorkers() {
  const dispoWorkers = treballadors.filter(
    (element) => element.disponibilitatTrasllat === true
  );
  return dispoWorkers;

  /*const dispoWorkers = [];
  treballadors.forEach((element) => {
    if (element.disponibilitatTrasllat === true) {
      dispoWorkers.push(element);
    }
  });
  return dispoWorkers;*/
}
