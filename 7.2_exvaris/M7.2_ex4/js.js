/* Realitzar un programa on l’usuari introdueix un número i el programa
crida a una funció que retorna el factorial del número introduit.

El factorial d'un nombre n (enter, no negatiu) és el producte de tots
els nombres enters positius inferiors o iguals a n.  */


//  MAIN FUNCTION **************************************************

function calculateFactorial() {
    const userNumber = validateNum(parseFloat(document.getElementById("userNumber").value));

    const factorialResult = makeFactorial(userNumber);

    finalMessage = getFinalMessage (userNumber, factorialResult)

    showAnswer(finalMessage);
}

//******************************************************************

function validateNum(num) {
    return ( (isNaN(num) || num < 0 || !Number.isInteger(num) ) ? errorNumberMessage() : num )
}

function errorNumberMessage() {
    alert("No has introduit un nombre vàlid.");
    throw ('exit');
}

function makeFactorial (userNumber) {
    let result = userNumber;

    if(userNumber == 0) return 1;

    for ( i = userNumber-1 ; i > 0 ; i-- ) {
        result *= i;
    }

    return result;
} 

function getFinalMessage (userNumber, factorialResult) {
    return `El factorial de ${userNumber} és ${factorialResult}.`
}

function showAnswer(finalMessage) {
    document.getElementById("finalAnswer").innerHTML = finalMessage
    document.getElementById("finalAnswer").style.display = "block"
    document.getElementById("restartButton").style.display = "block"

    document.getElementById("dataInput").style.display = "none"
}

function restart() {
    document.getElementById("userNumber").value = ""
    document.getElementById("dataInput").style.display = "block"

    document.getElementById("finalAnswer").innerHTML = ""
    document.getElementById("finalAnswer").style.display = "none"
    document.getElementById("restartButton").style.display = "none"
}