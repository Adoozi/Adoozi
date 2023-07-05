let score = 0;
let upgradeCost = 10;

function increaseScore() {
  score++;
  document.getElementById("scoreValue").textContent = score;
}

function buyUpgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    upgradeCost *= 2;
    document.getElementById("scoreValue").textContent = score;
    document.getElementById("upgradeCost").textContent = upgradeCost;
    // Apply upgrade effect here
  }
}
