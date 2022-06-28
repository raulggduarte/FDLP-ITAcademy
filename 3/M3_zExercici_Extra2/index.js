/*Escriu un programa JavaScript que calculi els litres de pintura necessaris per a pintar una paret rectangular.

Un litre de pintura cobreix aproximadament, 12m2 en una sola mà.

Crea una constant anomenada coberturaLitre per a guardar la dada de cobertura de la pintura (12m2)
Hauràs de demanar a l'usuari:

- L'alt i ample de la paret ( multiplicant sabràs l'àrea de la mateixa )
- El nombre de mans a aplicar
Mostra en pantalla els litres de pintura a utilitzar.*/

function mostraResultat() {
    /* Declarem la constant i les variable i les agafem dels valor introduits als inputs.
    Passem els valors de les variables a valors numèrics decimals amb parseFloat, 
    ja que "getElementById" genera una variable string. */
    const coberturaLitre = 12;
    let alçada = parseFloat(document.getElementById("alçada").value);
    let amplada = parseFloat(document.getElementById("amplada").value);
    let mans = parseFloat(document.getElementById("mans").value);

    // Delcarem la variable on emmagatzemarem el resultat calculat.
    let litres = (alçada * amplada * mans) / 12;

    /* Generem un condicional que comprova que els valors introduit són nombres i no lletres.
    Si aquests no són correctes mostra un missatge d'error i torna a la pantalla inicial. */
    if (isNaN(alçada) || isNaN(amplada) || isNaN(mans)) {
        alert('Els valors han de ser un números.');

    /*Si els nombres són correctes, mostra el resultat de litres necessaris
    i amaga els inputs i el botó de Calcula. */
    } else {
        document.getElementById("fraseRes").style.display = "block";
        document.getElementById("espaiResultat").innerHTML = litres;
        document.getElementById("inputBox1").style.display = "none";
        document.getElementById("salt1").style.display = "none";
        document.getElementById("inputBox2").style.display = "none";
        document.getElementById("salt2").style.display = "none";
        document.getElementById("inputBox3").style.display = "none";
        document.getElementById("salt3").style.display = "none";
        document.getElementById("calcBut").style.display = "none";
        return;
    }
}
