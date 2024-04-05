function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * array.length); 
    return array[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "rock"){
            return 0
        }
        else if (computerSelection === "scissors"){
            return 1
        }
        else{
            return -1
        }
    }
    else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "scissors"){
            return 0
        }
        else if (computerSelection === "rock"){
            return -1
        }
        else{
            return 1
        }
    }
    else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "paper"){
            return 0
        }
        else if (computerSelection === "scissors"){
            return -1
        }
        else{
            return 1
        }
    }
}

function playGame(){  
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Choose either rock, paper or scissors!");
        let computerSelection = getComputerChoice();
        let result = playRound(playerChoice, computerSelection);

        if (result === 1){
            console.log("Player wins this round!");
            playerScore++;
        }
        else if (result === 0){
            console.log("This round is a tie!");
        }
        else{
            console.log("Player loses this round!");
            computerScore++;;
        }
    }
    
    if (playerScore > computerScore){
        return "Player wins!";
    }
    else if (computerScore > playerScore){
        return "Player loses!";
    }
    else{
        return "It's a draw!"
    }
}

console.log(playGame());