/*Aquesta línia de codi: Math.ceil((Math.random() * 10));
Retorna un número entre el 0 i el 10 de forma aleatòria.
L’exercici consisteix a què l’usuari ha d'endevinar el número escollit aleatòriament 
pel programa.
El programa, demana números a l’usuari fins que aquest encerti el número aleatori generat 
pel programa.
Un cop l’usuari ha endevinat el número, es mostrarà per pantalla el següent missatge: 
“Enhorabona, el número era X”*/

let programNumber = chooseProgramNumber()

function chooseProgramNumber() {
    return Math.ceil((Math.random() * 10))
}

function checkCorrectNumber(userNumber){
    return Number.isInteger(userNumber) && 1 <= userNumber && userNumber <= 10
}

function playTheGame(userNumber, programNumber) {
    userNumber === programNumber ? winerAnswer(userNumber) : loserAnswer()
}

function winerAnswer(winnerNumber) {
    document.getElementById("userNumber").value = ""
    document.getElementById("answer").innerHTML = `Enhorabona, el número era ${winnerNumber}!`
    document.getElementById("checkNumberButton").style.display = "none"
    document.getElementById("deleteButton").style.display = "block"
}

function loserAnswer() {
    document.getElementById("answer").innerHTML = `Segueix provant.`
}

function errorMessage() {
    document.getElementById("answer").innerHTML = `Estic pensant un nombre de l'1 al 10!!`
}

function showResponse() {
    document.getElementById("answer").style.display = "block"
}

function deleteData() {
    programNumber = chooseProgramNumber()
    document.getElementById("answer").style.display = "none"
    document.getElementById("deleteButton").style.display = "none"
    document.getElementById("checkNumberButton").style.display = "block"
}

function checkUserNumberMAIN() {
    let userNumber = parseFloat(document.getElementById("userNumber").value)

    checkCorrectNumber (userNumber) ? playTheGame(userNumber, programNumber) : errorMessage()

    showResponse()
}