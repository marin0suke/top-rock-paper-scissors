function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      // edge cases.
      alert("It's a draw!");
      return; // early exit to avoid increment.
    }

    let roundWinner =
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

    alert(`${roundWinner === "human" ? "You" : "Computer"} win this round!`);
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

    let getComputerChoice = () => {
      let choice = Math.floor(Math.random() * 3 + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3.
      return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
    };

    let computerChoice = getComputerChoice(); // save to var bc we are logging as well as using it as param in playRound (multiple uses).
    console.log(`Computer chose ${computerChoice}!`);

    playRound(humanChoice, computerChoice);
  }

  if (humanScore == computerScore) {
    alert("Game ends in a draw!");
  } else {
    alert(`${humanScore > computerScore ? "You" : "Computer"} won the game!`);
  }

  let playAgain = prompt("Would you like to play again?").toLowerCase();
  while (
    playAgain !== "yes" &&
    playAgain !== "y" &&
    playAgain !== "no" &&
    playAgain !== "n"
  ) {
    playAgain = prompt("Please enter yes/y or no/n");
  }
  if (playAgain === "yes" || playAgain === "y") {
    playGame();
  } else {
    alert("Bye :)");
  }
}

playGame();
