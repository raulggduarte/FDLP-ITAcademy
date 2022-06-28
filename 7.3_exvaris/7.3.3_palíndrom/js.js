/* L’usuari ha d’introduir una frase i el programa ha de dir si la frase
és un palíndrom */

//MAIN FUNCTION************************************************************

function mainPalindromeFunction() {
  try {
    const userString = validateNum(document.getElementById("userString").value);

    let answer = "";

    isPalindrom(userString) ? (answer = "SI") : (answer = "NO");

    printResultHTML(getMessage(userString, answer));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//*************************************************************************

function validateNum(string) {
  return string.length < 2 || string.includes(" ")
    ? errorNumberMessage()
    : string;
}

function errorNumberMessage() {
  throw Error("No has introduit una paraula vàlida.");
}

function keepAskingMeasures(message) {
  alert(message);
  formatData();
}

function formatData() {
  document.getElementById("userString").value = "";
}

function isPalindrom(userString) {
  const stringLength = userString.length;

  for (let i = 0; i < stringLength; i++) {
    if (userString[i] != userString[stringLength - 1 - i]) return false;
  }

  return true;
}

function getMessage(userString, answer) {
  return `La paraula <b>${userString}</b> ${answer} un palíndrom.`;
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
    document.getElementById("palindromeButton").click();
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    document.getElementById("restartButton").click();
  }
});
