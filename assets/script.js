// Game variables //

const possibleChoices = ["rock", "paper", "scissors"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const userChoice = document.getElementById("userChoice")

// Random number between 0 and 2 //
function getComputerChoice(){

const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
return computerChoice
}

// Event listeners //

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click',function (){
    determineWinner('rock')
})
paperButton.addEventListener('click', function () {
    determineWinner('paper');
});
scissorButton.addEventListener('click', function (){
    determineWinner('scissors')
})

