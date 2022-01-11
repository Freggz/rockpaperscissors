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
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
    return "Tie";
} else 
    return "Please enter rock, paper or scissors.";
}

function game() {
    playRound(playerSelection, computerSelection)
    console.log("Player Score: ", playerScore) 
    console.log("Computer Score: ",computerScore)
    playRound(playerSelection, computerSelection)
    console.log("Player Score: ", playerScore) 
    console.log("Computer Score: ",computerScore)
    playRound(playerSelection, computerSelection)
    console.log("Player Score: ", playerScore) 
    console.log("Computer Score: ",computerScore)
    playRound(playerSelection, computerSelection)
    console.log("Player Score: ", playerScore) 
    console.log("Computer Score: ",computerScore)
    playRound(playerSelection, computerSelection)
    console.log("Player Score: ", playerScore) 
    console.log("Computer Score: ",computerScore)
}

//Create function for player to input rock, paper or scissors
const playerSelection = prompt("Let's play rock, paper, scissors. GO!");
const computerSelection = computerPlay();

console.log(game());


