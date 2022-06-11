//define ranks and files
const rank = [1, 2, 3, 4, 5, 6, 7, 8];
const file = ["a", "b", "c", "d", "e", "f", "g", "h"];
const fileNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let board = document.getElementById("gameBoard");
let targetPiece;
let selectedPiece;
let targetSquare;
//Create pieces class
class Piece {
  constructor(color, type, image, coordinate, pieceID) {
    this.color = color;
    this.type = type;
    this.image = image;
    this.coordinate = coordinate;
    this.pieceID = pieceID;
  }

  //add piece to board, give classes "piece" and its individual type
  renderPiece(coordinate, type) {
    let newPiece = document.createElement("img");
    newPiece.src = this.image;
    newPiece.id = this.pieceID;
    newPiece.coordinate = coordinate;
    newPiece.color = this.color;
    newPiece.classList.add("piece", type, this.color);
    let piecePlace = document.getElementById(coordinate);
    piecePlace.append(newPiece);
  }
}

//function to draw chessboard
function createBoard() {
  let chessboard = [];
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
    board.append(newTile);
    if (colorChecker[i] % 2 === 0) {
      newTile.className = "blackSquare";
    } else {
      newTile.className = "whiteSquare";
    }
  }
}

//function to create pieces
function createPieces() {
  //black pawns (female names for black pawns (using names for pawns to tell them apart more easily))
  let Anna = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "a7",
    "blkAPawn"
  );
  Anna.renderPiece("a7", "pawn");

  let Betty = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "b7",
    "blkBPawn"
  );
  Betty.renderPiece("b7", "pawn");

  let Claire = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "c7",
    "blkCPawn"
  );
  Claire.renderPiece("c7", "pawn");

  let Danielle = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "d7",
    "blkDPawn"
  );
  Danielle.renderPiece("d7", "pawn");

  let Erica = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "e7",
    "blkEPawn"
  );
  Erica.renderPiece("e7", "pawn");

  let Fiona = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "f7",
    "blkFPawn"
  );
  Fiona.renderPiece("f7", "pawn");

  let Grace = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "g7",
    "blkGPawn"
  );
  Grace.renderPiece("g7", "pawn");

  let Hanna = new Piece(
    "black",
    "pawn",
    "./assets/black-pawn.png",
    "h7",
    "blkHPawn"
  );
  Hanna.renderPiece("h7", "pawn");

  //black pieces
  let blackARook = new Piece(
    "black",
    "rook",
    "./assets/black-rook.png",
    "a8",
    "blkARook"
  );
  blackARook.renderPiece("a8", "rook");

  let blackBKnight = new Piece(
    "black",
    "knight",
    "./assets/black-knight.png",
    "b8",
    "blkBKnight"
  );
  blackBKnight.renderPiece("b8", "knight");

  let blackGKnight = new Piece(
    "black",
    "knight",
    "./assets/black-knight.png",
    "g8",
    "blkGKnight"
  );
  blackGKnight.renderPiece("g8", "knight");

  let blackLightBishop = new Piece(
    "black",
    "bishop",
    "./assets/black-bishop.png",
    "c8",
    "blkLightBishop"
  );
  blackLightBishop.renderPiece("c8", "bishop");

  let blackQueen = new Piece(
    "black",
    "queen",
    "./assets/black-queen.png",
    "d8",
    "blkQueen"
  );
  blackQueen.renderPiece("d8", "queen");

  let blackKing = new Piece(
    "black",
    "king",
    "./assets/black-king.png",
    "e8",
    "blkKing"
  );
  blackKing.renderPiece("e8", "king");

  let blackDarkBishop = new Piece(
    "black",
    "bishop",
    "./assets/black-bishop.png",
    "f8",
    "blkDarkBishop"
  );
  blackDarkBishop.renderPiece("f8", "bishop");

  let blackHRook = new Piece(
    "black",
    "rook",
    "./assets/black-rook.png",
    "h8",
    "blkHRook"
  );
  blackHRook.renderPiece("h8", "rook");

  //White pawns (male names for white pawns)
  let Alfred = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "a2",
    "whiteAPawn"
  );
  Alfred.renderPiece("a2", "pawn");

  let Ben = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "b2",
    "whiteBPawn"
  );
  Ben.renderPiece("b2", "pawn");

  let Charlie = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "c2",
    "whiteCPawn"
  );
  Charlie.renderPiece("c2", "pawn");

  let Don = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "d2",
    "whiteDPawn"
  );
  Don.renderPiece("d2", "pawn");

  let Edward = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "e2",
    "whiteEPawn"
  );
  Edward.renderPiece("e2", "pawn");

  let Frankie = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "f2",
    "whiteFPawn"
  );
  Frankie.renderPiece("f2", "pawn");

  let George = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "g2",
    "whiteGPawn"
  );
  George.renderPiece("g2", "pawn");

  let Harry = new Piece(
    "white",
    "pawn",
    "./assets/white-pawn.png",
    "h2",
    "whiteHPawn"
  );
  Harry.renderPiece("h2", "pawn");

  //white pieces
  let whiteARook = new Piece(
    "white",
    "rook",
    "./assets/white-rook.png",
    "a1",
    "whiteARook"
  );
  whiteARook.renderPiece("a1", "rook");

  let whiteBKnight = new Piece(
    "white",
    "knight",
    "./assets/white-knight.png",
    "b1",
    "whiteBKnight"
  );
  whiteBKnight.renderPiece("b1", "knight");

  let whiteGKnight = new Piece(
    "white",
    "knight",
    "./assets/white-knight.png",
    "g1",
    "whiteGKnight"
  );
  whiteGKnight.renderPiece("g1", "knight");

  let whiteLightBishop = new Piece(
    "white",
    "bishop",
    "./assets/white-bishop.png",
    "c1",
    "whiteLightBishop"
  );
  whiteLightBishop.renderPiece("c1", "bishop");

  let whiteQueen = new Piece(
    "white",
    "queen",
    "./assets/white-queen.png",
    "d1",
    "whiteQueen"
  );
  whiteQueen.renderPiece("d1", "queen");

  let whiteKing = new Piece(
    "white",
    "king",
    "./assets/white-king.png",
    "e1",
    "whiteKing"
  );
  whiteKing.renderPiece("e1", "king");

  let whiteDarkBishop = new Piece(
    "white",
    "bishop",
    "./assets/white-bishop.png",
    "f1",
    "whiteDarkBishop"
  );
  whiteDarkBishop.renderPiece("f1", "bishop");

  let whiteHRook = new Piece(
    "white",
    "rook",
    "./assets/white-rook.png",
    "h1",
    "whiteHRook"
  );
  whiteHRook.renderPiece("h1", "rook");
}

