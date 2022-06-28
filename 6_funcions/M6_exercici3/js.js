/*Fes un programa amb 3 funcions. El programa ha de cridar a les 3 funcions e interactuar 
amb ells de la següent manera:
a. Crea una funció sense paràmetres i sense retorn que imprimeixi per consola “sóc una 
funció”.
Sortida: sóc una funció
b. Crea una funció que rebi un array de números com a paràmetre, imprimeixi el número 
més gran per consola i retorni l’índex de l’array on es troba el número més petit. Crea 
un array de 5 números i crida a la funció que acabes de crear per imprimir el número més 
petit de l’array.
Sortida (amb aquests números dintre de l’array “8, 12, 5, 22, 6”:
Número més gran 22 (això ho imprimeix el propi mètode)
Número més petit 5  (això ho imprimeix on s'ha fet la crida a la funció) 
c. Crea una funció que rebi dos números com a paràmetres i retorni un array amb tots els 
números compresos entre ells.
Crida a la funció que acabes de crear amb els dos números que vulguis i imprimeix l’array 
que et retorna.
Sortida (amb el núm 2 i 10):
Els números compresos entre 2 i 10 són: 3, 4, 5, 6, 7, 8, 9*/

               
window.onload = startFunction();

function startFunction(){
  console.log("sóc una funció");
}

//----------------------------------------------------
const array = [2,3,1,5,4];

const indexSmaller = workWithArray(array)

function workWithArray(array) {
  console.log(`El número més gran és ${Math.max(...array)}`);

  return array.indexOf(Math.min(...array));
}

document.getElementById("answer1").innerHTML = `El número més petit està a la posició ${indexSmaller}.`;
document.getElementById("answer1").style.display = "block";

//-----------------------------------------------------

const num1 = 3;
const num2 = 10;
const newArray = createArray (num1, num2);

document.getElementById("answer2").innerHTML = `Els números compresos entre ${num1} i ${num2} són ${newArray}.`;
document.getElementById("answer2").style.display = "block";

function createArray(num1, num2){
  arrayLength = num2 - num1;
  numArray = [];
  for (let i = 0 ; i < arrayLength-1 ; i++ ) {
    num1 ++;
    numArray.push(num1);
  }
  return numArray;
}