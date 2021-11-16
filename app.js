/*--- Variables pour les différents éléments du plateau de jeu ---*/
const newGame = document.getElementById('new_game');
const player = document.querySelectorAll('.player');
let globalPlayers = document.querySelectorAll('.player-score');
let dice = document.querySelector('.dice-img');
let currentPlayers = document.querySelectorAll('.current-score');
const rollDice = document.getElementById('roll-dice');
const holdDice = document.getElementById('hold-dice');

/*--- Tableau et variable des images du Dé ---*/
let images = ["dice-1.svg","dice-2.svg","dice-3.svg","dice-4.svg","dice-5.svg","dice-6.svg"]
let diceImg = document.querySelector('.dice-img')

/*--- Variables supplémentaires pour les algos ---*/
let globalScore, currentScore




/*--- Fonction New Game ---*/
const playNewGame = () => {
    newGame.addEventListener('click', () => {
        globalPlayers.forEach(globalPlayer => {
            globalPlayer.textContent = 0
        })
        currentPlayers.forEach(currentPlayer => {
            currentPlayer.textContent = 0
        })
        diceImg.src = './images/dice-1.svg'
    })
}

/*--- Fonction Dé random ---*/
playDice = () => {
    rollDice.addEventListener('click', () => {
        let diceValue = Math.floor(Math.random() * 6) + 1
        diceImg.src=`./images/dice-${diceValue}.svg`

        if (diceValue === 1){
            currentScore = 0
        } else {
            currentScore += diceValue
        }
        currentPlayers.forEach(currentPlayer => {
            if (currentPlayer.classList.contains('active')) {
                currentPlayer.textContent = currentScore
            } 
        })
    })
}

/*
const holdGame = () => {
    holdDice.addEventListener('click', () => {
        globalPlayer += currentPlayer
        globalPText.textContent = globalPlayer
    })
}
*/

playNewGame()
playDice()







