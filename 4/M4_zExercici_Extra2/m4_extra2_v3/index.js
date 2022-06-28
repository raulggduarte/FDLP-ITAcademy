/* ADemana a l'usuari un número entre 0 i 99 i mostra'l escrit en lletres
(pots fer-ho en català o castellà).
Exemple: 56 (cinquanta-sis) o 56 (cincuenta y seis) */

const numeros = {
    0: 'zero',
    1: 'u',
    2: 'dos',
    3: 'tres',
    4: 'quatre',
    5: 'cinc',
    6: 'sis',
    7: 'set',
    8: 'vuit',
    9: 'nou',
    10: 'deu',
    11: 'onze',
    12: 'dotze',
    13: 'tretze',
    14: 'catorze',
    15: 'quinze',
    16: 'setze',
    17: 'disset',
    20: 'vint',
    30: 'trenta',
    40: 'quaranta',
    50: 'cinquanta',
    60: 'seixanta',
    70: 'setanta',
    80: 'vuitanta',
    90: 'noranta',
}

function isTens(numDesena, unitat, type) {
    if (numDesena == 1 && unitat > 7) type = 1;
    return type
}

function isTwenties(numDesena, unitat, type) {
    if (numDesena === 2 && unitat > 0) type = 2;
    return type
}

function isThirties(numDesena, unitat, type) {
    if (numDesena >= 3 && unitat > 0) type = 3;
    return type
}

function checkNumber(numeroUsuari, type) {
    if (numeroUsuari < 0 || numeroUsuari > 99) type = 4;
    console.log(numeroUsuari, type)
    return type
}

function getResponse(unitat, desena, numeroUsuari, type) {
    if (type == 0) document.getElementById("numeroEscrit").innerHTML = `${numeros[numeroUsuari]}`
    if (type == 1) document.getElementById("numeroEscrit").innerHTML = `di${numeros[unitat]}`
    if (type == 2) document.getElementById("numeroEscrit").innerHTML = `${numeros[desena]}-i-${numeros[unitat]}`
    if (type == 3) document.getElementById("numeroEscrit").innerHTML = `${numeros[desena]}-${numeros[unitat]}`
    if (type == 4) document.getElementById("numeroEscrit").innerHTML = `que has introduit no és un número vàlid.`
}

function showResponse() {
    document.getElementById("resposta").style.display = "block"
    document.getElementById("botoEsborra").style.display = "block"
}

function esborrar() {
    document.getElementById("num").value = ""
    document.getElementById("resposta").style.display = "none"
    document.getElementById("botoEsborra").style.display = "none"
}

function escriuNumero() {

    /*let numeroUsuari = document.getElementById("num").value
    alert(numeroUsuari.length)
    alert(numeroUsuari[0])*/

    let numeroUsuari = Number(document.getElementById("num").value)

    let numDesena = parseInt(numeroUsuari / 10)
    let desena = parseInt(numeroUsuari / 10) * 10
    let unitat = numeroUsuari - desena
    let type = 0

    type = isTens(numDesena, unitat, type)
    type = isTwenties(numDesena, unitat, type)
    type = isThirties(numDesena, unitat, type)
    type = checkNumber(numeroUsuari, type)
    getResponse(unitat, desena, numeroUsuari, type)
    showResponse()
}