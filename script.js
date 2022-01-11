//Create function for computer to randomly select rock, paper or scissors
const choices = ['rock','paper','scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//console.log(computerPlay(choices)) 

//Create function for player to input rock, paper or scissors
//Play a round between player selection vs computer selection

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors";
    } else 
        return "Draw"
    }
   
const playerSelection = 'scissors';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


//Create function to play 5 rounds and declare a winner