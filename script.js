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
    // console.log(`computer: ${computerSelection}`);
    if (typeof result === "undefined")
        return 0;
    else if (result)
        return 1;
    else
        return -1;
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

// function game() {
//     let result = 0;
//     let player = 0;
//     let computer = 0;
//     let playerSelection;
//     let computerSelection;
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i+1}`);
//         while (!result) {
//             // playerSelection = prompt(`Rock Paper Scissors!`);
//             playerSelection = playerPlay();
//             computerSelection = computerPlay();
//             result = playRound(playerSelection, computerSelection);
//             if (result == 1) {
//                 console.log(`   You win! ${playerSelection} beats ${computerSelection}`);
//                 player++;
//             }
                
//             else if (result == -1){
//                 console.log(`   You lose! ${computerSelection} beats ${playerSelection}`);
//                 computer++;
//             }
//             else
//                 alert(`Tied! Draw again`);         
//         }
//         result = 0;
//     }

//     if (player > computer) 
//         return `Congratulattion! You are the Winner!`;
//     else 
//         return `DEFEATED`;
// }

// function playerPlay() {
//     let playerSelection = `nothing`;
//     while (playerSelection == `nothing`) {
//         playerSelection = prompt(`Rock Paper Scissors! (Enter nothing will randomly choose)`);
//         if (!playerSelection)
//             continue;
//         switch (playerSelection.toLowerCase()) {
//             case `rock`:
//                 return `rock`;
//             case `paper`:
//                 return `paper`;
//             case `scissors`:
//                 return `scissors`;
//             default:
//                 playerSelection = `nothing`;
//                 break;
//         }
//     }
//     playerSelection = computerPlay();
//     console.log(`   You Randomed ${playerSelection}`);
//     return playerSelection;  
// }

const display = document.querySelector('.display');

const btns = document.querySelectorAll('.btn');
// test = btn.addEventListener('click', playRound('rock', computerPlay));

for (const btn of btns) {
    btn.addEventListener('click', (e) => {
        let computerSelection = computerPlay();
        display.textContent = `You chose ${e.target.textContent}\r\nComputer chose ${computerSelection}`;
        let result = playRound(e.target.textContent, computerSelection);
        console.log(result);
    });
}
