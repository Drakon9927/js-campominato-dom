let griglia = document.getElementById(`grid`);

for (let i = 0; i <= 100; i++) {
    
    let elemento = creaQuadrato(i);

    griglia.append(elemento);


    
}

function creaQuadrato(contenuto) {
    // Creo un quadrato
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = contenuto;
   

    // Aggiungo un event listener 

    square.addEventListener("click", function(){
        console.log("cliccato", this); // Il this rappresenta square, un modo per creare la variabile all'interno dell'event listener
        this.classList.toggle("evidenziato");
    })

    return square;
}