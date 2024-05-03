let griglia = document.getElementById(`grid`);
let punteggio = 0;
let gameover = false; // Spostato al di fuori della funzione creaQuadrato

for (let i = 0; i <= 100; i++) {

    let elemento = creaQuadrato(i);

    griglia.append(elemento);
}

let bombe = [];

while (bombe.length < 16) {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;

    if (!bombe.includes(numeroCasuale)) {
        bombe.push(numeroCasuale)
    }
}

console.log(bombe);

function creaQuadrato(contenuto) {
    // Creo un quadrato
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = contenuto;

    // Aggiungo un event listener
    square.addEventListener("click", gestisciClic);

    function gestisciClic() {
        console.log("cliccato", this);

        // Verifica se il gioco è già finito
        if (!gameover) {
            if (bombe.includes(contenuto)) {
                this.classList.add("bomba");

                alert("Game Over - Il tuo punteggio è " + punteggio);
                gameover = true;

                // Indica che il gioco è finito
                this.classList.add("gamestop");

                // Rimuovi l'event listener
                this.removeEventListener("click", gestisciClic);
            } else {
                this.classList.add("nobomba");
                punteggio++;
                console.log("Punteggio:", punteggio);
            }
        }
    }

    // Restituisci il quadrato creato
    return square;
}