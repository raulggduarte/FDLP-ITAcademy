//amaguem el paràgraf que apareixerà amb el resultat
document.getElementById("resultat").style.display = "none";


/*defininim una funció que reb les dades, calcula les operacions i mostra el 
resultat quan fem clic al botó*/
function mostraResultat() {
    /* Declarem les variables i les agafem del valor introduit als inputs.
    Passem el valor de la variable a un valor numèric decimal amb parseFloat, 
    ja que "getElementById" genera una variable string. */
    
    let enter1 = parseFloat(document.getElementById("input1").value);
    let enter2 = parseFloat(document.getElementById("input2").value);

    // Delcarem les variables on emmagatzemarem les operacions aritmètiques i les desenvolupem
    var suma = enter1 + enter2;
    var resta = enter1 - enter2;
    var multip = enter1 * enter2;
    var div = enter1 / enter2;

    /* Generem un condicional que comprova que els valors introduits són nombres enters.
    Si ambdós nombres ho són, mostra el resultat de les quatre operacions i amaga els inputs
    i el botó de Calcula. */
    if (Number.isInteger(enter1) && Number.isInteger(enter2)) {
        document.getElementById("resultat").style.display = "block";
        document.getElementById("espaiResultat").innerHTML = (`El resultat de la suma és: ${suma}<br>El resultat de la resta és: ${resta}<br>El resultat de la multiplicació és: ${multip}<br>El resultat de la divisió és: ${div}`)
        document.getElementById("oper1").style.display = "none";
        document.getElementById("oper2").style.display = "none";
        document.getElementById("salt").style.display = "none";
        document.getElementById("calcBut").style.display = "none";
        return;

    //si algun dels dos nombres no són correctes mostra un missatge d'error i torna a la pantalla inicial.
    } else {
        alert('Al menys un dels nombres introduits no és enter.');
    }
}
