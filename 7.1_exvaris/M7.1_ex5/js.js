/*Mostra per pantalla els nombres parells compresos entre el 100 i el 0
en ordre descendent.*/

//  MAIN FUNCTION **************************************************

function even100to0() {

    const finalNumbers = getEvenNumbers()

    const finalMessage = getFinalMessage(finalNumbers)

    showAnswer(finalMessage);
}

//******************************************************************

function getEvenNumbers() {
    const numersArray = [];
    let j = 0
    
    for (let i = 100; i > 0; i--) {
        if (i % 2 == 0) {
            numersArray[j] = i;
            j++
        }
    }

    return numersArray;
}

function getFinalMessage(finalNumbers) {
    let text = `Els números de 100 a 0 que són parells són:</br>`
    const lengthNumbers = finalNumbers.length
    
    for (i = 0; i < lengthNumbers; i++) {
        text += `${finalNumbers[i]}</br>`
    }
    
    return text;
}

function showAnswer(finalMessage) {
    document.getElementById("calculateButton").style.display = "none"

    document.getElementById("finalAnswer").innerHTML = finalMessage
    document.getElementById("finalAnswer").style.display = "block"
    document.getElementById("restartButton").style.display = "block"
}

function restart() {
    document.getElementById("calculateButton").style.display = "block"

    document.getElementById("finalAnswer").innerHTML = ""
    document.getElementById("finalAnswer").style.display = "none"
    document.getElementById("restartButton").style.display = "none"
}