//Create function for computer to randomly select rock, paper or scissors
let playerScore = 0
let computerScore = 0

const choices = ['rock','paper','scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//Play a round between player selection vs computer selection

function playRound(playerSelection, computerSelection) {
if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return "You lose! Paper beats rock.";
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
    playerScore++; 
    return "You win! Rock beats scissors.";
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
    playerScore++; 
    return "You win! Paper beats rock.";
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return "You lose! Scissors beats paper.";
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
    playerScore++; 
    return "You win! Scissors beats paper.";
} else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return "You lose! Rock beats scissors.";
} else 
    return "Tie."
}

//Create function to play 5 rounds and declare a winner
function game () {
    if (playerScore + computerScore <=5) {   
        playRound(playerSelection, computerSelection)
    } else if (playerScore + computerScore <=5) {
        playRound(playerSelection, computerSelection)
    } else if (playerScore + computerScore <=5) {
        playRound(playerSelection, computerSelection)
    } else if (playerScore + computerScore <=5) {
        playRound(playerSelection, computerSelection)
    } else if (playerScore + computerScore <=5) {
        playRound(playerSelection, computerSelection)
    } else
        return "Final Score: Player: ${playerScore}, ${computerScore}"
}

//Create function for player to input rock, paper or scissors
const playerSelection = prompt("Let's play rock, paper, scissors. GO!");
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
console.log("Player Score: ", playerScore) 
console.log("Computer Score: ",computerScore)

