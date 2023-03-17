const unserWindow = document.querySelector(".user-window");
const compWindow = document.querySelector(".comp-window");
const userCountDisplay = document.querySelector(".user-count");
const compCountDisplay = document.querySelector(".comp-count");
const startCommand = document.querySelector(".start-command");
const stoneButton = document.querySelector(".stone");
const paperButton = document.querySelector(".paper");
const shearsButton = document.querySelector(".shears");
const restartButton = document.querySelector(".restart");
// const roundsForm = document.querySelector(".rounds-section");
// const userCompSection = document.querySelector(".user-comp__section");
// const buttonContainer = document.querySelector(".button-container");
let playerScore = 0;
let computerScore = 0;
const moves = ["stone", "paper", "shears"];
unserWindow.innerHTML = playerScore;
compWindow.innerHTML = computerScore;

function playRound(playerSelection, computerSelection) {
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

const startCommands = () => {
  roundsForm.classList.add("hidden");
  userCompSection.classList.remove("hidden");
  buttonContainer.classList.remove("hidden");
};

function makeSelection(selection) {
  const computerSelection = moves[Math.floor(Math.random() * 3)];
  const result = playRound(selection, computerSelection);
  unserWindow.innerHTML = selection;
  compWindow.innerHTML = computerSelection;
  if (result === "win") {
    userCountDisplay.innerHTML = parseInt(userCountDisplay.innerHTML) + 1;
  } else if (result === "lose") {
    compCountDisplay.innerHTML = parseInt(compCountDisplay.innerHTML) + 1;
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
