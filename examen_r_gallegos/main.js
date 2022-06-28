import { createArrays } from "./modules/createArrays.js";
import { showArrays } from "./modules/showArrays.js";
import { findWorker } from "./modules/findWorker.js";
import { showWorker } from "./modules/showWorker.js";
import { findDispoWorkers } from "./modules/findDispoWorkers.js";
import { createWorker } from "./modules/createWorker.js";
import { showNewWorker } from "./modules/showNewWorker.js";

document.querySelector("#answerOneButon").addEventListener("click", () => {
  showArrays(createArrays());
});

document.querySelector("#answer2bButton").addEventListener("click", () => {
  showWorker(findWorker());
});

document.querySelector("#answer2cButton").addEventListener("click", () => {
  console.log(findDispoWorkers());
});

document.querySelector("#answer2dButton").addEventListener("click", () => {
  showNewWorker(createWorker());
});
