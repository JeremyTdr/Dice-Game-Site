window.onload = () => {
  /*--- Variables pour les différents éléments du plateau de jeu ---*/
  const newGame = document.getElementById("new_game");
  let player1 = document.querySelector(".player1");
  let player2 = document.querySelector(".player2");
  const player = document.querySelectorAll(".player");
  let globalPlayers = document.querySelectorAll(".player-score");
  let dice = document.querySelector(".dice-img");
  let currentPlayers = document.querySelectorAll(".current-score");
  const rollDice = document.getElementById("roll-dice");
  const holdDice = document.getElementById("hold-dice");
  const mainBoard = document.querySelector(".main-board");
  const winModal = document.querySelector(".win-modal");
  let winnerGame = document.getElementById("winner-game");
  const closeModal = document.querySelector(".close");
  const modalNewGame = document.getElementById("modal-newgame");

  /*--- Tableau et variable des images du Dé ---*/
  let images = [
    "dice-1.svg",
    "dice-2.svg",
    "dice-3.svg",
    "dice-4.svg",
    "dice-5.svg",
    "dice-6.svg",
  ];
  let diceImg = document.querySelector(".dice-img");

  /*--- Variables supplémentaires pour les algos ---*/
  let globalScoreP1 = 0;
  let globalScoreP2 = 0;
  let currentScore = 0;
  let actualPlayer = 0;

  /*--- Fonction Play ---*/
  const playGame = () => {
    initGame();
    playDice();
    holdGame();
    playNewGame();
  };

  /*--- Fonction Initialization ---*/
  const initGame = () => {
    globalScoreP1 = 0;
    globalScoreP2 = 0;
    currentScore = 0;
    actualPlayer = 0;

    globalPlayers.forEach((globalPlayer) => {
      globalPlayer.textContent = 0;
    });
    currentPlayers.forEach((currentPlayer) => {
      currentPlayer.textContent = 0;
    });

    switchToPlayer1();

    diceImg.src = "./images/dice-6.svg";
  };

  /*--- Fonction Roll dice ---*/
  const playDice = () => {
    rollDice.addEventListener("click", () => {
      diceImg.classList.add("animate");
      setTimeout(() => {
        diceImg.classList.remove("animate");
      }, 500);
      let diceValue = Math.floor(Math.random() * 6) + 1;
      diceImg.src = `./images/dice-${diceValue}.svg`;

      if (diceValue === 1) {
        currentScore = 0;
        if (actualPlayer == 0) {
          currentPlayers[0].textContent = currentScore;
          switchToPlayer2();
        } else {
          currentPlayers[1].textContent = currentScore;
          switchToPlayer1();
        }
      } else {
        currentScore += diceValue;
        currentPlayers[actualPlayer].textContent = currentScore;
      }
    });
  };

  /*--- Fonction Hold button ---*/
  const holdGame = () => {
    holdDice.addEventListener("click", () => {
      if (actualPlayer == 0) {
        globalScoreP1 += currentScore;
        globalPlayers[0].textContent = globalScoreP1;
        currentScore = 0;
        currentPlayers[0].textContent = currentScore;
        switchToPlayer2();
      } else {
        globalScoreP2 += currentScore;
        globalPlayers[1].textContent = globalScoreP2;
        currentScore = 0;
        currentPlayers[1].textContent = currentScore;
        switchToPlayer1();
      }
      winnerModal();
    });
  };

  /*--- Fonction New Game ---*/
  const playNewGame = () => {
    newGame.addEventListener("click", () => {
      initGame();
    });
  };

  /*--- Fonction Switch Players ---*/
  const switchToPlayer1 = () => {
    player[1].classList.remove("active");
    player[0].classList.add("active");
    mainBoard.style.background =
      "linear-gradient(90deg, #cccccc 50%, #ffffff 50%)";
    actualPlayer = 0;
  };

  const switchToPlayer2 = () => {
    player[0].classList.remove("active");
    player[1].classList.add("active");
    mainBoard.style.background =
      "linear-gradient(270deg, #cccccc 50%, #ffffff 50%)";
    actualPlayer = 1;
  };

  /*--- Fonction Winner Modal & boutons du modal ---*/
  const winnerModal = () => {
    if (globalScoreP1 >= 20 || globalScoreP2 >= 20) {
      winModal.style.display = "block";
      if (globalScoreP1 >= 20) {
        winnerGame.textContent = "Player 1 win this game";
      } else {
        winnerGame.textContent = "Player 2 win this game";
      }

      closeModal.addEventListener("click", () => {
        winModal.style.display = "none";
      });
      modalNewGame.addEventListener("click", () => {
        initGame();
        winModal.style.display = "none";
      });
    }
  };

  playGame();
};
