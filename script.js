function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  function getComputerChoice() {
    computerChoice = Math.random();

    if(computerChoice < 0.33) {
        return "rock";
    }
    else if(computerChoice < 0.66) {
        return "paper";
    }
    else {
        return "scissors";

    }
  }

  function getHumanChoice() {
    return prompt("Enter your choice: ").toLowerCase();
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log((computerSelection))
  console.log(humanSelection)
  playRound(humanSelection, computerSelection);
  