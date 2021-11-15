const newGame = document.getElementById('new_game');
const player = document.querySelectorAll('.player');
let globalPlayer1 = document.querySelector('.player1-score');
let globalPlayer2 = document.querySelector('.player2-score');
let dice = document.querySelector('.dice-img');
let currentPlayer1 = document.querySelector('.player1-current .current-score');
let currentPlayer2 = document.querySelector('.player2-current .current-score');
const rollDice = document.getElementById('roll-dice');
const holdDice = document.getElementById('hold-dice');

let images = ["dice-1.svg","dice-2.svg","dice-3.svg","dice-4.svg","dice-5.svg","dice-6.svg"]

let diceImg = document.querySelector('.dice-img')

globalP1 = 0
globalP2 = 0
currentP1 = 0
currentP2 = 0

globalPlayer1.innerHTML = globalP1
globalPlayer2.innerHTML = globalP2
currentPlayer1.innerHTML = currentP1
currentPlayer2.innerHTML = currentP2

const playNewGame = () => {
    newGame.addEventListener('click', () => {
        globalP1 = 0
        globalP2 = 0
        currentP1 = 0
        currentP2 = 0

        globalPlayer1.innerHTML = globalP1
        globalPlayer2.innerHTML = globalP2
        currentPlayer1.innerHTML = currentP1
        currentPlayer2.innerHTML = currentP2
    })
}

const playDice = () => {
    rollDice.addEventListener('click', () => {
        let diceValue = Math.floor(Math.random() * 6) + 1
        diceImg.src=`./images/dice-${diceValue}.svg`;
        if (diceValue === 1){
            currentP1 = 0
        } else {
            currentP1 += diceValue
        }
        currentPlayer1.innerHTML = currentP1
    })
}

const holdGame = () => {
    holdDice.addEventListener('click', () => {
        globalP1 += currentP1
        globalPlayer1.innerHTML = globalP1
    })
}

playNewGame()
playDice()
holdGame()




