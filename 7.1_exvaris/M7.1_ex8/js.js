/* Crea un programa on l’usuari introdueixi una temperatura en ºC
i es mostri per pantalla la conversió en ºFahrenheit
Fórmula:  (°C × 9 / 5) + 32 = °F */

//  MAIN FUNCTION **************************************************

function convertTemperature() {
  const userTemp = validateNum(
    parseFloat(document.getElementById("userTemp").value)
  );

  const resultConversion = makeConversion(userTemp);

  const finalMessage = getFinalMessage(userTemp, resultConversion);

  showAnswer(finalMessage);
}

//******************************************************************

function validateNum(num) {
  return isNaN(num) ? errorNumberMessage() : num;
}

function errorNumberMessage() {
  alert("No has introduit un nombre vàlid.");
  document.getElementById("userTemp").value = "";
  throw "exit";
}

function makeConversion(userTemp) {
  return (userTemp * (9 / 5) + 32).toFixed(1);
}

function getFinalMessage(userTemp, resultConversion) {
  return (text = `${userTemp}º Celsius són ${resultConversion}º Fahrenheit!`);
}

function showAnswer(finalMessage) {
  document.getElementById("dataInput").style.display = "none";

  document.getElementById("finalAnswer").innerHTML = finalMessage;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";
}

function restart() {
  document.getElementById("dataInput").style.display = "block";
  document.getElementById("userTemp").value = "";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
}
