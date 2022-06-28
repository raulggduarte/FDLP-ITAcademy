/* Fer un programa on l’usuari introdueix per pantalla un caràcter i un número.
El programa imprimeix per pantalla un quadrat amb la mida i el caràcter introduïts
per l’usuari.
Exemple:
% % % % %
% % % % %
% % % % %
% % % % %
% % % % % */

//  MAIN FUNCTION **************************************************

function drawSymbols() {
  const userNumber = validateNum(
    parseFloat(document.getElementById("userNumber").value)
  );

  const userSymbol = document.getElementById("userSymbol").value;

  const finalDraw = makeDraw(userNumber, userSymbol);

  showAnswer(finalDraw);
}

//******************************************************************

function validateNum(num) {
  return isNaN(num) || num < 1 || !Number.isInteger(num)
    ? errorNumberMessage()
    : num;
}

function errorNumberMessage() {
  alert("No has introduit un nombre vàlid.");

  throw "exit";
}

function makeDraw(userNumber, userSymbol) {
  let text = ``;

  for (i = 0; i < userNumber; i++) {
    for (j = 0; j < userNumber; j++) {
      text += `${userSymbol} `;
    }
    text += `</br></br>`;
  }

  return text;
}

function showAnswer(finalMessage) {
  document.getElementById("finalAnswer").innerHTML = finalMessage;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";

  document.getElementById("inputLabel1").style.display = "none";
  document.getElementById("inputLabel2").style.display = "none";
  document.getElementById("userNumber").style.display = "none";
  document.getElementById("userSymbol").style.display = "none";
  document.getElementById("drawButton").style.display = "none";
}

function restart() {
  document.getElementById("inputLabel1").style.display = "inline";
  document.getElementById("inputLabel2").style.display = "inline";
  document.getElementById("userNumber").style.display = "inline";
  document.getElementById("userSymbol").style.display = "inline";
  document.getElementById("userNumber").value = "";
  document.getElementById("userSymbol").value = "";
  document.getElementById("drawButton").style.display = "block";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
}
