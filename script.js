function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[randomNum()];
}

function randomNum() {
    let rand = Math.floor(Math.random() * 3);
    return rand;
}

function playRound(playerSelection, computerSelection) {
    let result = versus(playerSelection, computerSelection)
    console.log(`computer: ${computerSelection}`);
    if (typeof result === "undefined")
        return "Tied";
    else if (result)
        return `You win! ${playerSelection} beats ${computerSelection}`;
    else
        return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function versus(x, y) {
    if (x.toLowerCase() == "rock") {
        if (y.toLowerCase() == "scissors")
            return true;
        else if (y.toLowerCase() == "paper")
            return false;
        else 
            return;
    } 
    
    if (x.toLowerCase() == "paper") {
        if (y.toLowerCase() == "rock")
            return true;
        else if (y.toLowerCase() == "scissors")
            return false;
        else 
            return;
    }

    if (x.toLowerCase() == "scissors") {
        if (y.toLowerCase() == "paper")
            return true;
        else if (y.toLowerCase() == "rock")
            return false;
        else 
            return;
    }
}

console.log(randomNum());
console.log(computerPlay());
console.log(versus("rock", "rock"));
console.log(playRound("rock", computerPlay()));