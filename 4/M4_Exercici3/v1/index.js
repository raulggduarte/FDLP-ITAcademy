/* Una escola d’idiomes concedeix beques a futurs estudiants si compleixen una 
sèrie de requisits.
A l'alumne se li assigna una beca si és major d’edat i si té un títol universitari. 
O també se li assigna una beca si l’alumne està a l’atur. 
El programa demana les tres dades per pantalla i en finalitzar mostra si l’alumne
té la beca o no. */


/* Funció que calcula la resolució de la beca i mostra la resposta.
S'inicia quan s'apreta el botó "Tramitar sol·licitut". */
function analisiBeca() {

    //declarem les variables on emmagatzemem les valors introduits als inputs
    let edat = document.getElementById("quinaEdat").value;
    let titol = document.getElementById("teTitol").value;
    let atur = document.getElementById("estaAtur").value;

    /*iniciem un if que mostra una resposta diferent en funció dels valors introduits.
    Només mostrarà la primera resposta si el valor "edat" és igual o major de 18 i
    si un dels valors "titol" o "atur" son sí.*/
    if ((edat >= 18) && (titol == "si" || atur == "si")) {
        document.getElementById("resultatBeca").innerHTML = "acceptada";
    } else {
        document.getElementById("resultatBeca").innerHTML = "rebutjada";
    }

    //mostrem el paràgraf de la resposta i el botó d'esborrar per pantalla
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborrar").style.display = "block";
}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amgar el block de la resposta i el botó d'esborrar. */
function esborrar() {
    document.getElementById("quinaEdat").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborrar").style.display = "none";

}