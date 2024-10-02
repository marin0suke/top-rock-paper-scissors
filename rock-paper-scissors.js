function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundCount = 0;

  function playRound(humanChoice, computerChoice) {
    let roundWinner; // initialise winner var.

    if (humanChoice === computerChoice) {
      // sets roundWinner to draw, human or computer.
      document.querySelector(".commentary").textContent = "It's a draw!";
      roundWinner = "draw";
    } else {
      roundWinner =
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

      document.querySelector(".commentary").textContent = `${
        roundWinner === "human" ? "You" : "Computer"
      } won this round!`;
    }

    roundCount++; // incremented outside of loop so no matter outcome of round.

    if (roundCount === 5) {
      disableButtons();
      if (humanScore === computerScore) {
        document.querySelector(".result").textContent = "Game ends in a draw!";
      } else {
        document.querySelector(".result").textContent = `${
          humanScore > computerScore ? "You" : "Computer"
        } won the game!`; // added query slector to make this a div on th epage.
      }
    }

    document.querySelector(".human-score").textContent = humanScore + " Human";
    document.querySelector(".computer-score").textContent =
      computerScore + " Computer";

    console.log(humanScore);
    console.log(computerScore);

    document.querySelector("#play-again").style.display = "block"; // hello button!

  }

  const selection = document.querySelectorAll(".selection");

  selection.forEach((button) => {
    button.addEventListener("click", function (e) {
      let humanChoice = e.target.id;
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice); // playRound starts on button click.
    });
  });

  function disableButtons() {
    selection.forEach((button) => {
      button.disabled = true;
    });
  }

  function enableButtons() {
    selection.forEach((button) => {
      button.disabled = false;
    });
  }

  let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3 + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3.
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
  };

  document.querySelector("#play-again").addEventListener("click", function () {
    //reset everything
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

    document.querySelector(".human-score").textContent = "0 Human";
    document.querySelector(".computer-score").textContent = "0 Computer";
    document.querySelector(".result").textContent = "";
    document.querySelector(".commentary").textContent = "";

    enableButtons();

    document.querySelector("#play-again").style.display = "none"; // play again disappears
  });
}

playGame();
