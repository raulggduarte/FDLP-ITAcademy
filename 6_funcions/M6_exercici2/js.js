/*Aquest programa calcula l'edat mitjana d'un número de persones introduït per teclat.
S'ha de crear una funció que s'encarregui de demanar les edats a l'usuari i de calcular
l'edat mitjana.
La funció rebrà per paràmetre el nº de persones a qui ha de demanar l'edat.
L'edat de les persones només serà vàlida si està compresa entre 0 i 120 anys.
La mitjana de les edats introduïdes s'ha de retornar per la funció (return).*/

let AGES = [];

function start() {
  console.log(AGES);
  try {
    AGES.push(validateNum(parseFloat(prompt("Escriu un nombre enter major que 1."))));

    if (wantContinueIntroducing()) start();

    const average = calculateAverage(AGES);

    printResultHTML(getMessage(average));

  } catch (error) {
    keepAskingAges(error);
  }
}

function validateNum(num) {
  return isNaN(num) || num < 0 || num > 120 || !Number.isInteger(num) || num == null ? errorNumberMessage() : num;
}

function errorNumberMessage() {
  throw Error("No has introduit una edat vàlida.");
}

function keepAskingAges(message) {
  alert(message);
  start();
}

function wantContinueIntroducing() {
  return confirm("Vols continuar introduint dades?");
}

function calculateAverage(ages) {
  agesLength = ages.length;
  let sum = 0;
  for (let i = 0; i < agesLength; i++) {
    sum += ages[i];
  }
  return (sum / agesLength).toFixed(1);
}

function getMessage(average) {
  return `La mitjana de les edats introduides és de: ${average} anys.`;
}

function printResultHTML(message) {
  document.getElementById("answer").innerHTML = message;
  document.getElementById("answer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";

  document.getElementById("dataInput").style.display = "none";
}

function restart() {
  document.getElementById("dataInput").style.display = "block";

  document.getElementById("answer").innerHTML = "";
  document.getElementById("answer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
  AGES = [];
}
