window.onload = function () {
  sodukuGame();
  sodukuNums();
};

// mat for hiding numbers in the board.
const solution = [
  [
    [8, 3, 5, 4, 1, 6, 9, 2, 7],
    [2, 9, 6, 8, 5, 7, 4, 3, 1],
    [4, 1, 7, 2, 9, 3, 6, 5, 8],
    [5, 6, 9, 1, 3, 4, 7, 8, 2],
    [1, 2, 3, 6, 7, 8, 5, 4, 9],
    [7, 4, 8, 5, 2, 9, 1, 6, 3],
    [6, 5, 2, 7, 8, 1, 3, 9, 4],
    [9, 8, 1, 3, 4, 5, 2, 7, 6],
    [3, 7, 4, 9, 6, 2, 8, 1, 5],
  ],
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ],
  [
    [1, 7, 5, 2, 9, 4, 8, 3, 6],
    [6, 2, 3, 1, 8, 7, 9, 4, 5],
    [8, 9, 4, 5, 6, 3, 2, 7, 1],
    [5, 1, 9, 7, 3, 2, 4, 6, 8],
    [3, 4, 7, 8, 5, 6, 1, 2, 9],
    [2, 8, 6, 9, 4, 1, 7, 5, 3],
    [9, 3, 8, 4, 2, 5, 6, 1, 7],
    [4, 6, 1, 3, 7, 9, 5, 8, 2],
    [7, 5, 2, 6, 1, 8, 3, 9, 4],
  ],
];

//mat for the solving part of the game
const solutionX = [
  [
    [8, 3, 5, 4, 1, 6, 9, 2, 7],
    [2, 9, 6, 8, 5, 7, 4, 3, 1],
    [4, 1, 7, 2, 9, 3, 6, 5, 8],
    [5, 6, 9, 1, 3, 4, 7, 8, 2],
    [1, 2, 3, 6, 7, 8, 5, 4, 9],
    [7, 4, 8, 5, 2, 9, 1, 6, 3],
    [6, 5, 2, 7, 8, 1, 3, 9, 4],
    [9, 8, 1, 3, 4, 5, 2, 7, 6],
    [3, 7, 4, 9, 6, 2, 8, 1, 5],
  ],
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ],
  [
    [1, 7, 5, 2, 9, 4, 8, 3, 6],
    [6, 2, 3, 1, 8, 7, 9, 4, 5],
    [8, 9, 4, 5, 6, 3, 2, 7, 1],
    [5, 1, 9, 7, 3, 2, 4, 6, 8],
    [3, 4, 7, 8, 5, 6, 1, 2, 9],
    [2, 8, 6, 9, 4, 1, 7, 5, 3],
    [9, 3, 8, 4, 2, 5, 6, 1, 7],
    [4, 6, 1, 3, 7, 9, 5, 8, 2],
    [7, 5, 2, 6, 1, 8, 3, 9, 4],
  ],
];

let error = 0;
let numId = "";
//cooses random matrix for the game and puts it in 'board'
let chooseBoard = Math.floor(Math.random() * 3);
const board = solution[chooseBoard]; //the board with hidden cels
const boardX = solutionX[chooseBoard]; //the board to compare the right answers

