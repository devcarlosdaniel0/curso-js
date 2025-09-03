const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

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
    score.ties += 1;
  } else if (possibleResults[playerOption].win === computerOption) {
    result = "You Win.";
    score.wins += 1;
  } else {
    result = "You lose.";
    score.losses += 1;
  }

  document.getElementById("result-text").innerHTML = result;
  displayResult();
}

function displayResult() {
  document.getElementById("ties").innerHTML = score.ties;
  document.getElementById("wins").innerHTML = score.wins;
  document.getElementById("losses").innerHTML = score.losses;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  displayResult();
}
