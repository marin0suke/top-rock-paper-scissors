// function to get the computer choice.

let getComputerChoice = () => {
    let choice = Math.floor((Math.random() * 3) + 1); // Math floor makes every mathrandom 0. * 3 to get floors 0, 1 or 2. for readability, can add + 1 so we get 1, 2, 3. 
    return (choice == 1) ? "rock" : (choice == 2) ? "paper" : "scissors"; //
};

console.log(getComputerChoice());

let getHumanChoice = () => {
    let choice = prompt("rock, paper or scissors?");
    // capitalisation? 
    // if misspelt?
    if (choice === "rock" || choice === "paper" || choice === "scissors") { // not sure if need strict here..
        return choice;
    } else {
        prompt("please type rock, paper, or scissors."); // how to loop? 
    };
}

console.log(getHumanChoice());