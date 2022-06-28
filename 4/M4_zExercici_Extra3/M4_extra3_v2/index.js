let counterUsuari = 0;
let counterMàquina = 0;

document.getElementById("puntUsuari").innerHTML = counterUsuari;
document.getElementById("puntMaquina").innerHTML = counterMàquina;

function jocPedra() {

    let tiradaUsuari = Number(document.getElementById("numJoc").value);
    let tiradaMaquina = Math.floor(Math.random() * (4 - 1)) + 1;
    
    switch (tiradaUsuari){
        case 1:
            switch (tiradaMaquina) {
                case 1:
                    document.getElementById("resposta").innerHTML = "Jo pedra i tu pedra. Empat!";
                    break;
                case 2:
                    document.getElementById("resposta").innerHTML = "Jo paper i tu pedra. He guanyat!";
                    counterMàquina = ++counterMàquina;
                    document.getElementById("puntMaquina").innerHTML = counterMàquina;
                    break;
                case 3:
                    document.getElementById("resposta").innerHTML = "Jo tisores i tu pedra. Has guanyat!";
                    counterUsuari = ++counterUsuari;
                    document.getElementById("puntUsuari").innerHTML = counterUsuari;
                    break;
            }
            break;
        case 2:
            switch (tiradaMaquina) {
                case 1:
                    document.getElementById("resposta").innerHTML = "Jo pedra i tu paper. Has guanyat!";
                    counterUsuari = ++counterUsuari;
                    document.getElementById("puntUsuari").innerHTML = counterUsuari;
                    break;
                case 2:
                    document.getElementById("resposta").innerHTML = "Jo paper i tu paper. Empat!";
                    break;
                case 3:
                    document.getElementById("resposta").innerHTML = "Jo tisores i tu paper. He guanyat!";
                    counterMàquina = ++counterMàquina;
                    document.getElementById("puntMaquina").innerHTML = counterMàquina;
                    break;
            }
            break;
        case 3:
            switch (tiradaMaquina) {
                case 1:
                    document.getElementById("resposta").innerHTML = "Jo pedra i tu tisores. He guanyat!";
                    counterMàquina = ++counterMàquina;
                    document.getElementById("puntMaquina").innerHTML = counterMàquina;
                    break;
                case 2:
                    document.getElementById("resposta").innerHTML = "Jo paper i tu tisores. Has guanyat!";
                    counterUsuari = ++counterUsuari;
                    document.getElementById("puntUsuari").innerHTML = counterUsuari;
                    break;
                case 3:
                    document.getElementById("resposta").innerHTML = "Jo tisores i tu tisores. Empat!";
                    break;
            }
            break;
        default:
            document.getElementById("resposta").innerHTML = "Entenc que no vols jugar. Adéu.";
    }
    
    document.getElementById("resposta").style.display = "block";
    document.getElementById("botoEsborra").style.display = "block";
    document.getElementById("puntuacio").style.display = "block";

}

function esborrar() {
    document.getElementById("numJoc").value = "";
    document.getElementById("resposta").style.display = "none";
    document.getElementById("botoEsborra").style.display = "none";
    document.getElementById("puntuacio").style.display = "none";
    counterMàquina = 0;
    counterUsuari = 0;
    document.getElementById("puntUsuari").innerHTML = counterUsuari;
    document.getElementById("puntMaquina").innerHTML = counterMàquina;
}