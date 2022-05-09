// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


let slotNumber = 0;
const numbers = [];
const mainGameBox = document.getElementById("main-game_box");

function changeDifficulty1() {
    return slotNumber = 100;
}
function changeDifficulty2() {
    return slotNumber = 80;
}
function changeDifficulty3() {
    return slotNumber = 50;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (numbers.length < 16) {
    let num = getRandomNumber(1, 100);
    if (!numbers.includes(num)) {
        numbers.push(num);
    }
    
}
console.log(numbers);

function startGame() {
    if (slotNumber === 100 || slotNumber === 80 || slotNumber === 50) {
        document.getElementById("game-start_box").style.display = "none";
    } else {
        alert("Select difficulty level")
    }
    for (let i = 1; i <= slotNumber; i++) {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        mainGameBox.append(slot)
    }
}












// const list = document.querySelector(".list");

// for( let i = 1; i <= 100; i++ ) {
//     const element = document.createElement("li");

//     element.classList.add("item");
//     element.innerText = i;
//     list.append(element);
//     if (i % 3 === 0 && i % 5 === 0) {
//         element.innerText = "FizzBuzz"
//         element.style.backgroundColor = "#f0466f"
//     }   else if (i % 5 === 0) {
//         element.innerText = "Buzz"
//         element.style.backgroundColor = "#ffd166"
//     }   else if (i % 3 === 0) {
//         element.innerText = "Fizz"
//         element.style.backgroundColor = "#0bd6a1"
//     }
// }


