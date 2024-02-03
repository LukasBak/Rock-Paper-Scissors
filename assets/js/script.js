// Game variables //

const possibleChoices = ["rock", "paper", "scissors"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const userChoice = document.getElementById("userChoice");

// Event listeners //

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function () {
  determineWinner("rock");
});
paperButton.addEventListener("click", function () {
  determineWinner("paper");
});
scissorsButton.addEventListener("click", function () {
  determineWinner("scissors");
});

// Random number generation between 0 and 2 //

function getComputerChoice() {
  const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Playing game using user's choice vs randomComputerChoice //
// @param {string} userChoice - The user's choice -- one of  rock, paper or scissors//

function determineWinner(userChoice) {
  const computerChoice = getComputerChoice();
  let winner;
  if (userChoice === computerChoice) { 
    winner = "tie";
  } else if ((userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")) { 
      winner = "user";
  } else { winner = "computer"; }
  checkWinner(winner)
}

//* Check winner and increment the score *//

function checkWinner(winner) {
  let userWin = winner === "user";
  let computerWin = winner === "computer";
  let tieWin = winner === "tie";
if (userWin === true){
  incrementUserScore();
} else if(computerWin === true){
  incrementComputerScore();
} else if (tieWin === true) {
  incrementTiedScore();}
}

//* Increment User score *//
function incrementUserScore() {
  let oldUserScore = parseInt(document.getElementById("userScoreDisplay").innerText);
  document.getElementById("userScoreDisplay").innerText = ++oldUserScore;
}

//* Increment Computer Score *//
function incrementComputerScore() {
  let oldComputerScore = parseInt(document.getElementById("computerScoreDisplay").innerText);
  document.getElementById("computerScoreDisplay").innerText = ++oldComputerScore;
}

//* Increment Tied Score *//
function incrementTiedScore() {
  let oldTiedScore = parseInt(document.getElementById("tiedScoreDisplay").innerText);
  document.getElementById("tiedScoreDisplay").innerText = ++oldTiedScore;
}

