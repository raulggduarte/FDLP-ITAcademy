/*Aquesta línia de codi: Math.ceil((Math.random() * 10));
Retorna un número entre el 0 i el 10 de forma aleatòria.
L’exercici consisteix a què l’usuari ha d'endevinar el número escollit aleatòriament 
pel programa.
El programa, demana números a l’usuari fins que aquest encerti el número aleatori generat 
pel programa.
Un cop l’usuari ha endevinat el número, es mostrarà per pantalla el següent missatge: 
“Enhorabona, el número era X”*/

function chooseProgramNumber() {
    return Math.ceil((Math.random() * 10))
}

function playTheGame(userNumber, programNumber) {
    do {
        userNumber = Number(prompt("Endevina el nombre de l'1 al 10 que estic pensant:", ""));
        if (!checkCorrectNumber(userNumber)) errorMessage();
    } while (userNumber != programNumber);
    return userNumber
}

function checkCorrectNumber(userNumber) {
    return Number.isInteger(userNumber) && 1 <= userNumber && userNumber <= 10
}

function errorMessage() {
    alert(`Estic pensant un nombre de l'1 al 10!!`)
}

function winnerAnswer(winnerNumber) {
    document.getElementById("answer").innerHTML = `Enhorabona, el número era ${winnerNumber}!`
    document.getElementById("deleteButton").style.display = "block"
}

function showResponse() {
    document.getElementById("answer").style.display = "block"
    document.getElementById("playButton").style.display = "none"
}

function deleteData() {
    document.getElementById("answer").style.display = "none"
    document.getElementById("deleteButton").style.display = "none"
    document.getElementById("playButton").style.display = "block"
}

function playTheGameMAIN() {
    let programNumber = chooseProgramNumber()
    console.log(programNumber)
    let userNumber

    let winnerNumber = playTheGame(userNumber, programNumber)

    winnerAnswer(winnerNumber);

    showResponse()
}