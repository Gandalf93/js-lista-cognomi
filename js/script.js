// Mail
//  1.  Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

var email = prompt('inserisci la tua mail');


var listaAutorizzati = ['giacobberossi65@gmail.com', 'albertomari@tiscali.it', 'giovanna81@alice.it', 'claudiodeclaudi@gmail.com','mariomariamario@gmail.com'];

i = 0;
var found = 'false';

while (i < listaAutorizzati.length){
    if(email == listaAutorizzati[i]){
        found = true;
    }
    i++
}

if ( found == true){
    document.getElementById("yes").innerHTML = 'Benvenuto';
} else {
    document.getElementById("no").innerHTML = 'Spiacente, sembra che tu non abbia l\'autorizzazione';
}

// Lista Cognomi:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.

 var cognome = prompt('inserisci il tuo cognome');
 var cognomeCap = cognome.charAt(0).toUpperCase() + cognome.slice(1);

 var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

 listaCognomi.push(cognomeCap);

 listaCognomi.sort();

 for (var i = 0; i < listaCognomi.length; i++){
     console.log(listaCognomi[i]);
 }

 for (var i = 0; i < listaCognomi.length; i++ ){
     if (cognomeCap == listaCognomi[i]){
         break
     }
 }

 i += 1
 console.log('Cognome utente-' + i);













