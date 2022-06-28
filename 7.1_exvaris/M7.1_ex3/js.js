/*L’usuari ha d'introduir un número i el programa ha de mostrar per pantalla
si el número és parell o imparell.*/

//  MAIN FUNCTION **************************************************

function evenOrOdd() {
    const userNumber = validateNum
        (parseFloat(document.getElementById("userNumber").value));

    const isEvenOrOdd = calculateEvenOrOdd (userNumber)

    const finalMessage = getFinalMessage (userNumber, isEvenOrOdd)

    showAnswer(finalMessage);
}

//******************************************************************


function validateNum(num) {
    return ( (isNaN(num) || !Number.isInteger(num)) ? errorNumberMessage() : num )
}

function errorNumberMessage() {
    alert("No has introduit un nombre vàlid.");
    throw ('exit');
}

function calculateEvenOrOdd (userNumber) {
    return Number(userNumber) % 2 == 0
}

function getFinalMessage (userNumber, isEvenOrOdd) {
    return isEvenOrOdd ? `El número ${userNumber} és parell.` : `El número ${userNumber} és senar.` ;
}

function showAnswer(finalMessage) {
    document.getElementById("inputLabel").style.display = "none"
    document.getElementById("userNumber").style.display = "none"
    document.getElementById("calculateButton").style.display = "none"

    document.getElementById("finalAnswer").innerHTML = finalMessage
    document.getElementById("finalAnswer").style.display = "block"
    document.getElementById("restartButton").style.display = "block"
}

function restart() {
    document.getElementById("inputLabel").style.display = "inline"
    document.getElementById("userNumber").style.display = "inline"
    document.getElementById("userNumber").value = ""
    document.getElementById("calculateButton").style.display = "block"

    document.getElementById("finalAnswer").innerHTML = ""
    document.getElementById("finalAnswer").style.display = "none"
    document.getElementById("restartButton").style.display = "none"
}