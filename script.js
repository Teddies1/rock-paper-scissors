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

    let playerChoice = '';
    let computerSelection = getComputerChoice();
    let result = playRound(playerChoice, computerSelection);

    let buttons = document.querySelectorAll("button");
    

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerChoice = button.textContent.toLowerCase();
            console.log(playerChoice);
        });
    });


}

playGame();


