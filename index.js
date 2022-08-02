// function for getting the computers choice

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
// play round function, still having issues getting my if statement, it keeps returning undefined regardless of outcome.
 function playRound(playerSelection, computerSelection){
     var playerSelection;
     do {
         playerSelection = prompt("Do you choose Rock, Paper, or Scissors?");
     }
     while(playerSelection != "Rock" && playerSelection!= "Paper" && playerSelection != "Scissors");
     if (playerSelection === computerSelection){
         console.log("Its a Tie!")
         return ("Its a Tie!")   
     } else if  (playerSelection === "Rock" && computerSelection === "Scissors" || 
                 playerSelection === "Paper" && computerSelection === "Rock" ||
                 playerSelection === "Scissors" && computerSelection === "Paper"){
                     return "You Win!";
                 }
        else if (playerSelection === "Rock" && computerSelection === "Paper" ||
                 playerSelection === "Paper" && computerSelection === "Scissors" ||
                 playerSelection === "Scissors" && computerSelection === "Rock")
                     return "You Lose!";
                }
                    console.log(playRound());
             
     // This is the for loop for the 5 round game.
function game(){
    for (let i = 0; i < 5; i++){

    }}
          
               
               