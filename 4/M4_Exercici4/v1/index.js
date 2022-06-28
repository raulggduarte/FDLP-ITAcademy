/* L’usuari introdueix un mes per pantalla i mitjançant un switch amb els 12 mesos
de l’any, el programa calcula els dies del mes i mostra el següent: 
Exemple: Si el número introduït és 1, llavors ha d'aparèixer per pantalla: 
“El mes de gener té 31 dies” */


/* Funció que calcula els dies del mes indicat i mostra la resposta per pantalla.
S'inicia quan s'introdueix alguna dada a l'input del mes. */
function calculaDiesMes() {

    /*declarem la variable on emmagatzemem el mes introduit a l'input. 
    El passem a numero perquè així al switch ens estalviem posar cometes a tots els case*/
    let mes = Number(document.getElementById("quinMes").value);

    //iniciem un switch que mostra una resposta diferent en funció del mes introduit
    switch (mes) {
        case 1: 
            document.getElementById("resposta").innerHTML = "El mes de gener té 31 dies.";
            break;
        case 2: 
            document.getElementById("resposta").innerHTML = "El mes de febrer té 28 dies, si és any de traspàs, en té 29.";
            break;
        case 3: 
            document.getElementById("resposta").innerHTML = "El mes de març té 31 dies.";
            break;
        case 4: 
            document.getElementById("resposta").innerHTML = "El mes d'abril té 30 dies.";
            break;
        case 5: 
            document.getElementById("resposta").innerHTML = "El mes de maig té 31 dies.";
            break;
        case 6: 
            document.getElementById("resposta").innerHTML = "El mes de juny té 30 dies.";
            break;
        case 7: 
            document.getElementById("resposta").innerHTML = "El mes de juliol té 31 dies.";
            break;
        case 8: 
            document.getElementById("resposta").innerHTML = "El mes de d'agost té 31 dies.";
            break;
        case 9: 
            document.getElementById("resposta").innerHTML = "El mes de setembre té 30 dies.";
            break;
        case 10: 
            document.getElementById("resposta").innerHTML = "El mes d'octubre té 31 dies.";
            break;
        case 11: 
            document.getElementById("resposta").innerHTML = "El mes de novembre té 30 dies.";
            break;
        case 12:
            document.getElementById("resposta").innerHTML = "El mes de desembre té 31 dies.";
            break;
    }

    //mostrem la resposta per pantalla
    document.getElementById("resposta").style.display = "block";

}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amgar el block de la resposta. */
function esborrar() {
    document.getElementById("quinMes").value = "";
    document.getElementById("resposta").style.display = "none";

}