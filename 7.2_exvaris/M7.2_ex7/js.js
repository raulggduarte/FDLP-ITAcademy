/* L’usuari introdueix un any a per teclat
i el programa crida a una funció que indiqui l’any és de traspàs o no. */
//  MAIN FUNCTION **************************************************

function calculateLapYear() {
    try {
        const userYear = validateNum(parseFloat(document.getElementById("userYear").value));

        isLapYear(userYear) ? printResult(getMessage(userYear, ``)) : printResult(getMessage(userYear, `NO`)) ;

    } catch (error){
        alert(error);
        restart()
    }
}

//******************************************************************

function validateNum(num) {
    return ( (isNaN(num) || num < 0 || !Number.isInteger(num) ) ? invalidNumMessage() : num );
}

function invalidNumMessage() {
    throw Error("No has introduit un nombre vàlid.");
}

function isLapYear (userYear) {
    return (userYear % 400 == 0 || (userYear % 4 == 0 && userYear % 100 != 0));
}

function getMessage (userYear, result) {
    return `L'any ${userYear} ${result} és de traspàs.` 
}

function printResult(finalMessage) {
    document.getElementById("finalAnswer").innerHTML = finalMessage;
    document.getElementById("finalAnswer").style.display = "block";
    document.getElementById("restartButton").style.display = "block";

    document.getElementById("dataInput").style.display = "none";
}

function restart() {
    document.getElementById("userYear").value = "";
    document.getElementById("dataInput").style.display = "block";

    document.getElementById("finalAnswer").innerHTML = "";
    document.getElementById("finalAnswer").style.display = "none";
    document.getElementById("restartButton").style.display = "none";
}