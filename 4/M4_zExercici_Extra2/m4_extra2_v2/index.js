/* ADemana a l'usuari un número entre 0 i 99 i mostra'l escrit en lletres
(pots fer-ho en català o castellà).
Exemple: 56 (cinquanta-sis) o 56 (cincuenta y seis) */

const numeros = {
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

function startCounting (numDesena, unitat, desena, numeroUsuari) {
    (numDesena == 1 && unitat > 7) ? document.getElementById("numeroEscrit").innerHTML = `di${numeros[unitat]}` : makeTwenties(numDesena, unitat, desena, numeroUsuari);
}

function makeTwenties(numDesena, unitat, desena, numeroUsuari) {
    (numDesena === 2 && unitat > 0) ? document.getElementById("numeroEscrit").innerHTML = `${numeros[desena]}-i-${numeros[unitat]}` : makeHighers(numDesena, unitat, desena, numeroUsuari);
}

function makeHighers(numDesena, unitat, desena, numeroUsuari) {
    (numDesena >= 3 && unitat > 0) ? document.getElementById("numeroEscrit").innerHTML = `${numeros[desena]}-${numeros[unitat]}` : document.getElementById("numeroEscrit").innerHTML = `${numeros[numeroUsuari]}`
}

function escriuNumero() {
    let numeroUsuari = Number(document.getElementById("num").value);
    let numDesena = parseInt(numeroUsuari / 10);
    let desena = parseInt(numeroUsuari / 10)*10;
    let unitat = numeroUsuari - desena
    
    startCounting (numDesena, unitat, desena, numeroUsuari)

    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
}

function esborrar() {
    document.getElementById("num").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";
}