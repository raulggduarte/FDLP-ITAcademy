/*Escriu un programa JavaScript que llegeix un nombre
i mostra per pantalla el doble i el triple d'aquest número.*/

function mostraResultat() {
    /* Declarem la variable i l'agafem del valor introduit a l'input.
    Passem el valor de la variable a un valor numèric decimal amb parseFloat, 
    ja que "getElementById" genera una variable string. */
    const nombre = parseFloat(document.getElementById("nombre").value);

    // Delcarem la variables on emmagatzemarem els resultats calculats..
    let doble = nombre * 2;
    let triple = nombre * 3;

    /* Generem un condicional que comprova que el valor introduits és un nombre i no una lletra.
    Si el nombre no és correcte mostra un missatge d'error i torna a la pantalla inicial. */
    if (isNaN(nombre)) {
        alert('El valor ha de ser un número.');

    /*Si el nombre és correcte, mostra el resultat del doble i el triple
    i amaga els inputs i el botó de Calcula. */
    } else {
        document.getElementById("resultat1").style.display = "block";
        document.getElementById("espaiResultat1").style.display = "block";
        document.getElementById("espaiResultat1").innerHTML = doble;
        document.getElementById("resultat2").style.display = "block";
        document.getElementById("espaiResultat2").style.display = "block";
        document.getElementById("espaiResultat2").innerHTML = triple;
        document.getElementById("inputBox").style.display = "none";
        document.getElementById("salt1").style.display = "none";
        document.getElementById("calcBut").style.display = "none";
        return;
    }
}
