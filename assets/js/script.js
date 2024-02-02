// Game variables //

const possibleChoices = ["rock", "paper", "scissors"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const userChoice = document.getElementById("userChoice");

let userScoreDisplay = 0;
let computerScoreDisplay = 0;
let tiedScoreDisplay = 0;

// Random number between 0 and 2 //

function getComputerChoice() {

    const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

console.log(computerChoice());

// Event listeners //

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', function () {
    determineWinner('rock');
});
paperButton.addEventListener('click', function () {
    determineWinner('paper');
});
scissorButton.addEventListener('click', function () {
    determineWinner('scissors');
});

// Playing game using user's coice vs randomComputerChoice //
// @param {string} userChoice - The user's choice -- one of  rock, paper or scissors//
function determineWinner(userChoice) {
    let computerChoice = getComputerChoice();
    let winner;

    if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            winner = 'computer';
        }
        else if (computerChoice == 'scissors') {
            winner = 'user';
        }
        else {
            winner = 'tie';
        }
    }
    else if (userChoice == 'paper') {
        if (computerChoice == 'rock') {
            winner = 'user';
        }
        else if (computerChoice == 'scissors') {
            winner = 'computer';
        }
        else {
            winner = 'tie';
        }
    }
    else {
        if (userChoice == 'scissors') {
            if (computerChoice == 'paper')
                winner = 'user';
        }
        else if (computerChoice == 'rock') {
            winner = 'computer';
        }
        else {
            winner = 'tie';
        }
    }
    if (winner = 'user') {
        userScoreDisplay = userScoreDisplay + 1;
    }
    if (winner = 'computer') {
        computerScoreDisplay = computerScoreDisplay + 1;
    }
    if (winner = 'tie') {
        tiedScoreDisplay = tiedScoreDisplay + 1;
    }
}
console.log(computerChoice);