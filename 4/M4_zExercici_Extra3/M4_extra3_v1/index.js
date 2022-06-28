/* Aquesta línia de codi: 
   let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
Retorna un nombre aleatori entre min inclòs (1) i màx exclòs (4).
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Escriu un programa que et permet jugar pedra, paper o tisora ​​amb l'ordinador.
Per a això l'ordinador haurà de generar un nombre aleatori entre 1 i 3 que representi pedra,
paper o tisora ​​respectivament, i l'usuari haurà de respondre al seu torn amb un un nombre 
entre l'1 i el 3 després de mostrar la següent pantalla:
    Juguem a pedra, paper o tisora:
        1. Pedra    
        2. Paper
        3. Tisora
    Tria (1-3):
Si l'usuari indica algun nombre diferent del sol·licitat, haurà d'aparèixer el següent missatge:
    «Entenc que no vols jugar. Adéu»
En cas contrari, indicar el guanyador de la següent manera:
    Jo xxx i tu xxx. He guanyat! o Has guanyat!
segons sigui el cas.
Exemple: «Jo paper i tu tisora. Has guanyat!»
**El paper guanya la pedra perquè l’embolica; les tisores guanyen el paper perquè el tallen,
i la pedra guanya les tisores perquè les espatllen. */


/* Establim les variables del comptador i volquem el resultat al'html. */
let counterUsuari = 0;
let counterMàquina = 0;

document.getElementById("puntUsuari").innerHTML = counterUsuari;
document.getElementById("puntMaquina").innerHTML = counterMàquina;

/*Funció que recull l'opció de joc de l'ususari, estableix la opció de joc de la màquina
de forma aleatòria, compara el resultat i mostra la resposta per pantalla.
S'inicia quan es fa clic al botó "Juguem!".*/
function jocPedra() {

    /*Declarem una variable on emmagatzemem la tirada de l'usuari
    introduïda a l'input. Passem els valor a número enter.*/
    let tiradaUsuari = Number(document.getElementById("numJoc").value);

    /*També declarem una variable on es calcula de forma aleatòria la tirada
    de la màquina i s'emmagatzema .*/
    let tiradaMaquina = Math.floor(Math.random() * (4 - 1)) + 1;

    /* Iniciem un SWITCH amb un altre SWITCH impricat que dona una resposta en funció de la combinació
    de tirades de l'usuari i la màquina. També actualitza el comptador de resultat. */
    switch (tiradaUsuari){
        case 1:
            switch (tiradaMaquina) {
                case 1:
                    document.getElementById("resposta").innerHTML = "Jo pedra i tu pedra. Empat!";
                    break;
                case 2:
                    document.getElementById("resposta").innerHTML = "Jo paper i tu pedra. He guanyat!";
                    counterMàquina = ++counterMàquina;
                    document.getElementById("puntMaquina").innerHTML = counterMàquina;
                    break;
                case 3:
                    document.getElementById("resposta").innerHTML = "Jo tisores i tu pedra. Has guanyat!";
                    counterUsuari = ++counterUsuari;
                    document.getElementById("puntUsuari").innerHTML = counterUsuari;
                    break;
            }
            break;
        case 2:
            switch (tiradaMaquina) {
                case 1:
                    document.getElementById("resposta").innerHTML = "Jo pedra i tu paper. Has guanyat!";
                    counterUsuari = ++counterUsuari;
                    document.getElementById("puntUsuari").innerHTML = counterUsuari;
                    break;
                case 2:
                    document.getElementById("resposta").innerHTML = "Jo paper i tu paper. Empat!";
                    break;
                case 3:
                    document.getElementById("resposta").innerHTML = "Jo tisores i tu paper. He guanyat!";
                    counterMàquina = ++counterMàquina;
                    document.getElementById("puntMaquina").innerHTML = counterMàquina;
                    break;
            }
            break;
        case 3:
            switch (tiradaMaquina) {
                case 1:
                    document.getElementById("resposta").innerHTML = "Jo pedra i tu tisores. He guanyat!";
                    counterMàquina = ++counterMàquina;
                    document.getElementById("puntMaquina").innerHTML = counterMàquina;
                    break;
                case 2:
                    document.getElementById("resposta").innerHTML = "Jo paper i tu tisores. Has guanyat!";
                    counterUsuari = ++counterUsuari;
                    document.getElementById("puntUsuari").innerHTML = counterUsuari;
                    break;
                case 3:
                    document.getElementById("resposta").innerHTML = "Jo tisores i tu tisores. Empat!";
                    break;
            }
            break;
        default:
            document.getElementById("resposta").innerHTML = "Entenc que no vols jugar. Adéu.";
    }
    
    //mostrem la resposta i el comptador per pantalla
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
    document.getElementById("puntuacio").style.display = "block";

}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amagar el block de la resposta i el botó d'esborrar.
També reseteja el comptador. */
function esborrar() {
    document.getElementById("numJoc").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";
    document.getElementById("puntuacio").style.display = "none";
    counterMàquina = 0;
    counterUsuari = 0;
    document.getElementById("puntUsuari").innerHTML = counterUsuari;
    document.getElementById("puntMaquina").innerHTML = counterMàquina;
}