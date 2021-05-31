// Mail
//  1.  Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

var email = prompt('inserisci la tua mail');


var listaAutorizzati = ['giacobberossi65@gmail.com', 'albertomari@tiscali.it', 'giovanna81@alice.it', 'claudiodeclaudi@gmail.com','mariomariamario@gmail.com'];


if (listaAutorizzati.includes(email)) {
    alert('Your email adress is valid, Welcome!');
} else {
    alert('Sorry, it seems you are not on the list. Please check again your email adress.');
};

// Lista Cognomi:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova




