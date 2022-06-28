/* En aquest programa l’usuari ha d’introduir un string i, utilitzant un
bucle for, el programa ha de mostrar l’string al revés */

//MAIN FUNCTION************************************************************
function mainReverseFunction() {
  try {
    const userString = validateNum(document.getElementById("userString").value);

    const reversedString = doReverse(userString);

    printResultHTML(getMessage(userString, reversedString));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//*************************************************************************

function validateNum(string) {
  return string.length < 2 ? errorNumberMessage() : string;
}

function errorNumberMessage() {
  throw Error("No has introduit un nombre vàlid.");
}

function keepAskingMeasures(message) {
  alert(message);
  formatData();
}

function formatData() {
  document.getElementById("userString").value = "";
}

function doReverse(string) {
  let reverserString = ``;

  for (i = string.length - 1; i >= 0; i--) {
    reverserString += string[i];
  }

  return reverserString;
}

function getMessage(userString, reversedString) {
  return `Si capgirem la paraula <b>${userString}</b>, surt:<br><br><b>${reversedString}</b>`;
}

function printResultHTML(message) {
  document.getElementById("finalAnswer").innerHTML = message;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";

  document.getElementById("dataInput").style.display = "none";
}

function restart() {
  document.getElementById("dataInput").style.display = "block";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
  formatData();
}

window.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.getElementById("reverseButton").click();
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    document.getElementById("restartButton").click();
  }
});
