/*Crea un programa on l’usuari introdueix tres notes i el programa calculi la mitja.
Si la mitja és inferior a 5 ha de mostrar el següent missatge per pantalla:
“No has superat el curs. Has de recuperar”, si la mitja està entre 5 i 7
ha de mostrar: “Enhorabona! Has aprovat però hauries de seguir practicant”,
si la mitja és superior a 7 ha de mostrar: ”Enhorabona! Has superat el curs!
Passa ja al següent nivell!*/

const MAX_GRADE = 10
const MIN_GRADE = 0
const MIN_APROVE = 5
const MIN_EXCELENT = 7

//  MAIN FUNCTION **************************************************

function startCalulation() {
    const grade1 = validateNum(retrieveGrade('gradeOne'))
    const grade2 = validateNum(retrieveGrade('gradeTwo'))
    const grade3 = validateNum(retrieveGrade('gradeThree'))
    
    const average = calculateAverage(grade1, grade2, grade3)

    const resultCoursePass = checkCoursePass(average);

    const message = `La teva nota mitjana és de ${average}.</br> ${resultCoursePass}`
    
    showAnswer(message);
}

//******************************************************************

function retrieveGrade (id) {
    return parseFloat(document.getElementById(id).value);
}

function validateNum(num) {
    return (isNaN(num) || (num < MIN_GRADE) || (num > MAX_GRADE) ?  errorMessage() : num)
}

function errorMessage() {
    document.getElementById("answer").innerHTML = "Has introduit algun nombre incorrecte.";
    document.getElementById("answer").style.display = "block";
    throw ('exit');
}

function calculateAverage(num1, num2, num3) {
    return (((num1 + num2 + num3) / 3).toFixed(2));
}

function checkCoursePass(average) {

    if (average < MIN_APROVE) return `Ho sentim, no has superat el curs. Has de recuperar.`;

    if (average >= MIN_APROVE && average <= MIN_EXCELENT) return `Enhorabona! Has aprovat però hauries de seguir practicant.`;

    if (average > MIN_EXCELENT) return `Enhorabona! Has superat el curs! Passa ja al següent nivell!`;
}

function showAnswer(result) {
    document.getElementById("answer").innerHTML = result
    document.getElementById("answer").style.display = "block"
}