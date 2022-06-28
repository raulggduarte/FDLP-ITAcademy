export class Treballador {
  #nom;
  #cognom;
  #carrec;
  #disponibilitatTrasllat;

  constructor(nom, cognom, carrec, disponibilitatTrasllat) {
    this.#nom = nom;
    this.#cognom = cognom;
    this.#carrec = carrec;
    this.#disponibilitatTrasllat = disponibilitatTrasllat;
  }

  get Nom() {
    return this.#nom;
  }

  get Cognom() {
    return this.#cognom;
  }

  get Carrec() {
    return this.#carrec;
  }

  get DisponibilitatTrasllat() {
    return this.#disponibilitatTrasllat;
  }

  set Nom(nom) {
    this.#nom = nom;
  }

  set Cognom(cognom) {
    this.#cognom = cognom;
  }

  set Carrec(carrec) {
    this.#carrec = carrec;
  }

  set DisponibilitatTrasllat(disponibilitatTrasllat) {
    this.#disponibilitatTrasllat = disponibilitatTrasllat;
  }

  toString() {
    return this.#disponibilitatTrasllat
      ? `Nom: ${this.#nom}
    Cognom: ${this.#cognom}
    Càrrec: ${this.#carrec}
    Trasllat: Te disponibilitat`
      : `Nom: ${this.#nom}
    Cognom: ${this.#cognom}
    Càrrec: ${this.#carrec}
    Trasllat: No te disponibilitat`;
  }
}
