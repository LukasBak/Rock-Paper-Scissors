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
  console.log(rockButton);
});
paperButton.addEventListener("click", function () {
  determineWinner("paper");
  console.log(paperButton);
});
scissorsButton.addEventListener("click", function () {
  determineWinner("scissors");
  console.log(scissorsButton);
});

// Random number generation between 0 and 2 //

function getComputerChoice() {
  const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Playing game using user's choice vs randomComputerChoice //
// @param {string} userChoice - The user's choice -- one of  rock, paper or scissors//
function determineWinner(userChoice) {
  let computerChoice = getComputerChoice();
  let winner;

  if (userChoice == "rock") {
    if (computerChoice == "paper") {
      winner = "computer";
    } else if (computerChoice == "scissors") {
      winner = "user";
    } else {
      winner = "tie";
    }
    if (computerChoice == "rock") {
      winner = "user";
    } else if (computerChoice == "scissors") {
      winner = "computer";
    } else {
      winner = "tie";
    }
  } else {
    if (userChoice == "scissors") {
      if (computerChoice == "paper") winner = "user";
    } else if (computerChoice == "rock") {
      winner = "computer";
    } else {
      winner = "tie";
    }
  }
}

console.log(getComputerChoice());
