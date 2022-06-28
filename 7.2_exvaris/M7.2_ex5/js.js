/* L’usuari introdueix un nombre per teclat i el programa crida a una
funció que indiqui si el número és primer o no. */


//  MAIN FUNCTION **************************************************

function calculatePrimeNumber() {
    const userNumber = validateNum(parseFloat(document.getElementById("userNumber").value));

    const isPrime = calculateIsPrime(userNumber);

    finalMessage = getFinalMessage (userNumber, isPrime);

    showAnswer(finalMessage);
}

//******************************************************************

function validateNum(num) {
    return ( (isNaN(num) || num <= 1 || !Number.isInteger(num) ) ? errorNumberMessage() : num );
}

function errorNumberMessage() {
    alert("No has introduit un nombre vàlid.");
    throw ('exit');
}

function calculateIsPrime (userNumber) {
    for ( i = 2 ; i < userNumber ; i++ ) {
        if (userNumber % i == 0) {
            return false;
        }
    }
    return true;
} 

function getFinalMessage (userNumber, isPrime) {
    return isPrime ? `El nombre ${userNumber} és primer.` : `El nombre ${userNumber} NO és primer.`;
}

function showAnswer(finalMessage) {
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