//Select pieces on clicks (maybe split into select piece then move piece?)
function selectPiece() {
  document.addEventListener("click", (e) => {
    targetPiece = e.target;
    if (targetPiece.classList.contains("piece")) {
      console.log(`selected ${targetPiece.id}`);
      selectedPiece = targetPiece;
    }
  });
}

// move piece on 2nd click (two click method)
function selectSquare() {
  document.addEventListener("click", (e) => {
    targetSquare = e.target;
    //Check for piece being selected & placed on board, can't select squares
    if (
      (!targetSquare.classList.contains("piece") &&
        targetSquare.classList.contains("whiteSquare")) ||
      targetSquare.classList.contains("blackSquare")
    ) {
      console.log(
        `moved ${selectedPiece.id} from ${selectedPiece.coordinate} to ${targetSquare.id}`
      );
      //Check for piece capture
      if (
        targetSquare.hasChildNodes() &&
        targetSquare.lastChild.color != selectedPiece.color
      ) {
        targetSquare.removeChild(targetSquare.lastChild);
      }
      targetSquare.append(selectedPiece);
      selectedPiece.coordinate = targetSquare.id;
    } //Can't eat own pieces
    else if (targetSquare.lastChild.color == selectedPiece.color) {
      console.log("you can't eat your own pieces");
    }
  });
}

createBoard();
createPieces();
selectPiece();
selectSquare();

//Capturing pieces
//if square contains piece, check if opposite color and remove

//Function to check whose turn it is then call select square each time?
/*
let currentTurn = 0;

//white turn
if (currentTurn === 0) {
  whiteTurn();
  currentTurn++;
} else {
  blackTurn();
  currentTurn--;
}
*/

//Need functions for: who's turn, what piece is clicked, what legal moves it has, moving piece, capturing pieces, is in check?/mate?/stalemate?, work on two clicks + drag/drop
//Update board position?

//Code from cody
/*const pieces = [{
        "black",
        "pawn",
        "./assets/black-pawn.png",
        "h7",
        "blkHPawn"
    },
    {
        "black",
        "rook",
        "./assets/black-rook.png",
        "a8",
        "blkARook"
    },
    {
        "black",
        "knight",
        "./assets/black-knight.png",
        "b8",
        "blkBKnight"
    }
]

for(let i = 0; i<pieces.length; i++){
    const newPiece =  new Piece(piece[i]);
    newPiece.append(newPiece)
}
*/
