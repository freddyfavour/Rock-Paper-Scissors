let para = document.getElementById("message");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let main = document.getElementById("main");
let restart = document.getElementById("restart");
let announce = document.getElementById("announce");
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
  let ComputerChoices = ["rock", "paper", "scissors"];
  return ComputerChoices[Math.floor(Math.random() * 3)];
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();

  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      return `It's always great to trust the 力 within you\n The ${playerSelection} clan beats the clan of ${computerSelection}\n You win`;
    } else if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      computerScore++;
      return `The clan of ${computerSelection} beats ${playerSelection}\n I guess you haven't mastered the are of listening to your 力\n You lose`;
    } else {
      return "Your 力 is at the same level as that of o kakós\nIt's a tie";
    }
  }

  const result = playRound(playerSelection, computerSelection);
  para.innerText = result;
  player.innerText = `You : ${playerScore}`;
  computer.innerText = `o kakós: ${computerScore}`;
  console.log(playerScore + " player");
  console.log(computerScore + " comp");

  if (playerScore === 5 || computerScore === 5) {
    getWinner();
    endgame();
  }
}

function endgame() {
  playerScore = 0;
  computerScore = 0;
  main.style.filter = "blur(20px)";
  restart.style.display = "flex";
  const winnerMessage = getWinner();
  announce.innerText = winnerMessage;
}

function getWinner() {
  if (playerScore === 5) {
    return "o kasos has been defeated!";
  } else if (playerScore !== 5) {
    return "o kasos has covered the world with darkness!";
  }
}
