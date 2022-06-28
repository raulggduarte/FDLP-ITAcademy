/* Fer un programa que demani dos números i un operador(+,-,*,/).
Al final, el programa ha d'imprimir per pantalla el resultat de
fer l’operació que contingui la variable operador. */

function calculaOperacio() {

    let operant1 = parseFloat(document.getElementById("operant1").value);
    let operador = document.getElementById("operador").value;
    let operant2 = parseFloat(document.getElementById("operant2").value);

    let suma = operant1 + operant2;
    let resta = operant1 - operant2;
    let multip = operant1 * operant2;
    let divisio = operant1 / operant2;
    
    let resultMessage
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

    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
}

function esborrar() {
    document.getElementById("operant1").value = "";
    document.getElementById("operador").value = "";
    document.getElementById("operant2").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";

}