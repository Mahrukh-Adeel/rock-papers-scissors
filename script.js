function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
        if (['rock', 'paper', 'scissors'].includes(choice)) {
            return choice;
        }
        console.log("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("You lose this round!");
        computerScore++;
    }
}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!");
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);
        console.log(`Current Score: You(${humanScore}) - Computer(${computerScore})`);
        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("\nGame Over!");
    console.log(`Final Score: You(${humanScore}) - Computer(${computerScore})`);
    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
