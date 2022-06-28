/*L’usuari ha d’introduir dos números, el programa retornarà
“Un dels dos números és negatiu”, només si un dels dos números és negatiu.*/

//  MAIN FUNCTION **************************************************

function positiveOrNegative() {
    const userNumber1 = validateNum(retrieveNumber("userNumber1"));
    const userNumber2 = validateNum(retrieveNumber("userNumber2"));

    const isAnyNegative = wichIsNegative(userNumber1, userNumber2)

    const finalMessage = getFinalMessage (isAnyNegative)

    showAnswer(finalMessage);
}

//******************************************************************

function retrieveNumber(id) {
    return (parseFloat(document.getElementById(id).value))
}

function validateNum(num) {
    return ( (isNaN(num) ) ? errorNumberMessage() : num )
}

function errorNumberMessage() {
    alert("No has introduit un nombre vàlid.");
    throw ('exit');
}

function wichIsNegative (userNumber1, userNumber2) {
    return userNumber1 < 0 || userNumber2 < 0
}

function getFinalMessage (isAnyNegative) {
    return isAnyNegative ? `Un dels dos números és negatiu.` : `Els dos números són positius.` ;
}

function showAnswer(finalMessage) {
    document.getElementById("inputLabel1").style.display = "none"
    document.getElementById("inputLabel2").style.display = "none"
    document.getElementById("userNumber1").style.display = "none"
    document.getElementById("userNumber2").style.display = "none"
    document.getElementById("calculateButton").style.display = "none"

    document.getElementById("finalAnswer").innerHTML = finalMessage
    document.getElementById("finalAnswer").style.display = "block"
    document.getElementById("restartButton").style.display = "block"
}

function restart() {
    document.getElementById("inputLabel1").style.display = "inline"
    document.getElementById("inputLabel2").style.display = "inline"
    document.getElementById("userNumber1").style.display = "inline"
    document.getElementById("userNumber2").style.display = "inline"
    document.getElementById("userNumber1").value = ""
    document.getElementById("userNumber2").value = ""
    document.getElementById("calculateButton").style.display = "block"

    document.getElementById("finalAnswer").innerHTML = ""
    document.getElementById("finalAnswer").style.display = "none"
    document.getElementById("restartButton").style.display = "none"
}