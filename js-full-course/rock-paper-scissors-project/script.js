let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function randomComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return moves[randomIndex];
}

function play(playerOption) {
  let computerOption = randomComputerChoice();
  let result = "";

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

  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById("result-text").innerHTML = result;
  document.getElementById(
    "result-selected"
  ).innerHTML = `You: ${playerOption} <br> Computer: ${computerOption}`;
  displayScore();
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  document.getElementById("result-text").innerHTML = "";
  document.getElementById("result-selected").innerHTML = "";
  localStorage.removeItem("score");

  displayScore();
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerOption = randomComputerChoice();
      play(playerOption);
    }, 1000);

    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function displayScore() {
  document.getElementById("ties").innerHTML = score.ties;
  document.getElementById("wins").innerHTML = score.wins;
  document.getElementById("losses").innerHTML = score.losses;
}
