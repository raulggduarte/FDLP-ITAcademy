/*Un professor vol calcular les mitges de les notes de tota la classe.
Crea una aplicació on l'usuari introduirà un número per pantalla
(el número correspon al número de notes que vol introduir)
i el programa li demanarà que introdueixi les notes de tots els alumnes.
Un cop les notes han sigut introduides, el programa retorna el següent:
Si la nota mitjana és menor que 5: "La nota mitjana de la classe està suspesa.
Els alumnes haurien de preguntar els seus dubtes i treballar més".
Si la nota és inferior a 7: "La nota mitjana de la classe és bona,
però els alumnes haurien de millorar el treball personal".
Per la resta de casos, el missatge ha de ser: "Enhorabona! 
La nota mitjana de la classe es correspon amb l'esforç realitzat".
*Les notes han d'estar compreses entre 0 i 10.*/

const MAX_GRADE = 10
const MIN_GRADE = 0
const MIN_APROVE = 5
const MIN_EXCELENT = 7
const MIN_NUM_GRADES = 1

//  MAIN FUNCTION **************************************************

function enterGrades() {
    const studentsNumber = validateStudentsNum(parseFloat(document.getElementById("studentsNumber").value));

    const gradesList = retrieveGrades(studentsNumber)

    const average = calculateAverage(gradesList)

    const resultCoursePass = checkCoursePass(average);

    showAnswer(resultCoursePass);
}

//******************************************************************


function validateStudentsNum(num) {
    return ((isNaN(num) || !Number.isInteger(num) || num < MIN_NUM_GRADES) ? errorGradeNumberMessage() : num)
}

function errorGradeNumberMessage() {
    alert("No has introduit un nombre de notes vàlid.");
    document.getElementById("studentsNumber").value = ""
    throw ('exit');
}

function retrieveGrades(studentsNumber) {
    const grades = []

    do {
        const newGrade = (prompt('Escriu una nota:'));
        validateGrade(newGrade) ? grades.push(newGrade) : wrongGradeMessage();
    } while (grades.length < studentsNumber);

    alert(`Ja has introduit el total de ${studentsNumber} nota/es.`)

    return grades
}

function validateGrade(num) {
    return (isNaN(num) || (num < MIN_GRADE) || (num > MAX_GRADE) ? false : true)
}

function wrongGradeMessage() {
    alert("No has introduit una nota vàlida.");
}

function calculateAverage(gradesList) {
    return ((sum = gradesList.reduce((a, b) => Number(a) + Number(b))) / gradesList.length).toFixed(2);
}

function checkCoursePass(average) {

    if (average < MIN_APROVE) return `La nota mitjana de la classe (${average}) està suspesa. 
    Els alumnes haurien de preguntar els seus dubtes i treballar més.`;

    if (average >= MIN_APROVE && average <= MIN_EXCELENT) return `La nota mitjana 
    de la classe (${average}) és bona, però els alumnes haurien de millorar el treball personal.`;

    if (average > MIN_EXCELENT) return `Enhorabona! La nota mitjana de la classe 
    (${average}) es correspon amb l'esforç realitzat`;
}

function showAnswer(resultCoursePass) {
    document.getElementById("inputLabel").style.display = "none"
    document.getElementById("studentsNumber").style.display = "none"
    document.getElementById("dataButton").style.display = "none"

    document.getElementById("finalAnswer").innerHTML = resultCoursePass
    document.getElementById("finalAnswer").style.display = "block"
    document.getElementById("restartButton").style.display = "block"
}

function restart() {
    document.getElementById("inputLabel").style.display = "inline"
    document.getElementById("studentsNumber").style.display = "inline"
    document.getElementById("studentsNumber").value = ""
    document.getElementById("dataButton").style.display = "block"

    document.getElementById("finalAnswer").innerHTML = ""
    document.getElementById("finalAnswer").style.display = "none"
    document.getElementById("restartButton").style.display = "none"
}