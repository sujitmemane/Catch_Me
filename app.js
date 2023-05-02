let score = document.querySelector(".score");
let timeLeft = document.querySelector(".timeleft");
const startGameButton = document.querySelector("#start");
const pauseGameButton = document.querySelector("#pause");
const squares = document.querySelectorAll(".square");
let scoreNum = 0;
let timeLeftNum = 60;
console.log(squares);

const arrangeLionRandomly = () => {
  squares.forEach((square) => {
    square.classList.remove("lion");
  });
  let randomNum = Math.floor(Math.random() * 9);
  console.log(randomNum);
  squares[randomNum].classList.add("lion");
};

const startGame = () => {
  scoreNum = 0;
  timeLeftNum = 0;
  setInterval(arrangeLionRandomly, 1000);
};

startGameButton.addEventListener("click", startGame);
