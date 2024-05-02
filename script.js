let griglia = document.getElementById(`grid`);
let punteggio = 0;

for (let i = 0; i <= 100; i++) {
    
    let elemento = creaQuadrato(i);

    griglia.append(elemento);


    
}

let bombe = [];

while (bombe.length < 16) {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;

    if (!bombe.includes(numeroCasuale)){
        bombe.push(numeroCasuale)
    }

}

console.log(bombe);

function creaQuadrato(contenuto) {
    // Creo un quadrato
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = contenuto;

    // Imposto gameover su false all'inizio di ogni nuova partita
    let gameover = false;

    // Aggiungo un event listener
    square.addEventListener("click", function(){
        console.log("cliccato", this); // Il this rappresenta square, un modo per creare la variabile all'interno dell'event listener

        // Verifica se il gioco è già finito
        if (!gameover) {
            if (bombe.includes(contenuto)){
                this.classList.add("bomba");

                alert("Game Over - Il tuo punteggio è " + punteggio);

                // Imposta gameover su true per indicare che il gioco è finito
                gameover = true;

                this.removeEventListener("click", gestisciClic);
             }

            this.classList.add("nobomba");
            punteggio++;
            console.log("Punteggio:", punteggio);
        }
    });

    // Restituisci il quadrato creato
    return square;
}