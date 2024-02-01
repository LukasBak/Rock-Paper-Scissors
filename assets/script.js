// Game variables //

const possibleChoices = ["rock", "paper", "scissors"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const userChoice = document.getElementById("userChoice")


// Random number between 0 and 2 //
    const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];

    