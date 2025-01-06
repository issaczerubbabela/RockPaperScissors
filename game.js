var humanScore=0;
var computerScore=0;
function getComputerChoice() {
    var rand = parseInt((Math.random() * 10) % 3)+1;
    return rand;
}
function getHumanChoice() {
    var user = prompt("Enter a Choice: Rock Paper or Scissors =>");
    return user;
}


function playRound(humanChoice, computerChoice) {
    if (computerChoice==1) {
        if (humanChoice.toLowerCase()=="rock"){
            alert("It's a draw");
        }
        else if(humanChoice.toLowerCase()=="paper"){
            alert("You won! Paper beats Rock");
            humanScore++;
        }
        else if(humanChoice.toLowerCase()=="scissors"){
            alert("You lost! Scissors beats Rock");
            computerScore++;
        }
        else alert("invalid choice!");
    }
    else if (computerChoice==2){
        if(humanChoice.toLowerCase()=="rock"){
            alert("You lost! Paper beats Rock");
            computerScore++;
        }
        else if(humanChoice.toLowerCase()=="paper"){
            alert("It's a draw");
        }
        else if(humanChoice.toLowerCase()=="scissors"){
            alert("You won! Scissors beats Paper");
            humanScore++;
        }
        else alert("invalid choice!");
    }
    else if (computerChoice==3){
        if(humanChoice.toLowerCase()=="rock"){
            alert("You won! Rock beats Scissors");
            humanScore++;
        }
        else if(humanChoice.toLowerCase()=="paper"){
            alert("You lost! Scissors beats Paper");
            computerScore++;
        }
        else if(humanChoice.toLowerCase()=="scissors"){
            alert("It's a draw");
        }
        else alert("invalid choice!");
    }
}

function playGame() {
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    alert("Scores: Human - "+humanScore+", Computer - "+computerScore);
}
playGame();