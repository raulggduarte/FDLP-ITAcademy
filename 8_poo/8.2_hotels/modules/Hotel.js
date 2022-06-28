export class Hotel {
  #name;
  #roomsQty;
  #floorsQty;
  #totalSurface;

  constructor(name, roomsQty, floorsQty, totalSurface) {
    this.#name = name;
    this.#roomsQty = roomsQty;
    this.#floorsQty = floorsQty;
    this.#totalSurface = totalSurface;
  }

  get Name() {
    return this.#name;
  }

  get RoomsQty() {
    return this.#roomsQty;
  }

  get FloorsQty() {
    return this.#floorsQty;
  }

  get TotalSurface() {
    return this.#totalSurface;
  }

  set Name(name) {
    this.#name = name;
  }

  set RoomsQty(roomsQty) {
    this.#roomsQty = roomsQty;
  }

  set FloorsQty(floorsQty) {
    this.#floorsQty = floorsQty;
  }

  set TotalSurface(totalSurface) {
    this.#totalSurface = totalSurface;
  }

  calculateMaintenance() {
    const workers = Math.ceil(this.#roomsQty / 20);
    const maintenance = workers * 1500;
    return `Aquest hotel necessitarà ${workers} treballadors/es i el
    seu manteniment tindrà un cost de ${maintenance} euros.`;
  }

  toString() {
    return `L'hotel ${this.#name} te les següents característiques:
      Nombre d'habitacions: ${this.#roomsQty}
      Nombre de plantes: ${this.#floorsQty}
      Superfície total: ${this.#totalSurface} m2
      
    ${this.calculateMaintenance()}`;
  }
}
