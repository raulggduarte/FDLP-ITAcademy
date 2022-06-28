/* Un grup d’amics ha quedat per fer una fideuà, els ingredients principals
seran: fideus, gambes, i calamars. Saben que per cada quatre persones han
d’utilitzar mig quilo de fideus, 400 grams de calamars i 200 grams de gambes.
S’ha de fer un programa que demani per pantalla el preu per quilo de cada
ingredient i el nombre d’amics que seran per dinar. El programa ha de calcular
les quantitats necessàries de cada ingredient, el preu per persona i el preu
final de la fideuà */


const PASTA_PER_PERSON = 500 / 4;
const CALAMARI_PER_PERSON = 400 / 4;
const SHRIM_PER_PERSON = 200 / 4;

//MAIN FUNCTION************************************************************

function fideuaShoppingCalc() {
  try {
    const pastaPrice = validateNum(parseFloat(document.getElementById("pastaPrice").value));
    const calamariPrice = validateNum(parseFloat(document.getElementById("calamariPrice").value));
    const shrimPrice = validateNum(parseFloat(document.getElementById("shrimPrice").value));
    const peopleNumber = validateNum(parseFloat(document.getElementById("peopleNumber").value));

    const pastaQty = calculateQuantity(PASTA_PER_PERSON, peopleNumber);
    const calamariQty = calculateQuantity(CALAMARI_PER_PERSON, peopleNumber);
    const shrimQty = calculateQuantity(SHRIM_PER_PERSON, peopleNumber);

    const pastaCost = calculateIngredientCost(pastaPrice, pastaQty);
    const calamariCost = calculateIngredientCost(calamariPrice, calamariQty);
    const shrimCost = calculateIngredientCost(shrimPrice, shrimQty);

    const fideuaCost = calculateFideuaCost(pastaCost, calamariCost, shrimCost);
    const costPerPerson = calculateCostPerPerson(fideuaCost, peopleNumber);

    printResultHTML(getMessage(peopleNumber, pastaQty, calamariQty, shrimQty, costPerPerson, fideuaCost));

  } catch (error) {
    keepAskingMeasures(error);
  }
}

//*************************************************************************

const validateNum = (num) => num < 0 || isNaN(num) ? errorNumberMessage() : num;
const errorNumberMessage = () => {throw Error("No has introduit un nombre vàlid.")};
const keepAskingMeasures = message => {alert(message)};

const calculateQuantity = (ingredientPerPerson, peopleNumber) => ingredientPerPerson * peopleNumber;
const calculateIngredientCost = (ingredientPrice, ingredientQty) => (ingredientPrice * ingredientQty) / 1000;
const calculateFideuaCost = (pastaCost, calamariCost, shrimCost) => (pastaCost + calamariCost + shrimCost).toFixed(2);
const calculateCostPerPerson = (fideuaCost, peopleNumber) => (fideuaCost / peopleNumber).toFixed(2);

const getMessage = (peopleNumber, pastaQty, calamariQty, shrimQty, costPerPerson, fideuaCost) =>
  `Per fer la paella per a ${peopleNumber} persona/es necessitaràs:<br>
  <br>
  - ${pastaQty} grams de fideus<br>
  - ${calamariQty} grams de calamars<br>
  - ${shrimQty} grams de gambes<br>
  <br>
  Cadascú de vosaltres haurà de pagar ${costPerPerson}€ i el preu total de la fideuà serà de ${fideuaCost}€.`;

function printResultHTML(message) {
  document.getElementById("finalAnswer").innerHTML = message;
  document.getElementById("finalAnswer").style.display = "block";
  document.getElementById("restartButton").style.display = "block";

  document.getElementById("dataInput").style.display = "none";
}

function restart() {
  document.getElementById("dataInput").style.display = "block";

  document.getElementById("finalAnswer").innerHTML = "";
  document.getElementById("finalAnswer").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
  formatData();
}

function formatData() {
  document.getElementById("pastaPrice").value = ""
  document.getElementById("calamariPrice").value = ""
  document.getElementById("shrimPrice").value = ""
  document.getElementById("peopleNumber").value = "";
}