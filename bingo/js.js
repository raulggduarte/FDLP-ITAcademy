const newSheet = [];
const SHEET_ROWS = 3;
const SHEET_COLUMNS = 9;
const WHITE_SPACES = 4;
const NUMBER_OF_BALLS = 90;
const RECORD_BALL_NUMBERS = [];

const pingSound = new Audio('media/ping.mp3');
const tadaSound = new Audio('media/tada.mp3');
const trompetsSound = new Audio('media/trompets.mp3');
const bingoImage = '<img src=./media/bingo.png>';

let userSheet;
let HAS_ROW = false;
let COUNTER_BINGO = 0;
let COUNTER_ROW_1 = 0;
let COUNTER_ROW_2 = 0;
let COUNTER_ROW_3 = 0;

//CREATE SHEET FUNCTIONS******************************************

function createSheet() {
  document.getElementById("title").style.fontSize = "50px";

  for (let i = 0; i < SHEET_COLUMNS; i++) {
    newSheet[i] = [];
    for (let j = 0; j < SHEET_ROWS; j++) {
      newSheet[i].push(getSheetNumber(i));
    }
    newSheet[i].sort((a, b) => a - b);
  }

  userSheet = transpose(newSheet);

  userSheet.forEach((row) => {
    const positionsBlanks = [];
    for (i = 0; i < WHITE_SPACES; i++) {
      row[getSpacePosition(positionsBlanks)] = "";
    }
  });

  updateSheet();

  toNewSheetInterface();
}

function getSheetNumber(i) {
  const min = i * 10 + 1;
  const max = (i + 1) * 10;
  let randomNumber_i;
  do {
    randomNumber_i = getRandomNumber(min, max);
  } while (newSheet[i].includes(randomNumber_i));

  return randomNumber_i;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));

function getSpacePosition(positionsBlanks) {
  const min = 0;
  const max = 8;
  let randomNumber1_9;
  do {
    randomNumber1_9 = getRandomNumber(min, max);
  } while (positionsBlanks.includes(randomNumber1_9));
  positionsBlanks.push(randomNumber1_9);
  return randomNumber1_9;
}

function updateSheet() {
  document.getElementById("sheetTable").style.display = "inline-block";
  let row = document.getElementById("sheetTable").rows;
  for (let i = 0; i < userSheet.length; i++) {
    let cell = row[i].cells;
    for (let j = 0; j < userSheet[i].length; j++) {
      cell[j].innerHTML = userSheet[i][j];
    }
  }
}

function toNewSheetInterface() {
  document.getElementById("introModule").style.display = "none";
  document.getElementById("gameModule").style.display = "block";
}

//PLAY BINGO FUNCTIONS********************************************

function playBingo() {
  toPlayInterface();

  let ballNumber = getBallumber();

  showBallNumber(ballNumber);

  checkNumberInSheet(ballNumber);

  updateSheet();

  checkLineAndBingo();
}

function toPlayInterface() {
  document.getElementById("stopButton").style.display = "inline-block";
  document.getElementById("playButton").value = "Bola!";
  document.getElementById("createSheet2").style.display = "none";
}

function getBallumber() {
  const min = 1;
  const max = NUMBER_OF_BALLS;

  let randomNumber1_90;
  do {
    randomNumber1_90 = getRandomNumber(min, max);
  } while (RECORD_BALL_NUMBERS.includes(randomNumber1_90));

  RECORD_BALL_NUMBERS.push(randomNumber1_90);

  return randomNumber1_90;
}

function showBallNumber(ballNumber) {
  document.getElementById("ballNumber").innerHTML = ballNumber;
}

function checkNumberInSheet(ballNumber) {
  for (let i = 0; i < userSheet.length; i++) {
    for (let j = 0; j < userSheet[i].length; j++) {
      if (userSheet[i][j] === ballNumber) {
        userSheet[i][j] = bingoImage;
        pingSound.play();
        COUNTER_BINGO++;
        switch (i) {
          case 0:
            COUNTER_ROW_1++;
            break;
          case 1:
            COUNTER_ROW_2++;
            break;
          case 2:
            COUNTER_ROW_3++;
            break;
        }
      }
    }
  }
}

function checkLineAndBingo() {
  if (
    (COUNTER_ROW_1 === 5 || COUNTER_ROW_2 === 5 || COUNTER_ROW_3 === 5) &&
    !HAS_ROW
  ) {

    setTimeout(function () {
      rowWinnerScreen();
    }, 10);

    HAS_ROW = true;
  }

  if (COUNTER_BINGO === 15) {
    setTimeout(function () {
      bingoWinnerScreen();
    }, 10);
  }
}

function rowWinnerScreen() {
  tadaSound.play();
  document.getElementById("playButton").style.display = "none";
  document.getElementById("stopButton").style.display = "none";
  document.getElementById("continueBingo").style.display = "block";
  document.getElementById("answer").innerHTML = "Enhorabona!!<br>Has fet línia!!";
}

function bingoWinnerScreen() {
  trompetsSound.play();
  document.getElementById("playButton").style.display = "none";
  document.getElementById("stopButton").style.display = "none";
  document.getElementById("resetBingo").style.display = "block";
  document.getElementById("answer").style.display = "block";
  document.getElementById("answer").innerHTML = "Enhorabona!!<br>Has guanyat el BiNGO!!";
}

function stopBingo() {
  location.reload();
}

function continueBingo() {
  document.getElementById("playButton").style.display = "block";
  document.getElementById("stopButton").style.display = "block";
  document.getElementById("answer").style.display = "none";
  document.getElementById("continueBingo").style.display = "none";
}

function resetBingo() {
  location.reload();
}
