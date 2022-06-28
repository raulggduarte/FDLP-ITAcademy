/* Realitzar un programa que tingui un menú on se li mostraran 4 opcions a
l’usuari per pantalla:
1.- Quadrat
2.- Triangle
3.- Rectangle
4.- Cercle
Segons l’opció escollida haurà d’introduir unes dades o altres perquè el
programa mostri per pantalla l’àrea (el valor) del polígon escollit. */


//let userOption;
let forma;

//MAIN FUNCTION*******************************************************

function start() {
  try {
    const area = areaCalculation();

    printResultHTML(getMessage(forma, area));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//**********************************************************************

function showMeasuresInputs(userOption) {
  switch (userOption) {
    case "square":
      showBaseHeight();
      forma = "quadrat";
      break;
    case "rectangle":
      showBaseHeight();
      forma = "rectangle";
      break;
    case "triangle":
      showBaseHeight();
      forma = "triangle";
      break;
    case "circle":
      showRadius();
      forma = "cercle";
      break;
  }
}

function showBaseHeight() {
  document.getElementById("dataInput").style.display = "block";
  document.getElementById("height").style.display = "block";
  document.getElementById("base").style.display = "block";
  document.getElementById("heightLabel").style.display = "block";
  document.getElementById("baseLabel").style.display = "block";

  document.getElementById("optionInput").style.display = "none";
}

function showRadius() {
  document.getElementById("dataInput").style.display = "block";
  document.getElementById("radius").style.display = "block";
  document.getElementById("radiusLabel").style.display = "block";

  document.getElementById("optionInput").style.display = "none";
}

function areaCalculation() {
  switch (forma) {
    case "quadrat":
    case "rectangle":
      return squareRectangleArea();
    case "triangle":
      return squareRectangleArea() / 2;
    case "cercle":
      return circleArea();
  }
}

function squareRectangleArea() {
  const height = validateNum(parseFloat(document.getElementById("height").value));
  const base = validateNum(parseFloat(document.getElementById("base").value));

  return height * base;
}

function circleArea() {
  const radius = validateNum(
    parseFloat(document.getElementById("radius").value)
  );

  return (2 * Math.PI * radius).toFixed(2);
}

function validateNum(num) {
  return isNaN(num) || num <= 0 ? errorNumberMessage() : num;
}

function errorNumberMessage() {
  throw Error("No has introduit un nombre vàlid.");
}

function keepAskingMeasures(message) {
  alert(message);
  eraseData();
}

function getMessage(forma, area) {
  return `L'area del teu ${forma} és ${area} cm2.`;
}

function eraseData() {
  document.getElementById("height").value = "";
  document.getElementById("base").value = "";
  document.getElementById("radius").value = "";
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
  eraseData();

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
}
