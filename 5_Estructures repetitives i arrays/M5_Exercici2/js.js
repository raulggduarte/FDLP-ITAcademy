/*El programa demana dos números enters i llavors calcula la suma dels valors compresos 
entre els dos números, inclosos. 
Exemple: 4 i 6  --> resultat = 4 + 5 + 6 = 15*/

function checkOrder(initialNumber, finalNumber){
    if (finalNumber < initialNumber){
        initialNumber = initialNumber ^ finalNumber
        finalNumber = initialNumber ^ finalNumber
        initialNumber = initialNumber ^ finalNumber
    } 
    return[initialNumber, finalNumber]
}

function errorMessage() {
    document.getElementById("answer").innerHTML = "T'hem demanat números enters!"
    document.getElementById("totalAmount").innerHTML = ""
    showResponse()
    throw "exit";
}

function doAmount(initialNumber, finalNumber) {
    let amount = initialNumber
    for ( let i = initialNumber+1 ; i <= finalNumber ; i++) {
        amount = amount + i
    }
    getAnswer(initialNumber, finalNumber, amount)
}

function getAnswer(initialNumber, finalNumber, amount) {
    document.getElementById("answer").innerHTML = `La suma compresa entre els números ${initialNumber} i ${finalNumber} (aquests inclosos) és:`
    document.getElementById("totalAmount").innerHTML = amount
}

function showResponse() {
    document.getElementById("answer").style.display = "block"
    document.getElementById("totalAmount").style.display = "block"
    document.getElementById("deleteButton").style.display = "block"
    document.getElementById("initialNumber").value = ""
    document.getElementById("finalNumber").value = ""
    document.getElementById("initialNumber").style.display = "none"
    document.getElementById("finalNumber").style.display = "none"
    document.getElementById("buttonAmount").style.display = "none"
    document.getElementById("labelInitial").style.display = "none"
    document.getElementById("labelFinal").style.display = "none"
}

function esborrar() {
    document.getElementById("initialNumber").value = ""
    document.getElementById("finalNumber").value = ""
    document.getElementById("labelInitial").style.display = "inline"
    document.getElementById("labelFinal").style.display = "inline"
    document.getElementById("initialNumber").style.display = "inline"
    document.getElementById("finalNumber").style.display = "inline"
    document.getElementById("answer").style.display = "none"
    document.getElementById("totalAmount").style.display = "none"
    document.getElementById("deleteButton").style.display = "none"
    document.getElementById("buttonAmount").style.display = "block"
}

function amountNumbers() {
    const initialNumber = parseFloat(document.getElementById("initialNumber").value)
    const finalNumber = parseFloat(document.getElementById("finalNumber").value)
    let orderedNumbers

    console.log(initialNumber, finalNumber)
    Number.isInteger(initialNumber) && Number.isInteger(finalNumber) ? (orderedNumbers = checkOrder(initialNumber, finalNumber)) : errorMessage()

    doAmount(orderedNumbers[0], orderedNumbers[1])

    console.log(orderedNumbers)

    showResponse()
}