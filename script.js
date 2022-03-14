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
    console.log('Parola palindroma')
} else {
    console.log('NON palindroma');
}


/*
    if (parolaUtente === parolaInvertita) {
        console.log('La parola è palindroma');

    } else {
        console.log('La parola non è palindroma')
    }


function invertiParola (parolaUtente, parolaInvertita) {
    let risultato = (parolaUtente.reverse === parolaInvertita);
    return risultato;
}



// stampo in base alla situazione
//console.log('La parola inserita è palindroma: ' + parolaUtente);
//console.log('La parola inserita non è palindroma: ' + parolaUtente);

*/