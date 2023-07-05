// Variables
let score = 0;
let upgradeLevel = 1;
let upgradeCost = 10;

// Elements
const scoreElement = document.getElementById('score');
const upgradeLevelElement = document.getElementById('upgradeLevel');
const upgradeBtn = document.getElementById('upgradeBtn');

// Update score
function updateScore() {
  scoreElement.textContent = score;
}

// Update upgrade level and cost
function updateUpgrade() {
  upgradeLevelElement.textContent = upgradeLevel;
  upgradeBtn.textContent = `Upgrade (Cost: ${upgradeCost})`;
}

// Click event for the cookie
const cookie = document.getElementById('cookie');
cookie.addEventListener('click', function() {
  score += upgradeLevel;
  updateScore();
});

// Click event for the upgrade button
upgradeBtn.addEventListener('click', function() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    upgradeLevel++;
    upgradeCost += 10;
    updateScore();
    updateUpgrade();
  }
});

// Check score to enable/disable upgrade button
setInterval(function() {
  if (score >= upgradeCost) {
    upgradeBtn.disabled = false;
  } else {
    upgradeBtn.disabled = true;
  }
}, 100);

// Initialize
updateScore();
updateUpgrade();
