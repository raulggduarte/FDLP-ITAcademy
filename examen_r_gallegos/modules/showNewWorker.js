export function showNewWorker(persona) {
  document.querySelector(`#nom2`).innerHTML = persona.Nom;
  document.querySelector(`#cognoms2`).innerHTML = persona.Cognom;
  document.querySelector(`#carrec2`).innerHTML = persona.Carrec;
  persona.DisponibilitatTrasllat
    ? (document.querySelector(`#trasllat2`).innerHTML = "Te disponibilitat")
    : (document.querySelector(`#trasllat2`).innerHTML =
        "No te disponibilitat");
}
