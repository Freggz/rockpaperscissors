//Create function for computer to randomly select rock, paper or scissors
const choices = ['rock','paper','scissors'];

function computerPlay(choices) {
  return choices[Math.floor(Math.random() * choices.length)]
}

//console.log(computerPlay(choices)) - it works!









//Create function for player to input rock, paper or scissors
//Play a round between player selection vs computer selection
//Create function to play 5 rounds and declare a winner