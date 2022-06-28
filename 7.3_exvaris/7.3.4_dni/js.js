/* L’usuari ha d’introduir un DNI i el programa ha de dir si la lletra és
correcte o no amb el nombre de DNI. Si la lletra no és correcta, ha de dir
quina lletra és la correcta.
Per calcular la lletra DNI has de prendre el número de DNI a verificar i
dividir-lo entre 23. La resta es reemplaça per una lletra que ja està
assignada a aquest nombre mitjançant la taula adjunta: */

const ID_LENGTH = 9;
const USER_ID = {
  original: "",
  number: 0,
  letter: "",
  resto: 0,
  final: "",
};
const LETTER_ID_TABLE = {
  0: "T",
  1: "R",
  2: "W",
  3: "A",
  4: "G",
  5: "M",
  6: "Y",
  7: "F",
  8: "P",
  9: "D",
  10: "X",
  11: "B",
  12: "N",
  13: "J",
  14: "Z",
  15: "S",
  16: "Q",
  17: "V",
  18: "H",
  19: "L",
  20: "C",
  21: "K",
  22: "E",
};

//MAIN FUNCTION************************************************************

function mainCheckIdFunction() {
  try {
    fillUserId();

    isCorrectLetter = checkIsCorrectLetter();

    printResultHTML(getMessage(isCorrectLetter));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//*************************************************************************

function fillUserId() {
  USER_ID.original = validateNum(document.getElementById("userString").value);
  USER_ID.number = USER_ID.original.slice(0, ID_LENGTH - 1);
  USER_ID.letter = USER_ID.original.slice(8, ID_LENGTH).toUpperCase();
  USER_ID.resto = USER_ID.number % 23;
  USER_ID.final = USER_ID.number + USER_ID.letter;
}

function validateNum(userId) {
  return userId.length > ID_LENGTH ||
    userId.length < ID_LENGTH ||
    userId.includes(" ") ||
    !isNaN(userId.slice(8, ID_LENGTH)) ||
    isNaN(userId.slice(0, ID_LENGTH - 1)) ||
    userId.slice(0, ID_LENGTH - 1) < 0
    ? errorNumberMessage()
    : userId;
}

function errorNumberMessage() {
  throw Error("No has introduit un nombre de DNI vàlid.");
}

function keepAskingMeasures(message) {
  alert(message);
  formatData();
}

function formatData() {
  document.getElementById("userString").value = "";
}

function checkIsCorrectLetter() {
  return USER_ID.letter === LETTER_ID_TABLE[USER_ID.resto];
}

function getMessage(isCorrectLetter) {
  return isCorrectLetter
    ? `El teu DNI <b>${USER_ID.final}</b> és correcte.`
    : `La lletra del teu DNI és incorrecte, hauria de ser la <b>${
        LETTER_ID_TABLE[USER_ID.resto]
      }</b>.`;
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
    document.getElementById("checkIdButton").click();
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    document.getElementById("restartButton").click();
  }
});
