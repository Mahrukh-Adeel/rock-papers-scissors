function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let humanScore = 0;
let computerScore = 0;
let computerChoice;
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const annDiv = document.getElementById('ann');

function playRound(humanChoice, computerChoice) {
    resultDiv.innerHTML = `You chose: ${humanChoice}`;
    resultDiv.innerHTML += `<br>Computer chose: ${computerChoice}`;
    
    if (humanChoice === computerChoice) {
        resultDiv.innerHTML += "<br>It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.innerHTML += "<br>You win this round!";
        humanScore++;
    } else {
        resultDiv.innerHTML += "<br>You lose this round!";
        computerScore++;
    }
}

function playGame(humanChoice) {
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    scoreDiv.innerHTML = `Score: You (${humanScore}) - Computer (${computerScore})`;
    
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    if (humanScore > computerScore) {
        annDiv.innerHTML = 'Congratulations, you won the game!';
    } else if (computerScore > humanScore) {
        annDiv.innerHTML = 'You lost the game!';
    } else {
        annDiv.innerHTML = 'It\'s a tie!';
    }

    // Disable buttons
    ['rock-btn', 'paper-btn', 'scissors-btn'].forEach(btnId => {
        document.getElementById(btnId).disabled = true;
        document.getElementById(btnId).classList.add('disabled');
    });

    annDiv.innerHTML += '<br><button onclick="reloadGame()">Play Again</button>';
}

function reloadGame() {
    location.reload();
}