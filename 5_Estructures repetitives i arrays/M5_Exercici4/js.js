/*Has de modificar el programa anterior per afegir una nova funcionalitat:
establir un número màxim de 5 intents.
Si l’usuari encerta el número escollit pel programa abans d'aquests 5 intents,
el programa mostra el següent missatge per pantalla:
“Enhorabona, el número és X i has necessitat Y intents per encertar-lo”.
Si no encerta el número abans de 5 intents, el programa mostra per pentalla: 
"Has utilitzat massa intents! El número és X "*/

//numero aleatorio de la máquina
function chooseProgramNumber() {
    return Math.floor(Math.random() * 11);
}

//función quando das al boton
function playTheGameMAIN() {
    let programNumber = chooseProgramNumber() //ejecuta la función anterior

    console.log(programNumber) //para saber el numero de la maquina sin tener que ir probando

    playTheGame(programNumber) //ejecuta la siguiente función

    showResponse()  //ejecuta la función que muestra la respuesta
}

//función que te pide el numero por promt y comprueba si has acertado
function playTheGame(programNumber) {
    let userNumber
    let attempts = 0
    do {
        userNumber = Number(prompt("Endevina el nombre de l'1 al 10 que estic pensant:", ""));
        if (!checkCorrectNumber(userNumber)) errorMessage(); //valida el número introducido
        attempts += 1
        console.log(attempts)
    } while (userNumber != programNumber && attempts < 5); // si has acertado para, si no sigue pidiendo hasta el máximo número de intentos

    (userNumber == programNumber && attempts <= 5) ? winnerAnswer(programNumber, attempts): maxAttempsMessage(programNumber) //llama una función de mensaje u otra en función si has acertado o has superado el número de intentos.
}

//función de validación
function checkCorrectNumber(userNumber) {
    return Number.isInteger(userNumber) && 0 <= userNumber && userNumber <= 10
}

//función de mensaje de error
function errorMessage() {
    alert(`Estic pensant un nombre de l'1 al 10!!`)
}

//función de mensaje de ganador
function winnerAnswer(winnerNumber, attempts) {
    document.getElementById("answer").innerHTML = `Enhorabona, el número és ${winnerNumber} i has necesitat ${attempts} intent/s!`
    document.getElementById("deleteButton").style.display = "block"
}

//función de mensaje de intentos superados
function maxAttempsMessage(programNumber) {
    document.getElementById("answer").innerHTML = `Has utilitzat massa intents! El número és ${programNumber}!`
    document.getElementById("deleteButton").style.display = "block"
}

//función que muestra la resupesta que sea
function showResponse() {
    document.getElementById("answer").style.display = "block"
    document.getElementById("playButton").style.display = "none"
}

//función para volver a empezar
function deleteData() {
    document.getElementById("answer").style.display = "none"
    document.getElementById("deleteButton").style.display = "none"
    document.getElementById("playButton").style.display = "block"
}
