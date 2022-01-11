//Create function for computer to randomly select rock, paper or scissors
const choices = ['rock','paper','scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//console.log(computerPlay(choices)) 

//Create function for player to input rock, paper or scissors
//Play a round between player selection vs computer selection

  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock.";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock.";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper.";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors.";
    } else 
        return "Tie."
    }
   
const playerSelection = prompt("Let's play rock, paper, scissors. GO!");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


//Create function to play 5 rounds and declare a winner