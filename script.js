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

  //Create pieces class
  class Piece {
    constructor(color, type, image, coordinate) {
      this.color = color;
      this.type = type;
      this.image = image;
      this.coordinate = coordinate;
    }

    renderPiece(coordinate) {
      let newPiece = document.createElement("img");
      newPiece.src = this.image;
      let piecePlace = document.getElementById(coordinate);
      piecePlace.append(newPiece);
    }
  }

  //Black pieces? (female names for black pawns (using names for pawns to tell them apart more easily))
  let Anna = new Piece("black", "pawn", "./assets/black-pawn.png", "a7");
  Anna.renderPiece("a7");

  let Betty = new Piece("black", "pawn", "./assets/black-pawn.png", "b7");
  Betty.renderPiece("b7");

  let Claire = new Piece("black", "pawn", "./assets/black-pawn.png", "c7");
  Claire.renderPiece("c7");

  let Danielle = new Piece("black", "pawn", "./assets/black-pawn.png", "d7");
  Danielle.renderPiece("d7");

  let Erica = new Piece("black", "pawn", "./assets/black-pawn.png", "e7");
  Erica.renderPiece("e7");

  let Fiona = new Piece("black", "pawn", "./assets/black-pawn.png", "f7");
  Fiona.renderPiece("f7");

  let Grace = new Piece("black", "pawn", "./assets/black-pawn.png", "g7");
  Grace.renderPiece("g7");

  let Hanna = new Piece("black", "pawn", "./assets/black-pawn.png", "h7");
  Hanna.renderPiece("h7");

  //White pieces? (male names for white pawns)
  let Alfred = new Piece("white", "pawn", "./assets/white-pawn.png", "a2");
  Alfred.renderPiece("a2");

  let Ben = new Piece("white", "pawn", "./assets/white-pawn.png", "b2");
  Ben.renderPiece("b2");

  let Charlie = new Piece("white", "pawn", "./assets/white-pawn.png", "c2");
  Charlie.renderPiece("c2");

  let Don = new Piece("white", "pawn", "./assets/white-pawn.png", "d2");
  Don.renderPiece("d2");

  let Edward = new Piece("white", "pawn", "./assets/white-pawn.png", "e2");
  Edward.renderPiece("e2");

  let Frankie = new Piece("white", "pawn", "./assets/white-pawn.png", "f2");
  Frankie.renderPiece("f2");

  let George = new Piece("white", "pawn", "./assets/white-pawn.png", "g2");
  George.renderPiece("g2");

  let Harry = new Piece("white", "pawn", "./assets/white-pawn.png", "h2");
  Harry.renderPiece("h2");
}

createBoard();
