function getComputerChoice(){
    let ComputerChoices = ['rock','paper','scissors'];
    return ComputerChoices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    if (
        playerSelection==='rock' && computerSelection==='scissors' ||
        playerSelection==='paper' && computerSelection==='rock' ||
        playerSelection==='scissors' && computerSelection==='paper'
    ){
        return `${playerSelection} beats ${computerSelection}\n You win`;
    }
    else if(playerSelection===computerSelection){
        return "It's a tie,play again";
    }
    else{
        return `${computerSelection} beats ${playerSelection}\n You lose`;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore<5 || playerScore<5){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Rock,Paper or Scissors').toLowerCase();

        const result = playRound(playerSelection,computerSelection);
        if(result.includes('win')){
        playerScore++;
        }
        else if (result.includes('lose')){
            computerScore++;
        }
        console.log(`Current Scores\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
    }

    if(playerScore>computerScore){
        console.log('You win');
    }
    else{
        console.log('You lose!');
    }
}

game();
