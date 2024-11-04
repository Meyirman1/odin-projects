console.log("Hi , welcome to the GAME");

const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function getPlayerChoice() {

  let validatedInput = false;
  while (validatedInput === false) {
    const choice = window.prompt("Rock , Paper or Scissors?");
    if (choice === null) {
      continue
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }

}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
  ) {
    return "Player";
  }
  else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "TIE") {
    return "It's TIE!"
  }
  else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else if (result == "Computer") {
    return `Computer wins! ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) === "Player") {
      playerScore++;
    }
    else if (checkWinner(playerSelection, computerSelection) === "Computer") {
      computerScore++;
    }
  }
  console.log("_________________");
  console.log("GAME OVER!");
  if (playerScore > computerScore) {
    console.log("YOU ARE THE WINNER!");
  }
  else if (playerScore < computerScore) {
    console.log("COMPUTER IS THE WINNER!");
  }
  else {
    console.log("IT'S TIE between you and computer");
  }
}
playGame();

