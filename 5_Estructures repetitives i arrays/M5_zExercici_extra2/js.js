/*Realitza un programa que pinti la lletra L per pantalla feta amb asteriscs.
El programa demanarà l'altura.
El pal horitzontal de la L tindrà una longitud de la meitat (divisió entera entre 2) de l'altura més un.
Exemple:
Introduïu l'alçada de la L : 5
La base serà  la divisió del nombre entre 2 : (5 / 2) + 1 = 3

*
*
*
*
* * *

*/

function checkValidNumber(heigh) {
    return (((Number.isInteger(heigh)) && (heigh >= 1)))
}

function makeDraw(heigh) {
    let text = ""
    let base = (parseInt(heigh/2));
    for (let i=0 ; i < heigh ; i++){
        text += "</br>*"
    }
    for (let j=0 ; j < base ; j++){
        text += "*"
    }
    document.getElementById("answer").innerHTML = `Aquí tens la teva L:</br>${text}`
}

function errorMessage() {
    document.getElementById("answer").innerHTML = "El número introdut no és vàlid."
}

function showAnswer (){
    document.getElementById("answer").style.display = "block";
    document.getElementById("replayButton").style.display = "block";
    document.getElementById("dataInputs").style.display = "none";
}

function rePlay(){
    document.getElementById("answer").style.display = "none";
    document.getElementById("replayButton").style.display = "none";
    document.getElementById("dataInputs").style.display = "block";
    document.getElementById("userHeigh").value = " "
}

function drawL() {
    const heigh = parseFloat(document.getElementById("userHeigh").value)

    let isValid = checkValidNumber(heigh)
    
    isValid ? makeDraw(heigh) : errorMessage()

    showAnswer()
}