const newGame = document.getElementById('new_game');
const player = document.querySelectorAll('.player');
let globalPlayer1 = document.querySelector('.player1-score');
let globalPlayer2 = document.querySelector('.player2-score');
let dice = document.querySelector('.dice-img');
let currentPlayer1 = document.querySelector('.player1-current .current-score');
let currentPlayer2 = document.querySelector('.player2-current .current-score');
const rollDice = document.getElementById('roll-dice');
const holdDice = document.getElementById('hold-dice');


globalPlayer1.innerHTML = 0
globalPlayer2.innerHTML = 0
currentPlayer1.innerHTML = 0
currentPlayer2.innerHTML = 0

newGame.addEventListener('click', () => {
    globalPlayer1.innerHTML = 0
    globalPlayer2.innerHTML = 0
    currentPlayer1.innerHTML = 0
    currentPlayer2.innerHTML = 0

    player.classList.remove('active')
    player[0].classList.add('active')

    
})
