/* Realitzar un programa que tingui un menú on se li mostraran 4 opcions a
l’usuari per pantalla:
1.- Quadrat
2.- Triangle
3.- Rectangle
4.- Cercle
Segons l’opció escollida haurà d’introduir unes dades o altres perquè el
programa mostri per pantalla l’àrea (el valor) del polígon escollit. */

function showMeasuresInputs(shape) {
    let base;
    let height;
    let radius;
    let shapeInCat;

    try {
    switch(shape) {
        case 'square': 
            base = validateNum(Number(prompt(`base`)));
            height = validateNum(Number(prompt(`altura`)));
            area = base * height;
            shapeInCat = 'quadrat';
            break;
        case 'triangle': 
            base = validateNum(Number(prompt(`base`)));
            height = validateNum(Number(prompt(`altura`)));
            area = base * height / 2;
            shapeInCat = 'triangle';
            break;
        case 'rectangle': 
            base = validateNum(Number(prompt(`base`)));
            height = validateNum(Number(prompt(`altura`)));
            area = base * height;
            shapeInCat = 'rectangle';
            break;
        case 'circle': 
            radius = validateNum(Number(prompt(`radi`)));
            area = 2 * Math.PI * radius;
            shapeInCat = 'cercle';
            break;
    }
    document.getElementById("finalAnswer").innerHTML = `L'àrea del teu ${shapeInCat} és ${area} cm2.`;
    document.getElementById("finalAnswer").style.display = "block";

    } catch (error) {
        keepAskingMeasures(error);
    }
}

function validateNum(num) {
    return isNaN(num) || num < 1 ? errorNumberMessage() : num;
  }
  
  function errorNumberMessage() {
    throw Error("No has introduit un nombre vàlid.");
  }
  
  function keepAskingMeasures(message) {
    alert(message);
  }