// add the names for each player / team
let firstPlayerPrompt = prompt("first player name ?");
let secondPlayerPrompt = prompt("second player name ?");
let plusBtnOne = document.getElementById("plusBtnOne");
let plusBtnTwo = document.getElementById("plusBtnTwo");
if (firstPlayerPrompt !== "") {
  plusBtnOne.innerHTML = `<i class="fa-solid fa-plus icon"></i>${firstPlayerPrompt}`;
} else {
  plusBtnOne.innerHTML = `<i class="fa-solid fa-plus icon"></i>1
   player 1`;
}
if (secondPlayerPrompt !== "") {
  plusBtnTwo.innerHTML = `<i class="fa-solid fa-plus icon"></i>${secondPlayerPrompt}`;
} else {
  plusBtnTwo.innerHTML = `<i class="fa-solid fa-plus icon"></i>1 player 2`;
}
let playerOneResult = 0;
let playerTwoResult = 0;

let firstPlayerResult = document.getElementById("firstPlayer");
let secondPlayerResult = document.getElementById("secondPlayer");
function addOne4One() {
  playerOneResult++;
  checkIfSomeoneWin();
  console.log(`${firstPlayerPrompt} scores ${playerOneResult}`);
  firstPlayerResult.innerText = playerOneResult;
  checkIfSomeoneWin(playerOneResult, playerTwoResult);
}
function addOne4Two() {
  playerTwoResult++;
  checkIfSomeoneWin();
  console.log(`${secondPlayerPrompt} scores ${playerTwoResult}`);
  secondPlayerResult.innerText = playerTwoResult;
  checkIfSomeoneWin(playerOneResult, playerTwoResult);
}

plusBtnOne.addEventListener("click", addOne4One);
plusBtnTwo.addEventListener("click", addOne4Two);
function emptyScores() {
  firstPlayerResult.innerText = "_";
  secondPlayerResult.innerText = "_";
}
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  playerOneResult = 0;
  playerTwoResult = 0;
  emptyScores();
  secondPlayerResult.style.color = "";
  firstPlayerResult.style.color = "";
});

let winScore;

document.addEventListener("DOMContentLoaded", function () {
  let selectList = document.getElementById("selectList");

  selectList.addEventListener("change", function () {
    winScore = selectList.value;
    console.log("Selected value:", winScore);
    // If you want to publish the winScore value outside the event listener,
    // you can call a function here that uses the updated winScore value.
    publishWinScore();
  });
  // If you want to access the initial value of winScore,
  // you can do it here after the DOM content is fully loaded.
  //   console.log("Initial winScore value:", winScore);
});

function playerOneWins() {
  let congratulationsBox = document.getElementById("congratulationsBox");
  let congratulations = document.createElement("h2");
  console.log("playerOneWins");
  congratulations.innerText = `${firstPlayerPrompt} won !`;
  congratulationsBox.appendChild(congratulations);
}
function playerTwoWins() {
  let congratulationsBox = document.getElementById("congratulationsBox");
  let congratulations = document.createElement("h2Mh");
  console.log("playerTwoWins");
  congratulations.innerText = `${secondPlayerPrompt} won !`;
  congratulationsBox.appendChild(congratulations);
}

function publishWinScore() {
  // Do something with the updated winScore value
  return winScore;
}
function checkIfSomeoneWin(firstResult, secondResult) {
  if (firstResult >= winScore) {
    firstPlayerResult.style.color = "green";
    secondPlayerResult.style.color = "red";
    playerOneWins();
  } else if (secondResult >= winScore) {
    firstPlayerResult.style.color = "red";
    secondPlayerResult.style.color = "green";
    playerTwoWins();
  } else if (winScore === "choose") {
    firstPlayerResult.style.color = "rgb(218, 218, 218)";
    secondPlayerResult.style.color = "rgb(218, 218, 218)";
  } else {
    firstPlayerResult.style.color = "rgb(218, 218, 218)";
    secondPlayerResult.style.color = "rgb(218, 218, 218)";
  }
}
