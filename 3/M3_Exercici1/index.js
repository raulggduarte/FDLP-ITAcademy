/*Fer un programa que li demani a l’usuari mitjançant el prompt:
El nom, el cognom i l’edat de l’usuari. Un cop l’usuari hagi acabat 
d’introduir les dades, aquestes s’han de mostrar per consola, 
amb un popup (alert) i mitjançant getElementById().*/


//declara i demana les variables
const nom = prompt ('Quin és el teu nom?', 'Nom');
const cognom = prompt ('I el teu cognom)', 'Cognom');
const edat = prompt ('Indica la teva edat', 99);

//mostra les dades introduides a la consola
console.log(`Les teves dades són les següents\nNom: ${nom}\nCognom: ${cognom}\nEdat: ${edat}`);

//mostra les dades introduides amb una finestra emergent
alert(`Les teves dades són les següents\nNom: ${nom}\nCognom: ${cognom}\nEdat: ${edat}`);

//funció que mostra les dades dins l'html a partir d'un botó i amaga el botó
function recuperaDades () {
    document.getElementById("name").innerHTML = `Nom: ${nom}`;
    document.getElementById("surname").innerHTML = `Cognom: ${cognom}`;
    document.getElementById("age").innerHTML = `Edat: ${edat}`;
    document.getElementById("hideButton").style.display = "none";
}