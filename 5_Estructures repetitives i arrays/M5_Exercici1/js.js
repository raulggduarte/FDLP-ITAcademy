
function askForWords(numberOfWords, arrayOfWords) {
    for ( let i = 0 ; i < numberOfWords ; i++ ) {
        arrayOfWords[i] = prompt(`Escriu la paraula número ${i + 1}`)
    }
}

function insertAnswer (numberOfWords, arrayOfWords) {
    document.getElementById("numeroParaules").innerHTML = numberOfWords
    
    let fLen = arrayOfWords.length;
    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + arrayOfWords[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("llistaParaules").innerHTML = text

    /*Alternativa amb forEach
    let text = "<ul>";
    arrayOfWords.forEach(function completeText(element){
        text += "<li>" + element + "</li>";});
    text += "</ul>";
    document.getElementById("llistaParaules").innerHTML = text
    */
}

function showResponse() {
    document.getElementById("resposta").style.display = "block"
    document.getElementById("llistaParaules").style.display = "block"
    document.getElementById("botoEsborra").style.display = "block"
    document.getElementById("buttonCount").style.display = "none"
}

function esborrar() {
    document.getElementById("wordsNumber").value = ""
    document.getElementById("resposta").style.display = "none"
    document.getElementById("llistaParaules").style.display = "none"
    document.getElementById("botoEsborra").style.display = "none"
    document.getElementById("buttonCount").style.display = "block"
}

function insertWords() {

    const numberOfWords = parseInt(document.getElementById("wordsNumber").value)
    const arrayOfWords = new Array(numberOfWords);

    askForWords(numberOfWords, arrayOfWords)

    insertAnswer(numberOfWords, arrayOfWords)

    showResponse()
}