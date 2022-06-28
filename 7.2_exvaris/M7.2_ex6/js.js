/* L’usuari ha d’introduir números fins que introdueixi un nombre primer. 
En el moment que l’usuari introdueixi un nombre primer, el programa ha de
treure per pantalla el següent missatge: Exacte, el número “x” és primer!
Nota: Utilitzar el mètode creat a l'exercici: (M7.2.) Exercici 5 */

//  MAIN FUNCTION **************************************************

function start() {
  try {
    const userNumber = validateNum(Number(prompt("Escriu un nombre enter major que 1.")));
    isPrime(userNumber) ? printResultHTML(getMessage(userNumber)) : keepSearchPrimeNum(`El número ${userNumber} NO és primer.`);
  } catch (error) {
    keepSearchPrimeNum(error);
  }
}

//******************************************************************

function validateNum(num) {
  return isNaN(num) || num <= 1 || !Number.isInteger(num) ? errorNumberMessage() : num;
}

function errorNumberMessage() {
  throw Error("No has introduit un nombre vàlid.");
}

function keepSearchPrimeNum(message) {
    alert(message);
    start();
  }

function isPrime(userNumber) {
  for (i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) return false;
  }
  return true;
}

function getMessage(userNumber) {
  return `Exacte, el número ${userNumber} és primer!`;
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
}

window.addEventListener("keydown", function(event) {
  if (event.code === 'Enter') {
      event.preventDefault();
      document.getElementById("calculateButton").click();
  }

  if (event.code === 'Backspace') {
      event.preventDefault();
      document.getElementById("restartButton").click();
  }
});
