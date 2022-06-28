/*Modifica l’exercici 1 del mòdul 3. Un cop introduïdes les dades, 
el programa ha de mostrar el següent per pantalla:
- Si l’usuari té 18 anys o més: “Nom Cognom, ets MAJOR d’edat” 
- Si l’usuari és menor de 18 anys: “Nom Cognom, ets MENOR d’edat”.*/

//declara i demana les variables
const nom = prompt ('Quin és el teu nom?', 'Nom');
const cognom = prompt ('I el teu cognom)', 'Cognom');
const edat = Number(prompt ('Indica la teva edat', 99));

//declarem una variable sense iniciar
let missatgeEdat;


/*utilitzem un if per mostrar per pantalla un missatge 
o un altre en funció de l'edat indicada*/
if  (edat >= 18) {
    missatgeEdat = `${nom} ${cognom} ets MAJOR d'edat.`;
} else {
    missatgeEdat = `${nom} ${cognom} ets MENOR d'edat.`;
}

document.getElementById("missatge").innerHTML = missatgeEdat;
