/* Fer un programa que demani dos números i un operador(+,-,*,/).
Al final, el programa ha d'imprimir per pantalla el resultat de
fer l’operació que contingui la variable operador. */


/* Funció que calcula l'operació matemàtica i mostra la resposta per pantalla.
S'inicia quan es fa clic al botó Calcular. */
function calculaOperacio() {

    /*declarem tres variables on emmagatzemem els dos operants i l'¡'operador 
    introduits a l'input. Els operants els passem a número decimal per a fer les
    operacions.*/
    let operant1 = parseFloat(document.getElementById("operant1").value);
    let operador = document.getElementById("operador").value;
    let operant2 = parseFloat(document.getElementById("operant2").value);

    /*declarem quatre variables i les definim com a les quatre operacions possbles*/
    let suma = operant1 + operant2;
    let resta = operant1 - operant2;
    let multip = operant1 * operant2;
    let divisio = operant1 / operant2;
    
    /*iniciem un switch que mostra una resposta diferent en funció de l'operador introduit.
    Si no s'introdueix un dels quatre indicats, mostra un missatge d'error*/
    switch (operador) {
        case "+": 
            document.getElementById("resposta").innerHTML = `El resultat de l'operació és ${suma}.`;
            break;
        case "-": 
            document.getElementById("resposta").innerHTML = `El resultat de l'operació és ${resta}.`;
            break;
        case "*": 
            document.getElementById("resposta").innerHTML = `El resultat de l'operació és ${multip}.`;
            break;
        case "/": 
            document.getElementById("resposta").innerHTML = `El resultat de l'operació és ${divisio}.`;
            break;
        default:
            document.getElementById("resposta").innerHTML = `No has introduit un operador vàlid.`;
            break;
    }

    //mostrem la resposta per pantalla
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amagar el block de la resposta i el botó d'esborrar. */
function esborrar() {
    document.getElementById("operant1").value = "";
    document.getElementById("operador").value = "";
    document.getElementById("operant2").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";

}