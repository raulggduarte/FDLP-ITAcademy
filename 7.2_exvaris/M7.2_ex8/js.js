/* L’usuari introdueix un nombre per teclat i el programa crida a una funció que ha
de mostrar la successió de Fibonacci.
Exemple: Si l’usuari introdueix el 10 el resultat ha de ser: 0,1,1,2,3,5,8,13,21,34 */

//  MAIN FUNCTION **************************************************

function start() {
  try {
    const userNumber = validateNum(
      parseFloat(document.getElementById("userNumber").value)
    );

    const fibonacciSequence = calculateFibonacci(userNumber);

    printResult(getMessage(userNumber, fibonacciSequence));
  } catch (error) {
    alert(error);
    restart();
  }
}

//******************************************************************

function validateNum(num) {
  return isNaN(num) || num < 1 || !Number.isInteger(num)
    ? invalidNumMessage()
    : num;
}

function invalidNumMessage() {
  throw Error("No has introduit un nombre vàlid.");
}

function calculateFibonacci(userNumber) {
  let fibonacciNumbers = [0, 1];
  for (let i = 2; i < userNumber; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
  }
  return fibonacciNumbers;
}

function getMessage(userNumber, fibonacciSequence) {
  let text = `La successió de Fibonacci del número ${userNumber} és:<br><br>`;
  for (let i = 0; i < userNumber; i++) {
    text += `${fibonacciSequence[i]}, `;
  }
  return text.slice(0, text.length - 2);
}

function printResult(finalMessage) {
  document.getElementById("finalAnswer").innerHTML = finalMessage;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";

  document.getElementById("dataInput").style.display = "none";
}

function restart() {
  document.getElementById("userNumber").value = "";
  document.getElementById("dataInput").style.display = "block";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
}

window.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.getElementById("start").click();
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    document.getElementById("restartButton").click();
  }
});
