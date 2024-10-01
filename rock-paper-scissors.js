// function to get the computer choice.

let getComputerChoice = () => {
    let choice = Math.floor((Math.random() * 3) + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3. 
    console.log(choice);
    return (choice == 1) ? "rock" : (choice == 2) ? "paper" : "scissors";
};

let getHumanChoice = () => {
        let choice = prompt("rock, paper or scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") { 
            console.log(choice);
            return choice;
        } else {
            alert("please type rock, paper, or scissors.");
        };
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { // edge cases.
        alert("It's a draw!");
        return "draw";
    }

    // initialise var winner to return from this function so we can console.log the winner.
    let winner = // if we need the outcome in a package to display or input into another func - init variable.
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
        ? "human"
        : "computer";

        //display
    alert(`${winner === "human" ? "You" : "Computer"} won this round!`);

    return winner;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

