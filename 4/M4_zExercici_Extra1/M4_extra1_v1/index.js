/* Fes un programa que pregunti a l'usuari dos nombres enters al qual anomenaràs dividend
 i divisor respectivament.
El divisor haurà d'estar comprès entre 2 i 7.
En cas contrari, el programa haurà de mostrar un missatge d'error.

Si el divisor és correcte (2-7) mostra en pantalla si el dividend és múltiple del divisor,
o no. */


/* Funció que calcula si el dividend és múltiple del divisor i mostra la resposta per pantalla.
S'inicia quan es fa clic al botó "El dividend és...". */
function calculaMultiple() {

    /*declarem dues variables on emmagatzemem el dividend i el divisor 
    introduits als inputs. Passem els valors a números enters.*/
    let dividend = parseInt(document.getElementById("numDividend").value);
    let divisor = parseInt(document.getElementById("numDivisor").value);

    /*També declarem una variable on es calcula si la divisó produeix residu, 
    si aquetsa és igual a zero, dividend i divisor són múltiples.*/
    let residu = dividend % divisor;

    /* Iniciem un IF per comprovar si s'ha introduit un valor al divident, després si
    el valor del divisor està comprès entre 2 i 7 i, si tot això és correcte, mostra un missatge
    o un altre en funció del resultat de la divisió (ja emmagatxemat a la variable "residu"). */
    if (Number.isInteger(dividend)){
        if (divisor >=2 && divisor <= 7) {
            if (residu === 0) {
                document.getElementById("resposta").innerHTML = "El dividend és múltiple del divisor.";
            } else {
                document.getElementById("resposta").innerHTML = "El dividend NO és múltiple del divisor.";
            }
        } else {
            document.getElementById("resposta").innerHTML = "No és un divisor comprès entre 2 i 7.";
        }
    } else {
        document.getElementById("resposta").innerHTML = "Introdueix un dividend.";
    }
    
    //mostrem la resposta per pantalla
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
}

/* Aquesta funció esborra les dades a l'apretar el botó. 
També torna a amagar el block de la resposta i el botó d'esborrar. */
function esborrar() {
    document.getElementById("numDividend").value = "";
    document.getElementById("numDivisor").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";
}