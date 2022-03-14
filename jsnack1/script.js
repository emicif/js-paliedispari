console.log('JS OK');


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


