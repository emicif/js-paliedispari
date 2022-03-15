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


// finché l'utente non inserisce una parola continua a chiedere
while(!parolaUtente || parolaUtente.length === 0) {
    parolaUtente = prompt('Inserisci una parola palindroma');
}


/*
SENZA FUNZIONE
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

*/





// ESERCIZIO CON FUNZIONE

const invertedWord = invertWord(parolaUtente);
console.log(invertedWord)



// soluzione 1
if (parolaUtente === invertedWord) {
    console.log('La parola inserita è palindroma')
} else {
    console.log('La parola inserita NON è palindroma')
}



function isPalindroma(wordToCheck) {
    const toCheck = invertWord(wordToCheck);
/*
    if (wordToCheck === toCheck) {
        return true;
    } else {
        return false;
    }
    */
   return(wordToCheck === toCheck) ? true: false; //primo è l'if, è vero? si, tornami true, altrimenti false!
}



function invertWord (wordArgument) {

    let inverted = '';

    // creo un ciclo che va da 0 alla lunghezza in caratteri della stringa
    for(let i = 0; i < wordArgument.length; i++){
        // recupero il carattere all'interno della stringa alla posizione i (0 indica il primo carattere)
        const char = wordArgument.charAt(i); // charAt = carattere alla posizione indice
        //console.log(char);
        inverted = char + inverted; // Aggiungo il carattere all'inizio - quindi pippo qui mi scrive oppip
    }

    return inverted;
}





