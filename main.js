let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result-area");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5;
let history = [];

let computer = 0;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function random() {
  computer = Math.floor(Math.random() * 100) + 1;
  console.log(computer);
}

function play() {
  const userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    alert("1과 100사이의 숫자만 입력해주세요");
    return;
  }

  if (history.includes(userValue)) {
    alert("이미 입력한 숫자입니다.");
    return;
  }

  let imgElement = document.createElement("img");
  imgElement.style.width = "300px";
  imgElement.style.height = "200px";

  chances--;
  chanceArea.textContent = `남은 기회: ${chances}`;

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

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver === true) {
    playButton.disabled = true;
  }
}

random();

function reset() {
  userInput.value = "";

  let imgElement = document.createElement("img");
  imgElement.src = "images/basics.gif";

  resultArea.innerHTML = "";
  resultArea.appendChild(imgElement);

  random();
}
