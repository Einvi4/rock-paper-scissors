const buttons = document.querySelectorAll("button");
const divResult = document.querySelector(".results");
const divScore = document.querySelector(".score");
const divFinal = document.querySelector(".final");

function getComputerChoice() {
    // rock = 0;
    // paper = 1;
    // scissors = 2;
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const playerLowerCase = playerSelection.toLowerCase();

    if (computerSelection === "rock") {
        if (playerLowerCase === "rock") {
            divResult.textContent = `Tie ${computerSelection} equals ${playerSelection}`;
            return `Tie ${computerSelection} equals ${playerSelection}`;
        } else if (playerLowerCase === "paper") {
            divResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            divResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (computerSelection === "paper") {
        if (playerLowerCase === "rock") {
            divResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (playerLowerCase === "paper") {
            divResult.textContent = `Tie ${computerSelection} equals ${playerSelection}`;
            return `Tie ${computerSelection} equals ${playerSelection}`;
        } else {
            divResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if (playerLowerCase === "rock") {
            divResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerLowerCase === "paper") {
            divResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            divResult.textContent = `Tie ${computerSelection} equals ${playerSelection}`;
            return `Tie ${computerSelection} equals ${playerSelection}`;
        }
    }
}


function gameResult(playerResult, pcResult) {
    if (playerResult > pcResult) {
        return (`You Win. Player Score: ${playerResult} Computer Score: ${pcResult}`);
    } else if (playerResult < pcResult) {
        return (`You Lose. Player Score: ${playerResult} Computer Score: ${pcResult}`);
    } else {
        return (`The result is a tie. Player Score: ${playerResult} Computer Score: ${pcResult}`);
    }
}

function game() {
    let playerScore = 0;
    let pcScore = 0;
    let result;

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            result = playRound(button.className, getComputerChoice())
            if (result.includes("win")) {
                playerScore++;

                if (playerScore === 5 || pcScore === 5) {
                    buttons.forEach(btn => {
                        btn.disabled = true;
                        divFinal.textContent = gameResult(playerScore, pcScore);
                    });
                }
            } else if (result.includes("lose")) {
                pcScore++;

                if (playerScore === 5 || pcScore === 5) {
                    buttons.forEach(btn => {
                        btn.disabled = true;
                        divFinal.textContent = gameResult(playerScore, pcScore);
                    });
                }
            }


            divScore.textContent = `Player Score: ${playerScore} Computer Score: ${pcScore}`;

        });
    });

}

game();