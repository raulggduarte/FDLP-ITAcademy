/*Taula de multiplicar. L’usuari introduirà un número (del 1 al 10)
per pantalla, i utilitzant un bucle, el programa li mostrarà la taula
de multiplicar d’aquell número.
Exemple:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
2 x 10 = 20*/


MAX_TABLE = 10;

//  MAIN FUNCTION **************************************************

function multiplicationTable() {
  const userNumber = validateNum(
    parseFloat(document.getElementById("userNumber").value)
  );

  const resultTable = makeMultTable(userNumber);

  const finalMessage = getFinalMessage(userNumber, resultTable);

  showAnswer(finalMessage);
}

//******************************************************************

function validateNum(num) {
  return isNaN(num) || !Number.isInteger(num) || num < 1 || num > 10
    ? errorNumberMessage()
    : num;
}

function errorNumberMessage() {
  alert("No has introduit un nombre vàlid.");
  document.getElementById("userNumber").value = "";
  throw "exit";
}

function makeMultTable(userNumber) {
  const table = [];

  for (let i = 1; i <= MAX_TABLE; i++) {
    table.push(userNumber * i);
  }

  return table;
}

function getFinalMessage(userNumber, resultTable) {
  let text = `La taula de multiplicar del número ${userNumber} és:</br>`;

  for (let i = 0; i < MAX_TABLE; i++) {
    text += `${userNumber} x ${i + 1} = ${resultTable[i]}</br>`;
  }

  return text;
}

function showAnswer(finalMessage) {
  document.getElementById("inputLabel").style.display = "none";
  document.getElementById("userNumber").style.display = "none";
  document.getElementById("calculateButton").style.display = "none";

  document.getElementById("finalAnswer").innerHTML = finalMessage;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";
}

function restart() {
  document.getElementById("inputLabel").style.display = "inline";
  document.getElementById("userNumber").style.display = "inline";
  document.getElementById("userNumber").value = "";
  document.getElementById("calculateButton").style.display = "block";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
}
