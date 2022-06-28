/* Un grup d’amics ha quedat per fer una fideuà, els ingredients principals
seran: fideus, gambes, i calamars. Saben que per cada quatre persones han
d’utilitzar mig quilo de fideus, 400 grams de calamars i 200 grams de gambes.
S’ha de fer un programa que demani per pantalla el preu per quilo de cada
ingredient i el nombre d’amics que seran per dinar. El programa ha de calcular
les quantitats necessàries de cada ingredient, el preu per persona i el preu
final de la fideuà */

const INGREDIENTS = [
	{
		name: 'pasta',
		tag: 'pastaPrice',
		GRAMPS_PER_PERSON: 500 / 4,
		todaysQty: undefined,
		todaysPrice: undefined,
		todaysCost: undefined,
		inCat: 'fideus'
	},
	{
		name: 'calamari',
		tag: 'calamariPrice',
		GRAMPS_PER_PERSON: 400 / 4,
		todaysQty: undefined,
		todaysPrice: undefined,
		todaysCost: undefined,
		inCat: 'calamars'
	},
	{
		name: 'shrim',
		tag: 'shrimPrice',
		GRAMPS_PER_PERSON: 200 / 4,
		todaysQty: undefined,
		todaysPrice: undefined,
		todaysCost: undefined,
		inCat: 'gambes'
	}
];

//MAIN FUNCTION************************************************************

function fideuaShoppingCalc() {
	try {
		const peopleNumber = validateNum(
			parseFloat(document.getElementById('peopleNumber').value)
		);

		fillDataIngredients(peopleNumber);

		const fideuaCost = calculateFideuaCost(INGREDIENTS);

		const costPerPerson = calculateCostPerPerson(fideuaCost, peopleNumber);

		printResultHTML(getMessage(peopleNumber, INGREDIENTS, costPerPerson, fideuaCost));
	} catch (error) {
		keepAskingMeasures(error);
	}
}

//*************************************************************************

const validateNum = (num) => (num < 0 || isNaN(num) ? errorNumberMessage() : num);

const errorNumberMessage = () => {
	throw Error('No has introduit un nombre vàlid.');
};

const keepAskingMeasures = (message) => {
	alert(message);
};

const fillDataIngredients = (peopleNumber) => {
	INGREDIENTS.forEach((ingredient) => {
		ingredient.todaysPrice = validateNum(
			parseFloat(document.getElementById(ingredient.tag).value)
		);
		ingredient.todaysQty = calculateQuantity(
			ingredient.GRAMPS_PER_PERSON,
			peopleNumber
		);
		ingredient.todaysCost = calculateIngredientCost(
			ingredient.todaysPrice,
			ingredient.todaysQty
		);
	});
};

const calculateQuantity = (gramsPerPerson, peopleNumber) => gramsPerPerson * peopleNumber;

const calculateIngredientCost = (ingredientPrice, ingredientQty) =>
	ingredientPrice * ingredientQty / 1000;

const calculateFideuaCost = (INGREDIENTS) => {
	const total = INGREDIENTS.map((ingredient) => ingredient.todaysCost).reduce(
		(prev, curr) => prev + curr, 0
	);

	return total.toFixed(2);
};

const calculateCostPerPerson = (fideuaCost, peopleNumber) =>
	(fideuaCost / peopleNumber).toFixed(2);

function getMessage(peopleNumber, INGREDIENTS, costPerPerson, fideuaCost) {
	let text = `Per fer la paella per a ${peopleNumber} persona/es necessitareu:<br><br>`;

	INGREDIENTS.forEach(
		(ingredient) =>
			(text += `- ${(ingredient.todaysQty / 1000).toFixed(2)} kg de ${ingredient.inCat}<br>`)
	);

	text += `<br>Cadascú de vosaltres haurà de pagar <b>${costPerPerson}€</b> i el preu 
  total de la fideuà serà de <b>${fideuaCost}€</b>.`;

	return text;
}

function printResultHTML(message) {
	document.getElementById('finalAnswer').innerHTML = message;
	document.getElementById('finalAnswer').style.display = 'block';
	document.getElementById('restartButton').style.display = 'block';

	document.getElementById('dataInput').style.display = 'none';
}

function restart() {
	document.getElementById('dataInput').style.display = 'block';

	document.getElementById('finalAnswer').innerHTML = '';
	document.getElementById('finalAnswer').style.display = 'none';
	document.getElementById('restartButton').style.display = 'none';
	formatData();
}

function formatData() {
	document.getElementById('pastaPrice').value = '';
	document.getElementById('calamariPrice').value = '';
	document.getElementById('shrimPrice').value = '';
	document.getElementById('peopleNumber').value = '';
}
