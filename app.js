const p1 = {
  score: 0,
  button: document.querySelector("#p1button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const gamePoint = document.querySelector("#gamePoint");

let winScore = 3;
let actualWinScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === opponent.score && player.score === winScore - 1)
      winScore += 1; // in case of gamepoint
    if (player.score === winScore) {
      gameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

gamePoint.addEventListener("change", function () {
  actualWinScore = parseInt(this.value);
  winScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
    winScore = actualWinScore;
  }
}
