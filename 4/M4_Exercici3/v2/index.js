
function analysisGrant (edat, titol, atur) {
    return ((edat >= 18) && (titol == "si" || atur == "si")) ? "acceptada" : "rebutjada";
}

function hideHtmlElements () {
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborrar").style.display = "block";
}

function buttonHideElements() {
    document.getElementById("quinaEdat").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborrar").style.display = "none";
}

function analisiBeca() {

    let edat = document.getElementById("quinaEdat").value;
    let titol = document.getElementById("teTitol").value;
    let atur = document.getElementById("estaAtur").value;

    let resultGrant = analysisGrant (edat, titol, atur);
    
    document.getElementById("resultatBeca").innerHTML = resultGrant;

    hideHtmlElements();
}
