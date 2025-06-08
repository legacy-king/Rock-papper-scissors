let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById('results');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `It's a tie! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function updateResults(message) {
  resultsDiv.innerHTML = `
    <p>${message}</p>
    <p>Score: You ${playerScore} - Computer ${computerScore}</p>
  `;

  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? "🎉 You won the game!"
        : "😢 The computer won the game!";
    resultsDiv.innerHTML += `<h2>${winner}</h2>`;
    disableButtons();
  }
}

function handlePlayerChoice(choice) {
  if (playerScore < 5 && computerScore < 5) {
    const computerChoice = getComputerChoice();
    const result = playRound(choice, computerChoice);
    updateResults(result);
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => handlePlayerChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handlePlayerChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => handlePlayerChoice("scissors"));

