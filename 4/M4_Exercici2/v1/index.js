/* Aquest programa li demana l’age a l’usuari, en funció d’aquesta, 
mostrarem un dels següents missatges per pantalla:
-Si té 5 anys o menys: preescolar
-Si té entre 6 i 11 anys: primària
-Si té entre 12 i 15: ESO
-Si té entre 16 i 17: Batxillerat
-Si és major d'age: FP o Universitat */

/* Funció que calcula l'estudi i mostra la answer.
S'inicia quan s'introdueix alguna dada a l'input de l'age. */
function courseCalculate() {

    //insereix part de codi a l'HTML per tenir una answer neta a l'inici de la funció.
    document.getElementById("answer").innerHTML = `Estàs cursant <span id="wichStudy"></span>.`;

    //declarem la variable on emmagatzemem l'age intyroduida a l'input
    let age = Number(document.getElementById("age").value);

    //iniciem un if que mostra una answer diferent en funció de l'age introduida
    if (age >= 0 && age <= 5) {
        document.getElementById("wichStudy").innerHTML = "preescolar";
    } else if (age >= 6 && age <= 11) {
        document.getElementById("wichStudy").innerHTML = "primària";
    } else if (age >= 12 && age <= 15) {
        document.getElementById("wichStudy").innerHTML = "ESO";
    } else if (age >= 16 && age <= 17) {
        document.getElementById("wichStudy").innerHTML = "Batxillerat";
    } else if (age >= 18) {
        document.getElementById("wichStudy").innerHTML = "FP o Universitat";
    } else {
        document.getElementById("answer").innerHTML = "No és una edat vàlida.";
    }

    //mostrem la answer per pantalla
    document.getElementById("answer").style.display = "block";
    document.getElementById("deleteButton").style.display = "block";
}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amgar el block de la answer. */
function esborrar() {
    document.getElementById("age").value = "";
    document.getElementById("answer").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";

}