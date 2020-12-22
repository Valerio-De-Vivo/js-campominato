
// Il computer genera 16 numeri random senza doppioni 

// var numeriComputerRandom = [];

// while (numeriComputerRandom.length < 16) {

//     var numeri = randomNumbers(1,100);

//     if (numeriComputerRandom.includes(numeri) == false) {
//         numeriComputerRandom.push(numeri);
//     }
// }


// SI CHIEDE LA DIFFICOLTà ALL'UTENTE

var difficolta = prompt('Scegli la difficoltà: 1 / 2 / 3');

var numeriUtente = [];
var punteggio = 0;

switch (difficolta) {
    case "1":

        var numeriComputerRandom = [];

        while (numeriComputerRandom.length < 16) {
        
            var numeri = randomNumbers(1,100);
        
            if (numeriComputerRandom.includes(numeri) == false) {
                numeriComputerRandom.push(numeri);
            }
        }

        for( var i = 1 ; i < 85 ; i++) {
            var numeroUtente = parseInt(prompt('Inserisci un numero e sfida la sorte'));
        
            if ( numeroUtente > 100 || numeroUtente < 1 || numeroUtente == 'NaN') {
                alert('puoi inserire un numero da 1 a 100! ');
                numeroUtente;
                i--;
            } else if ( numeriComputerRandom.includes(numeroUtente) == true) {
                alert('Hai perso!');
                document.getElementById('numeri-computer').innerHTML= 'Numeri Bomba ' + numeriComputerRandom;
                i = 84;
            } else if (numeriUtente.includes(numeroUtente)) {
                alert('Hai già inserito questo numero!');
                i--;
            } else {
                numeriUtente.push(numeroUtente);
                punteggio++;
            }
        }
    break;
    case "2":

        var numeriComputerRandom = [];

        while (numeriComputerRandom.length < 16) {
        
            var numeri = randomNumbers(1,80);
        
            if (numeriComputerRandom.includes(numeri) == false) {
                numeriComputerRandom.push(numeri);
            }
        }


        for( var i = 1 ; i < 65 ; i++) {
            var numeroUtente = parseInt(prompt('Inserisci un numero e sfida la sorte'));
        
            if ( numeroUtente > 80 || numeroUtente < 1 || numeroUtente == 'NaN') {
                alert('puoi inserire un numero da 1 a 80! ');
                numeroUtente;
                i--;
            } else if ( numeriComputerRandom.includes(numeroUtente) == true) {
                alert('Hai perso!');
                document.getElementById('numeri-computer').innerHTML= 'Numeri Bomba ' + numeriComputerRandom;
                i = 64;
            } else if (numeriUtente.includes(numeroUtente)) {
                alert('Hai già inserito questo numero!');
                i--;
            } else {
                numeriUtente.push(numeroUtente);
                punteggio++;
            }
        }
    break;
    case "3":

        var numeriComputerRandom = [];

        while (numeriComputerRandom.length < 16) {
        
            var numeri = randomNumbers(1,50);
        
            if (numeriComputerRandom.includes(numeri) == false) {
                numeriComputerRandom.push(numeri);
            }
        }


        for( var i = 1 ; i < 35 ; i++) {
            var numeroUtente = parseInt(prompt('Inserisci un numero e sfida la sorte'));
        
            if ( numeroUtente > 50 || numeroUtente < 1 || numeroUtente == 'NaN') {
                alert('puoi inserire un numero da 1 a 50! ');
                numeroUtente;
                i--;
            } else if ( numeriComputerRandom.includes(numeroUtente) == true) {
                alert('Hai perso!');
                document.getElementById('numeri-computer').innerHTML= 'Numeri Bomba ' + numeriComputerRandom;
                i = 34;
            } else if (numeriUtente.includes(numeroUtente)) {
                alert('Hai già inserito questo numero!');
                i--;
            } else {
                numeriUtente.push(numeroUtente);
                punteggio++;
            }
        }
    break;
    
    default:
        difficolta = alert('Scrivi 1 o 2 o 3 in base alla difficoltà che vuoi, ricarica la pagina per giocare');
} 


// Si chiede all utente di inserire i numeri uno alla volta 




// for( var i = 1 ; i < 85 ; i++) {
//     var numeroUtente = parseInt(prompt('Inserisci un numero e sfida la sorte'));

//     if ( numeroUtente > 100 || numeroUtente < 1 || numeroUtente == 'NaN') {
//         alert('puoi inserire un numero da 1 a 100! ');
//         numeroUtente;
//         i--;
//     } else if ( numeriComputerRandom.includes(numeroUtente) == true) {
//         alert('Hai perso!');
//         document.getElementById('numeri-computer').innerHTML= 'Numeri Bomba ' + numeriComputerRandom;
//         i = 84;
//     } else if (numeriUtente.includes(numeroUtente)) {
//         alert('Hai già inserito questo numero!');
//         i--;
//     } else {
//         numeriUtente.push(numeroUtente);
//         punteggio++;
//     }
// }



document.getElementById('numeri-utente').innerHTML = 'Questi sono i numeri che hai indovinato: ' + numeriUtente;


document.getElementById('punteggio').innerHTML = 'Hai fatto ' + punteggio + ' punti!';














console.log(numeriComputerRandom);

// FUNZIONI 

function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}