/*
//Function to draw odd ranks
function drawOddRank() {
  for (let i = 1; i <= 8; i++) {
    let square = document.createElement("div");
    if (i % 2 === 1) {
      square.classList.add("blacksquare");
      document.getElementById("chessboard").appendChild(square);
    } else {
      square.classList.add("whitesquare");
      document.getElementById("chessboard").appendChild(square);
    }
  }
}

//Function to draw even ranks
function drawEvenRank() {
  for (let i = 1; i <= 8; i++) {
    let square = document.createElement("div");
    if (i % 2 === 0) {
      square.classList.add("blacksquare");
      document.getElementById("chessboard").appendChild(square);
    } else {
      square.classList.add("whitesquare");
      document.getElementById("chessboard").appendChild(square);
    }
  }
}

//Even rank function

drawEvenRank();
drawOddRank();
drawEvenRank();
drawOddRank();
drawEvenRank();
drawOddRank();
drawEvenRank();
drawOddRank();
*/

//define ranks and files
let rank = [1, 2, 3, 4, 5, 6, 7, 8];
let file = ["a", "b", "c", "d", "e", "f", "g", "h"];

//function to draw chessboard
function createBoard() {
  let chessboard = [];
  let board = document.getElementById("gameBoard");
  let squareName;

  //nested for loop to go through ranks and files
  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < file.length; j++) {
      chessboard.push(`${file[i]}${rank[j]}`);
      squareName = file[i] + rank[j];
    }
  }

  //for loop to create div and name each square
  for (let i = 0; i < chessboard.length; i++) {
    let newTile = document.createElement("div");
    newTile.id = chessboard[i];
    newTile.textContent = chessboard[i];
    board.append(newTile);
  }
}

createBoard();
