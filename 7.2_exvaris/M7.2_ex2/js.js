/* Fes un programa que mostri el següent per pantalla:

* * * * * *
* * * * *
* * * *
* * *
* *
*

El nombre de línies formades per “*” vindrà donat per un número que
l’usuari introduirà per teclat.
Condició: En tot el codi del programa només hi pot haver un *
També, a poder ser, no utilitzis cap mètode com repeat() o substring()
de la classe String */

//  MAIN FUNCTION **************************************************

function drawAsterisks() {
    const userNumber = validateNum(parseFloat(document.getElementById("userNumber").value));

    const asterisk = "*";

    const finalDraw = makeDraw(userNumber, asterisk);

    showAnswer(finalDraw);
}

//******************************************************************

function validateNum(num) {
    return ( (isNaN(num) || num < 1 || !Number.isInteger(num) ) ? errorNumberMessage() : num )
}

function errorNumberMessage() {
    alert("No has introduit un nombre vàlid.");
    throw ('exit');
}

function makeDraw (userNumber, asterisk) {
    let text = ``;

    for ( i = 0 ; i <= userNumber ; i++ ) {
        for (j = userNumber ; j > i ; j--){
        text += `${asterisk} `
        }
        text += `</br>`;
    }

    return text;
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