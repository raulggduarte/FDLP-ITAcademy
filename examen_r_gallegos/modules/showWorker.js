export function showWorker(persona) {
  document.querySelector(`#nom1`).innerHTML = persona.nom;
  document.querySelector(`#cognoms1`).innerHTML = persona.cognom;
  document.querySelector(`#carrec1`).innerHTML = persona.carrec;
  persona.disponibilitatTrasllat
    ? (document.querySelector(`#trasllat1`).innerHTML = "Te disponibilitat")
    : (document.querySelector(`#trasllat1`).innerHTML =
        "No te disponibilitat");
}
