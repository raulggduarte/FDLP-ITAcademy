/* ADemana a l'usuari un número entre 0 i 99 i mostra'l escrit en lletres
(pots fer-ho en català o castellà).
Exemple: 56 (cinquanta-sis) o 56 (cincuenta y seis) */


/* Funció que recull el número, buscar l'equivalent en lletres i mostra la resposta.
S'inicia quan s'introdueix alguna dada a l'input de l'edat. */
function escriuNumero() {

    //declarem la variable on emmagatzemem el número introduit a l'input
    let numero = Number(document.getElementById("num").value);

    console.log(numero);
    console.log(typeof numero);
    /* Iniciem un SWITCH que mostra una resposta diferent en funció del número.
    Si no està comprès entre el 0 i el 99 mostra un missatge d'error. */
    switch (numero) {
            case 0:
                document.getElementById("resposta").innerHTML = "Aquest és el número zero.";
                break;
            case 1:
                document.getElementById("resposta").innerHTML = "Aquest és el número u.";
                break;
            case 2:
                document.getElementById("resposta").innerHTML = "Aquest és el número dos.";
                break;
            case 3:
                document.getElementById("resposta").innerHTML = "Aquest és el número tres.";
                break;
            case 4:
                document.getElementById("resposta").innerHTML = "Aquest és el número quatre.";
                break;
            case 5:
                document.getElementById("resposta").innerHTML = "Aquest és el número cinc.";
                break;
            case 6:
                document.getElementById("resposta").innerHTML = "Aquest és el número sis.";
                break;
            case 7:
                document.getElementById("resposta").innerHTML = "Aquest és el número set.";
                break;
            case 8:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuit.";
                break;
            case 9:
                document.getElementById("resposta").innerHTML = "Aquest és el número nou.";
                break;
            case 10:
                document.getElementById("resposta").innerHTML = "Aquest és el número deu.";
                break;
            case 11:
                document.getElementById("resposta").innerHTML = "Aquest és el número onze.";
                break;
            case 12:
                document.getElementById("resposta").innerHTML = "Aquest és el número dotze.";
                break;
            case 13:
                document.getElementById("resposta").innerHTML = "Aquest és el número tretze.";
                break;
            case 14:
                document.getElementById("resposta").innerHTML = "Aquest és el número catorze.";
                break;
            case 15:
                document.getElementById("resposta").innerHTML = "Aquest és el número quinze.";
                break;
            case 16:
                document.getElementById("resposta").innerHTML = "Aquest és el número setze.";
                break;
            case 17:
                document.getElementById("resposta").innerHTML = "Aquest és el número disset.";
                break;
            case 18:
                document.getElementById("resposta").innerHTML = "Aquest és el número divuit.";
                break;
            case 19:
                document.getElementById("resposta").innerHTML = "Aquest és el número dinou.";
                break;
            case 20:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint.";
                break;
            case 21:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-u.";
                break;
            case 22:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-dos.";
                break;
            case 23:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-tres.";
                break;
            case 24:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-quatre.";
                break;
            case 25:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-cinc.";
                break;
            case 26:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-sis.";
                break;
            case 27:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-set.";
                break;
            case 28:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-vuit.";
                break;
            case 29:
                document.getElementById("resposta").innerHTML = "Aquest és el número vint-i-nou.";
                break;
            case 30:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta.";
                break;
            case 31:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-u.";
                break;
            case 32:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-dos.";
                break;
            case 33:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-tres.";
                break;
            case 34:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-quatre.";
                break;
            case 35:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-cinc.";
                break;
            case 36:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-sis.";
                break;
            case 37:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-set.";
                break;
            case 38:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-vuit.";
                break;
            case 39:
                document.getElementById("resposta").innerHTML = "Aquest és el número trenta-nou.";
                break;
            case 40:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta.";
                break;
            case 41:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-u.";
                break;
            case 42:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-dos.";
                break;
            case 43:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-tres.";
                break;
            case 44:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-quatre.";
                break;
            case 45:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-cinc.";
                break;
            case 46:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-sis.";
                break;
            case 47:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-set.";
                break;
            case 48:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-vuit.";
                break;
            case 49:
                document.getElementById("resposta").innerHTML = "Aquest és el número quaranta-nou.";
                break;
            case 50:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta.";
                break;
            case 51:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-u.";
                break;
            case 52:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-dos.";
                break;
            case 53:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-tres.";
                break;
            case 54:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-quatre.";
                break;
            case 55:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-cinc.";
                break;
            case 56:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-sis.";
                break;
            case 57:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-set.";
                break;
            case 58:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-vuit.";
                break;
            case 59:
                document.getElementById("resposta").innerHTML = "Aquest és el número cincuanta-nou.";
                break;
            case 60:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta.";
                break;
            case 61:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-u.";
                break;
            case 62:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-dos.";
                break;
            case 63:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-tres.";
                break;
            case 64:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-quatre.";
                break;
            case 65:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-cinc.";
                break;
            case 66:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-sis.";
                break;
            case 67:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-set.";
                break;
            case 68:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-vuit.";
                break;
            case 69:
                document.getElementById("resposta").innerHTML = "Aquest és el número seixanta-nou.";
                break;
            case 70:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta.";
                break;
            case 71:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-u.";
                break;
            case 72:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-dos.";
                break;
            case 73:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-tres.";
                break;
            case 74:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-quatre.";
                break;
            case 75:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-cinc.";
                break;
            case 76:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-sis.";
                break;
            case 77:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-set.";
                break;
            case 78:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-vuit.";
                break;
            case 79:
                document.getElementById("resposta").innerHTML = "Aquest és el número setanta-nou.";
                break;
            case 80:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta.";
                break;
            case 81:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-u.";
                break;
            case 82:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-dos.";
                break;
            case 83:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-tres.";
                break;
            case 84:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-quatre.";
                break;
            case 85:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-cinc.";
                break;
            case 86:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-sis.";
                break;
            case 87:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-set.";
                break;
            case 88:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-vuit.";
                break;
            case 89:
                document.getElementById("resposta").innerHTML = "Aquest és el número vuitanta-nou.";
                break;
            case 90:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta.";
                break;
            case 91:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-u.";
                break;
            case 92:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-dos.";
                break;
            case 93:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-tres.";
                break;
            case 94:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-quatre.";
                break;
            case 95:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-cinc.";
                break;
            case 96:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-sis.";
                break;
            case 97:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-set.";
                break;
            case 98:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-vuit.";
                break;
            case 99:
                document.getElementById("resposta").innerHTML = "Aquest és el número noranta-nou.";
                break;
            default:
                document.getElementById("resposta").innerHTML = "No has introduit un número vàlid.";
                break;
        }

    //mostrem la resposta per pantalla i el botó d'esborrar
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";

}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amagar el block de la resposta i el botó d'esborrar. */
function esborrar() {
    document.getElementById("num").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";

}