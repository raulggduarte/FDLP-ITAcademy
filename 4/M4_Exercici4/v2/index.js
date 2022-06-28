//objecte on relacionem cada número de mes amb un missatge
const months = {
    1: "El mes de gener té 31 dies.",
    2: "El mes de febrer té 28 dies, si és any de traspàs, en té 29.",
    3: "El mes de març té 31 dies.",
    4: "El mes d'abril té 30 dies.",
    5: "El mes de maig té 31 dies.",
    6: "El mes de juny té 30 dies.",
    7: "El mes de juliol té 31 dies.",
    8: "El mes de d'agost té 31 dies.",
    9: "El mes de setembre té 30 dies.",
    10: "El mes d'octubre té 31 dies.",
    11: "El mes de novembre té 30 dies.",
    12: "El mes de desembre té 31 dies."
}

//funció que crida un element de l'objecte i retorna el seu valor
function getMonth(type) {
    return months[type];
}

//funció que amaga certs elements HTMl
function hideElements() {
    document.getElementById("quinMes").value = "";
    document.getElementById("resposta").style.display = "none";
}

//funció principal
function calculaDiesMes() {

    //variable on emmagatzemem l'input
    const mes = Number(document.getElementById("quinMes").value);

    //variable on emmagatzemem el resultat de la funció que atribueix al mes un missatge
    const monthMessage = getMonth(mes);

    //introduim la resposta a l'element HTML <p>
    document.getElementById("resposta").innerHTML = monthMessage;

    //mostrem la resposta per pantalla
    document.getElementById("resposta").style.display = "block";
}

