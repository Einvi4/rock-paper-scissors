
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