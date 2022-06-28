/*Realitzar un joc per endevinar un nombre aleatori N, entre 1 i 500.
Si la distància entre el nombre a endevinar i el de l'usuari és de 50 o més,
el programa haurà de dir:
“Fred, fred: el teu número és més gran “ o “Fred, fred: el teu número és 
més petit “
Si la distància entre el nombre a endevinar i el de l'usuari està entre
15 i 50, el programa haurà de dir:
“Tebi, Tebi: el teu número és més gran “ o “Tebi, Tebi: el teu número és
més petit “ 
I si la distància entre el nombre a endevinar i el de l'usuari i si la 
distància és menor a 15, el programa haurà de dir:
“Calent, calent: el teu número és més gran “ o “Calent, calent: 
el teu número és més petit “
El procés acaba quan l'usuari encerta.*/

const min = 1
const max = 500
const machineNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(machineNumber)

function checkValidNumber(userNumber) {
    userNumber = Number(userNumber)
    return ((Number.isInteger(userNumber)) && (userNumber >= 1) && (userNumber <= 500)) ? true : errorMessage()
}

function errorMessage() {
    document.getElementById("answer").innerHTML = "No has introduit un nombre enter."
    document.getElementById("userNumber").value = "";
}

function compareNumbers(userNumber, machineNumber) {
    let distance = machineNumber - userNumber;
    /*if (distance == 0) {
        winnerMessage(machineNumber)
    } else if (distance < 0) {
        distance = distance * -1;
        (distance >= 50) ? alert("Fred, fred: el teu número és més gran.") :
        (distance >= 15) ? alert("Tebi, tebi: el teu número és més gran.") :
        alert("Calent, calent: el teu número és més gran.")
    } else if (distance > 0) {
        (distance >= 50) ? alert("Fred, fred: el teu número és més petit.") :
        (distance >= 15) ? alert("Tebi, tebi: el teu número és més petit.") :
        alert("Calent, calent: el teu número és més petit.")
    }*/
    (distance == 0) ? winnerMessage(machineNumber):
        (distance < 0) ? (
            distance = distance * -1,
            (distance >= 50) ? alert("Fred, fred: el teu número és més gran.") :
            (distance >= 15) ? alert("Tebi, tebi: el teu número és més gran.") :
            alert("Calent, calent: el teu número és més gran.")) :
        (
            (distance >= 50) ? alert("Fred, fred: el teu número és més petit.") :
            (distance >= 15) ? alert("Tebi, tebi: el teu número és més petit.") :
            alert("Calent, calent: el teu número és més petit."))
}

function winnerMessage(machineNumber) {
    document.getElementById("answer").innerHTML = `Enhorabona! Has encertat! El número era: ${machineNumber}.`
    document.getElementById("dataInputs").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("replayButton").style.display = "block";
    document.getElementById("userNumber").value = "";
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function rePlay() {
    document.location.reload()
}

function checkUserNumber(machineNumber) {
    const userNumber = parseFloat(document.getElementById("userNumber").value)

    userNumberIsOk = checkValidNumber(userNumber)

    if (userNumberIsOk) compareNumbers(userNumber, machineNumber)

    showAnswer()
}