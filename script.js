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
let firstPlayerResult = document.getElementById("firstPlayer");
let secondPlayerResult = document.getElementById("secondPlayer");
let resultPlayerOne = 0;
let resultPlayerTwo = 0;
let selectList = document.querySelector("select");
let winScore = 0;
selectList.addEventListener("change", function () {
  winScore = selectList.value;
  // add event listener to update scoring
  plusBtnOne.addEventListener("click", function () {
    resultPlayerOne++;
    checkWin();
    console.log(resultPlayerOne);
    firstPlayerResult.innerText = resultPlayerOne;
  });
  plusBtnTwo.addEventListener("click", function () {
    resultPlayerTwo++;
    checkWin();
    secondPlayerResult.innerText = resultPlayerTwo;
  });
});

//update colors if any one wins
function checkWin() {
  winScore = selectList.value;
  if (resultPlayerOne >= winScore) {
    firstPlayerResult.style.color = "green";
    secondPlayerResult.style.color = "red";
    playerOneWins();
  } else if (resultPlayerTwo >= winScore) {
    secondPlayerResult.style.color = "green";
    firstPlayerResult.style.color = "red";
    playerTwoWins();
  } else {
    firstPlayerResult.style.color = "gray";
    secondPlayerResult.style.color = "gray";
  }
}
//reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  resultPlayerOne = 0;
  resultPlayerTwo = 0;
  firstPlayerResult.innerText = "_";
  secondPlayerResult.innerText = "_";
  secondPlayerResult.style.color = "";
  firstPlayerResult.style.color = "";
});

//set the goal to win
