
function getComputerChoice() {
    // rock = 0;
    // paper = 1;
    // scissors = 2;
    const choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    }else {
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    const playerLowerCase = playerSelection.toLowerCase();

    if (computerSelection === "rock") {
        if (playerLowerCase === "rock") {
            return `Tie ${computerSelection} equals ${playerSelection}`;
        }else if (playerLowerCase === "paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }else if (computerSelection === "paper") {
        if (playerLowerCase === "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }else if (playerLowerCase === "paper") {
            return `Tie ${computerSelection} equals ${playerSelection}`;
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if (playerLowerCase === "rock") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }else if (playerLowerCase === "paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `Tie ${computerSelection} equals ${playerSelection}`;
        }
    }
}


function gameResult(playerResult, pcResult) {
    if (playerResult > pcResult) {
        return(`You Win. Player Score: ${playerResult} Computer Score: ${pcResult}`);
    }else if (playerResult < pcResult) {
        return (`You Lose. Player Score: ${playerResult} Computer Score: ${pcResult}`);
    }else {
        return (`The result is a tie. Player Score: ${playerResult} Computer Score: ${pcResult}`);
    }
}

function game() {
    let playerScore = 0;
    let pcScore = 0;

    for (let i = 0; i < 5; i++) {

        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter rock, paper or scissors:").toLowerCase();
        let result = playRound(playerSelection, computerSelection);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            pcScore++;
        }
        console.log(result);   
        
    }
    console.log(gameResult(playerScore, pcScore));
}

game();