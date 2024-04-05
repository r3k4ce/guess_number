// Generate a random number between 1 and 100 for the CPU's choice
let cpuChoice = Math.floor(Math.random() * 100) + 1;

// Get the user's number input field from the DOM
const userNum = document.getElementById('userNum');

// Get the response element from the DOM where we will display the game's messages
const response = document.getElementById('response');

// Initialize counter for number of tries
let tries = 0

// Add a click event listener to the button. When the button is clicked, the guessNumber function will be called
document.getElementById("button").addEventListener("click", guessNumber);

// Define the guessNumber function
function guessNumber() {
  // Parse the user's input as an integer
  const userChoice = parseInt(userNum.value);

  // Increment the number of tries
  tries++;

  // Check if the user's number is outside the valid range (1-100) or valid integer
  if (userChoice > 100 || userChoice < 1 || isNaN(userChoice)) {
    // If it is, display an error message
    response.innerHTML = 'Please enter a number between 1 and 100.';
  } else if (userChoice > cpuChoice) {
    // If the user's guess is too high, tell them
    response.innerHTML = 'Too high!';
  } else if (userChoice < cpuChoice) {
    // If the user's guess is too low, tell them
    response.innerHTML = 'Too low!';
  } else {
    // If none of the above conditions are met, the user's guess must be correct
    response.innerHTML = `You got it! It took you ${tries} tries.`;
  }
}