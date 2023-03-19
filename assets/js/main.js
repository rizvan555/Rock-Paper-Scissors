const userWindow = document.querySelector(".user-window");
const compWindow = document.querySelector(".comp-window");
const round5 = document.querySelector(".round5");
const round10 = document.querySelector(".round10");
const round15 = document.querySelector(".round15");
const round20 = document.querySelector(".round20");
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
const buttons = [stoneButton, paperButton, shearsButton];
const moves = ["stone", "paper", "shears"]; //  Dieser Code definiert eine Liste von Aktionen, aus denen der Spieler wählen kann

//Diese Funktion unten(payGame) bestimmt das Ergebnis des Spiels basierend auf der Wahl des Spielers und der zufälligen Wahl des Computers. Die Parameter playerSelection und computerSelection sind der Zug, den der Benutzer auswählt, und der Zug, den der Computer zufällig auswählt. Die Funktion gibt einen Wert zurück, wenn der Spieler gewinnt, verliert oder unentschieden spielt.
function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
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
    const winMessage =
      playerScore > computerScore
        ? "You win!"
        : computerScore > playerScore
        ? "Computer wins!"
        : "It's a tie!";
    startCommand.innerHTML = winMessage;
    round5.disabled = true;
    buttons.forEach((button) => (button.disabled = true));
  } else if (round === 10) {
    const winMessage =
      playerScore > computerScore
        ? "You win!"
        : computerScore > playerScore
        ? "Computer wins!"
        : "It's a tie!";
    startCommand.innerHTML = winMessage;
    round10.disabled = true;
    buttons.forEach((button) => (button.disabled = true));
  } else if (round === 15) {
    const winMessage =
      playerScore > computerScore
        ? "You win!"
        : computerScore > playerScore
        ? "Computer wins!"
        : "It's a tie!";
    startCommand.innerHTML = winMessage;
    round15.disabled = true;
  } else if (round === 20) {
    const winMessage =
      playerScore > computerScore
        ? "You win!"
        : computerScore > playerScore
        ? "Computer wins!"
        : "It's a tie!";
    startCommand.innerHTML = winMessage;
    round20.disabled = true;
    buttons.forEach((button) => (button.disabled = true));
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
