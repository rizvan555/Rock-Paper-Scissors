const roundsSection = document.querySelector(".rounds-section");
const inputRadio = document.querySelector('input[name="rounds"]:checked');
const userScore_span = document.querySelector(".user-count");
const computerScore_span = document.querySelector(".comp-count");
const scoreBoard_div = document.querySelector(".user-comp__section");
const result_p = document.querySelector(".start-command");
const rock_div = document.querySelector(".stone");
const paper_div = document.querySelector(".paper");
const scissors_div = document.querySelector(".scissors");

let userScore = 0;
let computerScore = 0;
let gameRounds = 0;

function getComputerPlay() {
  const choices = ["stone", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(word) {
  if (word === "stone") return "Stone";
  if (word === "paper") return "Paper";
  if (word === "scissors") return "Scissors";
}

function win(userPlayer, computerPlayer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userPlayer)} beats ${convertToWord(
    computerPlayer
  )}.`;
}

function lose(userPlayer, computerPlayer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userPlayer)} loses to ${convertToWord(
    computerPlayer
  )}.`;
}

function draw(userPlayer, computerPlayer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userPlayer)} ties with ${convertToWord(
    computerPlayer
  )}.`;
}

function game(userPlayer) {
  const computerPlayer = getComputerPlay();
  switch (userPlayer + computerPlayer) {
    case "stonescissors":
    case "paperstone":
    case "scissorspaper":
      win(userPlayer, computerPlayer);
      break;
    case "scissorsstone":
    case "stonespaper":
    case "paperscissors":
      lose(userPlayer, computerPlayer);
      break;
    case "stonestone":
    case "paperpaper":
    case "scissorsscissors":
      draw(userPlayer, computerPlayer);
      break;
  }

  gameRounds++;
  if (gameRounds >= numRounds) {
    if (userScore > computerScore) {
      result_p.innerHTML = `You win!`;
    } else if (computerScore > userScore) {
      result_p.innerHTML = `Computer wins!`;
    } else {
      result_p.innerHTML = `It's a tie!`;
    }
    rock_div.disabled = true;
    paper_div.disabled = true;
    scissors_div.disabled = true;
  }
}

function mainSelection() {
  rock_div.addEventListener("click", function () {
    game("stone");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

mainSelection();

