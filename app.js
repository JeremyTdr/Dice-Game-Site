window.onload = () => {

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
    let globalScoreP1 = 0
    let globalScoreP2 = 0
    let currentScore = 0
    let actualPlayer = 0



    /*--- Fonction New Game ---*/
    const playNewGame = () => {
        newGame.addEventListener('click', () => {
            let globalScoreP1 = 0
            let globalScoreP2 = 0
            let currentScore = 0
            let actualPlayer = 0

            globalPlayers.forEach(globalPlayer => {
                globalPlayer.textContent = 0
            })
            currentPlayers.forEach(currentPlayer => {
                currentPlayer.textContent = 0
            })

            diceImg.src = './images/dice-1.svg'
        })
    }


    playDice = () => {
        rollDice.addEventListener('click', () => {
            let diceValue = Math.floor(Math.random() * 6) + 1
            diceImg.src=`./images/dice-${diceValue}.svg`

            if (diceValue === 1){
                currentScore = 0
                if (actualPlayer == 0) {
                    currentPlayers[0].textContent = currentScore
                    actualPlayer = 1
                } else {
                    currentPlayers[1].textContent = currentScore
                    actualPlayer = 0
                }
            } else {
                currentScore += diceValue
                currentPlayers[actualPlayer].textContent = currentScore
            }    
        })
    }

    /*--- Fonction Dé random 
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
    ---*/

    
    const holdGame = () => {
        holdDice.addEventListener('click', () => {
                if (actualPlayer == 0) {
                    globalScoreP1 += currentScore
                    globalPlayers[0].textContent = globalScoreP1
                    currentScore = 0
                    currentPlayers[0].textContent = currentScore
                    actualPlayer = 1
                } else {
                    globalScoreP2 += currentScore
                    globalPlayers[1].textContent = globalScoreP2
                    currentScore = 0
                    currentPlayers[1].textContent = currentScore
                    actualPlayer = 0
                }
        })
    }



    playDice()
    holdGame()
    playNewGame()

}







