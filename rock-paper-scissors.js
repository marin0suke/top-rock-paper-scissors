// function to get the computer choice.

// let getComputerChoice = () => {
//     let choice = Math.floor((Math.random() * 3) + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3.
//     console.log(choice);
//     return (choice == 1) ? "rock" : (choice == 2) ? "paper" : "scissors";
// };

// let getHumanChoice = () => {
//         let choice = prompt("rock, paper or scissors?").toLowerCase();
//         if (choice === "rock" || choice === "paper" || choice === "scissors") {
//             console.log(choice);
//             return choice;
//         } else {
//             alert("please type rock, paper, or scissors.");
//         };
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      // edge cases.
      alert("It's a draw!");
      return "draw";
    }

    // initialise var winner to return from this function so we can console.log the winner.
    let roundWinner = // if we need the outcome in a package to display or input into another func - init variable.
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
        ? "human"
        : "computer";

    if (roundWinner === "human") {
        humanScore++;
    } else {
        computerScore++;
    }

    console.log(humanScore);
    console.log(computerScore);

    alert(`End of round ${[i + 1]}!`);
  }

  for (i = 0; i <= 4; i++) {
    let humanChoice = prompt("rock, paper or scissors?").toLowerCase();
    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      console.log(`You chose ${humanChoice}!`);
    } else {
      alert("please type rock, paper, or scissors.");
      i--; // don't add count to the round for mistyping input.
      continue; // 
    }

    let computerChoice = () => {
      let choice = Math.floor(Math.random() * 3 + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3.
      return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
    };

    console.log(`Computer chose ${computerChoice()}!`);

    playRound(humanChoice, computerChoice);
  }

  alert(`${humanScore > computerScore ? "You" : "Computer"} won the game!`);
}

playGame();

// play game
// game is 5 rounds, score incremented and higher score is overall winner.
// round start: get comp choice and human choice.
// input