function sodukuGame() {
  //9x9 game board
  //each interaction creats a box with class and id foe each of the boxes
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", [i] + [j]);

      box.style.alignItems = "center";
      box.innerHTML = board[i][j];

      document.getElementById("game2").appendChild(box);

      //
      // //reviels the right number in the tile
      box.addEventListener("click", function chackGame() {
        let answer = boardX[i][j];

        if (numId == answer) {
          //puts the value of the choosen tile in answer and changes its color
          box.innerHTML = numId;
          box.style.backgroundColor = "lightBlue";
          board[i][j] = answer;
        } else {
          error++;
        }

        if (error == 6) {
          //after 5 filed attempts the player looses the game
          popupF.classList.add("open-popupF");
        }

        document.getElementById("errors").innerHTML = "~" + error + "~";
      });

      //
      // colors the sections of the board
      if (
        //
        ([i] == 0 && [j] == 0) || //0-0
        ([i] == 0 && [j] == 1) || //0-1
        ([i] == 0 && [j] == 2) || //0-2
        ([i] == 1 && [j] == 0) || //1-0
        ([i] == 1 && [j] == 1) || //1-1
        ([i] == 1 && [j] == 2) || //1-2
        ([i] == 2 && [j] == 0) || //2-0
        ([i] == 2 && [j] == 1) || //2-1
        ([i] == 2 && [j] == 2) || //2-2
        //
        ([i] == 3 && [j] == 3) || //3-3
        ([i] == 3 && [j] == 4) || //3-4
        ([i] == 3 && [j] == 5) || //3-5
        ([i] == 4 && [j] == 3) || //4-3
        ([i] == 4 && [j] == 4) || //4-4
        ([i] == 4 && [j] == 5) || //4-5
        ([i] == 5 && [j] == 3) || //5-3
        ([i] == 5 && [j] == 4) || //5-4
        ([i] == 5 && [j] == 5) || //5-5
        //
        ([i] == 6 && [j] == 0) || //6-0
        ([i] == 6 && [j] == 1) || //6-1
        ([i] == 6 && [j] == 2) || //6-2
        ([i] == 7 && [j] == 0) || //7-0
        ([i] == 7 && [j] == 1) || //7-1
        ([i] == 7 && [j] == 2) || //7-2
        ([i] == 8 && [j] == 0) || //8-0
        ([i] == 8 && [j] == 1) || //8-1
        ([i] == 8 && [j] == 2) || //8-2
        //
        ([i] == 0 && [j] == 6) || //0-6
        ([i] == 0 && [j] == 7) || //0-7
        ([i] == 0 && [j] == 8) || //0-8
        ([i] == 1 && [j] == 6) || //1-6
        ([i] == 1 && [j] == 7) || //1-7
        ([i] == 1 && [j] == 8) || //1-8
        ([i] == 2 && [j] == 6) || //2-6
        ([i] == 2 && [j] == 7) || //2-7
        ([i] == 2 && [j] == 8) || //2-8
        //
        ([i] == 6 && [j] == 6) || //6-6
        ([i] == 6 && [j] == 7) || //6-7
        ([i] == 6 && [j] == 8) || //6-8
        ([i] == 7 && [j] == 6) || //7-6
        ([i] == 7 && [j] == 7) || //7-7
        ([i] == 7 && [j] == 8) || //7-8
        ([i] == 8 && [j] == 6) || //8-6
        ([i] == 8 && [j] == 7) || //8-7
        ([i] == 8 && [j] == 8) //8-8
      ) {
        box.style.backgroundColor = "rgb(158, 206, 247)"; //darker blue than the board color
      }
    }
  }
}

// hide random numbers from the game board
let i = 0;
let j = 0;
let counter = 0;
while (counter < 48) {
  board[i][j] = ""; //hide the content of the cell

  counter++;
  i = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
  j = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
}

function sodukuNums() {
  //1-9 numbers
  //creats numbers each interaction
  let numSelected = null; //for now holds no value
  for (let i = 1; i < 10; i++) {
    let number = document.createElement("div");
    number.setAttribute("class", "num2");
    number.setAttribute("id", [i]);
    number.innerHTML = [i];
    document.getElementById("nums").appendChild(number);
    //
    //function for when click on any <number> select it and changes its color
    number.addEventListener("click", function select() {
      if (numSelected != null) {
        numSelected.classList.remove("number-selected2"); //if the corrent value dosent matches to 'this'
      }
      numSelected = this; //captures the value of ths button the player preesed
      numSelected.classList.add("number-selected2");
      numId = number.innerHTML; //keep the value of the number button to compare to the solved matrix
    });
  }
}

//popups
let popup = document.getElementById("popup");
let popupF = document.getElementById("popupF");

function finishGame() {
  debugger;
  let flag = true;

  for (let i = 0; i < boardX.length; i++) {
    for (let j = 0; j < boardX[i].length; j++) {
      if (board[i][j] != boardX[i][j]) {
        //if the player havent solved the level
        flag = false;
        popupF.classList.add("open-popupF");
      }
    }
  }

  //open the popup acording to the
  if (flag == true) {
    popup.classList.add("open-popup");
  }
}

//closes the popup
function closePopup() {
  if (popup.classList.remove("open-popup")) {
    location.href = "dificultyLevel.html";
  }
  if (popupF.classList.remove("open-popupF")) {
    location.href = "gameL2.html"; // if the player faild the lavel, the game restart it self.
  }
}
