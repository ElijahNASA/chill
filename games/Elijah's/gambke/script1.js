const spinButton = document.getElementById("spinButton");
const wheel = document.querySelector(".wheel");
const resultElement = document.getElementById("result");
const scoreDisplay = document.getElementById("scoreDisplay");
let score = 0;
let isSpinning = false;
let currentRotation = 0;
function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;
  resultElement.textContent = "";
  const randomDegree = Math.floor(3600 + Math.random() * 360);
  const finalRotation = randomDegree % 360;
  const newRotation = currentRotation + randomDegree;
  currentRotation = newRotation % 360;
  wheel.style.transform = `rotate(${newRotation}deg)`;
  setTimeout(() => {
    const sliceIndex = Math.floor((360 - currentRotation) / 60) % 6;
    const slices = document.querySelectorAll(".slice");
    const selectedSlice = slices[sliceIndex];
    const points = parseInt(selectedSlice.getAttribute("data-points"));
    score += points;
    scoreDisplay.textContent = `Score: ${score}`;
    resultElement.textContent = `You landed on ${points} points!`;
    isSpinning = false;
  }, 3000);
}
spinButton.addEventListener("click", spinWheel);
