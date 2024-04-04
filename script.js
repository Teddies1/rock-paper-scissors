function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * array.length); 
    return array[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    // your code here!
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
