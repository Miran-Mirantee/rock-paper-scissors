function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[randomNum()];
}

function randomNum() {
    let rand = Math.floor(Math.random() * 3);
    return rand;
}

console.log(randomNum());
console.log(computerPlay());