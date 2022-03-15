console.log('JS OK');


/* ESERCIZIO 2
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



// L’utente sceglie pari o dispari 
let pariODispari = prompt('Scrivi pari o dispari');


//faccio controllo
while(!pariODispari || (pariODispari !== 'pari' && pariODispari !== 'dispari')) {
    pariODispari = prompt('Scrivi pari o dispari');
}



// inserisce un numero da 1 a 5.
let numero = parseInt(prompt('Scegli un numero da 1 a 5'));


//faccio controllo
while (isNaN(numero) || numero > 5 || numero < 1){
    numero = parseInt(prompt('Scegli un numero da 1 a 5'));
}


console.log(pariODispari, numero);




//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let random = generateRandomNumer(); //Math.floor(Math.random()*5) + 1;

function generateRandomNumer () {
    randomNumber = Math.floor(Math.random()*5) + 1;
    return randomNumber;        
}

console.log('il numero random è ' + random);



// FUNZIONE PER IL RANDOM
/*let random = generateRandomNumer(1, 5);

function generateRandomNumer (min, max) {
    const range = max -min + 1;
    const number = Math.floor(Math.random() * range) + min;
    return number;
}*/


let somma = numero + random;
// funzione della somma
function sommaNumeri () {
    
    console.log('la somma è ' + somma);
    if (somma % 2 == 0) {
        console.log('La funzione è pari')
    } else {
        console.log('La funzione non è pari')
    }
}

sommaNumeri (numero, random);


// Dichiariamo chi ha vinto.
// se l'utente ha inserito pari e la sommaNumeri è pari -> vinto utente
// se utente ha inserito "dispari" e la somma è pari -> vinto computer
// se l'utente ha inserito "dispari" e la sommaNumero è dispari -> vinto utente
// se l'utente ha inserito "dispari" e la sommaNumero è pari -> vinto pc

if(pariODispari == 'pari' && somma % 2 == 0){ 
    console.log("ha vinto l'utente")
} else if (pariODispari == 'dispari' && somma % 2 !== 0) {
    console.log("ha vinto l'utente")
} else {
    console.log('ha vinto il pc'); 
} 

