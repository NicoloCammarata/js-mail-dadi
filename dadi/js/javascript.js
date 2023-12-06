//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?


let Player1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
let Player2 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

console.log(Player1)
console.log(Player2)


if(Player1 > Player2){
    console.log("player1 win")
}
else{
    console.log("player2 win")
}