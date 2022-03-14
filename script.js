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



/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo con prompt utente di inserire parola
// leggo parola inserita dall'utente
// chiedo a js di leggere la parola al contrario

// se uguale stampo "palindroma"
// altrimenti stampo "non palindroma"



// chiedo con prompt utente di inserire parola
let parolaUtente = prompt('Inserisci una parola palindroma');
// parolaUtente.reverse()

// scompongo la parola utente per avere gli elementi
let parolaDivisa = parolaUtente.split('');
console.log(parolaDivisa);


// vado a capire se la parola inversa è uguale al contrario della parolaDivisa
let parolaInversaDivisa = parolaDivisa.reverse('');
console.log('Parola inversa divisa ' + parolaInversaDivisa);

// a questo punto devo rimettere insieme gli elementi suddivisi prima con split
let parolaInvertita = parolaInversaDivisa.join('');
console.log('Parola invertita ' + parolaInvertita);

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



/*
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
    //sommiamo i due numeri
        
}
console.log('il numero random è ' + random);


// funzione della somma
function sommaNumeri () {
    let somma = numero + random;
    console.log('la somma è ' + somma);
    if (somma % 2 == 0) {
        console.log('La funzione è pari')
    } else {
        console.log('La funzione non è pari')
    }
}

sommaNumeri (numero, random);




