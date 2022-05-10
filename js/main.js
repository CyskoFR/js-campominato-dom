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
const bombNumber = 16;
const bombSlots = [];
const safeSlots = [];
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

function startGame() {
    if (slotNumber === 100 || slotNumber === 80 || slotNumber === 50) {
        document.getElementById("game-start_box").style.display = "none";
    } else {
        alert("Select difficulty level");
        return;
    }
    while (bombSlots.length < bombNumber) {
        let bomb = getRandomNumber(1, slotNumber);
        if (!bombSlots.includes(bomb)) {
            bombSlots.push(bomb);
        } 
    }
    console.log(`Bomb Slots`, bombSlots);

    for (let i = 1; i <= slotNumber; i++) {
        let safeSlot = i;
        if (!bombSlots.includes(safeSlot))
        safeSlots.push(i);
    }
    console.log(`Safe Slots`, safeSlots);

    for (let i = 1; i <= slotNumber; i++) {
        let slot = i;
        if (bombSlots.includes(slot)) {
            const slot = document.createElement("div");
            slot.innerText = i;
            mainGameBox.append(slot);
            slot.classList.add("slot", "bomb-slot");
        } else {
            const slot = document.createElement("div");
            slot.innerText = i;
            mainGameBox.append(slot);
            slot.classList.add("slot", "safe-slot");
        }
    }
    
}




//     document.getElementById('button').onclick = function() {
//         alert("button clicked");
//     }​;​
// }


