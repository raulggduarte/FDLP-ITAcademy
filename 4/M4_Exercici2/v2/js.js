// Funcio per clasificar estudis per l'edat

function retrieveCourse (edat) {
    if (edat >= 1 && edat <= 5) {
        return "Si té 5 anys o menys: preescolar"
    } else if (edat >= 6 && edat <= 11) {
        return "Si té entre 6 i 11 anys: primària"
    } else if (edat >= 12 && edat <= 15) {
        return "Si té entre 12 i 15 anys: ESO"
    } else if (edat >= 16 && edat <= 17) {
        return "Si té entre 16 i 17 anys: Batxillerat"
    } else if (edat >= 18) {
        return "Si és major d'edat: FP o Universitat"
    }
}

function invalidValue (value) {
    if (isNaN(value)) return 'No és un número'
    
    if (value <= 0) return 'No has introduit un múmero vàlid'
}

function changeColorMessage (isValid) {
    document.getElementById("output-missatge").style.color = isValid ? 'green' : 'red'
}

function verificarFormacio() {
    //Valor introduit per l'usuari
    const edat = Number(document.getElementById("input-edat").value);
console.log(edat)
    const isAValidAge = edat > 0

    changeColorMessage(isAValidAge)

    const result = isAValidAge ?  retrieveCourse(edat) : invalidValue(edat)

    document.getElementById("output-missatge").textContent = result
}