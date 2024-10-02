function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundCount = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      // edge cases.
      document.querySelector(".commentary").textContent = "It's a draw!";
      roundCount++; 
      document.querySelector(".rounds").textContent = roundCount;
      return;
    }

    let roundWinner =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
        ? "human"
        : "computer";

    if (roundWinner === "human") {
      humanScore++;
      roundCount++;
    } else {
      computerScore++;
      roundCount++;
    }

    if (roundCount === 5) {
      document.querySelector(".game-over").textContent = "Game over!";
      if (humanScore == computerScore) {
        document.querySelector(".result").textContent = "Game ends in a draw!";
      } else {
        document.querySelector(".result").textContent = `${humanScore > computerScore ? "You" : "Computer"} won the game!`; // added query slector to make this a div on th epage.
      }
      return;
    }

    document.querySelector(".human-score").textContent = humanScore + " Human";
    document.querySelector(".computer-score").textContent = computerScore + " Computer";
    

    console.log(humanScore);
    console.log(computerScore);


    document.querySelector(".commentary").textContent = `${roundWinner === "human" ? "You" : "Computer"} won this round!`;
  }

  const selection = document.querySelectorAll("button"); // not sure if supposed to go up here but create connect to buttons.

  selection.forEach((button) => {  
    button.addEventListener("click", function(e) {
      let humanChoice = e.target.id;
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  });

  // for (let i = 0; i <= 4; i++) {
    // let humanChoice = prompt("rock, paper or scissors?").toLowerCase(); // DEL.
    // if (
    //   humanChoice === "rock" ||
    //   humanChoice === "paper" ||
    //   humanChoice === "scissors"
    // ) {
    //   console.log(`You chose ${humanChoice}!`);
    // } else {
    //   alert("please type rock, paper, or scissors.");
    //   i--; // don't add count to the round for mistyping input.
    //   continue; //
    // }

  let getComputerChoice = () => {
      let choice = Math.floor(Math.random() * 3 + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3.
      return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
    };

    // let computerChoice = getComputerChoice(); // save to var bc we are logging as well as using it as param in playRound (multiple uses).
    // console.log(`Computer chose ${computerChoice}!`);

    // playRound(humanChoice, computerChoice);
  

  // if (humanScore == computerScore) {
  //   alert("Game ends in a draw!");
  // } else {
  //   document.querySelector("result").textContent = `${humanScore > computerScore ? "You" : "Computer"} won the game!`; // added query slector to make this a div on th epage.
  // }

  // let playAgain = prompt("Would you like to play again?").toLowerCase();
  // while (
  //   playAgain !== "yes" &&
  //   playAgain !== "y" &&
  //   playAgain !== "no" &&
  //   playAgain !== "n"
  // ) {
  //   playAgain = prompt("Please enter yes/y or no/n");
  // }
  // if (playAgain === "yes" || playAgain === "y") {
  //   playGame();
  // } else {
  //   alert("Bye :)");
  // }
}

playGame();
