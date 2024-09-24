let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';
let ties = 0;

document.addEventListener('DOMContentLoaded', function () {
  // Get score elements from the DOM
  const playerScoreElement = document.querySelector('.player-score');
  const computerScoreElement = document.querySelector('.computer-score');
  const tiesElement = document.querySelector('.ties');

  // Create the rock variable
  let rock = document.querySelector('.rock');
  if (rock) {
    rock.addEventListener('click', function () {
      playerChoice = 'rock';
      playGame();
    });
  } 
  
  else {
    console.error('Element with class .rock not found!');
  }

  // Create the paper variable
  let paper = document.querySelector('.paper');
  if (paper) {
    paper.addEventListener('click', function () {
      playerChoice = 'paper';
      playGame();
    });
  } 
  
  else {
    console.error('Element with class .paper not found!');
  }

  // Create the scissors variable
  let scissors = document.querySelector('.scissors');
  if (scissors) {
    scissors.addEventListener('click', function () {
      playerChoice = 'scissors';
      playGame();
    });
  } 
  
  else {
    console.error('Element with class .scissors not found!');
  }

  // Computer makes choice at random
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Play the game and update scores
  function playGame() {
    let resultMessage = '';
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
      ties++;
      resultMessage = `Player chose: ${playerChoice}, Computer chose: ${computerChoice}. \nIt's a tie!`;
      alert(resultMessage)
    } 
    
    else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      playerScore++;
      resultMessage = `Player chose: ${playerChoice}, Computer chose: ${computerChoice}. \nPlayer Wins!`;
      alert(resultMessage)
    } 
    
    else {
      computerScore++;
      resultMessage = `Player chose: ${playerChoice}, Computer chose: ${computerChoice}.\nComputer Wins!`;
      alert(resultMessage)
    }
    
    // Update the scores in the DOM
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    tiesElement.textContent = `Ties: ${ties}`;
  }
});