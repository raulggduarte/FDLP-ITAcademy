export function showRegisterScreen () {
    document.querySelector("#registerScreen").style.display = "inline-block";
    document.querySelector("#registeredCount").style.display = "inline-block";
    document.querySelector("#welcomeScreen").style.display = "none";
    document.querySelector("#title").style.fontSize = "3em";
}