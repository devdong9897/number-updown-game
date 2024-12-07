let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result-area");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;

let computer = 0;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function random() {
  computer = Math.floor(Math.random() * 100) + 1;
}

function play() {
  const userValue = userInput.value;

  let imgElement = document.createElement("img");
  imgElement.style.width = "300px";
  imgElement.style.height = "200px";

  if (userValue < computer) {
    imgElement.src = "images/up.gif";
    resultArea.innerHTML = "";
    resultArea.appendChild(imgElement);
  } else if (userValue > computer) {
    imgElement.src = "images/down.gif";
    resultArea.innerHTML = "";
    resultArea.appendChild(imgElement);
  } else {
    imgElement.src = "images/answer.gif";
    resultArea.innerHTML = "";
    resultArea.appendChild(imgElement);
    resultArea.textContent = "맞췄습니다!!!";
  }
}

function reset() {
  userInput.value = "";

  let imgElement = document.createElement("img");
  imgElement.src = "images/basics.gif";

  resultArea.innerHTML = "";
  resultArea.appendChild(imgElement);

  random();
}
