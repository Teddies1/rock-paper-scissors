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

    let playerdiv = document.querySelector(".player-results");
    let computerdiv = document.querySelector(".computer-results");

    let pScore = document.createElement("div");
    pScore.textContent = playerScore;
    playerdiv.appendChild(pScore);

    let cScore = document.createElement("div");
    cScore.textContent = computerScore;
    computerdiv.appendChild(cScore);
    
    let buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let playerChoice = button.textContent.toLowerCase();
            let result = playRound(playerChoice, getComputerChoice());

            if (result === 1){
                console.log("Player wins this round!");
                playerScore++;
                pScore.textContent = playerScore;
                playerdiv.appendChild(pScore);
            }
            else if (result === 0){
                console.log("This round is a tie!");
            }
            else{
                console.log("Player loses this round!");
                computerScore++;
                cScore.textContent = computerScore;
                computerdiv.appendChild(cScore);
            }
            console.log(playerScore, computerScore);

            if (playerScore === 5){
                let winner = document.querySelector(".winner-text");
                winner.textContent = "Player wins!";
            }
            if (computerScore === 5){
                let winner = document.querySelector(".winner-text");
                winner.textContent = "Computer wins!";
            }
        });
    });
}

playGame();


