/* Fer un programa que demani a l’usuari quin dia i quin mes va néixer,
amb aquesta informació el programa mostra per pantalla, de quin signe del zodíac és.

Àries-Aries (21.03 — 19.04)
Taure-Tauro (20.04 — 20.05)
Bessons-Géminis (21.05 — 20.06)
Cranc-Cáncer (21.06 — 22.07)
LLeó-Leo (23.07 — 22.08)
Verge-Virgo (23.08 — 22.09)
Balança-Libra (23.09 — 22.10)
Escorpi-Escorpio (23.10 — 21.11)
Sagitario-Sagitario (22.11 — 21.12)
Capricorn-Capricornio (22.12 — 19.01)
Aquari-Acuario (20.01 — 18.02)
Peixos-Piscis (19.02 — 20.03) */

//objecte on s'emmagatxemen els mesos, també objectes, amb totes les addes que anem mostrant
const zodiacSign = {
    Gener: { firstSign: { name:'Capricorn', icon: '♑︎' }, secondSign: { name: 'Aquari', icon: '♒︎' }, changeDay: 19, maxDay: 31 },
    Febrer: { firstSign: { name:'Aquari', icon: '♒︎' }, secondSign: { name: 'Peixos', icon: '♓︎' }, changeDay: 18, maxDay: 29 },
    Març: { firstSign: { name:'Peixos', icon: '♓︎' }, secondSign: { name: 'Àries', icon: '♈︎' }, changeDay: 20, maxDay: 31 },
    Abril: { firstSign: { name:'Àries', icon: '♈︎' }, secondSign: { name: 'Taure', icon: '♉︎' }, changeDay: 19, maxDay: 30 },
    Maig: { firstSign: { name:'Taure', icon: '♉︎' }, secondSign: { name: 'Bessons', icon: '♊︎' }, changeDay: 19, maxDay: 31 },
    Juny: { firstSign: { name:'Bessons', icon: '♊︎' }, secondSign: { name: 'Cranc', icon: '♋︎' }, changeDay: 20, maxDay: 30 },
    Julio: { firstSign: { name:'Cranc', icon: '♋︎' }, secondSign: { name: 'Lleó', icon: '♌︎' }, changeDay: 20, maxDay: 31 },
    Agost: { firstSign: { name:'Lleó', icon: '♌︎' }, secondSign: { name: 'Verge', icon: '♍︎' }, changeDay: 22, maxDay: 31 },
    Setembre: { firstSign: { name:'Verge', icon: '♍︎' }, secondSign: { name: 'Balança', icon: '♎︎' }, changeDay: 22, maxDay: 30 },
    Octubre: { firstSign: { name:'Balança', icon: '♎︎' }, secondSign: { name: 'Escorpí', icon: '♏︎' }, changeDay: 22, maxDay: 31 },
    Novembre: { firstSign: { name:'Escorpí', icon: '♏︎' }, secondSign: { name: 'Sagitari', icon: '♐︎' }, changeDay: 22, maxDay: 30 },
    Desembre: { firstSign: { name:'Sagitari', icon: '♐︎' }, secondSign: { name: 'Capricorn', icon: '♑︎' }, changeDay: 21, maxDay: 31 },
}

//funció que crida la funció resposta amb una dada o una altra de l'objecte en funció del dia de canvi de signe
function chechZodiac (dia, mes) {
    (dia <= zodiacSign[mes].changeDay) ? showResponse(zodiacSign[mes].firstSign) : showResponse(zodiacSign[mes].secondSign)
} 

//funció que mostra la resposta en funció amb les dades que reb de l'objecte
function showResponse (response) {
    document.getElementById("resposta").innerHTML = `Ets ${response.name} i el seu símol és: ${response.icon}.`
}

//funció que mostra un missatge d'error
function errorMessage (mes) {
    document.getElementById("resposta").innerHTML = `${mes} no té tans dies!`
}

//funció que esborra les dades, la resposta i el botó d'esborrar
function esborrar() {
    document.getElementById("birthDay").value = "";
    document.getElementById("birthMonth").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";
}

//funció principal: reb les variables dels inputs, comprova que el dia és correcte i crida o no a la funció per calcular el signe.
//També mostra la resposta i el botó d'esborrar.
function calculaSigne() {

    let dia = parseInt(document.getElementById("birthDay").value);
    let mes = document.getElementById("birthMonth").value;

    (dia <= zodiacSign[mes].maxDay) ? chechZodiac (dia, mes) : errorMessage (mes);

    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
}
