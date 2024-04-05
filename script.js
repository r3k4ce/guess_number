let cpuChoice = Math.floor(Math.random() * 100) + 1;

const userNum = document.getElementById('userNum');
const response = document.getElementById('response');

document.getElementById("button").addEventListener("click", guessNumber);

function guessNumber() {
  const userChoice = parseInt(userNum.value);
  if (userChoice > 100 || userChoice < 1) {
    response.innerHTML = 'Please enter a number between 1 and 100.';
  } else if (userChoice > cpuChoice) {
    response.innerHTML = 'Too high!';
  } else if (userChoice < cpuChoice) {
    response.innerHTML = 'Too low!';
  } else {
    response.innerHTML = 'You got it!';
  }
}