// Targhetăm elementele necesare spre manipulare
// - butonul care la click va face modificări 
const btn = document.querySelector('#picker');
// - div-ul care urmează a fi colorat
const colorDiv = document.getElementById('colorBox');
// - div-ul care urmează să afişeze codul culorii ca text
const colorDescription = document.getElementById('inner');

// Creăm funcţia care generează un număr aleatoriu
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Creăm funcţia care generează un hex-code aleatoriu, folosind inclusiv funcţia de mai sus
function getRandomHexCode() {
    // Indicăm ca string toate caracterele din care poate fi compus un hex code: cifrele de la 0 la 9 şi literele de la a la f
    const hexCharacters = '0123456789abcdef';
    // Definim variabila de hexCode şi îi dăm valoarea de start de '#' - deoarece orice hex code începe cu acest caracter
    let hexCode = '#';

    // Iterăm prin hexCharacters completând hexCode până acesta va consta din # şi 6 caractere aleatorii, e.g. #370050
    for (let i = 0; i < 6; i++) {
        // La fiecare dintre cele 6 iteraţii, adăugăm un caracter aleatoriu din hexCharacters folosind funcţia random cu argumentul '15' - acesta fiind numărul de caractere din hexCharacters
        hexCode += hexCharacters[random(15)];
    }

    // După toate cele 6 iteraţii, returnăm un hexCode final, e.g. #370050
    return hexCode;
}

// Atribuim butonului un eventListener de click
btn.addEventListener('click', () => {
    // Salvăm în variabilă un hexCode generat aleatoriu prin chemarea funcţiei getRandomHexCode() ca să putem ulterior reutiliza acesta şi să folosim trimiterea la aceeaşi instanţă de hexCode
    const rndHex = getRandomHexCode();
    // Schimbăm culoarea de fundal a colorDiv în culoarea generată
    colorDiv.style.backgroundColor = rndHex;
    // Afişăm hex codul generat ca text în div-ul descriptiv
    colorDescription.textContent = rndHex;
});