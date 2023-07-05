const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  
  if (isNaN(guess)) {
    setMessage("Please enter a valid number.");
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    setMessage(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
    document.getElementById("guessInput").disabled = true;
  } else if (guess < targetNumber) {
    setMessage("Try a higher number.");
  } else {
    setMessage("Try a lower number.");
  }
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

