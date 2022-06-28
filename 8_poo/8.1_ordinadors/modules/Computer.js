import { getRandomId } from "./getRandomId.js";

export class Computer {
  #id;
  #brand;
  #model;
  #chip;
  #ram;
  #hdd;

  constructor(brand, model, chip, ram, hdd) {
    this.#id = getRandomId();
    this.#brand = brand;
    this.#model = model;
    this.#chip = chip;
    this.#ram = ram;
    this.#hdd = hdd;
  }

  get Id() {
    return this.#id;
  }

  get Brand() {
    return this.#brand;
  }

  get Model() {
    return this.#model;
  }

  get Chip() {
    return this.#chip;
  }

  get Ram() {
    return this.#ram;
  }

  get Hdd() {
    return this.#hdd;
  }

  set Chip(chip) {
    this.#chip = chip;
  }

  set Ram(ram) {
    this.#ram = ram;
  }

  set Hdd(hdd) {
    this.#hdd = hdd;
  }

  showExecutedSoftware(software) {
    return `En aquests moments a l'ordinador ${this.#id} s'està executant: ${software}.`;
  }

  toString() {
    return `L'ordinador ${this.#id} te les següents característiques:
        Marca: ${this.#brand}
        Model: ${this.#model}
        Processador: ${this.#chip}
        RAM: ${this.#ram}
        Disc dur: ${this.#hdd}`;
  }
}
