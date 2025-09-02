let wins = 0;
let losses = 0;
let ties = 0;
let result = "";

function randomComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return moves[randomIndex];
}

function play(playerOption) {
  let computerOption = randomComputerChoice();

  const possibleResults = {
    rock: { win: "scissors" },
    paper: { win: "rock" },
    scissors: { win: "paper" },
  };

  if (playerOption === computerOption) {
    result = "Tie.";
    ties += 1;
  } else if (possibleResults[playerOption].win === computerOption) {
    result = "You Win.";
    wins += 1;
  } else {
    result = "You lose.";
    losses += 1;
  }

  document.getElementById("result-text").innerHTML = result;
  document.getElementById("ties").innerHTML = ties;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
}
