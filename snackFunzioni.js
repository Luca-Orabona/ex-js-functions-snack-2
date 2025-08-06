//🏆 Snack 1
// - Crea una funzione che somma due numeri.
// - Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// - Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// - Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

//FUNZIONE DICHIARATIVA CHE SOMMA DUE NUMERI
function somma(num1, num2) {
    return num1 + num2
};

console.log(somma(25, 36));

//FUNZIONE ANONIMA CHE SOMMA DUE NUMERI
const somma2 = function (num1, num2) {
    return num1 + num2
};

console.log(somma2(12, 40));

//FUNZIONE ANONIMA CHE SOMMA DUE NUMERI CON SINTASSI ARROW FUNCTION
const somma3 = (num1, num2) => num1 + num2;


console.log(somma3(89, 74));


//🏆 Snack 2
// - Crea una arrow function che calcola il quadrato di un numero.
// - Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

//ARROW FUNCTION CHE CALCOLA IL QUADRATO DI UN NUMERO
const quadratoNum = (num) => {
    return num * num
}
console.log(quadratoNum(25));

//ARROW FUNCTION CHE CALCOLA IL QUADRATO DI UN NUMERO SCRITTO IN UNA SOLA RIGA
const quadrato = (num) => num * num
console.log(quadrato(7));
 

//🏆 Snack 3
// - Crea una funzione eseguiOperazione
// - Definisci una funzione eseguiOperazione che accetta tre parametri: 
//   due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

console.log(eseguiOperazione(25, 45, somma));


//🏆 Snack 4
// - Crea un generatore di funzioni creaTimer
// - Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const creaTimer = (tempoMS) => {
    return function () {
        console.log("Inizio timer");
        setTimeout(() => {
            console.log("tempo scaduto!");
        }, tempoMS)
    }
};

const timer5Secondi = creaTimer(5000);
const timer3Secondi = creaTimer(3000);
timer5Secondi()
timer3Secondi()

//🏆 Snack 5
// - Crea una funzione stampaOgniSecondo con setInterval.
// - Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// - Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

const stampaOgniSecondo = (messaggio) => {
    const intervalId = setInterval(() => {
        console.log(messaggio);
    }, 1000)

    setTimeout(() => {
        clearInterval(intervalId)
        console.log("fine");
    }, 6000)

};

stampaOgniSecondo("ripeti")


//🏆 Snack 6
// - Crea un contatore automatico con setInterval
// - Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


const creaContatoreAutomatico = (tempoMS) => {
    let count = 0
    const intervalId = setInterval(() => {
        count++
        console.log(count);
        if (count >= 6) {
            clearInterval(intervalId)
            console.log("fine");
        }
    }, tempoMS)
};

creaContatoreAutomatico(1000)


//🏆 Snack 7
// - Crea una funzione che ferma un timer dopo un certo tempo
// - Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const eseguiEFerma = (message, esegui, ferma) => {
     const intervalId = setInterval(() => {
        console.log(message)
      }, esegui)

     setTimeout(() =>{
        clearInterval(intervalId)
      }, ferma)
};

eseguiEFerma("eccomi", 1000, 6000)


