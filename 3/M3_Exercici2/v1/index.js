// Tot l'script és una funció que es crida a ella mateixa quan no s'ha introduit les dades correctament.

// Crida de la funció
mostraResultat();


//definició de la funció
function mostraResultat() {
    /* Declarem les variables i demanem el valor a partir d'un prompt.
    Passem el valor de la variable a un valor numèric decimal amb parseFloat, 
    ja que "promt" genera una variable string. */
    const enter1 = parseFloat(prompt ('Introdueix un nombre enter.', '1, -3, 245...'));
    const enter2 = parseFloat(prompt ('Ara un altre.', '2, -10, 1050...'));

    // Delcarem les variables on emmagatzemarem les operacions aritmètiques i les desenvolupem
    var suma = enter1 + enter2;
    var resta = enter1 - enter2;
    var multip = enter1 * enter2;
    var div = enter1 / enter2;

    /* Generem un condicional que comprova que els valors introduits són nombres enters.
    Si ambdós nombres ho són, mostra una finestra emergent amb el resultat de les quatre operacions,
    si algun dels dos nombres no són correctes mostra un missatge d'error i torna a demanar els dos nombres.*/
    if (Number.isInteger(enter1) && Number.isInteger(enter2)) {
        alert(`El resultat de la suma és: ${suma}\nEl resultat de la resta és: ${resta}\nEl resultat de la multiplicació és: ${multip}\nEl resultat de la divisió és: ${div}`);
        return;
    } else {
        alert('Al menys un dels nombres introduits no és enter.');
        mostraResultat();
    }
}