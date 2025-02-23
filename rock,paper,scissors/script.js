const options = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".rps")
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

playerScoreDisplay.style.color = "rgb(71, 208, 68)";
computerScoreDisplay.style.color = "rgb(226, 57, 45)";

const resultDisplay = document.querySelector("#displayResult");
const gameOverDisplay = document.querySelector("#displayGameOver");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  return options[Math.floor(Math.random() * options.length)];
}



function checkWinner(playerSelection, computerSelection){
 if(playerSelection === computerSelection){
  return "Tie"
 }
 else if(playerSelection === "rock" && computerSelection === "scissors"||
  playerSelection === "scissors" && computerSelection === "paper"||
  playerSelection === "paper" && computerSelection === "rock"
 ){
  return "Player"

 }
 else{
  return "Computer"

 }
}

buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
  
    if(playerScore < 5 && computerScore < 5){
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();

      playerDisplay.textContent = `Player: ${playerSelection}`;
      computerDisplay.textContent = `Computer: ${computerSelection}`;
    
     const winner = checkWinner(playerSelection,computerSelection);

      if(winner === "Player"){
        playerScore++
        resultDisplay.textContent = "YOU WON!";
        resultDisplay.style.color = "rgb(71, 208, 68)";
      }
      else if(winner === "Computer"){
        computerScore++
        resultDisplay.textContent = "YOU LOSE!";
        resultDisplay.style.color = "rgb(226, 57, 45)";
      }
      else{
        resultDisplay.textContent = "IT IS A TIE!";
        resultDisplay.style.color = "rgb(97, 97, 97)"
      }

      playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
      computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

      
      if(playerScore === 5){
        gameOverDisplay.textContent = `Game over! You Have Won 5 rounds!`;
      buttons.forEach(button => button.disabled = true);
      }
      else if(playerScore === 5){
        gameOverDisplay.textContent = `Game over! Computer Have Won 5 rounds!`;
      buttons.forEach(button => button.disabled = true);
      }
    }
  });
});
  















































