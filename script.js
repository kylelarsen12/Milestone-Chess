//define ranks and files
let rank = [1, 2, 3, 4, 5, 6, 7, 8];
let file = ["a", "b", "c", "d", "e", "f", "g", "h"];

//function to draw chessboard
function createBoard() {
  let chessboard = [];
  let board = document.getElementById("gameBoard");
  let newTile;
  let colorChecker = [];

  //nested for loop to go through ranks and files (done backwards so board starts with a8 at top left corner) add to chessboard array
  for (let j = file.length - 1; j >= 0; j--) {
    for (let i = 0; i < rank.length; i++) {
      colorChecker.push(i + j + 2);
      chessboard.push(`${file[i]}${rank[j]}`);
    }
  }

  //for loop to create div, create id, and color each square
  for (let i = 0; i < chessboard.length; i++) {
    newTile = document.createElement("div");
    newTile.id = chessboard[i];
    newTile.textContent = chessboard[i];
    board.append(newTile);
    if (colorChecker[i] % 2 === 0) {
      newTile.className = "blackSquare";
    } else {
      newTile.className = "whiteSquare";
    }
  }

  //function to find if dark or light square (odd ranks start dark end white)
}

createBoard();
