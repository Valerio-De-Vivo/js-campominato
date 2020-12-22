// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer genera 16 numeri random senza doppioni 

var numeriComputerRandom = [];

while (numeriComputerRandom.length < 16) {

    var numeri = randomNumbers(1,100);

    if (numeriComputerRandom.includes(numeri) == false) {
        numeriComputerRandom.push(numeri);
    }
}


// Si chiede all utente di inserire i numeri uno alla volta 

var numeriUtente = [];
var punteggio = 0;


for( var i = 1 ; i < 85 ; i++) {
    var numeroUtente = parseInt(prompt('Inserisci un numero e sfida la sorte'));

    if ( numeroUtente > 100) {
        alert('puoi inserire un numero fino a 100! ');
        numeroUtente;
        i--;
    } else if ( numeriComputerRandom.includes(numeroUtente) == true) {
        alert('Hai perso!');
        document.getElementById('numeri-computer').innerHTML= numeriComputerRandom;
        i = 84;
    } else if (numeriUtente.includes(numeroUtente)) {
        alert('Hai già inserito questo numero!');
        i--;
    } else {
        numeriUtente.push(numeroUtente);
        punteggio++;
    }

    console.log('punteggio' + punteggio);
}

console.log(punteggio);














console.log(numeriComputerRandom);

// FUNZIONI 

function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}