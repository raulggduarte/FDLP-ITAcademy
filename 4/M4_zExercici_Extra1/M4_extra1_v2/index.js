/* Fes un programa que pregunti a l'usuari dos nombres enters al qual anomenaràs dividend
 i divisor respectivament.
El divisor haurà d'estar comprès entre 2 i 7.
En cas contrari, el programa haurà de mostrar un missatge d'error.

Si el divisor és correcte (2-7) mostra en pantalla si el dividend és múltiple del divisor,
o no. */


function esborrar() {
    document.getElementById("numDividend").value = ""
    document.getElementById("numDivisor").value = ""
    document.getElementById("resposta").style.display = "none"
    document.getElementById("botoEsborra").style.display = "none"
}

function errorDivisor() {
    document.getElementById("resposta").innerHTML = 'El divisor no està comprès entre 2 i 7.'
}

function checkErrorEnters(dividend, divisor) {
    (Number.isInteger(dividend) && Number.isInteger(divisor)) ? calculateMultiple(dividend, divisor) : errorMessage()
}

function calculateMultiple(dividend, divisor) {
    let residu = dividend % divisor;
    (residu === 0) ? document.getElementById("resposta").innerHTML = "El dividend és múltiple del divisor.": document.getElementById("resposta").innerHTML = "El dividend NO és múltiple del divisor."
}

function errorMessage() {
    document.getElementById("resposta").innerHTML = 'Algun dels dos nombres no és enter.'
}

function mainFunction() {

    let dividend = parseFloat(document.getElementById("numDividend").value);
    let divisor = parseFloat(document.getElementById("numDivisor").value);

    (divisor < 2 || divisor > 7) ? errorDivisor() : checkErrorEnters(dividend, divisor)

    document.getElementById("resposta").style.display = "block"
    document.getElementById("botoEsborra").style.display = "block"
}