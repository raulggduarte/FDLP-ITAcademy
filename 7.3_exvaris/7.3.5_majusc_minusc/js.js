/* Comprovar si una frase introduïda per l’usuari està formada només per
minúscules, només per majúscules o per minúscules i majúscules */

//MAIN FUNCTION************************************************************

function mainUpperLowerFunction() {
  try {
    const userString = ((validateString(document.getElementById("userString").value)).split(" ")).join("");
    const areUppers = checkUppers(userString);
    const areLowers = checkLowers(userString);

    printResultHTML(getMessage(areLowers, areUppers));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//*************************************************************************

function validateString(string) {
  const regex = /^[a-zA-Z]+$/;
  return string.length < 1 || !regex.test(string)
    ? errorStringMessage()
    : string;
}

function errorStringMessage() {
  throw Error("No has introduit una frase vàlida.");
}

function keepAskingMeasures(message) {
  alert(message);
  formatData();
}

function formatData() {
  document.getElementById("userString").value = "";
}

function checkUppers(userString) {
  areUppers = false;
  for (let i = 0; i < userString.length; i++) {
    if (userString[i] === userString[i].toUpperCase()) {
      areUppers = true;
      break;
    }
  }
  return areUppers;
}

function checkLowers(userString) {
  areLowers = false;
  for (let i = 0; i < userString.length; i++) {
    if (userString[i] === userString[i].toLowerCase()) {
      areLowers = true;
      break;
    }
  }
  return areLowers;
}

function getMessage(areLowers, areUppers) {
  if (areUppers && areLowers) {
    return "La frase conté majúscules i minúscules."
  } else if (areUppers) {
    return "La frase conté només majúscules.";
  } else if (areLowers) {
    return "La frase conté només minúscules.";
  } else {
    return "Alguna cosa no ha anat bé."
  }
  
  /*let message = "";
  if (areUppers) message = "La frase conté només majúscules.";
  if (areLowers) message = "La frase conté només minúscules.";
  if (areUppers && areLowers) message = "La frase conté majúscules i minúscules.";
  return message;*/
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
    document.getElementById("checkButton").click();
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    document.getElementById("restartButton").click();
  }
});
