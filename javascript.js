function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "scissors")
        ) {
            return `You win! ${playerSelection} beats ${computerSelection}.`;

        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;

        }
}

function game() {
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors");
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);

    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        computerScore++;
    }

    if (playerScore > computerScore) {
        alert(`You win! Player beats Computer. Final Score: ${playerScore}-${computerScore}`);

    } else if (playerScore < computerScore) {
        alert(`Sorry, you lose! Final score: ${playerScore}-${computerScore}`);

    } else {
        alert(`It'sa tie! Final Score: ${playerScore}-${computerScore}`);
    }
}
}
game();