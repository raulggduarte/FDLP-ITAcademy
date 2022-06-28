/*Calculadora arcaica. El programa demana a l’usuari que introdueixi dos números
i l’operació que desitja realitzar. 
Cada operació (suma, resta, multiplicació, divisió i mòdul) estarà programada
en una funció diferent.*/

function calculate () {
    const userNumber1 = parseFloat(document.getElementById("userNumber1").value)
    const userNumber2 = parseFloat(document.getElementById("userNumber2").value)
    const operator = (document.getElementById("operation").value)
    let areValidNumbers = false
    let isValidOperator = false
    let result

    areValidNumbers = checkNumbers (userNumber1, userNumber2)
    areValidNumbers ? (isValidOperator = checkOperator(operator)) : messageWrongNumbers()
    isValidOperator ? (result = makeCalculations(userNumber1, userNumber2, operator)) : messageWrongOperator ()
    
    getAnswer (result) 

    showAnswer ()
}

function checkNumbers (num1, num2) {
    console.log(num1)
    console.log(num2)
    return (!isNaN(num1) && !isNaN(num2))
}

function checkOperator(oper) {
    return (oper == "+" || oper == "-" || oper == "*" || oper == "/" || oper == "%")
}

function messageWrongNumbers() {
    document.getElementById("answer").innerHTML = "Algun dels nombres introduits no és vàlid."
    showAnswer ()
}

function makeCalculations (num1, num2, oper) {
    let result
    if (oper == "+") result = sum(num1, num2)
    if (oper == "-") result = rem(num1, num2)
    if (oper == "*") result = mult(num1, num2)
    if (oper == "/") result = div(num1, num2)
    if (oper == "%") result = mod(num1, num2)
    return result
}

function messageWrongOperator() {
    document.getElementById("answer").innerHTML = "L'operador introduit no és vàlid."
    showAnswer ()
}

function sum(num1, num2) {
    return (num1 + num2)
}

function rem(num1, num2) {
    return (num1 - num2)
}

function mult(num1, num2) {
    return (num1 * num2)
}

function div(num1, num2) {
    return (num1 / num2)
}

function mod(num1, num2) {
    return (num1 % num2)
}

function getAnswer(result) {
    document.getElementById("result").innerHTML = result
}

function showAnswer() {
    document.getElementById("answer").style.display = "block"
    document.getElementById("deleteButton").style.display = "block"
    document.getElementById("dataInputs").style.display = "none"
    throw "exit";
}

function deleteData() {
    document.getElementById("userNumber1").value = ""
    document.getElementById("userNumber2").value = ""
    document.getElementById("operation").value = "";
    document.getElementById("answer").style.display = "none"
    document.getElementById("deleteButton").style.display = "none"
    document.getElementById("dataInputs").style.display = "block"
}
