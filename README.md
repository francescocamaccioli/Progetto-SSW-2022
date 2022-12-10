# Progetto Finale del Corso Sviluppo dei servizi web [721AA]

[⚡Fork & Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-g9gwbn)

### Descrizione Sintetica della Specifica

Realizzazione di un applicazione web per la prenotazione dei posti di spettacoli teatrali.
L'accesso al singolo spettacolo avviene attraverso una chiave univoca di 9 caratteri, che, se fornita, sarà utilizzata dall'app per recuperare i dati della prenotazione selezionata attraverso la REST API del database key-value fornitoci dalla specifica.  
Vi è inoltre la possibilità di creare un proprio spettacolo, creando una nuova chiave nel database, attraverso il bottone specifico.  
Una volta inserita una chiave valida, è possibile inserire il nome della prenotazione e successivamente selezionare un posto (disponibile se verde, occupato se rosso) e confermare la prenotazione.

### Scelte progettuali

Divisione della struttura dell'app in 3 componenti e 1 servizio:

**app**: componente padre principale che fornisce i metodi per interfacciarsi con il database ed utilizza i componenti figli.

**reservation-name**: componente che gestisce l'inserimento del Reservation Name attuale nel sistema, andando ad aggiornare il valore contenuto nel componente padre ad ogni inserimento e conferma da parte dell'utente.

**reservation**: componente che gestisce la scelta e la conferma del posto da parte dell'utente, andando ad aggiornare il valore anche nel database, attraverso la chiave passata all'app dall'utente nella fase iniziale.

**showdb**: servizio che realizza le Richieste HTTP (get, set e new) al database
