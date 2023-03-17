const unserWindow = document.querySelector(".user-window");
const compWindow = document.querySelector(".comp-window");
const count5 = document.querySelector(".count-5");
const count10 = document.querySelector(".count-10");
const count15 = document.querySelector(".count-15");
const count20 = document.querySelector(".count-20");
const userCountDisplay = document.querySelector(".user-count");
const compCountDisplay = document.querySelector(".comp-count");
const startCommand = document.querySelector(".start-command");
const stoneButton = document.querySelector(".stone");
const paperButton = document.querySelector(".paper");
const shearsButton = document.querySelector(".shears");
const restartButton = document.querySelector(".restart");

let playerScore = 0;
let computerScore = 0;
const moves = ["stone", "paper", "shears"];
unserWindow.innerHTML = playerScore;
compWindow.innerHTML = computerScore;

function playRound(playerSelection, computerSelection) {
  for (let index = 0; index <= 5; index++) {
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
}

let round = 0;

function makeSelection(selection) {
  const computerSelection = moves[Math.floor(Math.random() * 3)];
  const result = playRound(selection, computerSelection);
  unserWindow.innerHTML = selection;
  compWindow.innerHTML = computerSelection;
  round++;

  if (result === "win") {
    userCountDisplay++;
  } else if (result === "lose") {
    compCountDisplay++;
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
