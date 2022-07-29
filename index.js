function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    let randomizeChoice = Math.floor(Math.random() * choices.length) + 1
    if (randomizeChoice === 1) {
        return "Rock";
    } if (randomizeChoice === 2) {
        return "Paper";
    }
        if (randomizeChoice === 3) {
            return "Scissors";
        }

    }
console.log(getComputerChoice());

 function playRound(playerSelection, computerSelection){
     if (playerSelection === "Rock" && computerSelection === "Paper"){
         return ("You Lose! Paper Beats Rock");
     }
 }
function game(playRound){
    for (let i = 0; i< 5; i++){
     let prompt = ("Rock, Paper, or Scissors?");  
    }

}  
