//Chiedi all'utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.


const mail = prompt("inserisci la mail")

const mailValide = [
    "Nico",
    "Simo",
    "Ciccio",
    "Davide"

]

for (let counter = 0; counter < mailValide.length; counter++) {
    console.log("l'elemento in posizione " + counter + ' è:', mailValide[counter]);
    if(mailValide[counter] == mail){
        console.log("true")
    }
    else{
        console.log("false")
    }
}




