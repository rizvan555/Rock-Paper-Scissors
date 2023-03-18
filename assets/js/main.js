const userWindow = document.querySelector(".user-window");
const compWindow = document.querySelector(".comp-window");
const round5 = document.querySelector(".round5__container");
const round10 = document.querySelector(".round10__container");
const round15 = document.querySelector(".round15__container");
const round20 = document.querySelector(".round20__container");
const userCountDisplay = document.querySelector(".user-count");
const compCountDisplay = document.querySelector(".comp-count");
const startCommand = document.querySelector(".start-command");
const stoneButton = document.querySelector(".stone");
const paperButton = document.querySelector(".paper");
const shearsButton = document.querySelector(".shears");
const restartButton = document.querySelector(".restart");

let playerScore = 0; //Variablen in diesem Code (playerScore, computerScore, round) sind so definiert, dass sie den Spielstand und die Anzahl der Runden enthalten.
let computerScore = 0;
let round = 0;

//Diese Funktion unten(payGame) bestimmt das Ergebnis des Spiels basierend auf der Wahl des Spielers und der zufälligen Wahl des Computers. Die Parameter playerSelection und computerSelection sind der Zug, den der Benutzer auswählt, und der Zug, den der Computer zufällig auswählt. Die Funktion gibt einen Wert zurück, wenn der Spieler gewinnt, verliert oder unentschieden spielt.

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "stone" && computerSelection === "shears") ||
    (playerSelection === "paper" && computerSelection === "stone") ||
    (playerSelection === "shears" && computerSelection === "paper")
  ) {
    playerScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

const moves = ["stone", "paper", "shears"]; //  Dieser Code definiert eine Liste von Aktionen, aus denen der Spieler wählen kann

function makeSelection(playerSelection) {
  const computerSelection = moves[Math.floor(Math.random() * 3)]; // Dieser Code bewirkt, dass der Computer einen zufälligen Zug auswählt.
  const result = playGame(playerSelection, computerSelection); // Dieser Code berechnet das Ergebnis des Spiels basierend auf der Wahl des Spielers und der Wahl des Computers.

  userWindow.innerHTML = playerSelection;
  compWindow.innerHTML = computerSelection;
  round++;

  if (result === "win") {
    userCountDisplay.innerHTML = parseInt(userCountDisplay.innerHTML) + 1;
  } else if (result === "lose") {
    compCountDisplay.innerHTML = parseInt(compCountDisplay.innerHTML) + 1;
  }

  if (round === 5) {
    if (playerScore > computerScore) {
      startCommand.innerHTML = "You win!";
    } else if (computerScore > playerScore) {
      startCommand.innerHTML = "Computer wins!";
    } else {
      startCommand.innerHTML = "It's a tie!";
    }
    stoneButton.disabled = true;
    paperButton.disabled = true;
    shearsButton.disabled = true;
  } else if (round === 10) {
    if (playerScore > computerScore) {
      startCommand.innerHTML = "You win!";
    } else if (computerScore > playerScore) {
      startCommand.innerHTML = "Computer wins!";
    } else {
      startCommand.innerHTML = "It's a tie!";
    }
    stoneButton.disabled = true;
    paperButton.disabled = true;
    shearsButton.disabled = true;
  } else if (round === 15) {
    if (playerScore > computerScore) {
      startCommand.innerHTML = "You win!";
    } else if (computerScore > playerScore) {
      startCommand.innerHTML = "Computer wins!";
    } else {
      startCommand.innerHTML = "It's a tie!";
    }
    stoneButton.disabled = true;
    paperButton.disabled = true;
    shearsButton.disabled = true;
  } else if (round === 20) {
    if (playerScore > computerScore) {
      startCommand.innerHTML = "You win!";
    } else if (computerScore > playerScore) {
      startCommand.innerHTML = "Computer wins!";
    } else {
      startCommand.innerHTML = "It's a tie!";
    }
    stoneButton.disabled = true;
    paperButton.disabled = true;
    shearsButton.disabled = true;
  }
}

const clickStone = () => {
  makeSelection("stone");
};
const clickPaper = () => {
  makeSelection("paper");
};
const clickShears = () => {
  makeSelection("shears");
};

restartButton.addEventListener("click", function () {
  location.reload();
});


