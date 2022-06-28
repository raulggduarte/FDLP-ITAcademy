/* Donat un array de números, el programa ha de mostrar la suma de tots els
 números parells i la suma de tots els números imparells. */

//MAIN FUNCTION************************************************************

function mainFunction() {
  try {
    const userArray = (validateNum(document.getElementById("userNumber").value)).toString();

    const sumResults = doSum(userArray);

    printResultHTML(getMessage(sumResults));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//*************************************************************************

function validateNum(num) {
  const regex = /[a-zA-Z!@#\$,%\^\&*\)\(+=._-]/;

  return regex.test(num) ?
    errorNumberMessage() :
    num;
}

function errorNumberMessage() {
  throw Error("No has introduit una nombre vàlid.");
}

function keepAskingMeasures(message) {
  alert(message);
  formatData();
}

function formatData() {
  document.getElementById("userNumber").value = "";
}

function doSum(userArray) {
  let evenSum = 0;
  let oddSum = 0;
  arrayLength = userArray.length;
  for (let i = 0; i < arrayLength; i++) {
    if (userArray[i] % 2 === 0) evenSum += Number(userArray[i]);
    if (userArray[i] % 2 !== 0) oddSum += Number(userArray[i]);
  }
  console.log(evenSum, oddSum);
  return [evenSum, oddSum];
}

function getMessage(sumResults) {
  return `La suma dels nombres parells és <b>${sumResults[0]}</b>
  i la suma dels nombres senars és <b>${sumResults[1]}</b>.`;
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
    document.getElementById("mainFunctionButton").click();
  }

  if (event.code === "Backspace") {
    event.preventDefault();
    document.getElementById("restartButton").click();
  }
});