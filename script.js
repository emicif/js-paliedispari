console.log('JS OK');

/*
function miafunzione() {
    //blocco di codice
}

function sommaNumeri (num1, num2) {
    alert (num1 + num2);
}

sommaNumeri (2, 6);
*/



/* ESERCIZIO 1
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo con prompt utente di inserire parola
// leggo parola inserita dall'utente
// chiedo a js di leggere la parola al contrario




// chiedo con all'utente di inserire parola
let parolaUtente = prompt('Inserisci una parola palindroma');


// scompongo la parola utente per avere gli elementi
let parolaDivisa = parolaUtente.split('');


// vado a capire se la parola inversa è uguale al contrario della parolaDivisa
let parolaInversaDivisa = parolaDivisa.reverse('');


// a questo punto devo rimettere insieme gli elementi suddivisi prima con split
let parolaInvertita = parolaInversaDivisa.join('');


// se uguale stampo "palindroma"
// altrimenti stampo "non palindroma"
if (parolaUtente === parolaInvertita) {
    console.log('La parola inserita è palindroma')
} else {
    console.log('La parola inserita NON è palindroma');
}


// preparo la funzione
function parolaPalindroma (parolaUtente, parolaInvertita) {
    let risultato = (parolaUtente === parolaInvertita);
    return risultato;
}



/* ESERCIZIO 2
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let pariODispari = prompt('Scrivi pari o dispari');
let numero = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log(pariODispari, numero);


//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let random = Math.floor(Math.random()*5) + 1;

function numeroRandom () {
    randomNumber = Math.floor(Math.random()*5) + 1;
    return randomNumber;        
}

console.log('il numero random è ' + random);


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

