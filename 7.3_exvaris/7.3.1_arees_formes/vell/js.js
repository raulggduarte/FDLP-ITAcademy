/* Realitzar un programa que tingui un menú on se li mostraran 4 opcions a
l’usuari per pantalla:
1.- Quadrat
2.- Triangle
3.- Rectangle
4.- Cercle
Segons l’opció escollida haurà d’introduir unes dades o altres perquè el
programa mostri per pantalla l’àrea (el valor) del polígon escollit. */

let shape = '';
const SHAPES = {
  square: {
    toCat: 'quadrat',	
    showInput: showSquareInputs,
    calculateArea: squareArea
  },
  triangle: {
    toCat: 'triangle',	
    showInput: showSquareInputs,
    calculateArea: triangleArea
  },
  rectangle: {
    toCat: 'rectangle',	
    showInput: showSquareInputs,
    calculateArea: squareArea
  },
  circle: {
    toCat: 'cercle',	
    showInput: showCircleInputs,
    calculateArea: circleArea
  }
};

function mainAreaFunction() {
  try {
  const base = validateNum(parseFloat(document.getElementById("base").value));
  const height = validateNum(parseFloat(document.getElementById("height").value));
  const radius = validateNum(parseFloat(document.getElementById("radius").value));
  
  const area = SHAPES[shape].calculateArea(base, height, radius);

  printResultHTML(getMessage(shape, area));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

function showMeasuresInputs(userShape) {
  shape = userShape;
  SHAPES[userShape].showInput();
}

function showSquareInputs() {
  document.getElementById("dataInput").style.display = "block";
  document.getElementById("height").style.display = "block";
  document.getElementById("base").style.display = "block";
  document.getElementById("heightLabel").style.display = "block";
  document.getElementById("baseLabel").style.display = "block";

  document.getElementById("optionInput").style.display = "none";
}

function showCircleInputs(){
  document.getElementById("dataInput").style.display = "block";
  document.getElementById("radius").style.display = "block";
  document.getElementById("radiusLabel").style.display = "block";

  document.getElementById("optionInput").style.display = "none";
}

function validateNum(num) {
  return isNaN(num) || num < 0 ? errorNumberMessage() : num;
}

function errorNumberMessage() {
  throw Error("No has introduit un nombre vàlid.");
}

function keepAskingMeasures(message) {
  alert(message);
  formatData();
}

function formatData() {
  document.getElementById("base").value = "0";
  document.getElementById("height").value = "0";
  document.getElementById("radius").value = "0";
}

function squareArea (base, height) {
  return (base * height).toFixed(2);
}

function triangleArea (base, height) {
  return ((base * height) / 2).toFixed(2);
}

function circleArea (base, height, radius) {
  return ((2 * Math.PI * radius).toFixed(2));
}

function getMessage(shape, area) {
  return `L'area del teu ${SHAPES[shape].toCat} és ${area} cm2.`;
}

function printResultHTML(message) {
  document.getElementById("finalAnswer").innerHTML = message;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";

  document.getElementById("dataInput").style.display = "none";
  document.getElementById("height").style.display = "none";
  document.getElementById("base").style.display = "none";
  document.getElementById("radius").style.display = "none";
  document.getElementById("heightLabel").style.display = "none";
  document.getElementById("baseLabel").style.display = "none";
  document.getElementById("radiusLabel").style.display = "none";
}

function restart() {
  document.getElementById("optionInput").style.display = "block";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
  formatData();
}