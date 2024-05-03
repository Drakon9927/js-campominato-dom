
let griglia = document.getElementById('grid');
let punteggio = 0;
let gameover = false;
let celleSicureCliccate = 0;

for (let i = 0; i < 100; i++) {
  let elemento = creaQuadrato(i);
  griglia.append(elemento);
}

let bombe = [];
while (bombe.length < 16) {
  let numeroCasuale = Math.floor(Math.random() * 100);
  if (!bombe.includes(numeroCasuale)) {
    bombe.push(numeroCasuale);
  }
}

console.log(bombe);

function creaQuadrato(contenuto) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.innerText = contenuto;
  square.addEventListener('click', gestisciClic);

  function gestisciClic() {
    if (!gameover) {
      if (bombe.includes(contenuto)) {
        this.classList.add('bomba');
        alert("Game Over - Il tuo punteggio è " + punteggio);
        gameover = true;
        this.removeEventListener('click', gestisciClic);
      } else {
        this.classList.add('nobomba');
        punteggio++;
        celleSicureCliccate++;
        // In caso di vittoria
        if (celleSicureCliccate === 84) {
          alert("Congratulazioni, hai vinto!");
          gameover = true;
        }
      }
    }
  }
  return square;
}