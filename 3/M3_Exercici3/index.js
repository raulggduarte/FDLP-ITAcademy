//amaguem el paràgraf que apareixerà amb el resultat
document.getElementById("resultat").style.display = "none";


/*defininim una funció que reb les dades, calcula la mitjana i mostra el 
resultat quan fem clic al botó*/
function mostraResultat() {
    /* Declarem les variables i les agafem del valor introduit als inputs.
    Passem el valor de les variables a un valor numèric decimal amb parseFloat, 
    ja que "getElementById" genera una variable string. */
    
    const valorNota1 = Number(document.getElementById("nota1").value);
    const valorNota2 = Number(document.getElementById("nota2").value);
    const valorNota3 = Number(document.getElementById("nota3").value);


    // Delcarem la variables on emmagatzemarem el resultat de calcular la mitjana.
    let mitjana = (valorNota1 + valorNota2 + valorNota3) / 3;

    /* Generem un condicional que comprova que els valors introduits són nombres i no lletres.
    Si algun dels tes nombres no són correctes mostra un missatge d'error i torna a la pantalla inicial. */
    if (isNaN(valorNota1) || isNaN(valorNota2) || isNaN(valorNota3)) {
        alert('Al menys un dels valors introduits no és un número.');
    
    /*Si tots tres nombres són correctes, mostra el resultat de la nota mitjana
    i amaga els inputs i el botó de Calcula. */
    } else {
        document.getElementById("resultat").style.display = "block";
        document.getElementById("espaiResultat").innerHTML = mitjana;
        document.getElementById("caixaNota1").style.display = "none";
        document.getElementById("caixaNota2").style.display = "none";
        document.getElementById("caixaNota3").style.display = "none";
        document.getElementById("salt1").style.display = "none";
        document.getElementById("salt2").style.display = "none";
        document.getElementById("salt3").style.display = "none";
        document.getElementById("calcBut").style.display = "none";
        return;
    }
}
