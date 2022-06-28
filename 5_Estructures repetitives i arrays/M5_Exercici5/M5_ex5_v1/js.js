/*Has de modificar el programa de les beques (ara el programa només ha de poder
donar 5 beques).
El programa anirà demanant les dades dels alumnes fins que es donin aquestes 5
beques. Un cop el programa hagi assignat les 5 beques s’ha de mostrar per 
pantalla els noms dels 5 alumnes que tenen beca.*/

const aprovedScholarships = [
    student1 = {
        name: '',
        age: '',
        degree: '',
        unEmployed: ''
    },
    student2 = {
        name: '',
        age: '',
        degree: '',
        unEmployed: ''
    },
    student3 = {
        name: '',
        age: '',
        degree: '',
        unEmployed: ''
    },
    student4 = {
        name: '',
        age: '',
        degree: '',
        unEmployed: ''
    },
    student5 = {
        name: '',
        age: '',
        degree: '',
        unEmployed: ''
    }
]

let counterAproved = 0

function analysisGrant(userAge, degree, unEmployed) {
    return ((userAge >= 18) && (degree == "yes" || unEmployed == "yes"))
}

function resetValues() {
    document.getElementById("userName").value = "";
    document.getElementById("userAge").value = "";
    document.getElementById("hasAdegree").value = "yes";
    document.getElementById("isUnemployed").value = "yes";
    document.getElementById("answer").style.display = "block";
}

function rejectMessage(userName) {
    alert(`Ho sentim ${userName} la teva beca ha estat rebutjada.\n
    No compleixes els requisits:\n
    -Ser major d'edat\n
    -Tenir un títol universitaro o estar a l'atur`)
}

function maxScholarshipMessage(aprovedScholarships) {
    let text = `Ja s'han donat el màxim de 5 beques.<br/>
    Aquests són els becats:<br/>`
    for (let j = 0; j < aprovedScholarships.length; j++) {
        text = text + `${aprovedScholarships[j].name}<br/>`
    }

    document.getElementById("answer").innerHTML = text
    document.getElementById("dataInputs").style.display = "none";
}

function shcolarshipRegister(userName, userAge, degree, unEmployed, aprovedScholarships, i) {
    aprovedScholarships[i].name = userName
    aprovedScholarships[i].age = userAge
    aprovedScholarships[i].degree = degree
    aprovedScholarships[i].unEmployed = unEmployed
    alert(`Enhorabona ${userName}, la teva beca ha estat acceptada.`)
}

function checkScholarship() {

    let userName = document.getElementById("userName").value;
    let userAge = document.getElementById("userAge").value;
    let degree = document.getElementById("hasAdegree").value;
    let unEmployed = document.getElementById("isUnemployed").value;
    
    analysisGrant(userAge, degree, unEmployed) ?
        (shcolarshipRegister(userName, userAge, degree, unEmployed, aprovedScholarships, counterAproved), counterAproved++) :
        (rejectMessage(userName))

    if (counterAproved >= 5) maxScholarshipMessage(aprovedScholarships)

    resetValues();
}