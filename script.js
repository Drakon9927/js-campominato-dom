let griglia = document.getElementById(`grid`);

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

// Funzione con aggiungi bomba
function creaQuadrato(contenuto) {
    // Creo un quadrato
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = contenuto;
   

    // Aggiungo un event listener 

    square.addEventListener("click", function(){
        console.log("cliccato", this); // Il this rappresenta square, un modo per creare la variabile all'interno dell'event listener
        
        if (bombe.includes(contenuto)){
            this.classList.add("bomba");
        }

        else{
            this.classList.add("nobomba");
        }
        
    })

    return square;
}